export interface Certificate {
    id: string;
    src: string;
    title: string;
    category: string;
}

export const certificatesData: Certificate[] = [
    // Lions Certificate Institute
    { id: "1", src: "/LIONS/cert-0002.jpg", title: "Lions Certified Instructor", category: "Lions Certificate intstitute" },
    { id: "2", src: "/LIONS/cert-0003.jpg", title: "Advanced Management", category: "Lions Certificate intstitute" },
    { id: "3", src: "/LIONS/cert-0004.jpg", title: "Leadership Development", category: "Lions Certificate intstitute" },
    { id: "4", src: "/LIONS/cert-0005.jpg", title: "Service Leadership", category: "Lions Certificate intstitute" },

    // Faculty
    { id: "5", src: "/LIONS/cert-0006.jpg", title: "Faculty Development", category: "Faculty" },
    { id: "6", src: "/LIONS/cert-0007.jpg", title: "Certified Trainer", category: "Faculty" },
    { id: "7", src: "/LIONS/cert-0008.jpg", title: "Regional Faculty", category: "Faculty" },
    { id: "8", src: "/LIONS/cert-0009.jpg", title: "District Faculty", category: "Faculty" },

    // Guiding Lions
    { id: "9", src: "/LIONS/cert-0010.jpg", title: "Certified Guiding Lion", category: "Guiding Lions" },
    { id: "10", src: "/LIONS/cert-0011.jpg", title: "Club Rebuilding", category: "Guiding Lions" },
    { id: "11", src: "/LIONS/cert-0012.jpg", title: "New Club Mentor", category: "Guiding Lions" },
    { id: "12", src: "/LIONS/cert-0013.jpg", title: "Succession Planning", category: "Guiding Lions" },

    // Presidential Accolade
    { id: "13", src: "/LIONS/cert-0014.jpg", title: "Presidential Medal", category: "Presidential Accolade" },
    { id: "14", src: "/LIONS/cert-0015.jpg", title: "Leadership Recognition", category: "Presidential Accolade" },
    { id: "15", src: "/LIONS/cert-0016.jpg", title: "Service Award", category: "Presidential Accolade" },
    { id: "16", src: "/LIONS/cert-0017.jpg", title: "Commitment to Excellence", category: "Presidential Accolade" },

    // ISAME
    { id: "17", src: "/LIONS/cert-0018.jpg", title: "ISAME Forum", category: "ISAME" },
    { id: "18", src: "/LIONS/cert-0019.jpg", title: "Regional Cooperation", category: "ISAME" },
    { id: "19", src: "/LIONS/cert-0020.jpg", title: "International Relations", category: "ISAME" },
    { id: "20", src: "/LIONS/cert-0021.jpg", title: "Cultural Exchange", category: "ISAME" },

    // LCIF Conclave
    { id: "21", src: "/LIONS/cert-0022.jpg", title: "LCIF Conclave", category: "LCIF Conclave" },
    { id: "22", src: "/LIONS/cert-0023.jpg", title: "Campaign 100", category: "LCIF Conclave" },
    { id: "23", src: "/LIONS/cert-0024.jpg", title: "Melvin Jones Fellow", category: "LCIF Conclave" },
    { id: "24", src: "/LIONS/cert-0025.jpg", title: "Humanitarian Service", category: "LCIF Conclave" },

    // More Generic / Mixed
    { id: "25", src: "/LIONS/cert-0026.jpg", title: "District Appreciation", category: "Lions Certificate intstitute" },
    { id: "26", src: "/LIONS/cert-0027.jpg", title: "Zone Chairperson", category: "Faculty" },
    { id: "27", src: "/LIONS/cert-0028.jpg", title: "Club President", category: "Guiding Lions" },
    { id: "28", src: "/LIONS/cert-0029.jpg", title: "Membership Growth", category: "Presidential Accolade" },
    { id: "29", src: "/LIONS/cert-0030.jpg", title: "Lions Quest", category: "ISAME" },
    { id: "30", src: "/LIONS/cert-0031.jpg", title: "Youth Exchange", category: "LCIF Conclave" }
];
