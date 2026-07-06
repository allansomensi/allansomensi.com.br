import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface StoreHighlight {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  tags?: string[];
  order: number;
}

interface StoreCategoriesProps {
  highlights: StoreHighlight[];
}

export function StoreCategories({ highlights }: StoreCategoriesProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header row */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">Produtos digitais</p>
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Leve o Seu Som
              <br />
              ao Próximo Nível
            </h2>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 bg-[oklch(0.72_0.17_72)] font-semibold text-[oklch(0.08_0.02_60)] hover:bg-[oklch(0.78_0.17_72)]"
          >
            <Link href="/loja">
              Ver toda a loja
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((cat, index) => (
            <Link
               key={cat._id}
              href={cat.href}
              className="stage-card group relative flex flex-col overflow-hidden rounded-xl"
            >
              {/* Number label */}
              <span className="absolute top-4 right-4 z-10 font-mono text-xs font-bold tracking-widest text-white/20">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={cat.imageUrl}
                  fill
                  alt={cat.imageAlt}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-(--surface-1) via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold">{cat.title}</h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {cat.description}
                </p>

                {/* Tags */}
                {cat.tags && cat.tags.length > 0 && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
                {/* CTA */}
                <div className="transition-gap mt-auto flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.72_0.17_72)] group-hover:gap-2.5">
                  Ver produtos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}