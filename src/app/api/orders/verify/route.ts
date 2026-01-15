import { NextResponse } from "next/server";
import crypto from "crypto";
import { backendClient } from "@/sanity/lib/backend-client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            productId,
            productName,
            amount
        } = (await req.json()) as any;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Find user by email
            const user = await backendClient.fetch(`*[_type == "user" && email == $email][0]`, {
                email: session.user.email
            });

            if (!user) {
                return NextResponse.json({ error: "User not found" }, { status: 404 });
            }

            // Create order in Sanity
            await backendClient.create({
                _type: "order",
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                productId,
                productName,
                amount,
                currency: "INR",
                customerName: user.name,
                customerEmail: user.email,
                customerPhone: user.phone,
                user: {
                    _type: 'reference',
                    _ref: user._id
                },
                status: "paid",
                paidAt: new Date().toISOString(),
            });

            return NextResponse.json(
                { message: "Payment verified and order created" },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: "Invalid signature" },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error("Error verifying payment:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
