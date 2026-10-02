import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { contact, mayaContent } from "@/content/maya";
import { siteUrl } from "@/lib/site-url";

const title = "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA";
const description =
  "Licensed clinical psychologist in Santa Monica offering anxiety, panic, trauma, EMDR, and burnout therapy for adults. In-person sessions and secure telehealth across California.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Dr. Maya Reynolds, PsyD",
    images: [{ url: "/images/maya/office-therapy-room.jpg", width: 1500, height: 1125, alt: "Dr. Maya Reynolds’ therapy office in Santa Monica" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Dr. Maya Reynolds, PsyD",
    description,
    url: siteUrl,
    image: `${siteUrl}/images/maya/maya-reynolds.png`,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.street,
      addressLocality: contact.city,
      addressRegion: contact.region,
      postalCode: contact.postalCode,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Santa Monica" },
      { "@type": "State", name: "California" },
    ],
    availableService: ["Anxiety therapy", "Panic therapy", "Trauma therapy", "EMDR therapy", "Burnout therapy", "Telehealth therapy"].map(
      (name) => ({ "@type": "MedicalTherapy", name }),
    ),
    founder: {
      "@type": "Person",
      name: "Maya Reynolds",
      honorificSuffix: "PsyD",
      jobTitle: "Licensed Clinical Psychologist",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mayaContent.faq!.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <HomePage content={mayaContent} homeHref="/" />
    </>
  );
}
