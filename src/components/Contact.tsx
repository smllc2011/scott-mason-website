import AnimateIn from "./AnimateIn";
import ContactForm from "./ContactForm";

const directContacts = [
  {
    name: "Carrie Mason",
    role: "Business Manager",
    phone: "1-740-802-1759",
  },
  {
    name: "Scott Mason",
    role: "Agent, Publicist, Speaker",
    phone: "1-629-204-9018",
  },
];

function DirectContactCard({
  contact,
}: {
  contact: (typeof directContacts)[number];
}) {
  return (
    <div className="flex flex-col items-center gap-2 py-1">
      <p className="text-[16px] text-white/85">{contact.name}</p>
      <div className="flex flex-col items-center gap-1">
        <p className="text-center text-[13px] leading-snug uppercase tracking-[0.08em] text-[var(--color-accent)]">
          {contact.role}
        </p>
        <a
          href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
          className="text-[16px] text-white/85 transition-colors hover:text-[var(--color-accent)]"
        >
          {contact.phone}
        </a>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      className="page-section--scroll relative !pb-6 sm:!pb-8 lg:!pb-10"
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

        <AnimateIn delay={2} className="mx-auto mt-6 max-w-3xl text-center lg:mt-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/45">
            Prefer to call?
          </p>
          <div className="mt-3 grid items-start gap-8 sm:grid-cols-2 sm:gap-10">
            {directContacts.map((contact) => (
              <DirectContactCard key={contact.name} contact={contact} />
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
