import Image from "next/image";
import AssetIcon from "./AssetIcon";
import HeroVideo from "./HeroVideo";

const stats = [
  {
    icon: "/icons/handcuffs.png",
    alt: "Handcuffs",
    title: "ARRESTED",
    subtitle: "Over 25 Times",
    iconClassName: "h-11 w-11 rotate-180 sm:h-12 sm:w-12",
  },
  {
    icon: "/icons/gavel.png",
    alt: "Gavel",
    title: "APPEARED BEFORE",
    subtitle: "15 Judges In 12 Courts",
    iconClassName: "h-11 w-11 sm:h-12 sm:w-12",
  },
  {
    icon: "/icons/jail-cell.png",
    alt: "Jail cell",
    title: "36 FELONY",
    subtitle: "Convictions",
    iconClassName: "h-11 w-11 sm:h-12 sm:w-12",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-[center_42%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/25 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-transparent to-transparent" />
      </div>

      <div className="container-site relative grid items-center gap-5 pb-4 pt-[calc(var(--site-header-height)+1rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-10 lg:pb-5 lg:pt-[calc(var(--site-header-height)+1.25rem)] xl:gap-x-12">
        <div className="min-w-0">
          <div className="relative max-w-full">
            <div
              className="pointer-events-none absolute -inset-x-5 -inset-y-5 bg-gradient-to-r from-black/50 via-black/35 to-transparent sm:-inset-x-8 sm:-inset-y-6 lg:-inset-x-10"
              aria-hidden="true"
            />

            <div className="relative flex min-w-0 flex-col gap-4 sm:gap-5 lg:gap-6">
              <h1 className="heading-hero animate-in max-w-full text-white">
                <span className="block">THE STORY OF A MAN</span>
                <span className="block">WHO HAD NO REASON</span>
                <span className="block">TO LIVE.</span>
              </h1>

              <div
                className="animate-in animate-in-delay-1 h-[2px] w-[100px] rounded-full bg-[linear-gradient(90deg,transparent_0%,var(--color-accent)_15%,var(--color-accent)_85%,transparent_100%)]"
                aria-hidden="true"
              />

              <p className="animate-in animate-in-delay-2 max-w-xl text-left text-[15px] font-normal leading-[1.6] text-white/90 lg:text-[16px]">
                They say I have to get your attention right from jump or
                you&apos;ll move on to something else, and I can&apos;t have
                that. So here you go.
              </p>

              <div className="animate-in animate-in-delay-3 grid gap-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-4">
                {stats.map((stat) => (
                  <div
                    key={stat.title}
                    className="flex min-w-0 items-center gap-2.5 sm:gap-3"
                  >
                    <AssetIcon
                      src={stat.icon}
                      alt={stat.alt}
                      className={stat.iconClassName}
                    />
                    <div className="min-w-0">
                      <p className="text-[12px] font-bold leading-tight tracking-[0.05em] text-white uppercase sm:text-[13px]">
                        {stat.title}
                      </p>
                      <p className="mt-0.5 text-[12px] leading-snug text-white/60 sm:text-[13px]">
                        {stat.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="animate-in animate-in-delay-4 max-w-xl text-left text-[11px] leading-relaxed tracking-[0.02em] text-white/45 sm:text-[12px]">
                Three Prison Terms · 10 Years Served · Ranking Member Of A
                Prison Gang
              </p>
            </div>
          </div>
        </div>

        <div className="animate-in animate-in-delay-3 min-w-0 w-full">
          <div className="relative w-full overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.55)] ring-1 ring-white/10 ring-inset">
            <HeroVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
