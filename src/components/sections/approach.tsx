import type { SiteContent } from "@/content/types";
import { Block, FluidGrid } from "@/components/ui/fluid-grid";
import { RichText } from "@/components/ui/rich-text";
import { UnderlineLink } from "@/components/ui/buttons";
import { CoverImage } from "@/components/ui/cover-image";

export function Approach({ approach }: { approach: SiteContent["approach"] }) {
  return (
    <section id={approach.id} className="scroll-mt-4 bg-sand text-ink">
      <FluidGrid rows={{ m: 41, d: 24 }} gap="wide">
        <Block m="3 / 2 / 5 / 10" d="4 / 3 / 6 / 15" alignD="start">
          <p className="type-eyebrow">{approach.eyebrow}</p>
        </Block>
        <Block m="5 / 2 / 8 / 9" d="8 / 3 / 10 / 20">
          <h2 className="type-h2">
            <RichText text={approach.title} />
          </h2>
        </Block>
        <Block m="9 / 2 / 17 / 10" d="4 / 21 / 22 / 27" align="stretch">
          <CoverImage image={approach.image} sizes="(min-width: 768px) 23vw, 88vw" />
        </Block>
        <Block m="18 / 2 / 28 / 10" d="11 / 3 / 20 / 11" className="space-y-[15px]">
          <p className="type-eyebrow">{approach.lead}</p>
          {approach.body.map((p, i) => (
            <p key={i} className="type-body text-ink-soft">
              {p}
            </p>
          ))}
        </Block>
        <Block m="28 / 2 / 38 / 10" d="11 / 11 / 20 / 19" alignD="start" className="space-y-[15px]">
          {approach.bodySecondary.map((p, i) => (
            <p key={i} className="type-body text-ink-soft">
              {p}
            </p>
          ))}
        </Block>
        <Block m="38 / 2 / 40 / 10" d="21 / 3 / 23 / 19" alignD="start">
          <UnderlineLink link={approach.link} />
        </Block>
      </FluidGrid>
    </section>
  );
}
