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
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
				<Script 
					src="//www.instagram.com/embed.js" 
					strategy="lazyOnload"
				/>
			</body>
		</html>
	);
}
