import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface ProductCardProps {
    product: {
        title: string;
        slug: { current: string };
        price: number;
        originalPrice?: number;
        coverImage: any;
        description: string;
    };
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/products/${product.slug.current}`} className="group block h-full">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100 dark:border-gray-700">
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                    {product.coverImage ? (
                        <Image
                            src={urlFor(product.coverImage).width(600).height(450).url()}
                            alt={product.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                    )}

                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 dark:bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold shadow-sm flex items-center gap-2">
                        {product.originalPrice && product.originalPrice > product.price && (
                            <span className="text-gray-500 line-through text-xs dark:text-gray-400">₹{product.originalPrice}</span>
                        )}
                        <span className="text-[#CE1117]">₹{product.price}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-[#CE1117] transition-colors">
                        {product.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                        {product.description}
                    </p>
                    <div className="flex items-center text-[#CE1117] font-medium text-sm">
                        View Details
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
}
