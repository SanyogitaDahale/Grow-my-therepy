import type { CSSProperties, ReactNode } from "react";

type GridProps = {
  /** Explicit row counts so empty rows keep the source's vertical rhythm. */
  rows: { m: number; d: number };
  gap?: "default" | "wide";
  className?: string;
  children: ReactNode;
};

export function FluidGrid({ rows, gap = "default", className = "", children }: GridProps) {
  return (
    <div
      className={`fluid-grid ${className}`}
      data-gap={gap}
      style={{ "--rows-m": rows.m, "--rows-d": rows.d } as CSSProperties}
    >
      {children}
    </div>
  );
}

type Align = "start" | "center" | "end" | "stretch";

type BlockProps = {
  /** grid-area on mobile (< 768px), e.g. "2 / 2 / 5 / 10". */
  m: string;
  /** grid-area on desktop (>= 768px). */
  d: string;
  /** Vertical alignment inside the grid area. */
  align?: Align;
  /** Desktop alignment, when it differs from mobile. */
  alignD?: Align;
  className?: string;
  as?: "div" | "li" | "article";
  children?: ReactNode;
};

const mobileAlign: Record<Align, string> = {
  start: "self-start",
  center: "self-center",
  end: "self-end",
  stretch: "self-stretch",
};

const desktopAlign: Record<Align, string> = {
  start: "md:self-start",
  center: "md:self-center",
  end: "md:self-end",
  stretch: "md:self-stretch",
};

export function Block({ m, d, align = "center", alignD, className = "", as: Tag = "div", children }: BlockProps) {
  return (
    <Tag
      className={`fluid-block ${mobileAlign[align]} ${desktopAlign[alignD ?? align]} ${className}`}
      style={{ "--m": m, "--d": d } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
