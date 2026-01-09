import { MetadataRoute } from 'next'
import { client } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://manindersinghchandok.com'

    // Fetch all blog posts
    const posts = await client.fetch(
        `*[_type == "blog"]{ "slug": slug.current, publishedAt, _createdAt }`
    );

    const blogUrls = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt || post._createdAt),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Fetch all products
    const products = await client.fetch(
        `*[_type == "product"]{ "slug": slug.current, _updatedAt, _createdAt }`
    );

    const productUrls = products.map((product: any) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: new Date(product._updatedAt || product._createdAt),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...blogUrls,
        ...productUrls,
    ]
}
