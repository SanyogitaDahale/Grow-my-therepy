import type { LinkItem } from "@/content/types";

/**
 * Text link with a hairline underline (e.g. "Book an appointment"). On hover the
 * underline retracts right-to-left over 1s, and redraws left-to-right on leave.
 */
export function UnderlineLink({ link, className = "" }: { link: LinkItem; className?: string }) {
  if (link.variant === "button") return <FilledButton link={link} className={className} />;
  return (
    <a
      href={link.href}
      className={`type-button relative inline-block pb-[0.5em] text-ink transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:border-b before:border-current/80 before:transition-[right] before:duration-1000 before:ease-[ease] before:content-[''] hover:text-link-hover hover:before:right-full motion-reduce:before:transition-none ${className}`}
    >
      {link.label}
    </a>
  );
}

/** Outlined oval button (e.g. "Contact", "Book now"). */
export function OvalButton({ link, className = "" }: { link: LinkItem; className?: string }) {
  if (link.variant === "button") return <FilledButton link={link} className={className} />;
  return (
    <a
      href={link.href}
      className={`type-button inline-block rounded-[100%] border border-ink px-[1.6em] py-[1.2em] leading-[1.25] text-ink transition-colors duration-100 ease-linear hover:border-oval-hover-bg hover:bg-oval-hover-bg hover:text-oval-hover-fg ${className}`}
    >
      {link.label}
    </a>
  );
}

/** Filled accent button for primary calls to action. */
function FilledButton({ link, className = "" }: { link: LinkItem; className?: string }) {
  return (
    <a
      href={link.href}
      className={`type-button inline-block whitespace-nowrap rounded-[4px] bg-accent px-[2.2em] py-[1.25em] leading-[1.25] text-surface shadow-[0_6px_16px_-10px_var(--accent)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-px hover:bg-accent-strong hover:shadow-[0_10px_20px_-10px_var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
    >
      {link.label}
    </a>
  );
}
