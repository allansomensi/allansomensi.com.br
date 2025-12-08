"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
      className="w-full pb-8 sm:pb-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-[60vh] md:h-[80vh]">
        {banners.map((banner, index) => (
          <CarouselItem key={banner._id}>
            <div className="relative h-full w-full">
              {banner.image && (
                <Image
                  src={urlFor(banner.image).url()}
                  alt={banner.title || "Banner Image"}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              )}

              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/40 p-4 text-center text-white">
                <h1 className="text-3xl font-bold drop-shadow-md select-none md:text-5xl lg:text-6xl">
                  {banner.title}
                </h1>
                <p className="mt-4 max-w-lg text-base drop-shadow-sm select-none md:text-xl">
                  {banner.description}
                </p>

                {banner.link && (
                  <Button className="mt-6 select-none" size="lg" asChild>
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
                    >
                      {banner.buttonText || "Saiba mais"}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
