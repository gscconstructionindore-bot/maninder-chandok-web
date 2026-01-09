import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import BuyButton from "@/components/buy-button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

async function getProduct(slug: string) {
    const product = await client.fetch(
        `*[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      price,
      originalPrice,
      description,
      features,
      coverImage
    }`,
        { slug }
    );
    return product;
}

export async function generateStaticParams() {
    const products = await client.fetch(
        `*[_type == "product"]{ "slug": slug.current }`
    );

    return products.map((product: any) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const product = await getProduct(decodedSlug);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    const previousImages = (await parent).openGraph?.images || [];
    const productImage = product.coverImage ? urlFor(product.coverImage).width(1200).height(630).url() : null;

    return {
        title: product.title,
        description: product.description.substring(0, 160), // Clamp description
        openGraph: {
            title: product.title,
            description: product.description.substring(0, 160),
            images: productImage ? [productImage, ...previousImages] : previousImages,
        },
        twitter: {
            card: "summary_large_image",
            title: product.title,
            description: product.description.substring(0, 160),
            images: productImage ? [productImage] : [],
        },
    };
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const product = await getProduct(decodedSlug);

    if (!product) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        image: product.coverImage ? urlFor(product.coverImage).url() : undefined,
        description: product.description,
        offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: product.price,
            availability: "https://schema.org/InStock",
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link href="/products" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-[#CE1117] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Store
                </Link>

                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Image Section */}
                        <div className="relative h-[400px] lg:h-auto bg-gray-100 dark:bg-gray-700">
                            {product.coverImage && (
                                <Image
                                    src={urlFor(product.coverImage).url()}
                                    alt={product.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            )}
                        </div>

                        {/* Details Section */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                {product.title}
                            </h1>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-3xl font-bold text-[#CE1117]">
                                    ₹{product.price}
                                </div>
                                {product.originalPrice && product.originalPrice > product.price && (
                                    <>
                                        <div className="text-xl text-gray-400 line-through decoration-gray-400">
                                            ₹{product.originalPrice}
                                        </div>
                                        <span className="bg-red-100 text-red-700 text-sm font-bold px-3 py-1 rounded-full">
                                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                        </span>
                                    </>
                                )}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {product.features && product.features.length > 0 && (
                                <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">What's Included:</h3>
                                    <ul className="space-y-3">
                                        {product.features.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                                                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                                <BuyButton productId={product._id} price={product.price} />
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                                    Secure payment via Razorpay. Instant download link provided after purchase.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
