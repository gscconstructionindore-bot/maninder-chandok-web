'use client';

import { useState } from 'react';

interface Order {
    _id: string;
    orderId: string;
    paymentId?: string;
    productId: string;
    productName: string;
    amount: number;
    currency: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    status: 'created' | 'paid' | 'failed';
    paidAt?: string;
    downloadToken?: string;
    _createdAt: string;
}

export default function OrderLookup() {
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState<Order[]>([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSearch = async () => {
        if (!phone.trim()) {
            setError('Please enter a phone number');
            return;
        }

        setLoading(true);
        setError('');
        setMessage('');

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone }),
            });

            const data = await response.json() as {
                orders?: Order[];
                message?: string;
                error?: string;
            };

            if (response.ok) {
                setOrders(data.orders || []);
                setMessage(data.message || '');
            } else {
                setError(data.error || 'Failed to fetch orders');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString();
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Order Lookup
            </h1>

            <div className="flex gap-4 mb-6">
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number (e.g., +91 98765 43210)"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
                <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="px-6 py-2 bg-[#CE1117] text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Searching...' : 'Search Orders'}
                </button>
            </div>

            {error && (
                <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300">
                    {error}
                </div>
            )}

            {message && (
                <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-blue-700 dark:text-blue-300">
                    {message}
                </div>
            )}

            {orders.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Found Orders ({orders.length})
                    </h2>
                    
                    {orders.map((order) => (
                        <div
                            key={order._id}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                        {order.productName}
                                    </h3>
                                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                        <p><strong>Order ID:</strong> {order.orderId}</p>
                                        <p><strong>Payment ID:</strong> {order.paymentId || 'N/A'}</p>
                                        <p><strong>Amount:</strong> ₹{order.amount}</p>
                                        <p><strong>Status:</strong> 
                                            <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                                                order.status === 'paid' 
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                                    : order.status === 'failed'
                                                    ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                                                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                                            }`}>
                                                {order.status.toUpperCase()}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                        Customer Details
                                    </h4>
                                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                        <p><strong>Name:</strong> {order.customerName || 'N/A'}</p>
                                        <p><strong>Email:</strong> {order.customerEmail || 'N/A'}</p>
                                        <p><strong>Phone:</strong> {order.customerPhone}</p>
                                        <p><strong>Order Date:</strong> {formatDate(order._createdAt)}</p>
                                        {order.paidAt && (
                                            <p><strong>Paid At:</strong> {formatDate(order.paidAt)}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {order.downloadToken && (
                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <a
                                        href={`/api/product/download?token=${order.downloadToken}&fileId=${order.productId}`}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Download Product
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
