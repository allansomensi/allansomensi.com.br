"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { urlFor } from "@/sanity/lib/image";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { HeroBannerProps } from "@/types";

const SLIDE_DURATION = 7000;

/** Seis cordas — da mi aguda (fina) à mi grave (grossa). */
function Strings({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {[0.6, 0.8, 1, 1.4, 1.8, 2.2].map((width, i) => (
        <line
          key={width}
          x1="0"
          x2="1200"
          y1={6 + i * 10}
          y2={6 + i * 10}
          stroke="url(#string-fade)"
          strokeWidth={width}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <defs>
        <linearGradient id="string-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.5" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HeroFrame({
  children,
  footer,
  ...props
}: React.ComponentProps<"section"> & { footer?: React.ReactNode }) {
  return (
    <section
      className="relative isolate flex min-h-[92svh] w-full flex-col overflow-hidden md:min-h-svh"
      {...props}
    >
      <h1 className="sr-only">
        {site.name}, guitarrista e professor de guitarra e violão em Bento
        Gonçalves (RS) e online
      </h1>
      {children}
      {/* Fusão suave com a página */}
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-linear-to-t to-transparent" />
      <Strings className="text-primary pointer-events-none absolute inset-x-0 bottom-10 z-10 h-16 w-full opacity-60" />
      {footer}
    </section>
  );
}

function HeroCopy({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="shell relative z-20 flex flex-1 flex-col justify-end pt-32 pb-36 md:pb-44">
      <div className="max-w-3xl">
        <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-700">
          {eyebrow}
        </p>
        <h2 className="display animate-in fade-in slide-in-from-bottom-4 fill-mode-both mt-6 text-[2.75rem] delay-100 duration-1000 sm:text-6xl lg:text-[5.5rem]">
          {title}
        </h2>
        {description && (
          <p className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both text-foreground/75 mt-6 max-w-xl text-base leading-relaxed delay-200 duration-1000 sm:text-lg">
            {description}
          </p>
        )}
        {children && (
          <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both mt-8 grid grid-cols-1 gap-3 delay-300 duration-1000 sm:mt-10 sm:flex sm:flex-wrap sm:items-center">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

function ScrollCue() {
  return (
    <a
      href="#aulas"
      aria-label="Ir para as aulas"
      className="text-foreground/50 hover:text-primary hidden transition-colors md:inline-flex"
    >
      <span className="border-line-strong flex h-9 w-9 items-center justify-center rounded-full border">
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </span>
    </a>
  );
}

/** Hero exibido quando não há banners ativos no Sanity. */
function StaticHero() {
  return (
    <HeroFrame
      footer={
        <div className="shell absolute inset-x-0 bottom-8 z-20">
          <ScrollCue />
        </div>
      }
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_75%_30%,oklch(0.8_0.145_74/0.22),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_10%_90%,oklch(0.55_0.12_40/0.18),transparent_70%)]" />
      </div>
      <HeroCopy
        eyebrow={`${site.name} · ${site.location}`}
        title={
          <>
            Aulas de <span className="accent">guitarra e violão</span>
          </>
        }
        description="Sou guitarrista e dou aulas em Bento Gonçalves (RS) e online. Por aqui também vendo tablaturas, backing tracks e presets."
      >
        <ActionLink href={site.calendly.base} size="lg">
          Agendar uma aula
          <ArrowRight className="transition-transform group-hover/action:translate-x-0.5" />
        </ActionLink>
        <ActionLink href="/loja" size="lg" variant="secondary">
          Ver a loja
        </ActionLink>
      </HeroCopy>
    </HeroFrame>
  );
}

export function TheHero({ banners }: HeroBannerProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = banners?.length ?? 0;

  const goTo = useCallback(
    (index: number) => setCurrent(((index % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (count < 2 || paused) return;
    const timer = window.setTimeout(() => goTo(current + 1), SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [current, count, paused, goTo]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (!banners || count === 0) return <StaticHero />;

  const banner = banners[current];

  return (
    <HeroFrame
      aria-roledescription="carrossel"
      aria-label="Destaques"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 50) goTo(current + (delta < 0 ? 1 : -1));
        touchStartX.current = null;
      }}
      footer={
        <div className="shell absolute inset-x-0 bottom-8 z-20 flex items-end justify-between gap-6">
          <ScrollCue />
          {count > 1 && (
            <div className="flex w-full items-center gap-5 md:w-auto">
              <span className="text-foreground/60 font-mono text-xs tabular-nums">
                <span className="text-foreground">
                  {String(current + 1).padStart(2, "0")}
                </span>{" "}
                / {String(count).padStart(2, "0")}
              </span>
              <div className="flex flex-1 gap-2 md:w-56 md:flex-none">
                {banners.map((b, i) => (
                  <button
                    key={b._id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Ir para o destaque ${i + 1}`}
                    aria-current={i === current}
                    className="group relative h-6 flex-1"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 overflow-hidden rounded-full bg-white/20 transition-colors group-hover:bg-white/35">
                      <span
                        key={i === current ? `active-${current}` : "idle"}
                        className={cn(
                          "bg-primary absolute inset-0 origin-left",
                          i < current && "scale-x-100",
                          i > current && "scale-x-0",
                          i === current && "animate-progress",
                        )}
                        style={
                          i === current
                            ? {
                                animationDuration: `${SLIDE_DURATION}ms`,
                                animationPlayState: paused
                                  ? "paused"
                                  : "running",
                              }
                            : undefined
                        }
                      />
                    </span>
                  </button>
                ))}
              </div>
              <div className="hidden gap-2 md:flex">
                <button
                  type="button"
                  onClick={() => goTo(current - 1)}
                  aria-label="Destaque anterior"
                  className="border-line-strong hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center rounded-full border bg-black/20 backdrop-blur-md transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(current + 1)}
                  aria-label="Próximo destaque"
                  className="border-line-strong hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center rounded-full border bg-black/20 backdrop-blur-md transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      }
    >
      {/* Imagens empilhadas com crossfade */}
      <div className="absolute inset-0 -z-10">
        {banners.map((b, i) =>
          b.image ? (
            <div
              key={b._id}
              aria-hidden={i !== current}
              className={cn(
                "ease-out-expo absolute inset-0 transition-opacity duration-[1400ms]",
                i === current ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={urlFor(b.image).width(2400).height(1350).quality(85).url()}
                alt={b.imageAlt || b.title || ""}
                fill
                priority={i === 0}
                sizes="100vw"
                className={cn(
                  "object-cover",
                  i === current && "animate-ken-burns",
                )}
              />
            </div>
          ) : null,
        )}
        <div className="absolute inset-0 bg-black/35" />
        <div className="from-background/95 via-background/50 absolute inset-0 bg-linear-to-r to-transparent" />
        <div className="from-background/70 absolute inset-x-0 top-0 h-48 bg-linear-to-b to-transparent" />
      </div>

      <div key={banner._id} className="contents">
        <HeroCopy
          eyebrow={`${site.name} · Guitarrista`}
          title={banner.title}
          description={banner.description}
        >
          {banner.link && (
            <ActionLink href={banner.link} size="lg">
              {banner.buttonText || "Saiba mais"}
              <ArrowRight className="transition-transform group-hover/action:translate-x-0.5" />
            </ActionLink>
          )}
          {banner.link?.startsWith("/loja") ? (
            <ActionLink href="/#aulas" size="lg" variant="secondary">
              Ver as aulas
            </ActionLink>
          ) : (
            <ActionLink href="/loja" size="lg" variant="secondary">
              Ver a loja
            </ActionLink>
          )}
        </HeroCopy>
      </div>
    </HeroFrame>
  );
}
