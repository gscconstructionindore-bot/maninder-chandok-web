import { client } from "@/sanity/lib/client";
import BlogPost from "@/components/blog-post";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { portableTextToMarkdown } from "@portabletext/markdown";

export const dynamic = "force-dynamic";
export const revalidate = 0; // Disable static prerendering for long slugs

async function getBlogPost(slug: string) {
  const post = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      "category": category->title,
      coverImage,
      content,
      publishedAt,
      _createdAt,
      likes,
      comments
    }`,
    { slug }
  );

  if (post?.content) {
    post.content = await portableTextToMarkdown(post.content);
  }

  return post;
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getBlogPost(decodedSlug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const postImage = post.coverImage ? urlFor(post.coverImage).width(1200).height(630).url() : null;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: postImage ? [postImage, ...previousImages] : previousImages,
      type: "article",
      publishedTime: post.publishedAt || post._createdAt,
      authors: ["Maninder Singh Chandok"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: postImage ? [postImage] : [],
    },
  };
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? urlFor(post.coverImage).url() : undefined,
    datePublished: post.publishedAt || post._createdAt,
    author: {
      "@type": "Person",
      name: "Maninder Singh Chandok",
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPost post={post} />
    </main>
  );
}
