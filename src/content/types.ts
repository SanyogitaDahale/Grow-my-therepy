/**
 * Rich-text strings used for headings support two inline markers:
 *   *word*   -> handwritten script accent (e.g. "Who we *help*")
 *   _phrase_ -> serif italic (e.g. "_Nothing will be too heavy..._")
 */
export type RichText = string;

export type ThemeName = "original" | "maya";

export type ImageAsset = {
  src: string;
  alt: string;
  /** CSS object-position, used to keep the subject in frame when cropped. */
  position?: string;
  /** Skip the theme's photo grade and show the image's original colors. */
  ungraded?: boolean;
};

export type LinkItem = {
  label: string;
  href: string;
  /** "button" renders a filled accent button wherever the template shows a link or outlined oval. */
  variant?: "button";
};

export type NavItem = LinkItem & {
  /** Makes the item a folder: the mobile menu opens these on a sub-panel with a Back link. */
  children?: LinkItem[];
};

export type FooterLine = string | LinkItem;

export type SiteContent = {
  theme: ThemeName;
  brand: {
    name: string;
    tagline: string;
    /** When omitted, the logo is rendered as styled text. */
    logo?: ImageAsset & { width: number; height: number };
  };
  nav: NavItem[];
  navCta: LinkItem;
  hero: {
    eyebrow: string;
    title: RichText;
    subtitle: string;
    cta: LinkItem;
    image: ImageAsset;
    sideImage: ImageAsset;
  };
  intro: {
    id?: string;
    title: RichText;
    lead: string;
    body: string[];
    bodySecondary: string[];
    image: ImageAsset;
  };
  audiences: {
    id?: string;
    title: RichText;
    items: [AudienceItem, AudienceItem, AudienceItem];
  };
  banner: {
    text: RichText;
    image: ImageAsset;
  };
  expertise: {
    id?: string;
    title: RichText;
    /** First six render in the left column, the rest on the right. */
    items: string[];
  };
  approach: {
    id?: string;
    eyebrow: string;
    title: RichText;
    lead: string;
    body: string[];
    bodySecondary: string[];
    link: LinkItem;
    image: ImageAsset;
  };
  statement?: {
    title: RichText;
    image: ImageAsset;
  };
  specialties: {
    id?: string;
    title: RichText;
    /** Order: left column top, left bottom, right top, right bottom. */
    items: [SpecialtyItem, SpecialtyItem, SpecialtyItem, SpecialtyItem];
  };
  office?: OfficeContent;
  faq?: FaqContent;
  booking: {
    id?: string;
    eyebrow: string;
    title: RichText;
    body: string[];
    cta: LinkItem;
    imageLeft: ImageAsset;
    imageRight: ImageAsset;
  };
  footer: {
    blurb: string;
    columns: { title: string; lines: FooterLine[]; note?: string }[];
    legal: FooterLine[];
  };
};

export type AudienceItem = {
  title: RichText;
  text: string;
  image: ImageAsset;
};

export type SpecialtyItem = {
  title: string;
  text: string;
  link: LinkItem;
};

export type OfficeContent = {
  id: string;
  eyebrow: string;
  title: RichText;
  body: string[];
  details: { label: string; value: string; href?: string }[];
  cta: LinkItem;
  images: [ImageAsset, ImageAsset];
};

export type FaqContent = {
  id: string;
  title: RichText;
  intro: string;
  items: { question: string; answer: string }[];
};
