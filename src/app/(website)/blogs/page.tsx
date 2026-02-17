import { client } from "@/sanity/lib/client";
import BlogList from "@/components/blog-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest thoughts and tutorials on software development and technology.",
  openGraph: {
    title: "Blog | Maninder Singh Chandok",
    description: "Read my latest thoughts and tutorials on software development and technology.",
  },
};

export const revalidate = 60; // Revalidate every 60 seconds

async function getBlogPosts() {
  const posts = await client.fetch(
    `*[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      "category": category->title,
      coverImage,
      publishedAt,
      _createdAt
    }`
  );
  return posts;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-14">
      <BlogList posts={posts} />
    </main>
  );
}
