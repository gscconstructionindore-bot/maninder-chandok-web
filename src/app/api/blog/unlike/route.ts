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
    const { postId } = await request.json() as { postId: string };

    if (!postId) {
      return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
    }

    // Get current post
    const post = await writeClient.fetch(`*[_id == $postId][0]{ likes }`, { postId });
    
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const newLikes = Math.max((post.likes || 0) - 1, 0);

    // Update likes
    await writeClient
      .patch(postId)
      .set({ likes: newLikes })
      .commit();

    return NextResponse.json({ likes: newLikes });
  } catch (error) {
    console.error("Error updating likes:", error);
    return NextResponse.json({ error: "Failed to update likes" }, { status: 500 });
  }
}
