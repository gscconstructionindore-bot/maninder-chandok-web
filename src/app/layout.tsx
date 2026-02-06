import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as it's a common default and premium looking
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AuthProvider } from "@/contexts/auth-context";
import { PersonJsonLd } from "@/components/json-ld";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL('https://manindersinghchandok.com'),
    title: {
        default: "Maninder Singh Chandok",
        template: "%s | Maninder Singh Chandok",
    },
    description: "Transforming leaders and organizations through innovative training programs and consultancy services.",
    keywords: ["Maninder Singh Chandok", "Leadership Training", "Corporate Trainer", "Motivational Speaker", "Indore", "Business Consultancy", "Life Coach"],
    authors: [{ name: "Maninder Singh Chandok" }],
    creator: "Maninder Singh Chandok",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://manindersinghchandok.com",
        siteName: "Maninder Singh Chandok",
        title: "Maninder Singh Chandok",
        description: "Transforming leaders and organizations through innovative training programs and consultancy services.",
        images: [
            {
                url: "/i_can.png",
                width: 1200,
                height: 630,
                alt: "Maninder Singh Chandok",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Maninder Singh Chandok",
        description: "Transforming leaders and organizations through innovative training programs and consultancy services.",
        images: ["/i_can.png"],
        creator: "@ManinderChandok",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <PersonJsonLd />
                <AuthProvider>
                    {/* <Navbar /> */}
                    {children}
                    {/* <Footer /> */}
                </AuthProvider>
            </body>
        </html>
    );
}
