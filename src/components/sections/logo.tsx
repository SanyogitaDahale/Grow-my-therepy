import Image from "next/image";
import type { SiteContent } from "@/content/types";

type Props = {
  brand: SiteContent["brand"];
  size?: "header" | "menu" | "footer";
  className?: string;
};

const imageWidth = {
  header: "w-[236px] md:w-[257px]",
  menu: "w-[239.7px]",
  footer: "w-full max-w-[343px] md:max-w-[370px]",
};

export function Logo({ brand, size = "header", className = "" }: Props) {
  if (brand.logo) {
    return (
      <Image
        src={brand.logo.src}
        alt={brand.logo.alt}
        width={brand.logo.width}
        height={brand.logo.height}
        preload={size === "header"}
        className={`h-auto ${imageWidth[size]} ${className}`}
      />
    );
  }

  const isFooter = size === "footer";
  return (
    <span className={`inline-flex flex-col items-start leading-none text-ink ${className}`}>
      <span
        className={`whitespace-nowrap font-serif font-light tracking-[-0.01em] ${
          isFooter ? "text-[30px] md:text-[36px]" : "text-[29px] md:text-[34px]"
        }`}
      >
        {brand.name}
      </span>{" "}
      <span
        className={`mt-[0.55em] whitespace-nowrap pl-[0.2em] font-sans font-normal uppercase text-accent ${
          isFooter
            ? "text-[11px] tracking-[0.32em] md:text-[12px]"
            : "text-[9.5px] tracking-[0.38em] md:text-[10.5px]"
        }`}
      >
        {brand.tagline}
      </span>
    </span>
  );
}
