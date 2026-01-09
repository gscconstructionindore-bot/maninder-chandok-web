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
	metadataBase: new URL("https://manindersinghchandok.com"),
	title: {
		default: "Maninder Singh Chandok",
		template: "%s | Maninder Singh Chandok",
	},
	description: "Maninder Singh Chandok's personal website - Portfolio, Blog, and Thoughts.",
	keywords: ["Maninder Singh Chandok", "Developer", "Portfolio", "Blog", "Tech", "Software Engineer"],
	authors: [{ name: "Maninder Singh Chandok" }],
	creator: "Maninder Singh Chandok",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://manindersinghchandok.com",
		title: "Maninder Singh Chandok",
		description: "Maninder Singh Chandok's personal website - Portfolio, Blog, and Thoughts.",
		siteName: "Maninder Singh Chandok",
		images: [
			{
				url: "/favicon.svg",
				width: 1200,
				height: 630,
				alt: "Maninder Singh Chandok",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Maninder Singh Chandok",
		description: "Maninder Singh Chandok's personal website - Portfolio, Blog, and Thoughts.",
		images: ["/favicon.svg"],
		creator: "@manindersingh", // Placeholder, ideally should be updated if user has a handle
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
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
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
				{children}
				<Script
					src="//www.instagram.com/embed.js"
					strategy="lazyOnload"
				/>
			</body>
		</html>
	);
}
