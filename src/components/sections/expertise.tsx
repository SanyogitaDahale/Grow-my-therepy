import { Fragment } from "react";
import type { SiteContent } from "@/content/types";
import { Block, FluidGrid } from "@/components/ui/fluid-grid";
import { RichText } from "@/components/ui/rich-text";

const PER_COLUMN = 6;

export function Expertise({ expertise }: { expertise: SiteContent["expertise"] }) {
  const items = expertise.items;
  return (
    <section id={expertise.id} className="pad-lg flex min-h-[80vh] scroll-mt-4 flex-col justify-center bg-surface text-ink">
      <FluidGrid rows={{ m: 27, d: 12 }}>
        <Block m="1 / 2 / 3 / 10" d="1 / 3 / 4 / 9">
          <h2 className="type-h2-sm">
            <RichText text={expertise.title} />
          </h2>
        </Block>
        <Block m="4 / 2 / 28 / 10" d="1 / 10 / 13 / 26" className="sr-only">
          <ul>
            {items.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </Block>
        {items.map((label, k) => {
          const i = k % PER_COLUMN;
          const [colStart, colEnd] = k < PER_COLUMN ? [10, 18] : [18, 26];
          const showDesktopLine = i < PER_COLUMN - 1 && k < items.length - 1;
          const showMobileLine = k < items.length - 2;
          return (
            <Fragment key={label}>
              <Block
                m={`${4 + 2 * k} / 2 / ${6 + 2 * k} / 10`}
                d={`${1 + 2 * i} / ${colStart} / ${3 + 2 * i} / ${colEnd}`}
                align="start"
              >
                <p className="type-eyebrow" aria-hidden>
                  {label}
                </p>
              </Block>
              <Block
                m={`${5 + 2 * k} / 2 / ${6 + 2 * k} / 10`}
                d={`${2 + 2 * i} / ${colStart} / ${3 + 2 * i} / ${colEnd - 1}`}
                align="center"
                className={`${showMobileLine ? "" : "max-md:hidden"} ${showDesktopLine ? "" : "md:hidden"}`}
              >
                <hr className="border-0 border-t border-line" />
              </Block>
            </Fragment>
          );
        })}
      </FluidGrid>
    </section>
  );
}
