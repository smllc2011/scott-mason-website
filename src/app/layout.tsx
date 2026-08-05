import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Scott Mason | Speaker, Author & Advocate for Second Chances",
  description:
    "Scott Mason shares his story of transformation from prison to purpose — inspiring youth, communities, and organizations with real stories and real change.",
  openGraph: {
    title: "Scott Mason | It's Time",
    description:
      "The story of a man who had no reason to live — and found hope to share with others.",
    url: "https://scottmason.org",
    siteName: "Scott Mason",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${inter.variable} ${bebasNeue.variable} bg-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
