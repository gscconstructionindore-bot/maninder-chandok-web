import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import OurMission from "@/components/our-mission";
import SocialMedia from "@/components/social-media";
import EbookSection from "@/components/ebook-section";
import ScrollIndicator from "@/components/scroll-indicator";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<main className="min-h-screen bg-white dark:bg-gray-950">
			<Navbar />
			<Hero />
			<ScrollIndicator />
			<SocialMedia />
			<EbookSection />
			<OurMission />
			<Footer />
		</main>
	);
}
