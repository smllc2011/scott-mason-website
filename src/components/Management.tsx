import Image from "next/image";
import AnimateIn from "./AnimateIn";
import ManagementContactForm from "./ManagementContactForm";

type ContactCard = {
  name: string;
  role: string;
  phone: string;
  email: string;
  imageSrc: string;
  imageAlt: string;
};

const contacts: ContactCard[] = [
  {
    name: "Carrie Mason",
    role: "Business Manager",
    phone: "1-740-802-1759",
    email: "cmason.sm@gmail.com",
    imageSrc: "/images/management/carrie-mason.png",
    imageAlt: "Carrie Mason",
  },
  {
    name: "Scott Mason",
    role: "Agent, Publicist, Speaker",
    phone: "1-629-204-9018",
    email: "scottmasonllc@gmail.com",
    imageSrc: "/images/management/scott-mason.png",
    imageAlt: "Scott Mason",
  },
];

function ContactCardBlock({ contact }: { contact: ContactCard }) {
  return (
    <article className="flex h-full flex-col border border-white/10 bg-black/35">
      <div className="relative aspect-[243/138] w-full overflow-hidden bg-black">
        <Image
          src={contact.imageSrc}
          alt={contact.imageAlt}
          fill
          unoptimized
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, 480px"
        />
      </div>
      <div className="flex flex-1 flex-col px-6 py-8 text-center lg:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-[1.5rem] leading-none tracking-wide text-white uppercase">
          {contact.name}
        </h2>
        <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)]">
          {contact.role}
        </p>
        <p className="mt-5 text-[16px] text-white/85">{contact.phone}</p>
        <a
          href={`mailto:${contact.email}`}
          className="mt-2 text-[16px] text-white/85 transition-colors hover:text-[var(--color-accent)]"
        >
          {contact.email}
        </a>
      </div>
    </article>
  );
}

export default function Management() {
  return (
    <section
      className="page-section relative"
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
            Scott speaks nationally to varied audiences including church
            events, middle schools, high schools, university forums, jails, and
            drug rehabilitation programs. Scott travels from John Glenn
            International Airport in Columbus, OH and requires coach class for
            one. For speaking fees and availability please fill out the form
            below and a representative of Scott&apos;s team will contact you as
            soon as possible.
          </p>
        </AnimateIn>

        <div className="animate-stagger mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:mt-14">
          {contacts.map((contact) => (
            <ContactCardBlock key={contact.email} contact={contact} />
          ))}
        </div>

        <AnimateIn
          id="contact"
          delay={2}
          className="mx-auto mt-14 max-w-2xl scroll-mt-[calc(var(--site-header-height)+1.5rem)] border border-white/10 bg-black/35 px-6 py-8 lg:mt-16 lg:px-10 lg:py-10"
        >
          <h2 className="font-[family-name:var(--font-display)] text-[1.5rem] leading-none tracking-wide text-white uppercase sm:text-[1.75rem]">
            Contact Scott
          </h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-white/75">
            For speaking fees, availability, and media inquiries, send a message
            below.
          </p>
          <div className="mt-8">
            <ManagementContactForm />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
