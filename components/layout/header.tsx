"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "Knowledge", href: "/knowledge" },
  { name: "Topics", href: "/topics" },
];

/**
 * Site Header Component
 * Sticky global navigation shell with accessible mobile drawer.
 * Strict compliance with Founder Editorial guidelines:
 * - Brand Mark: Plain text "Abhijith S Mohan" (No status/availability dot).
 * - Desktop nav links: About, Work, Projects, Knowledge, Topics.
 * - Action CTA: Work With Me.
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1E2433] bg-[#0A0C10]/85 backdrop-blur-md transition-colors">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand Mark */}
          <Link
            href="/"
            className="text-base font-bold tracking-tight text-[#F8FAFC] transition-colors hover:text-[#94A3B8]"
          >
            Abhijith S Mohan
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Desktop Secondary Action CTA */}
          <div className="hidden md:flex md:items-center">
            <Button variant="secondary" href="/work-with-me" className="h-9 px-4 text-xs">
              Work With Me
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-[#94A3B8] hover:bg-[#12151E] hover:text-[#F8FAFC] focus-visible:outline-[#6366F1] md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="border-t border-[#1E2433] py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center px-2 text-base font-medium text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-[#1E2433]">
                <Button
                  variant="secondary"
                  href="/work-with-me"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center"
                >
                  Work With Me
                </Button>
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
