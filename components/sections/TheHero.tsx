"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { HeroBannerProps } from "@/types";

export function TheHero({ banners }: HeroBannerProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  if (!banners || banners.length === 0) return null;

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-[70vh] md:h-[88vh]">
        {banners.map((banner, index) => (
          <CarouselItem key={banner._id}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Background image */}
              {banner.image && (
                <Image
                  src={urlFor(banner.image).width(1920).height(1080).url()}
                  alt={banner.imageAlt || banner.title || "Banner"}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              )}

              {/* Multi-layer overlay: dark base + amber vignette from bottom */}
              <div className="absolute inset-0 bg-black/55" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.08 0.018 265 / 0.9) 0%, oklch(0.08 0.018 265 / 0.3) 40%, transparent 70%)",
                }}
              />
              {/* Subtle glow from bottom center */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 40% at 50% 100%, oklch(0.72 0.17 72 / 0.12) 0%, transparent 70%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-end px-4 pb-16 text-center md:pb-24">
                {/* Eyebrow label */}
                <p
                  className="mb-4 text-xs font-bold tracking-[0.2em] uppercase select-none"
                  style={{ color: "oklch(0.72 0.17 72)" }}
                >
                  Allan Somensi
                </p>

                {/* Main title */}
                <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-white drop-shadow-lg select-none md:text-6xl lg:text-7xl">
                  {banner.title}
                </h1>

                {/* Underline accent */}
                <div
                  className="mt-5 h-0.5 w-16"
                  style={{
                    background: "oklch(0.72 0.17 72)",
                  }}
                />

                {/* Description */}
                {banner.description && (
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 select-none md:text-lg">
                    {banner.description}
                  </p>
                )}

                {/* CTA button */}
                {banner.link && (
                  <Link
                    href={banner.link}
                    target={
                      banner.link.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      banner.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all select-none"
                    style={{
                      background: "oklch(0.72 0.17 72)",
                      color: "oklch(0.08 0.02 60)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "oklch(0.78 0.17 72)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "oklch(0.72 0.17 72)";
                    }}
                  >
                    {banner.buttonText || "Saiba mais"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>

              {/* Bottom line */}
              <div
                className="absolute right-0 bottom-0 left-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.72 0.17 72 / 0.5), transparent)",
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
