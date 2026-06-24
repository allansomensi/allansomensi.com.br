import { ProductSection } from "@/components/store/product-section";
import { client } from "@/sanity/lib/client";
import { lojaQuery } from "@/sanity/lib/queries";
import { LojaPageData } from "@/types";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function Loja() {
  const { tablaturas, backingTracks, presets } =
    await client.fetch<LojaPageData>(lojaQuery);

  return (
    <div className="min-h-screen">
      {/* Page header — same dark stage aesthetic as sections */}
      <div className="relative overflow-hidden pt-32 pb-16">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.72 0.17 72) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[oklch(0.72_0.17_72/0.3)] to-transparent" />

        <div className="relative container mx-auto px-4 md:px-6">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-[oklch(0.72_0.17_72)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>

          <p className="eyebrow mb-4">Produtos digitais</p>
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
            Loja
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg">
            Tablaturas, backing tracks e presets para levar seu som ao próximo
            nível.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
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
    </div>
  );
}
