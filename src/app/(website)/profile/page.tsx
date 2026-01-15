import { client } from "@/sanity/lib/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { User, Mail, Edit3 } from "lucide-react";
import OrdersList from "@/components/orders-list";

async function getUserProfile(email: string) {
    // Fetch user details, count orders, and get full order list
    const userQuery = `*[_type == "user" && email == $email][0] {
        name,
        email,
        phone,
        image,
        emailVerified,
        _createdAt
    }`;

    const ordersCountQuery = `count(*[_type == "order" && customerEmail == $email])`;

    // Query from the original orders page
    const ordersQuery = `*[_type == "order" && customerEmail == $email] | order(createdDesc desc) {
        _id,
        orderId,
        amount,
        status,
        paidAt,
        productName,
        productId,
        "product": *[_type == "product" && _id == ^.productId][0] {
            title,
            slug,
            coverImage
        }
    }`;

    const [user, ordersCount, orders] = await Promise.all([
        client.fetch(userQuery, { email }, { cache: 'no-store' }),
        client.fetch(ordersCountQuery, { email }, { cache: 'no-store' }),
        client.fetch(ordersQuery, { email }, { cache: 'no-store' })
    ]);

    return { user, ordersCount, orders };
}

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        redirect("/");
    }

    const { user, ordersCount, orders } = await getUserProfile(session.user.email);

    if (!user) {
        return (
            <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-32 pb-16 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User not found</h1>
                    <p className="text-gray-500 mt-2">Could not retrieve profile information.</p>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#FAFAFA] dark:bg-gray-950 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Card */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 mb-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Avatar */}
                        <div className="relative shrink-0">
                            <div className="w-28 h-28 rounded-full border-4 border-gray-50 dark:border-gray-800 overflow-hidden shadow-inner bg-gray-100 dark:bg-gray-800">
                                {user.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-300 dark:text-gray-600">
                                        <User className="w-12 h-12" />
                                    </div>
                                )}
                            </div>
                            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full flex items-center justify-center shadow-sm">
                                <span className="sr-only">Active</span>
                            </div>
                        </div>

                        {/* Info & Actions */}
                        <div className="flex-1 text-center md:text-left w-full">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">{user.name}</h1>
                                    <p className="text-gray-500 dark:text-gray-400 font-medium flex items-center justify-center md:justify-start gap-2 text-sm">
                                        <Mail className="w-3.5 h-3.5" />
                                        {user.email}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                        <Edit3 className="w-4 h-4" />
                                        <span>Edit</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Minimal Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <div className="text-center md:text-left">
                            <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">Total Orders</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">{ordersCount}</p>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">Join Date</p>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">{new Date(user._createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">Phone</p>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">{user.phone || "—"}</p>
                        </div>
                        <div className="text-center md:text-left flex flex-col items-center md:items-start">
                            <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-1">Status</p>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                Active
                            </div>
                        </div>
                    </div>
                </div>

                {/* Orders Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Order History</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Your recent purchases and transactions.</p>
                </div>

                <OrdersList orders={orders} />

            </div>
        </main>
    );
}
