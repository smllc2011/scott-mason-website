import type { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Photo Gallery | Scott Mason",
  description:
    "Photos from Scott Mason's journey — from prison to purpose, drug march rallies, and ministry today.",
  openGraph: {
    title: "Photo Gallery | Scott Mason",
    description:
      "Images from Scott Mason's transformation and community work.",
    url: "https://scottmason.org/photo-gallery",
    siteName: "Scott Mason",
    type: "website",
  },
};

export default function PhotoGalleryPage() {
  return <PhotoGallery />;
}
