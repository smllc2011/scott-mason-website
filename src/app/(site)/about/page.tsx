import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Scott Mason | Speaker, Author & Advocate for Second Chances",
  description:
    "Scott Mason's story — from addiction and prison to recovery, leadership, and inspiring others that change is possible.",
  openGraph: {
    title: "About Scott Mason",
    description:
      "Scott's story doesn't begin with success. Learn how transformation became his mission.",
    url: "https://scottmason.org/about",
    siteName: "Scott Mason",
    type: "website",
  },
};

export default function AboutPage() {
  return <About />;
}
