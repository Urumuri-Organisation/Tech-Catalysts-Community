import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "@/styles/globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900 min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Background Layer */}
        <div className="fixed inset-0 tech-grid pointer-events-none z-0 opacity-100" />
        <div className="fixed top-[-20%] left-[20%] h-[500px] w-[500px] rounded-full bg-green-50/50 blur-[120px] pointer-events-none z-0" />

        <Navbar />

        <main className="flex-grow z-10 relative">{children}</main>

        <Footer />
      </body>
    </html>
  );
}