import { Fragment } from "react";
import type { SiteContent } from "@/content/types";
import { Block, FluidGrid } from "@/components/ui/fluid-grid";
import { RichText } from "@/components/ui/rich-text";
import { CoverImage } from "@/components/ui/cover-image";

const layout = [
  { img: { m: "4 / 2 / 13 / 10", d: "4 / 5 / 15 / 12" }, text: { m: "14 / 2 / 20 / 10", d: "16 / 5 / 21 / 12" } },
  { img: { m: "21 / 2 / 30 / 10", d: "4 / 12 / 15 / 19" }, text: { m: "31 / 2 / 37 / 10", d: "16 / 12 / 22 / 19" } },
  { img: { m: "38 / 2 / 47 / 10", d: "4 / 19 / 15 / 26" }, text: { m: "48 / 2 / 54 / 10", d: "16 / 19 / 22 / 26" } },
];

export function Audiences({ audiences }: { audiences: SiteContent["audiences"] }) {
  return (
    <section id={audiences.id} className="pad-md flex min-h-[66vh] scroll-mt-4 flex-col justify-center bg-surface text-ink">
      <FluidGrid rows={{ m: 53, d: 21 }} gap="wide">
        <Block m="1 / 2 / 3 / 10" d="1 / 2 / 3 / 10" className="md:pl-[11px]">
          <h2 className="type-h2">
            <RichText text={audiences.title} />
          </h2>
        </Block>
        {audiences.items.map((item, i) => (
          <Fragment key={i}>
            <Block m={layout[i].img.m} d={layout[i].img.d} align="stretch">
              <CoverImage image={item.image} sizes="(min-width: 768px) 26vw, 88vw" />
            </Block>
            <Block m={layout[i].text.m} d={layout[i].text.d} align="start" as="article">
              <h3 className="type-h3">
                <RichText text={item.title} />
              </h3>
              <p className="type-body mt-[30px] text-ink-soft">{item.text}</p>
            </Block>
          </Fragment>
        ))}
      </FluidGrid>
    </section>
  );
}
