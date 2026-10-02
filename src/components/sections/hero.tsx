import type { SiteContent } from "@/content/types";
import { Block, FluidGrid } from "@/components/ui/fluid-grid";
import { RichText } from "@/components/ui/rich-text";
import { UnderlineLink } from "@/components/ui/buttons";
import { CoverImage } from "@/components/ui/cover-image";

export function Hero({ hero }: { hero: SiteContent["hero"] }) {
  return (
    <section className="bg-canvas text-ink">
      <FluidGrid rows={{ m: 24, d: 18 }}>
        <Block m="2 / 2 / 5 / 10" d="2 / 12 / 4 / 20">
          <p className="type-eyebrow">{hero.eyebrow}</p>
        </Block>
        <Block m="5 / 2 / 12 / 10" d="7 / 12 / 15 / 24">
          <h1 className="type-h1">
            <RichText text={hero.title} />
          </h1>
          <p className="type-body mt-[30px]">{hero.subtitle}</p>
        </Block>
        <Block m="12 / 2 / 14 / 10" d="15 / 12 / 17 / 24" align="center">
          <UnderlineLink link={hero.cta} />
        </Block>
        <Block m="15 / 1 / 24 / 8" d="2 / 1 / 17 / 10" align="stretch">
          <CoverImage image={hero.image} sizes="(min-width: 768px) 35vw, 72vw" preload />
        </Block>
        <Block m="18 / 9 / 24 / 11" d="7 / 25 / 17 / 27" align="stretch">
          <CoverImage image={hero.sideImage} sizes="(min-width: 768px) 8vw, 15vw" />
        </Block>
      </FluidGrid>
    </section>
  );
}
