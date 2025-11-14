import { ProductSection } from "@/components/store/product-section";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { lojaQuery } from "@/sanity/lib/queries";
import { LojaPageData } from "@/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Loja() {
  const { tablaturas, backingTracks, presets } =
    await client.fetch<LojaPageData>(lojaQuery);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <Button asChild variant="outline" className="mb-6">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o início
        </Link>
      </Button>
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
