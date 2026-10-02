import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { originalContent } from "@/content/original";

export const metadata: Metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling (Clone)",
  description:
    "A faithful Next.js + Tailwind clone of the Conejo Valley Family Counseling homepage, built as the layout reference for the redesign.",
  robots: { index: false, follow: false },
};

export default function OriginalClonePage() {
  return <HomePage content={originalContent} homeHref="/original" />;
}
