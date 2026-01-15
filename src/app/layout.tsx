import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as it's a common default and premium looking
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AuthProvider } from "@/contexts/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Maninder Singh Chandok",
    description: "Transforming leaders and organizations through innovative training programs and consultancy services.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    {/* <Navbar /> */}
                    {children}
                    {/* <Footer /> */}
                </AuthProvider>
            </body>
        </html>
    );
}
