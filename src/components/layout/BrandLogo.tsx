import badgeSrc from "@/assets/ben-auto-deals-badge-256.png";
import { brand } from "@/config/brand";

/**
 * BEN AUTO DEALS brand lockup: the dealership badge mark plus the wordmark.
 * The badge is an opaque image so it reads on any background; the wordmark is
 * themed text, so it adapts to light and dark surfaces automatically.
 */
export function BrandLogo({
  size = "md",
  className,
}: {
  /** "md" for the header/auth bars, "sm" for the footer. */
  size?: "sm" | "md";
  className?: string;
}) {
  const mark = size === "sm" ? "size-8" : "size-9";
  const text = size === "sm" ? "text-base" : "text-lg";

  return (
    <span className={`flex min-w-0 items-center gap-2.5 ${className ?? ""}`}>
      <img
        src={badgeSrc}
        alt=""
        aria-hidden="true"
        className={`${mark} shrink-0`}
        width={36}
        height={36}
        loading="lazy"
      />
      <span className={`truncate font-grotesk ${text} font-semibold tracking-tight text-foreground`}>
        {brand.wordmark.plain} <span className="text-accent">{brand.wordmark.accent}</span>
      </span>
    </span>
  );
}
