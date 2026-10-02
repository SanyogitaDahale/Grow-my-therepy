import type { FooterLine, SiteContent } from "@/content/types";
import { Block, FluidGrid } from "@/components/ui/fluid-grid";
import { Logo } from "./logo";

/** Desktop shows columns left-to-right; mobile stacks the third (contact) column second. */
const columnLayout = [
  { m: "10 / 3 / 15 / 9", d: "1 / 12 / 6 / 16" },
  { m: "23 / 3 / 30 / 9", d: "1 / 16 / 8 / 21" },
  { m: "15 / 3 / 23 / 9", d: "1 / 21 / 10 / 26" },
];

type Props = Pick<SiteContent, "brand" | "footer"> & { homeHref: string };

export function Footer({ brand, footer, homeHref }: Props) {
  return (
    <footer className="text-ink">
      <div className="pad-sm flex min-h-[45vh] flex-col justify-center bg-surface">
        <FluidGrid rows={{ m: 29, d: 9 }}>
          <Block m="2 / 2 / 5 / 10" d="1 / 2 / 5 / 9" align="start" className={brand.logo ? "" : "px-[21px] pt-[6px] md:px-[25px]"}>
            <a href={homeHref} aria-label={`${brand.name} ${brand.tagline}, home`} className="block">
              <Logo brand={brand} size="footer" />
            </a>
          </Block>
          <Block m="5 / 2 / 10 / 10" d="4 / 2 / 9 / 10" align="start" className="px-[21px] md:px-[25px]">
            <p className="type-body">{footer.blurb}</p>
          </Block>
          {footer.columns.map((col, i) => (
            <Block key={col.title} m={columnLayout[i].m} d={columnLayout[i].d} alignD="start">
              <p className="type-eyebrow">{col.title}</p>
              <ul className="mt-[15px] type-small">
                {col.lines.map((line, j) => (
                  <li key={j}>
                    <Line line={line} />
                  </li>
                ))}
              </ul>
              {col.note && (
                <p className="type-small mt-[15px] italic">
                  {col.note}
                </p>
              )}
            </Block>
          ))}
        </FluidGrid>
      </div>
      <div className="pad-xs flex min-h-[5vh] flex-col justify-center bg-band text-on-band">
        <FluidGrid rows={{ m: 2, d: 1 }}>
          <Block m="1 / 2 / 3 / 10" d="1 / 2 / 2 / 26" align="start" alignD="center" className="px-[7px] md:px-[26px]">
            <p className="type-small">
              {footer.legal.map((line, i) => (
                <Line key={i} line={line} />
              ))}
            </p>
          </Block>
        </FluidGrid>
      </div>
    </footer>
  );
}

function Line({ line }: { line: FooterLine }) {
  if (typeof line === "string") return <>{line}</>;
  return (
    <a href={line.href} className="transition-opacity duration-300 hover:opacity-70">
      {line.label}
    </a>
  );
}
