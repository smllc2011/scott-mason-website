import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  note?: string;
  featured?: boolean;
  aspectClass: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "/images/photo-gallery/prison-transformation.jpg",
    alt: "Scott Mason — prison 2001, 2018, and August 2024",
    caption:
      "Top Left — Prison 2001 · Bottom Left — 2018 · Right — August, 2024",
    featured: true,
    aspectClass: "aspect-square",
  },
  {
    src: "/images/photo-gallery/chaplain-badge.jpg",
    alt: "Scott Mason's police chaplain badge and community outreach officer ID",
    caption:
      "The picture speaks for itself. The word \"Impossible\" comes to mind.",
    aspectClass: "aspect-[612/816]",
  },
  {
    src: "/images/photo-gallery/drug-march-2014.jpg",
    alt: "Second Drug March, 2014",
    caption: "The second Drug March 2014. The first one was in 2013.",
    aspectClass: "aspect-[2317/2733]",
  },
  {
    src: "/images/photo-gallery/prison-block.jpg",
    alt: "A prison block Scott Mason was in",
    caption: "A prison block I was in.",
    aspectClass: "aspect-square",
  },
  {
    src: "/images/photo-gallery/church-office.jpg",
    alt: "Scott Mason's church office view",
    caption: "My church office view.",
    aspectClass: "aspect-[3309/1818]",
  },
];

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <figure
      className={`border border-white/10 bg-black/35 ${
        item.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className={`relative w-full overflow-hidden bg-black ${item.aspectClass}`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          unoptimized
          className="object-contain object-center"
          sizes={
            item.featured
              ? "(max-width: 1024px) 100vw, 960px"
              : "(max-width: 640px) 100vw, 480px"
          }
        />
      </div>
      <figcaption className="px-6 py-6 lg:px-8 lg:py-7">
        <p className="text-[15px] leading-[1.75] text-white/85 sm:text-[16px]">
          {item.caption}
        </p>
        {item.note ? (
          <p className="mt-3 text-[14px] leading-[1.75] text-white/60 italic sm:text-[15px]">
            {item.note}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}

export default function PhotoGallery() {
  return (
    <section
      className="relative section-padding pt-[calc(var(--site-header-height)+2.5rem)] lg:pt-[calc(var(--site-header-height)+3rem)]"
      style={{
        backgroundColor: "#141414",
        backgroundImage:
          "linear-gradient(rgba(20, 20, 20, 0.92), rgba(20, 20, 20, 0.92)), url(/images/section-texture.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-page text-white">PHOTO GALLERY</h1>
          <p className="mt-5 text-[15px] leading-[1.75] text-white/75 sm:text-[16px]">
            From prison to purpose — images from Scott&apos;s journey and the
            work he continues today.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2 lg:mt-16 lg:gap-10">
          {galleryItems.map((item) => (
            <GalleryCard key={item.src} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
