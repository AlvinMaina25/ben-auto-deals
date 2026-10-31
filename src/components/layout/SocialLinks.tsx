import { Facebook, Instagram } from "lucide-react";

import { brand } from "@/config/brand";

/**
 * Instagram + Facebook icon links. Open in a new tab, driven by brand config.
 * Renders nothing until the client supplies social handles (brand.social).
 */
export function SocialLinks({ className = "" }: { className?: string }) {
  if (!brand.social) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={brand.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${brand.name} on Instagram`}
        className="icon-btn size-9"
      >
        <Instagram className="size-4" aria-hidden="true" />
      </a>
      <a
        href={brand.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${brand.name} on Facebook`}
        className="icon-btn size-9"
      >
        <Facebook className="size-4" aria-hidden="true" />
      </a>
    </div>
  );
}
