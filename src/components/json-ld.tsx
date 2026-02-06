export function PersonJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Maninder Singh Chandok",
        url: "https://manindersinghchandok.com",
        sameAs: [
            "https://www.facebook.com/ManinderSChandok",
            "https://www.instagram.com/maninderchandok/",
            "https://www.youtube.com/channel/UCfW56czzEdxsc3HnvYTIExw",
            "https://x.com/ManinderChandok",
            "https://www.linkedin.com/in/maninder-singh-chandok-16a5661b1/",
        ],
        jobTitle: "Corporate Trainer & Motivational Speaker",
        description: "Maninder Singh Chandok is a renowned corporate trainer and motivational speaker engaged in transforming leaders and organizations.",
        image: "https://manindersinghchandok.com/i_can.png",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export function HomestayJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        name: "Maninder's Home Stay",
        url: "https://manindersinghchandok.com/homestay",
        image: "https://manindersinghchandok.com/homestay/imgi_97_e6637b86.jpg",
        description: "Experience the comfort of a private villa with the warmth of a home. Located near the serene Devguradia Shiva Mandir in Indore.",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Devguradia Shiva Mandir",
            addressLocality: "Indore",
            addressRegion: "Madhya Pradesh",
            postalCode: "452016",
            addressCountry: "IN",
        },
        telephone: "+919425311458",
        priceRange: "$$",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
