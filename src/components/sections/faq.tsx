import type { FaqContent } from "@/content/types";
import { Block, FluidGrid } from "@/components/ui/fluid-grid";
import { RichText } from "@/components/ui/rich-text";

export function Faq({ faq }: { faq: FaqContent }) {
  return (
    <section id={faq.id} className="pad-lg scroll-mt-4 bg-surface text-ink">
      <FluidGrid rows={{ m: 6, d: 6 }}>
        <Block m="1 / 2 / 4 / 10" d="1 / 3 / 7 / 9" align="start" className="space-y-[30px]">
          <h2 className="type-h2-sm md:max-w-[7em]">
            <RichText text={faq.title} />
          </h2>
          <p className="type-body text-ink-soft md:pr-4">{faq.intro}</p>
        </Block>
        <Block m="5 / 2 / 7 / 10" d="1 / 11 / 7 / 26" align="start">
          <div className="border-t border-line">
            {faq.items.map((item) => (
              <details key={item.question} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-[22px] [&::-webkit-details-marker]:hidden">
                  <h3 className="type-h3 transition-colors duration-300 group-hover:text-accent">{item.question}</h3>
                  <span
                    aria-hidden
                    className="relative mt-[0.55em] block size-[14px] shrink-0 before:absolute before:top-1/2 before:left-0 before:h-px before:w-full before:bg-ink after:absolute after:top-0 after:left-1/2 after:h-full after:w-px after:bg-ink after:transition-transform after:duration-300 group-open:after:scale-y-0"
                  />
                </summary>
                <p className="type-body max-w-[60ch] pb-[26px] text-ink-soft">{item.answer}</p>
              </details>
            ))}
          </div>
        </Block>
      </FluidGrid>
    </section>
  );
}
