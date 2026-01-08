import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

// Create a client with write permissions for mutations
const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export async function POST(request: Request) {
  try {
    const { postId, name, comment } = await request.json() as { postId: string; name: string; comment: string };

    if (!postId || !name || !comment) {
      return NextResponse.json(
        { error: "Post ID, name, and comment are required" },
        { status: 400 }
      );
    }

    const newComment = {
      _key: Math.random().toString(36).substr(2, 9),
      name,
      comment,
      date: new Date().toISOString(),
    };

    // Add comment to post
    await writeClient
      .patch(postId)
      .setIfMissing({ comments: [] })
      .append("comments", [newComment])
      .commit();

    // Fetch updated comments
    const post = await writeClient.fetch(`*[_id == $postId][0]{ comments }`, { postId });

    return NextResponse.json({ comments: post.comments || [] });
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json({ error: "Failed to add comment" }, { status: 500 });
  }
}
