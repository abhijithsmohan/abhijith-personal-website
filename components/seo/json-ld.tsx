import React from "react";

interface JsonLdProps {
  schema: Record<string, unknown>;
}

/**
 * JsonLd Component
 * Safely renders JSON-LD structured data graph block.
 */
export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
