import Hero from "@/components/hero";
import SocialMedia from "@/components/social-media";
import EbookSection from "@/components/ebook-section";
import ScrollIndicator from "@/components/scroll-indicator";
import Newsletter from "@/components/newsletter";
import QuotesSection from "@/components/quotes-section";
import HomeCertificates from "@/components/home-certificates";
import FeaturedVideo from "@/components/featured-video";
import fs from 'fs';
import path from 'path';

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

export default async function Home() {
	const recentCertificates = await getRecentCertificates();

	return (
		<main className="min-h-screen bg-white dark:bg-gray-950">
			<Hero />
			<QuotesSection />
			<HomeCertificates images={recentCertificates} />
			<FeaturedVideo /> {/* Added FeaturedVideo component here */}
			<ScrollIndicator />
			<SocialMedia />
			{/* <YesICanSection /> */}
			<EbookSection />
			{/* <WashHands /> */}
			<Newsletter />
		</main>
	);
}
