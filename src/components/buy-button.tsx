"use client";

import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import AuthModal from "@/components/auth-modal";

interface BuyButtonProps {
    productId: string;
    productName?: string; // Add optional prop for easier access if needed, or fetch from ID
    price: number;
}

export default function BuyButton({ productId, price, productName = "Product" }: BuyButtonProps) {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleBuy = async () => {
        if (!user) {
            setShowAuthModal(true);
            return;
        }

        setIsLoading(true);

        try {
            const res = await loadRazorpay();

            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
            }

            // Create Order
            const orderRes = await fetch("/api/orders/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: price, currency: "INR" }),
            });

            if (!orderRes.ok) {
                throw new Error("Failed to create order");
            }

            const orderData = (await orderRes.json()) as any;

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: orderData.amount,
                currency: orderData.currency,
                name: "Maninder Singh Chandok",
                description: `Purchase of ${productName}`,
                order_id: orderData.id,
                handler: async function (response: any) {
                    try {
                        const verifyRes = await fetch("/api/orders/verify", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                productId,
                                productName,
                                amount: price
                            }),
                        });

                        const verifyData = (await verifyRes.json()) as any;

                        if (verifyRes.ok) {
                            alert("Payment Successful! Order created.");
                            // Likely redirect to orders page or download page
                            window.location.href = "/profile";
                        } else {
                            alert(verifyData.error || "Payment verification failed");
                        }
                    } catch (error) {
                        console.error("Verification error", error);
                        alert("Payment verification failed");
                    }
                },
                prefill: {
                    name: user.name,
                    email: user.email,
                    contact: (user as any).phone || "",
                },
                theme: {
                    color: "#CE1117",
                },
            };

            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.open();

        } catch (error) {
            console.error("Checkout failed:", error);
            alert("Something went wrong with checkout.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={handleBuy}
                disabled={isLoading}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#CE1117] hover:bg-[#a50d12] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed text-lg"
            >
                {isLoading ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                    </>
                ) : (
                    <>
                        <ShoppingCart className="w-5 h-5" />
                        Buy Now for ₹{price}
                    </>
                )}
            </button>

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
            />
        </>
    );
}
