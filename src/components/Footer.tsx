"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Apply", href: "/apply" },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#060E1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/scopehr-logo.svg"
                alt="ScopeHR"
                width={160}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Our Talent Is Finding Yours
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Toronto &bull; Mississauga &bull; Vaughan &bull; Ontario
              <br />
              Vancouver &bull; Calgary &bull; Winnipeg &bull; Montreal
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:18666198290"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  <Phone size={14} />
                  1 (866) 619-8290
                </a>
              </li>
              <li>
                <a
                  href="tel:9052748515"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  <Phone size={14} />
                  (905) 274-8515
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@scopeHR.ca"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  <Mail size={14} />
                  contact@scopeHR.ca
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={14} />
                  50 Corstate Ave, Vaughan, ON
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Available 24/7
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our team is available around the clock to support your staffing needs.
              Call us anytime.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center">
          <p className="text-xs text-gray-600 text-center">
            &copy; 2026 ScopeHR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
