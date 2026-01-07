import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SocialMedia from "@/components/social-media";
import EbookSection from "@/components/ebook-section";
import ScrollIndicator from "@/components/scroll-indicator";
import Footer from "@/components/footer";
import YesICanSection from "@/components/yes_i_can";
import WashHands from "@/components/washHands";
import Newsletter from "@/components/newsletter";

export default function Home() {
	return (
		<main className="min-h-screen bg-white dark:bg-gray-950">
			<Navbar />
			<Hero />
			<ScrollIndicator />
			<SocialMedia />
			<YesICanSection />
			<EbookSection />
			<WashHands />
			<Newsletter />
			<Footer />
		</main>
	);
}
