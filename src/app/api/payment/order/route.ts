import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { client } from '@/sanity/lib/client';

export async function POST(req: Request) {
    try {
        const { productId } = await req.json() as { productId: string };

        if (!productId) {
            return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
        }

        // Fetch product details from Sanity to ensure price integrity
        const product = await client.fetch(
            `*[_type == "product" && _id == $productId][0]{
        price,
        title
      }`,
            { productId }
        );

        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        const instance = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
            key_secret: process.env.RAZORPAY_KEY_SECRET || '',
        });

        const options = {
            amount: product.price * 100, // Amount in paise
            currency: 'INR',
            receipt: `receipt_${Date.now()}`,
            notes: {
                productId: productId,
                productName: product.title,
            },
        };

        const order = await instance.orders.create(options);

        return NextResponse.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            productName: product.title,
            productDescription: `Purchase of ${product.title}`, // Optional description for Razorpay checkout
        });
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
