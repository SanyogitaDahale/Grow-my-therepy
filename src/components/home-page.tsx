import type { SiteContent } from "@/content/types";
import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { Intro } from "./sections/intro";
import { Audiences } from "./sections/audiences";
import { Banner } from "./sections/banner";
import { Expertise } from "./sections/expertise";
import { Approach } from "./sections/approach";
import { Statement } from "./sections/statement";
import { Specialties } from "./sections/specialties";
import { Office } from "./sections/office";
import { Faq } from "./sections/faq";
import { Booking } from "./sections/booking";
import { Footer } from "./sections/footer";

type Props = {
  content: SiteContent;
  homeHref: string;
};

/**
 * The homepage template. Both the faithful clone and the redesign render
 * through this component; only the content object (copy, images, theme) differs.
 * Optional sections (statement, office, faq) render only when the content provides them.
 */
export function HomePage({ content, homeHref }: Props) {
  return (
    <div data-theme={content.theme} className="min-h-screen bg-surface font-sans text-ink">
      <Header brand={content.brand} nav={content.nav} navCta={content.navCta} homeHref={homeHref} />
      <main>
        <Hero hero={content.hero} />
        <Intro intro={content.intro} />
        <Audiences audiences={content.audiences} />
        <Banner banner={content.banner} />
        <Expertise expertise={content.expertise} />
        <Approach approach={content.approach} />
        {content.statement && <Statement statement={content.statement} />}
        <Specialties specialties={content.specialties} />
        {content.office && <Office office={content.office} />}
        {content.faq && <Faq faq={content.faq} />}
        <Booking booking={content.booking} />
      </main>
      <Footer brand={content.brand} footer={content.footer} homeHref={homeHref} />
    </div>
  );
}
