import type { Metadata, Viewport } from "next";
import { Mulish, Source_Serif_4, WindSong } from "next/font/google";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const windSong = WindSong({
  variable: "--font-windsong",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      data-scroll-behavior="smooth"
      className={`${mulish.variable} ${sourceSerif.variable} ${windSong.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
