import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Scott Mason",
  description:
    "Read what educators and criminal justice professionals say about Scott Mason's impact as a speaker and author.",
  openGraph: {
    title: "Testimonials | Scott Mason",
    description:
      "What people are saying about Scott Mason's story and message.",
    url: "https://scottmason.org/testimonials",
    siteName: "Scott Mason",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
