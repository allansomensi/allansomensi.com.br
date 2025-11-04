"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/banners/demo1.jpg",
    alt: "Banner 1",
  },
  {
    id: 2,
    src: "/banners/demo2.jpg",
    alt: "Banner 2",
  },
  {
    id: 3,
    src: "/banners/demo3.jpg",
    alt: "Banner 3",
  },
];

export function TheHero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-[60vh] md:h-[70vh]">
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <div className="h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
