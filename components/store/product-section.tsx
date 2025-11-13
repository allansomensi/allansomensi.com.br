"use client";

import { ProductCard } from "@/components/store/product-card";
import { Button } from "@/components/ui/button";
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
  return (
    <section className="mb-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Button asChild variant="outline">
          <Link href={viewMoreLink}>
            Ver todos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
