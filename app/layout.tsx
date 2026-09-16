import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getCanonicalUrl } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhijithsmohan.in"),
  title: {
    default: "Abhijith S Mohan — Entrepreneur & Business Builder",
    template: "%s | Abhijith S Mohan",
  },
  description:
    "Building Businesses at the Intersection of Marketing, AI & Business.",
  openGraph: {
    title: "Abhijith S Mohan — Entrepreneur & Business Builder",
    description:
      "Building Businesses at the Intersection of Marketing, AI & Business.",
    url: "https://abhijithsmohan.in",
    siteName: "Abhijith S Mohan",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-[#0A0C10] text-[#F8FAFC] selection:bg-[#6366F1] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
