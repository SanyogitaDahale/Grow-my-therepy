import { Fragment } from "react";
import type { RichText as RichTextValue } from "@/content/types";

const TOKEN = /(\*[^*]+\*|_[^_]+_)/g;

export function RichText({ text }: { text: RichTextValue }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <em key={i} className="script-word">
              {part.slice(1, -1)}
            </em>
          );
        }
        if (part.startsWith("_") && part.endsWith("_")) {
          return (
            <em key={i} className="italic">
              {part.slice(1, -1)}
            </em>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

/** Plain-text version of a rich string, for alt text and metadata. */
export function plainText(text: RichTextValue) {
  return text.replace(/[*_]/g, "");
}
