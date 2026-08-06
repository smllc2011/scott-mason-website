import type { Metadata } from "next";
import Management from "@/components/Management";

export const metadata: Metadata = {
  title: "Management | Scott Mason",
  description:
    "Book Scott Mason for speaking engagements. Contact Carrie Mason or Scott Mason for fees, availability, and media inquiries.",
  openGraph: {
    title: "Management | Scott Mason",
    description:
      "Booking, management, and media contact information for Scott Mason.",
    url: "https://scottmason.org/management",
    siteName: "Scott Mason",
    type: "website",
  },
};

export default function ManagementPage() {
  return <Management />;
}
