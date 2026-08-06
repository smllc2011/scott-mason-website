import Link from "next/link";
import AssetIcon from "./AssetIcon";
import PromoVideo from "./PromoVideo";

const features = [
  {
    icon: "/icons/microphone.png",
    alt: "Microphone",
    title: "POWERFUL SPEAKER",
    description:
      "Sharing my story with honesty, passion, and purpose.",
  },
  {
    icon: "/icons/community.png",
    alt: "Community",
    title: "YOUTH & COMMUNITIES",
    description:
      "Inspiring youth and at-risk individuals to choose a better path.",
  },
  {
    icon: "/icons/second-chances.png",
    alt: "Handshake",
    title: "SECOND CHANCES",
    description:
      "Advocating for redemption, forgiveness, and second chances.",
  },
];

export default function Speaker() {
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
          <h1 className="heading-page text-white">SPEAKER</h1>
        </div>

        <div className="mx-auto mt-10 max-w-4xl shadow-[0_24px_48px_rgba(0,0,0,0.45)] lg:mt-12">
          <PromoVideo
            videoSrc="/videos/speaker-promo.mp4"
            posterSrc="/images/speaker-video-poster.jpg"
            ariaLabel="Play Scott Mason speaker promo video"
          />
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-[16px] leading-[1.85] text-white/80 sm:text-[17px] lg:mt-12">
          When you invite Scott Mason to speak, audiences are taken on a
          miraculous journey from downfall to redemption. His story is almost
          unbelievable—yet undeniably true—a life transformed in ways that could
          only be orchestrated by God Himself. Honest. Real. Unfiltered.
          Scott&apos;s testimony bears the marks of abuse, addiction, dropping
          out, homelessness, felonies, and incarceration, all culminating in
          salvation, restoration, and new life.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3 lg:mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <AssetIcon src={feature.icon} alt={feature.alt} />
              <h2 className="mt-4 text-[13px] font-bold tracking-[0.04em] text-white uppercase">
                {feature.title}
              </h2>
              <p className="mt-2 text-[13px] leading-[1.65] text-white/75">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center lg:mt-16">
          <Link href="/management#contact" className="btn-primary">
            BOOK SCOTT TO SPEAK
          </Link>
        </div>
      </div>
    </section>
  );
}
