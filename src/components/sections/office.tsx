import type { OfficeContent } from "@/content/types";
import { Block, FluidGrid } from "@/components/ui/fluid-grid";
import { RichText } from "@/components/ui/rich-text";
import { UnderlineLink } from "@/components/ui/buttons";
import { CoverImage } from "@/components/ui/cover-image";

export function Office({ office }: { office: OfficeContent }) {
  const [main, detail] = office.images;
  return (
    <section id={office.id} className="pad-md scroll-mt-4 overflow-hidden bg-canvas text-ink">
      <FluidGrid rows={{ m: 46, d: 23 }} gap="wide">
        <Block m="1 / 2 / 3 / 10" d="1 / 3 / 3 / 12">
          <p className="type-eyebrow">{office.eyebrow}</p>
        </Block>
        <Block m="3 / 2 / 7 / 10" d="3 / 3 / 7 / 13">
          <h2 className="type-h2">
            <RichText text={office.title} />
          </h2>
        </Block>
        <Block m="8 / 2 / 18 / 11" d="1 / 15 / 17 / 27" align="stretch">
          <CoverImage image={main} sizes="(min-width: 768px) 46vw, 94vw" />
        </Block>
        <Block m="19 / 2 / 28 / 10" d="8 / 3 / 15 / 12" className="space-y-[15px]">
          {office.body.map((p, i) => (
            <p key={i} className="type-body text-ink-soft">
              {p}
            </p>
          ))}
        </Block>
        <Block
          m="28 / 4 / 36 / 11"
          d="13 / 12 / 23 / 20"
          align="stretch"
          className="relative z-10 md:border-[10px] md:border-canvas"
        >
          <CoverImage image={detail} sizes="(min-width: 768px) 27vw, 72vw" />
        </Block>
        <Block m="37 / 2 / 45 / 10" d="16 / 3 / 22 / 11">
          <dl className="border-t border-line">
            {office.details.map((item) => (
              <div key={item.label} className="grid grid-cols-[7.5em_1fr] gap-4 border-b border-line py-[13px]">
                <dt className="type-eyebrow text-[12.4px] leading-[2.1]">{item.label}</dt>
                <dd className="type-body">
                  {item.href ? (
                    <a href={item.href} className="transition-colors duration-300 hover:text-accent">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Block>
        <Block m="45 / 2 / 47 / 10" d="22 / 3 / 24 / 11" align="center">
          <UnderlineLink link={office.cta} />
        </Block>
      </FluidGrid>
    </section>
  );
}
