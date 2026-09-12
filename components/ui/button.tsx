import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
}

/**
 * Reusable Button Component
 * Fulfills approved design tokens:
 * - Primary: Electric Slate Indigo (#6366F1), 6px radius, min target 44px.
 * - Secondary: Surface container (#12151E), Slate border (#1E2433), 6px radius.
 */
export function Button({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[44px]",
    variant === "primary" &&
      "bg-[#6366F1] text-white hover:bg-[#818CF8] active:bg-[#4F46E5] focus-visible:outline-[#6366F1]",
    variant === "secondary" &&
      "bg-[#12151E] text-[#F8FAFC] border border-[#1E2433] hover:bg-[#1A1E2B] hover:border-[#333E56] focus-visible:outline-[#333E56]",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
}
