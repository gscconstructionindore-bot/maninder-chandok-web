import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navbar";
import "./globals.css";

const geistSans = Inter({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Maninder Singh Chandok",
	description: "Maninder Singh Chandok's personal website",
	openGraph: {
		title: "Maninder Singh Chandok",
		description: "Maninder Singh Chandok's personal website",
		images: ["/favicon.svg"],
	},
	twitter: {
		card: "summary_large_image",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							try {
								const theme = localStorage.getItem('theme') || 'light';
								const root = document.documentElement;
								
								// Always remove dark class first
								root.classList.remove('dark');
								
								// Add it back if needed
								if (theme === 'dark') {
									root.classList.add('dark');
								} else if (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
									root.classList.add('dark');
								}
								// If theme is 'light', dark class stays removed
							} catch (e) {}
						`,
					}}
				/>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar />
				{children}
				<Script 
					src="//www.instagram.com/embed.js" 
					strategy="lazyOnload"
				/>
			</body>
		</html>
	);
}
