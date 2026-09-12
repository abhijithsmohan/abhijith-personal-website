import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "Knowledge", href: "/knowledge" },
  { name: "Topics", href: "/topics" },
  { name: "Work With Me", href: "/work-with-me" },
  { name: "Contact", href: "/contact" },
];

/**
 * Site Footer Component
 * Clean, lightweight footer shell presenting brand identity and core links.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[#1E2433] bg-[#0A0C10] py-12 text-[#94A3B8]">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand & Identity Column */}
          <div className="max-w-md space-y-2">
            <Link
              href="/"
              className="text-base font-bold tracking-tight text-[#F8FAFC] transition-colors hover:text-[#94A3B8]"
            >
              Abhijith S Mohan
            </Link>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Entrepreneur & Business Builder
            </p>
            <p className="text-xs text-[#64748B]">
              Marketing × AI × Technology × Business
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1E2433]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>© {currentYear} Abhijith S Mohan. All rights reserved.</p>
          <p className="font-mono text-[11px]">https://abhijithsmohan.in</p>
        </div>
      </Container>
    </footer>
  );
}
