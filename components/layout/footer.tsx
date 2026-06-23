import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 z-10 relative font-sans">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-slate-900">
              TCC
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              Bridging the gap between academic theory and real-world software
              construction for the next generation of engineers.
            </p>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Community
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-700 transition-colors"
                >
                  Governance
                </Link>
              </li>
              <li>
                <Link
                  href="/learn"
                  className="hover:text-green-700 transition-colors"
                >
                  Learning Tracks
                </Link>
              </li>
              <li>
                <Link
                  href="/compete"
                  className="hover:text-green-700 transition-colors"
                >
                  Hackathons
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Incubator
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link
                  href="/incubator"
                  className="hover:text-green-700 transition-colors"
                >
                  Active Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/incubator/apply"
                  className="hover:text-green-700 transition-colors"
                >
                  Apply for Funding
                </Link>
              </li>
              <li>
                <Link
                  href="/incubator/resources"
                  className="hover:text-green-700 transition-colors"
                >
                  Portal Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Connect
            </h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>Faculty of Engineering</p>
              <p>University Main Campus</p>
              <a
                href="mailto:hello@tcc-community.edu"
                className="block hover:text-green-700 transition-colors"
              >
                hello@tcc-community.edu
              </a>
            </div>
            <div className="flex space-x-4 pt-2">
              {/* Add your social links here */}
              <Link href="#" className="text-slate-400 hover:text-green-600">
                Twitter
              </Link>
              <Link href="#" className="text-slate-400 hover:text-green-600">
                GitHub
              </Link>
              <Link href="#" className="text-slate-400 hover:text-green-600">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Tech Catalyst Community. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
