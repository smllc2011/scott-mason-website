import AssetIcon from "./AssetIcon";

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

export default function SpeakingImpact() {
  return (
    <section
      className="relative section-padding"
      style={{
        backgroundColor: "#141414",
        backgroundImage:
          "linear-gradient(rgba(20, 20, 20, 0.88), rgba(20, 20, 20, 0.88)), url(/images/section-texture.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:items-start">
          <div>
            <p className="section-label">SPEAKING & IMPACT</p>
            <h2 className="heading-section mt-4 text-white">
              REAL STORIES. REAL CHANGE.
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-[1.75] text-white/80">
              Scott Mason speaks to audiences who need to hear that change is
              possible. From prisons to churches, schools to corporate events —
              his message resonates with anyone searching for hope.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <AssetIcon src={feature.icon} alt={feature.alt} />
                <div className="min-w-0 pt-1">
                  <h3 className="text-[13px] font-bold tracking-[0.04em] text-white uppercase">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-white/75">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
