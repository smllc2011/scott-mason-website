import type { Metadata } from "next";
import Speaker from "@/components/Speaker";

export const metadata: Metadata = {
  title: "Speaker | Scott Mason",
  description:
    "Book Scott Mason to speak — a miraculous journey from downfall to redemption, told with honesty, passion, and purpose.",
  openGraph: {
    title: "Speaker | Scott Mason",
    description:
      "Audiences are taken on a miraculous journey from downfall to redemption.",
    url: "https://scottmason.org/speaker",
    siteName: "Scott Mason",
    type: "website",
  },
};

export default function SpeakerPage() {
  return <Speaker />;
}
