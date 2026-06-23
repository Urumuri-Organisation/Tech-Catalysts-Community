import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/40 backdrop-blur-sm z-10 relative">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Tech Catalyst Community. All rights
          reserved.
        </div>
        <div className="flex space-x-6 text-sm text-zinc-400">
          <Link href="/about" className="hover:text-white transition-colors">
            Governance
          </Link>
          <Link href="/learn" className="hover:text-white transition-colors">
            Tracks
          </Link>
          <Link
            href="/incubator"
            className="hover:text-white transition-colors"
          >
            Incubator Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
