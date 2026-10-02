import { Fragment } from "react";
import type { SiteContent } from "@/content/types";
import { Block, FluidGrid } from "@/components/ui/fluid-grid";
import { RichText } from "@/components/ui/rich-text";
import { UnderlineLink } from "@/components/ui/buttons";

const layout = [
  { text: { m: "6 / 2 / 13 / 10", d: "4 / 11 / 11 / 18" }, link: { m: "13 / 2 / 15 / 10", d: "11 / 11 / 13 / 18" } },
  { text: { m: "16 / 2 / 23 / 10", d: "15 / 11 / 22 / 18" }, link: { m: "23 / 2 / 25 / 10", d: "22 / 11 / 24 / 18" } },
  { text: { m: "26 / 2 / 33 / 10", d: "4 / 19 / 11 / 26" }, link: { m: "33 / 2 / 35 / 10", d: "11 / 19 / 13 / 26" } },
  { text: { m: "36 / 2 / 42 / 10", d: "15 / 19 / 22 / 26" }, link: { m: "42 / 2 / 44 / 10", d: "22 / 19 / 24 / 26" } },
];

export function Specialties({ specialties }: { specialties: SiteContent["specialties"] }) {
  return (
    <section id={specialties.id} className="scroll-mt-4 bg-surface text-ink">
      <FluidGrid rows={{ m: 44, d: 25 }}>
        <Block m="3 / 2 / 5 / 10" d="3 / 3 / 7 / 10" align="start" alignD="center">
          <h2 className="type-h2-sm md:max-w-[7.5em]">
            <RichText text={specialties.title} />
          </h2>
        </Block>
        {specialties.items.map((item, i) => (
          <Fragment key={item.title}>
            <Block m={layout[i].text.m} d={layout[i].text.d} alignD="start" as="article">
              <h3 className="type-h3">{item.title}</h3>
              <p className="type-body mt-[30px] text-ink-soft">{item.text}</p>
            </Block>
            <Block m={layout[i].link.m} d={layout[i].link.d} alignD="start">
              <UnderlineLink link={item.link} />
            </Block>
          </Fragment>
        ))}
      </FluidGrid>
    </section>
  );
}
