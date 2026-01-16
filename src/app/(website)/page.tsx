import Hero from "@/components/hero";
import JourneySnapshot from "@/components/journey-snapshot";
import SocialMedia from "@/components/social-media";
import EbookSection from "@/components/ebook-section";
import ScrollIndicator from "@/components/scroll-indicator";
import Newsletter from "@/components/newsletter";
import QuotesSection from "@/components/quotes-section";
import HomeCertificates from "@/components/home-certificates";
import FeaturedVideo from "@/components/featured-video";
import fs from 'fs';
import path from 'path';

import { client } from "@/sanity/lib/client";

import ExpertiseSection from "@/components/expertise-section";
import HomeBlogSection from "@/components/home-blog-section";

async function getRecentCertificates() {
	const lionsDir = path.join(process.cwd(), 'public/LIONS');

	try {
		const files = await fs.promises.readdir(lionsDir);
		const images = files.filter(file => /\.(jpg|jpeg|png|webp|avif)$/i.test(file));
		// Return first 4 images
		return images.slice(0, 4).map(file => `/LIONS/${file}`);
	} catch (error) {
		return [];
	}
}

async function getFeaturedProduct() {
	return await client.fetch(
		`*[_type == "product" && isFeatured == true][0]`,
		{},
		{ cache: 'no-store' }
	);
}

async function getLatestPosts() {
	return await client.fetch(
		`*[_type == "blog"] | order(publishedAt desc)[0...3] {
            _id,
            title,
            slug,
            excerpt,
            coverImage,
            publishedAt
        }`,
		{},
		{ cache: 'no-store' }
	);
}

export default async function Home() {
	const recentCertificates = await getRecentCertificates();
	const featuredProduct = await getFeaturedProduct();
	const latestPosts = await getLatestPosts();

	return (
		<main className="min-h-screen bg-white dark:bg-gray-950">
			<Hero />
			<JourneySnapshot />
			<QuotesSection />
			<HomeCertificates images={recentCertificates} />
			<ExpertiseSection />
			<FeaturedVideo />
			<ScrollIndicator />
			<SocialMedia />
			{/* <YesICanSection /> */}
			<EbookSection product={featuredProduct} />
			<HomeBlogSection posts={latestPosts} />
			{/* <WashHands /> */}
			<Newsletter />
		</main>
	);
}
