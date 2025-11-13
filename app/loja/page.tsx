"use client";

import { ProductCard } from "@/components/store/product-card";
import { Button } from "@/components/ui/button";
import { Product, PRODUCTS } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewMoreLink: string;
}

function ProductSection({
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default function Loja() {
  const tablaturas = PRODUCTS.filter((p) => p.category === "tablatura").slice(
    0,
    3,
  );
  const backingTracks = PRODUCTS.filter(
    (p) => p.category === "backing-track",
  ).slice(0, 3);
  const presets = PRODUCTS.filter((p) => p.category === "preset").slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight">Loja</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Encontre tablaturas, backing tracks e presets para levar seu som para
          o próximo nível.
        </p>
      </div>
      <ProductSection
        title="Tablaturas"
        products={tablaturas}
        viewMoreLink="/loja/tablaturas"
      />
      <ProductSection
        title="Backing Tracks"
        products={backingTracks}
        viewMoreLink="/loja/backing-tracks"
      />
      <ProductSection
        title="Presets"
        products={presets}
        viewMoreLink="/loja/presets"
      />
    </div>
  );
}
