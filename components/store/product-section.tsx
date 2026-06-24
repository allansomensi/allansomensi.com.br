"use client";

import { ProductCard } from "@/components/store/product-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SanityProduct } from "@/types";

interface ProductSectionProps {
  title: string;
  products: SanityProduct[];
  viewMoreLink: string;
}

export function ProductSection({
  title,
  products,
  viewMoreLink,
}: ProductSectionProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="mb-20">
      {/* Section divider */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
          <div className="mt-2 h-0.5 w-12 rounded-full bg-[oklch(0.72_0.17_72)]" />
        </div>
        <Link
          href={viewMoreLink}
          className="group flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.72_0.17_72)] transition-all hover:gap-2.5"
        >
          Ver todos
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
