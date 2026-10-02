import type { SiteContent } from "@/content/types";
import { Block, FluidGrid } from "@/components/ui/fluid-grid";
import { RichText } from "@/components/ui/rich-text";
import { CoverImage } from "@/components/ui/cover-image";

export function Intro({ intro }: { intro: SiteContent["intro"] }) {
  return (
    <section id={intro.id} className="pad-intro flex min-h-[70vh] scroll-mt-4 flex-col justify-center bg-canvas text-ink">
      <FluidGrid rows={{ m: 28, d: 17 }} gap="wide">
        <Block m="1 / 2 / 5 / 10" d="4 / 3 / 8 / 16">
          <h2 className="type-h2">
            <RichText text={intro.title} />
          </h2>
        </Block>
        <Block m="5 / 2 / 13 / 10" d="9 / 3 / 16 / 10" className="space-y-[15px]">
          <p className="type-eyebrow">{intro.lead}</p>
          {intro.body.map((p, i) => (
            <p key={i} className="type-body text-ink-soft">
              {p}
            </p>
          ))}
        </Block>
        <Block m="14 / 2 / 21 / 10" d="1 / 19 / 17 / 27" align="stretch">
          <CoverImage image={intro.image} sizes="(min-width: 768px) 31vw, 88vw" />
        </Block>
        <Block m="22 / 2 / 29 / 10" d="9 / 10 / 17 / 17" alignD="start" className="space-y-[15px]">
          {intro.bodySecondary.map((p, i) => (
            <p key={i} className="type-body text-ink-soft">
              {p}
            </p>
          ))}
        </Block>
      </FluidGrid>
    </section>
  );
}
