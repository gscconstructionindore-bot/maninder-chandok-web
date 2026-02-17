
import { client } from "@/sanity/lib/client";
import GalleryLightbox, { GalleryCategoryData } from "@/components/gallery-lightbox";

async function getGalleryData() {
  return client.fetch<GalleryCategoryData[]>(
    `*[_type == "galleryCategory"] | order(orderRank asc, title asc) {
      _id,
      title,
      "photos": *[_type == "galleryPhoto" && references(^._id)] | order(orderRank asc, _createdAt desc) {
        _id,
        title,
        alt,
        image
      }
    }`
  );
}

export default async function GalleryPage() {
  const categories = await getGalleryData();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-24 md:pt-32 pb-16 overflow-x-hidden">
      <section className="relative px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="inline-block mb-3 text-sm font-semibold tracking-[0.2em] text-[#CE1117] uppercase">
          Portfolio
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Visual Journey
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Capturing moments of transformation, leadership, and impact across the globe.
        </p>
      </section>

      <GalleryLightbox categories={categories} />
    </main>
  );
}
