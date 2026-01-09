import { NextResponse, NextRequest } from 'next/server';
import crypto from 'crypto';
import { client } from '@/sanity/lib/client';

function verifyDownloadToken(token: string) {
    try {
        const [productId, timestampStr, signature] = token.split(':');
        if (!productId || !timestampStr || !signature) return null;

        const timestamp = parseInt(timestampStr, 10);
        // Token valid for 24 hours
        if (Date.now() - timestamp > 24 * 60 * 60 * 1000) return null;

        const secret = process.env.RAZORPAY_KEY_SECRET || 'fallback_secret';
        const data = `${productId}:${timestampStr}`;
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(data)
            .digest('hex');

        if (signature !== expectedSignature) return null;

        return productId;
    } catch (e) {
        return null;
    }
}

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const token = searchParams.get('token');

    if (!token) {
        return NextResponse.json({ error: 'Missing token' }, { status: 401 });
    }

    const productId = verifyDownloadToken(token);

    if (!productId) {
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 403 });
    }

    try {
        // Fetch user file URL from Sanity
        const product = await client.fetch(
            `*[_type == "product" && _id == $productId][0]{
        "fileUrl": file.asset->url
      }`,
            { productId }
        );

        if (!product || !product.fileUrl) {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        // Redirect to the file URL
        // In a higher security setup, we might stream this content through our server
        // so the Sanity URL is never exposed. For now, redirect is MVP friendly.
        return NextResponse.redirect(product.fileUrl);

    } catch (error) {
        console.error('Error fetching download URL:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
