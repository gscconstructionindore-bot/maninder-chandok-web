'use client';

import { useState } from 'react';
import Script from 'next/script';

interface BuyButtonProps {
    productId: string;
    price: number;
}

declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function BuyButton({ productId, price }: BuyButtonProps) {
    const [loading, setLoading] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

    const handlePayment = async () => {
        setLoading(true);

        try {
            // 1. Create Order
            const orderRes = await fetch('/api/payment/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId }),
            });

            const orderData = await orderRes.json() as {
                keyId: string;
                amount: number;
                currency: string;
                productName: string;
                productDescription: string;
                orderId: string;
                error?: string;
            };

            if (!orderRes.ok) throw new Error(orderData.error);

            // 2. Open Razorpay
            const options = {
                key: orderData.keyId,
                amount: orderData.amount,
                currency: orderData.currency,
                name: orderData.productName,
                description: orderData.productDescription,
                order_id: orderData.orderId,
                handler: async function (response: any) {
                    // 3. Verify Payment
                    try {
                        const verifyRes = await fetch('/api/payment/verify', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                productId: productId
                            }),
                        });

                        const verifyData = await verifyRes.json() as { success: boolean; downloadUrl: string };

                        if (verifyData.success) {
                            setDownloadUrl(verifyData.downloadUrl);
                            alert('Payment Successful! Click the button below to download.');
                        } else {
                            alert('Payment verification failed.');
                        }
                    } catch (err) {
                        console.error(err);
                        alert('Error verifying payment.');
                    }
                },
                prefill: {
                    name: '', // We could collect this if we had user auth
                    email: '',
                    contact: ''
                },
                theme: {
                    color: '#CE1117' // Matching the site theme
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response: any) {
                alert(response.error.description);
            });
            rzp1.open();

        } catch (error) {
            console.error('Payment Error:', error);
            alert('Failed to initiate payment.');
        } finally {
            setLoading(false);
        }
    };

    if (downloadUrl) {
        return (
            <a
                href={downloadUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                rel="noopener noreferrer"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Now
            </a>
        );
    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
            <button
                onClick={handlePayment}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#CE1117] text-white rounded-full font-medium hover:bg-red-700 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                )}
                {loading ? 'Processing...' : `Buy Now - ₹${price}`}
            </button>
        </>
    );
}
