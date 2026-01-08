import { client } from "@/sanity/lib/client";
import BlogList from "@/components/blog-list";

async function getBlogPosts() {
  const posts = await client.fetch(
    `*[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      publishedAt
    }`
  );
  return posts;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-24">
      <BlogList posts={posts} />
    </main>
  );
}
