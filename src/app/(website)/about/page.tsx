import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import CertificateGallery from '@/components/certificate-gallery';
import Newsletter from '@/components/newsletter';
import AboutSocials from '@/components/about-socials';

export const metadata = {
    title: 'About | Maninder Singh Chandok',
    description: 'Learn more about Maninder Singh Chandok, his journey, and his certifications.',
    openGraph: {
        title: 'About | Maninder Singh Chandok',
        description: 'Learn more about Maninder Singh Chandok, his journey, and his certifications.',
    },
};

async function getCertificates() {
    const lionsDir = path.join(process.cwd(), 'public/LIONS');

    try {
        const files = await fs.promises.readdir(lionsDir);
        const images = files.filter(file => /\.(jpg|jpeg|png|webp|avif)$/i.test(file));
        return images.map(file => `/LIONS/${file}`);
    } catch (error) {
        console.error('Error reading certificate directory:', error);
        return [];
    }
}

export default async function AboutPage() {
    const certificates = await getCertificates();

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 pt-32 pb-16">
            {/* Bio Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Placeholder */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-xl">
                        <Image
                            src="/hero.png" // Fallback to hero image if specific about image is missing
                            alt="Maninder Singh Chandok"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            About Me
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Hello! I'm Maninder Singh Chandok. I am passionate about empowering individuals through knowledge and inspiration. My journey has been driven by a desire to share wisdom and help others unlock their potential.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            With a background in coaching and speaking, I have dedicated my career to creating resources that make a difference. Whether it's through my books, digital products, or speaking engagements, my goal is to provide value and foster growth.
                        </p>

                        {/* Social Icons (Client Component) */}
                        <AboutSocials />
                    </div>
                </div>
            </section>

            {/* Certificates Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Certifications & Achievements
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A collection of my professional recognitions and milestones.
                    </p>
                </div>

                <CertificateGallery images={certificates} />
            </section>
            <div className="mt-16"></div>
            <Newsletter />
        </main>
    );
}
