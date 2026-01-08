import { client } from "@/sanity/lib/client";
import BlogPost from "@/components/blog-post";
import { notFound } from "next/navigation";

async function getBlogPost(slug: string) {
  const post = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      content,
      publishedAt,
      _createdAt,
      likes,
      comments
    }`,
    { slug }
  );
  
  return post;
}

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "blog"]{ "slug": slug.current }`
  );

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Decode the URL-encoded slug
  const decodedSlug = decodeURIComponent(slug);
  const post = await getBlogPost(decodedSlug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-24">
      <BlogPost post={post} />
    </main>
  );
}
