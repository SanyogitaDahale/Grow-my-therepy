import type { SiteContent } from "@/content/types";
import { Block, FluidGrid } from "@/components/ui/fluid-grid";
import { RichText } from "@/components/ui/rich-text";
import { CoverImage } from "@/components/ui/cover-image";

export function Statement({ statement }: { statement: NonNullable<SiteContent["statement"]> }) {
  return (
    <section className="pad-md flex min-h-[66vh] flex-col justify-center bg-surface text-ink">
      <FluidGrid rows={{ m: 13, d: 14 }}>
        <Block m="1 / 2 / 10 / 11" d="1 / 1 / 15 / 15" align="stretch">
          <CoverImage image={statement.image} sizes="(min-width: 768px) 54vw, 94vw" />
        </Block>
        <Block m="10 / 2 / 14 / 10" d="9 / 16 / 15 / 26" alignD="end">
          <h2 className="type-h2">
            <RichText text={statement.title} />
          </h2>
        </Block>
      </FluidGrid>
    </section>
  );
}
