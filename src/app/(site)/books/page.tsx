import type { Metadata } from "next";
import Books from "@/components/Books";

export const metadata: Metadata = {
  title: "Scott's Books | Scott Mason",
  description:
    "Order No Reason To Live, Beauty & Disgrace, and This Is What You Asked For — Scott Mason's raw, honest books on addiction, prison, and transformation.",
  openGraph: {
    title: "Scott's Books | Scott Mason",
    description:
      "Real stories of addiction, prison, and the hope found on the other side.",
    url: "https://scottmason.org/books",
    siteName: "Scott Mason",
    type: "website",
  },
};

export default function BooksPage() {
  return <Books />;
}
