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

const banners = [
  {
    id: 1,
    src: "/banners/aula.png",
    alt: "Banner aulas",
    title: "Aulas de Guitarra e Violão",
    description: "Evolua sua técnica, teoria e criatividade musical.",
    buttonText: "Saiba mais",
    href: "/#aulas",
  },
  {
    id: 2,
    src: "/banners/loja.png",
    alt: "Banner Loja",
    title: "Loja Virtual",
    description: "Backing Tracks, presets e tabs.",
    buttonText: "Acessar loja",
    href: "/loja",
  },
  {
    id: 3,
    src: "/banners/evento.jpg",
    alt: "Banner Evento",
    title: "Show ao vivo no Barracão!",
    description:
      "Dia 22 de Novembro estarei no Ginásio Barracão com a banda Rosa dos Ventos. Não perca!",
    buttonText: "Conheça a Banda",
    href: "https://bandarosadosventos.com.br",
  },
];

export function TheHero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full pb-8 sm:pb-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-[60vh] md:h-[80vh]">
        {banners.map((banner) => (
          <CarouselItem key={banner.id}>
            <div className="relative h-full w-full">
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-cover"
                priority={banner.id === 1}
              />

              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/40 p-4 text-center text-white">
                <h1 className="text-3xl font-bold select-none md:text-5xl lg:text-6xl">
                  {banner.title}
                </h1>
                <p className="mt-4 max-w-lg text-base select-none md:text-xl">
                  {banner.description}
                </p>
                <Button className="mt-6 select-none" size="lg" asChild>
                  <Link href={banner.href}>{banner.buttonText}</Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
