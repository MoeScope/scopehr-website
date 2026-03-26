"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useState } from "react";

export default function ApplyPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Load Tally embed script
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://tally.so/widgets/embed.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already loaded, trigger Tally to load iframes
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
    }
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-xl shadow-lg shadow-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-0 shrink-0">
              <span
                className="text-xl sm:text-2xl font-extrabold tracking-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Scope
              </span>
              <span
                className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#2563EB]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                HR
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                Services
              </Link>
              <Link
                href="/#industries"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                Industries
              </Link>
              <Link
                href="/#about"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                Contact
              </Link>
              <span className="ml-4 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] rounded-lg">
                Apply Now
              </span>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0A1628]/98 backdrop-blur-xl border-t border-white/5 px-4 pb-6 pt-2">
            <Link
              href="/"
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-[#0A1628] via-[#0F1D32] to-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Looking for{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#0891B2] bg-clip-text text-transparent">
              Work?
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            We place AZ/DZ drivers, mechanics, skilled tradespeople, forklift
            operators, warehouse workers, and general labourers across Ontario
            and BC. Apply below and our team will be in touch.
          </p>
        </div>
      </section>

      {/* Tally Form Embed */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <iframe
              data-tally-src="https://tally.so/r/68RrOe"
              width="100%"
              height="800"
              frameBorder="0"
              title="ScopeHR Job Application"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060E1A] border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-0">
            <span
              className="text-lg font-extrabold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Scope
            </span>
            <span
              className="text-lg font-extrabold text-[#2563EB]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              HR
            </span>
          </div>
          <p className="text-xs text-gray-600">
            &copy; 2026 ScopeHR. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
