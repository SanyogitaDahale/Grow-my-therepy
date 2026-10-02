import Image from "next/image";
import type { ImageAsset } from "@/content/types";

type Props = {
  image: ImageAsset;
  /** Approximate rendered width, so the browser downloads a right-sized file. */
  sizes: string;
  preload?: boolean;
  /** Must be listed in `images.qualities` in next.config.ts. */
  quality?: number;
  className?: string;
};

/** Image that fills its grid cell and crops around a focal point. */
export function CoverImage({ image, sizes, preload, quality, className = "" }: Props) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        quality={quality}
        preload={preload}
        loading={preload ? "eager" : "lazy"}
        className="object-cover"
        style={{
          objectPosition: image.position ?? "50% 50%",
          filter: image.ungraded ? undefined : "var(--photo-filter)",
        }}
      />
    </div>
  );
}
