import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductGrid } from "@/components/store/product-grid";
import { SanityProduct } from "@/types";

interface ProductSectionProps {
  index: string;
  title: string;
  description: string;
  products: SanityProduct[];
  viewMoreLink: string;
}

export function ProductSection({
  index,
  title,
  description,
  products,
  viewMoreLink,
}: ProductSectionProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="border-line border-b py-16 last:border-b-0 lg:py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-primary font-mono text-xs">{index}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">{description}</p>
        </div>
        <Link
          href={viewMoreLink}
          className="group text-primary inline-flex items-center gap-1.5 text-sm font-medium"
        >
          Ver todos
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}
