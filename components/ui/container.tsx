import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "reading";
}

/**
 * Reusable Container Component
 * Default: 1152px max width (max-w-6xl) with responsive page gutters (16px / 24px / 32px).
 * Reading: 672px max width (max-w-2xl) for long-form essays and case studies.
 */
export function Container({
  children,
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "default" && "max-w-6xl",
        size === "reading" && "max-w-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
