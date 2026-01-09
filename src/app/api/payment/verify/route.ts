import { NextResponse } from 'next/server';
import crypto from 'crypto';

function generateDownloadToken(productId: string) {
    // Simple token generation for MVP. 
    // In production, use JWT or a database record with expiration.
    // Here we'll sign the productId and timestamp.
    const timestamp = Date.now();
    const secret = process.env.RAZORPAY_KEY_SECRET || 'fallback_secret'; // Use a proper secret in prod

    const data = `${productId}:${timestamp}`;
    const signature = crypto
        .createHmac('sha256', secret)
        .update(data)
        .digest('hex');

    return `${data}:${signature}`;
}

export async function POST(req: Request) {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, productId } = await req.json() as {
            razorpay_order_id: string;
            razorpay_payment_id: string;
            razorpay_signature: string;
            productId: string;
        };

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !productId) {
            return NextResponse.json({ error: 'Missing payment details' }, { status: 400 });
        }

        const secret = process.env.RAZORPAY_KEY_SECRET || '';

        // Signature Verification
        const generated_signature = crypto
            .createHmac('sha256', secret)
            .update(razorpay_order_id + '|' + razorpay_payment_id)
            .digest('hex');

        if (generated_signature !== razorpay_signature) {
            return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
        }

        // Payment Successful
        const downloadToken = generateDownloadToken(productId);

        return NextResponse.json({
            success: true,
            downloadToken,
            downloadUrl: `/api/product/download?token=${downloadToken}&fileId=${productId}` // Using ProductId as File ID context for now
        });

    } catch (error) {
        console.error('Error verifying payment:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
