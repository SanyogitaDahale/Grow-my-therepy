"use client";

import { useEffect, useRef, useState } from "react";
import type { NavItem, SiteContent } from "@/content/types";
import { OvalButton } from "@/components/ui/buttons";
import { Logo } from "./logo";

type Props = Pick<SiteContent, "brand" | "nav" | "navCta"> & { homeHref: string };

/** 1em square with a thin chevron (about a third as wide and two thirds as tall) in the middle. */
function Chevron({ direction, className = "" }: { direction: "left" | "right"; className?: string }) {
  return (
    <svg viewBox="0 0 33 33" aria-hidden="true" className={`size-[1em] shrink-0 ${className}`}>
      <polyline
        points={direction === "right" ? "11.25,6 21.75,16.5 11.25,27" : "21.75,6 11.25,16.5 21.75,27"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function Header({ brand, nav, navCta, homeHref }: Props) {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState<NavItem | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    setFolder(null);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeButton.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setFolder(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="relative z-30 bg-canvas">
      <div className="flex items-center justify-between gap-6 px-[6vw] py-[27px] md:px-[5vw] md:py-[1.4vw]">
        <a href={homeHref} aria-label={`${brand.name} ${brand.tagline}, home`} className="shrink-0">
          <Logo brand={brand} />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-x-[2.5vw] md:flex">
          <ul className="flex flex-wrap justify-end gap-x-[2.5vw] gap-y-0 text-[length:min(13.5px,calc(15px_-_0.12vw))] uppercase leading-[1.8] tracking-[0.1em] text-ink">
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors duration-300 hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <OvalButton link={navCta} className="shrink-0 text-[length:min(12.75px,calc(15px_-_0.18vw))]" />
        </nav>

        <button
          type="button"
          className="flex h-10 w-9 flex-col items-center justify-center gap-[7px] md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <span className="block h-px w-9 bg-ink" />
          <span className="block h-px w-9 bg-ink" />
          <span className="block h-px w-9 bg-ink" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-canvas text-ink transition-opacity duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex shrink-0 items-center justify-between p-[6vw]">
          <a href={homeHref} aria-label={`${brand.name} ${brand.tagline}, home`} onClick={close}>
            <Logo brand={brand} size="menu" />
          </a>
          <button ref={closeButton} type="button" aria-label="Close menu" onClick={close} className="relative h-[37px] w-[47px]">
            <span className="absolute left-1/2 top-1/2 h-px w-[29px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-ink" />
            <span className="absolute left-1/2 top-1/2 h-px w-[29px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-ink" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          <div className="my-auto px-[10vw] py-[5vw] text-[8.5vw] uppercase leading-none">
            {folder ? (
              <>
                <button
                  type="button"
                  onClick={() => setFolder(null)}
                  className="flex items-center pl-[0.3em] uppercase tracking-[0.049em] text-ink/50"
                >
                  <Chevron direction="left" className="mr-[0.15em]" />
                  Back
                </button>
                <ul className="mt-[12.5vw] flex flex-col gap-[10vw] tracking-[0.058em]">
                  {folder.children?.map((child) => (
                    <li key={child.label}>
                      <a href={child.href} onClick={close} className="block">
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <ul className="flex flex-col items-start gap-[10vw] tracking-[0.058em]">
                {nav.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <button
                        type="button"
                        onClick={() => setFolder(item)}
                        className="flex items-center uppercase tracking-[inherit]"
                      >
                        {item.label}
                        <Chevron direction="right" className="ml-[0.15em]" />
                      </button>
                    ) : (
                      <a href={item.href} onClick={close} className="inline-block">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <div className={`shrink-0 px-[6vw] pb-[6vw] pt-[4vw] ${folder ? "hidden" : ""}`}>
          <a
            href={navCta.href}
            onClick={close}
            className="type-button inline-block w-[210px] rounded-[100%] border border-ink px-[19.5px] py-[15px] text-center text-[13.48px] leading-[normal] text-ink transition-colors duration-100 ease-linear hover:border-oval-hover-bg hover:bg-oval-hover-bg hover:text-oval-hover-fg"
          >
            {navCta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
