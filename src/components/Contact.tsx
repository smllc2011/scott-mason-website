import AnimateIn from "./AnimateIn";
import ContactForm from "./ContactForm";

const carrie = {
  name: "Carrie Mason",
  role: "Business Manager",
  phone: "1-740-802-1759",
};

export default function Contact() {
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
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <p className="text-left text-[15px] leading-[1.85] text-white/80 sm:text-[16px] sm:text-justify">
            Scott speaks nationally to varied audiences including church events,
            middle schools, high schools, university forums, jails, and drug
            rehabilitation programs. Scott travels from John Glenn International
            Airport in Columbus, OH and requires coach class for one. For speaking
            fees and availability, send an inquiry below and a representative
            will respond as soon as possible.
          </p>
        </AnimateIn>

        <AnimateIn
          id="form"
          delay={1}
          className="mx-auto mt-12 max-w-3xl scroll-mt-[calc(var(--site-header-height)+1.5rem)] border border-white/10 bg-black/35 px-5 py-8 sm:px-8 lg:mt-14 lg:px-10 lg:py-10"
        >
          <h1 className="font-[family-name:var(--font-display)] text-[1.75rem] leading-none tracking-wide text-white uppercase sm:text-[2rem]">
            Book Scott
          </h1>
          <p className="mt-4 text-[15px] leading-[1.75] text-white/75">
            For speaking fees, availability, and media inquiries, send a message
            below.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </AnimateIn>

        <AnimateIn delay={2} className="mx-auto mt-10 max-w-3xl text-center lg:mt-12">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/45">
            Prefer to call?
          </p>
          <p className="mt-3 text-[16px] text-white/85">{carrie.name}</p>
          <p className="mt-1 text-[13px] uppercase tracking-[0.08em] text-[var(--color-accent)]">
            {carrie.role}
          </p>
          <a
            href={`tel:${carrie.phone.replace(/[^\d+]/g, "")}`}
            className="mt-4 inline-block text-[16px] text-white/85 transition-colors hover:text-[var(--color-accent)]"
          >
            {carrie.phone}
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
