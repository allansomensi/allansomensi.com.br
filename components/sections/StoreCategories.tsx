import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { storeCategories } from "@/lib/site";
import { StoreHighlight } from "@/types";

interface StoreCategoriesProps {
  highlights: StoreHighlight[];
}

/** Usado quando nenhum destaque está ativo no Sanity. */
const FALLBACK: StoreHighlight[] = storeCategories.map((category, i) => ({
  _id: category.href,
  title: category.label,
  description: category.description,
  href: category.href,
  order: i,
}));

export function StoreCategories({ highlights }: StoreCategoriesProps) {
  const items = highlights?.length ? highlights : FALLBACK;

  return (
    <section
      id="loja"
      className="section-y bg-surface-0 border-line relative w-full border-y"
    >
      <div className="glow-top pointer-events-none absolute inset-0" />
      <div className="shell relative">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            className="reveal"
            index="02"
            eyebrow="Loja"
            title={
              <>
                Materiais para o seu <span className="accent">estudo</span>
              </>
            }
            description="Tablaturas, backing tracks e presets preparados com cuidado. O download chega no seu e-mail logo após a compra."
          />
          <ActionLink href="/loja" variant="secondary" className="reveal">
            Ver toda a loja
            <ArrowRight className="transition-transform group-hover/action:translate-x-0.5" />
          </ActionLink>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <li key={item._id} className="reveal">
              <Link
                href={item.href}
                className="group border-line bg-surface-1 ease-out-expo hover:border-primary/40 relative flex aspect-4/5 flex-col justify-end overflow-hidden rounded-2xl border transition-all duration-500 sm:aspect-3/4 md:aspect-4/5"
              >
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt || item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="ease-out-expo object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,oklch(0.8_0.145_74/0.18),transparent_70%)]" />
                )}
                <div className="via-background/60 absolute inset-0 bg-linear-to-t from-black/95 to-transparent" />

                <span className="text-foreground/70 absolute top-5 left-5 font-mono text-xs tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="border-line-strong group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border bg-black/30 backdrop-blur-md transition-all duration-500">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                </span>

                <div className="relative p-6 sm:p-7">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-white/70 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
