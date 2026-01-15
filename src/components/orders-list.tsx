"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Package, Download, ShoppingBag, Clock, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

interface Order {
    _id: string;
    orderId: string;
    amount: number;
    status: string;
    paidAt: string;
    productName: string;
    product?: {
        title: string;
        slug: { current: string };
        coverImage: any;
    };
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function OrdersList({ orders }: { orders: Order[] }) {
    if (orders.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-24 px-4"
            >
                <div className="relative mb-8 group">
                    <div className="absolute inset-0 bg-[#CE1117] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
                    <div className="relative w-28 h-28 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-[2rem] shadow-2xl flex items-center justify-center border border-white/50 dark:border-gray-700">
                        <ShoppingBag className="w-12 h-12 text-[#CE1117]" />
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center tracking-tight">
                    Start Your Collection
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-10 text-center text-lg leading-relaxed">
                    Unlock premium resources and take your skills to the next level. Your journey begins here.
                </p>

                <Link
                    href="/products"
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#CE1117] text-white font-bold rounded-2xl overflow-hidden transition-transform active:scale-95"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="relative flex items-center gap-2">
                        Browse Store
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
        >
            {orders.map((order) => (
                <motion.div
                    key={order._id}
                    variants={item}
                    className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-2 border border-white/20 dark:border-gray-700/50 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Product Image Container */}
                        <div className="w-full md:w-56 h-48 md:h-auto min-h-[12rem] relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900/50">
                            {order.product?.coverImage ? (
                                <>
                                    <Image
                                        src={urlFor(order.product.coverImage).url()}
                                        alt={order.productName || "Product"}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </>
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400 flex-col gap-3">
                                    <Package className="w-8 h-8 opacity-50" />
                                    <span className="text-sm font-medium">No Preview</span>
                                </div>
                            )}

                            {/* Floating Status Badge */}
                            <div className="absolute top-3 left-3">
                                <div className={`
                                    backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold border shadow-lg
                                    flex items-center gap-1.5 transition-colors duration-300
                                    ${order.status === 'paid'
                                        ? 'bg-green-500/90 text-white border-green-400/50'
                                        : 'bg-yellow-500/90 text-white border-yellow-400/50'
                                    }
                                `}>
                                    {order.status === 'paid' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                                    {order.status?.toUpperCase()}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-3 md:py-4 md:pr-4 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1.5 tracking-tight group-hover:text-[#CE1117] transition-colors duration-300">
                                            {order.productName}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xs">
                                            <span className="font-mono text-gray-400 bg-gray-50 dark:bg-gray-900/50 px-1.5 py-0.5 rounded border border-gray-100 dark:border-gray-700/50">
                                                #{order.orderId.slice(-8).toUpperCase()}
                                            </span>
                                            <span className="text-gray-300 dark:text-gray-600">•</span>
                                            <span className="text-gray-500 dark:text-gray-400">
                                                {new Date(order.paidAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className="text-2xl font-bold text-[#CE1117] tracking-tighter">
                                            ₹{order.amount.toLocaleString()}
                                        </div>
                                        <div className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mt-0.5">Paid Amount</div>
                                    </div>
                                </div>

                                {/* Divider with Receipt Effect */}
                                <div className="border-t-2 border-dashed border-gray-100 dark:border-gray-700/50 my-4 relative">
                                    <div className="absolute -left-2 -top-1.5 w-3 h-3 rounded-full bg-gray-50 dark:bg-gray-950"></div>
                                    <div className="absolute -right-2 -top-1.5 w-3 h-3 rounded-full bg-gray-50 dark:bg-gray-950"></div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Payment Method</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Razorpay Secure</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Type</p>
                                        <div className="flex items-center gap-2">
                                            <Package className="w-3.5 h-3.5 text-gray-400" />
                                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Digital Asset</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-end items-center">
                                {order.product?.slug && (
                                    <Link
                                        href={`/products/${order.product.slug.current}`}
                                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                                    >
                                        View Product <ExternalLink className="w-3 h-3" />
                                    </Link>
                                )}
                                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                                    <Download className="w-4 h-4" />
                                    Download Assets
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
