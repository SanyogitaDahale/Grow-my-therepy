import type { SiteContent } from "@/content/types";
import { Block, FluidGrid } from "@/components/ui/fluid-grid";
import { RichText } from "@/components/ui/rich-text";
import { OvalButton } from "@/components/ui/buttons";
import { CoverImage } from "@/components/ui/cover-image";

export function Booking({ booking }: { booking: SiteContent["booking"] }) {
  const [first, ...rest] = booking.body;
  return (
    <section id={booking.id} className="pad-md flex min-h-[66vh] scroll-mt-4 flex-col justify-center bg-canvas text-ink">
      <FluidGrid rows={{ m: 31, d: 16 }}>
        <Block m="1 / 1 / 7 / 6" d="4 / 1 / 16 / 4" align="stretch">
          <CoverImage image={booking.imageLeft} sizes="(min-width: 768px) 12vw, 48vw" />
        </Block>
        <Block m="8 / 2 / 10 / 10" d="1 / 6 / 3 / 16" alignD="start">
          <p className="type-eyebrow">{booking.eyebrow}</p>
        </Block>
        <Block m="10 / 2 / 13 / 10" d="4 / 6 / 8 / 16" alignD="start">
          <h2 className="type-h2">
            <RichText text={booking.title} />
          </h2>
        </Block>
        <Block m="13 / 2 / 21 / 10" d="8 / 6 / 14 / 16" className="space-y-[15px]">
          <p className="type-body text-ink-soft">{first}</p>
          {rest.map((p, i) => (
            <p key={i} className="type-body text-ink-soft">
              {p}
            </p>
          ))}
        </Block>
        <Block m="21 / 2 / 23 / 10" d="14 / 6 / 16 / 16" align="center">
          <OvalButton link={booking.cta} />
        </Block>
        <Block m="24 / 3 / 32 / 11" d="1 / 18 / 16 / 27" align="stretch">
          <CoverImage image={booking.imageRight} sizes="(min-width: 768px) 35vw, 83vw" />
        </Block>
      </FluidGrid>
    </section>
  );
}
