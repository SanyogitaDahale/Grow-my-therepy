import type { SiteContent } from "@/content/types";
import { Block, FluidGrid } from "@/components/ui/fluid-grid";
import { RichText } from "@/components/ui/rich-text";
import { CoverImage } from "@/components/ui/cover-image";

export function Banner({ banner }: { banner: SiteContent["banner"] }) {
  return (
    <section className="pad-md relative isolate flex min-h-[66vh] flex-col justify-center overflow-hidden text-on-dark">
      <div className="absolute inset-0 -z-10">
        <CoverImage image={banner.image} sizes="100vw" quality={50} />
        <div className="absolute inset-0 bg-overlay" />
      </div>
      <FluidGrid rows={{ m: 2, d: 10 }}>
        <Block m="1 / 2 / 3 / 10" d="5 / 3 / 11 / 19" alignD="end">
          <p className="type-h2">
            <RichText text={banner.text} />
          </p>
        </Block>
      </FluidGrid>
    </section>
  );
}
