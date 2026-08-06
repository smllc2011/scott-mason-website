import type { Metadata } from "next";
import DrugMarch from "@/components/DrugMarch";

export const metadata: Metadata = {
  title: "Drug March | Scott Mason",
  description:
    "Coverage of Marion, Ohio's Freedom March and Steps Toward Healing rallies against drug abuse — organized with Scott Mason.",
  openGraph: {
    title: "Drug March | Scott Mason",
    description:
      "Community marches in Marion, Ohio to fight addiction and bring hope to neighborhoods.",
    url: "https://scottmason.org/drug-march",
    siteName: "Scott Mason",
    type: "website",
  },
};

export default function DrugMarchPage() {
  return <DrugMarch />;
}
