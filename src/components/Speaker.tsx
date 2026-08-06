import Link from "next/link";
import AnimateIn from "./AnimateIn";
import PromoVideo from "./PromoVideo";

export default function Speaker() {
  return (
    <section
      className="page-section--scroll relative"
      style={{
        backgroundColor: "#141414",
        backgroundImage:
          "linear-gradient(rgba(20, 20, 20, 0.92), rgba(20, 20, 20, 0.92)), url(/images/section-texture.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site">
        <AnimateIn className="mx-auto max-w-4xl shadow-[0_24px_48px_rgba(0,0,0,0.45)]">
          <PromoVideo
            videoSrc="/videos/speaker-promo.mp4"
            posterSrc="/images/speaker-video-poster.jpg"
            ariaLabel="Play Scott Mason speaker promo video"
          />
        </AnimateIn>

        <AnimateIn delay={1}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-[16px] leading-[1.85] text-white/80 sm:text-[17px] lg:mt-12">
            When you invite Scott Mason to speak, audiences are taken on a
            miraculous journey from downfall to redemption. His story is almost
            unbelievable—yet undeniably true—a life transformed in ways that could
            only be orchestrated by God Himself. Honest. Real. Unfiltered.
            Scott&apos;s testimony bears the marks of abuse, addiction, dropping
            out, homelessness, felonies, and incarceration, all culminating in
            salvation, restoration, and new life.
          </p>
        </AnimateIn>

        <AnimateIn delay={2} className="mt-10 flex justify-center lg:mt-12">
          <Link href="/management#contact" className="btn-primary">
            BOOK SCOTT TO SPEAK
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
