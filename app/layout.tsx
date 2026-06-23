import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "The Tech Catalyst Community | TCC",
  description:
    "Fostering technical innovation, advanced bootcamps, coding hackathons, and real-world project incubation at the university level.",
  openGraph: {
    title: "The Tech Catalyst Community | TCC",
    description:
      "Fostering technical innovation, advanced bootcamps, coding hackathons, and real-world project incubation.",
    url: "https://tcc-community.edu",
    siteName: "TCC",
    images: [
      {
        url: "/logos/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech Catalyst Community Architecture Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Tech Catalyst Community | TCC",
    description:
      "Bridging the gap between academic theory and real-world software construction.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-zinc-950 text-zinc-50 min-h-screen flex flex-col relative overflow-x-hidden`}
      >
        {/* Ambient background visual glows */}
        <div className="absolute inset-0 tech-grid pointer-events-none z-0" />
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none z-0" />

        {/* Global Nav Execution */}
        <Navbar />

        {/* Primary Page Canvas Area */}
        <main className="flex-grow z-10 relative">{children}</main>

        {/* Global Footer Elements */}
        <Footer />
      </body>
    </html>
  );
}
