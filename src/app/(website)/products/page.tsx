import { client } from "@/sanity/lib/client";
import ProductCard from "@/components/product-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Store",
    description: "Premium digital resources to accelerate your growth.",
    openGraph: {
        title: "Store | Maninder Singh Chandok",
        description: "Premium digital resources to accelerate your growth.",
    },
};

async function getProducts() {
    const products = await client.fetch(
        `*[_type == "product"] | order(title asc) {
      _id,
      title,
      slug,
      price,
      originalPrice,
      coverImage,
      description
    }`
    );
    return products;
}

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Digital Store
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Hand-picked resources, templates, and guides to help you master new skills and build better projects.
                    </p>
                </div>

                {products.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No products available yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product: any) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
