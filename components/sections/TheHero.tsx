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
      <CarouselContent className="h-[85dvh] md:h-[95dvh]">
        {banners.map((banner, index) => (
          <CarouselItem key={banner._id}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Background image */}
              {banner.image && (
                <Image
                  src={urlFor(banner.image).width(1920).height(1080).url()}
                  alt={banner.imageAlt || banner.title || "Banner"}
                  fill
                  className="object-cover transition-transform duration-[10s] hover:scale-105"
                  priority={index === 0}
                />
              )}

              {/* Base dark overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Top gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-[oklch(0.08_0.018_265/0.8)] from-0% to-transparent to-25%" />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[oklch(0.08_0.018_265/0.95)] from-0% to-transparent to-30%" />

              {/* Radial gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_50%_at_50%_50%,oklch(0.72_0.17_72/0.18)_0%,transparent_100%)]" />

              {/* Content */}
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
                <div className="animate-in fade-in zoom-in-95 fill-mode-both flex flex-col items-center duration-1000">
                  <h1 className="max-w-5xl text-5xl leading-[1.1] font-extrabold tracking-tight text-white drop-shadow-2xl select-none md:text-6xl lg:text-8xl">
                    {banner.title}
                  </h1>

                  {/* Underline accent */}
                  <div className="mt-8 h-1 w-24 rounded-full bg-[oklch(0.72_0.17_72)] shadow-[0_0_20px_oklch(0.72_0.17_72/0.6)]" />

                  {banner.description && (
                    <p className="mt-8 max-w-2xl text-lg leading-relaxed font-medium text-white/80 drop-shadow-md select-none md:text-xl">
                      {banner.description}
                    </p>
                  )}

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
                      className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[oklch(0.72_0.17_72)] px-8 py-4 text-sm font-bold text-[oklch(0.08_0.02_60)] shadow-[0_0_20px_oklch(0.72_0.17_72/0.25)] transition-all duration-300 select-none hover:scale-105 hover:bg-[oklch(0.78_0.17_72)] hover:shadow-[0_0_35px_oklch(0.72_0.17_72/0.4)]"
                    >
                      <span className="tracking-wide">
                        {banner.buttonText || "Saiba mais"}
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Bottom edge divider */}
              <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-linear-to-r from-transparent via-[oklch(0.72_0.17_72/0.6)] to-transparent" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
