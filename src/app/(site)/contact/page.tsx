import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Scott Mason",
  description:
    "Book Scott Mason for speaking engagements. Request fees, availability, and media inquiries.",
  openGraph: {
    title: "Contact | Scott Mason",
    description:
      "Book Scott Mason for speaking engagements, media inquiries, and event requests.",
    url: "https://scottmason.org/contact",
    siteName: "Scott Mason",
    type: "website",
  },
};

export default function ContactPage() {
  return <Contact />;
}
