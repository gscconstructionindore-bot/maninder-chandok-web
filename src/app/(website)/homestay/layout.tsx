import type { Metadata } from "next";
import { HomestayJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
    title: "Home Stay",
    description: "Experience the comfort of a private villa with the warmth of a home at Maninder's Home Stay near Devguradia Shiva Mandir, Indore.",
    openGraph: {
        title: "Maninder's Home Stay | Luxury Villa in Indore",
        description: "Experience the comfort of a private villa with the warmth of a home. Located near the serene Devguradia Shiva Mandir in Indore.",
        images: ["/homestay/imgi_97_e6637b86.jpg"],
    },
};

export default function HomestayLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <HomestayJsonLd />
            {children}
        </>
    );
}
