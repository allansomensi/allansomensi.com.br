import type { Metadata } from "next";
import { EmptyState } from "@/components/store/empty-state";
import { ProductSection } from "@/components/store/product-section";
import { StorePageHeader } from "@/components/store/store-page-header";
import { client } from "@/sanity/lib/client";
import { lojaQuery } from "@/sanity/lib/queries";
import { storeCategories } from "@/lib/site";
import { LojaPageData } from "@/types";

export const metadata: Metadata = {
  title: "Loja",
  description:
    "Tablaturas, backing tracks e presets de Allan Somensi para o seu estudo de guitarra e violão.",
  alternates: { canonical: "/loja" },
};

export default async function Loja() {
  const data = await client.fetch<LojaPageData>(lojaQuery);
  const byCategory = {
    "/loja/tablaturas": data.tablaturas,
    "/loja/backing-tracks": data.backingTracks,
    "/loja/presets": data.presets,
  };
  const isEmpty = Object.values(byCategory).every((list) => !list?.length);

  return (
    <>
      <StorePageHeader
        active="/loja"
        title={
          <>
            Materiais para o seu <span className="accent">estudo</span>.
          </>
        }
        description="Tablaturas, backing tracks e presets preparados com cuidado. Depois da compra, o link para download chega direto no seu e-mail."
      />

      <div className="shell py-4 lg:py-8">
        {isEmpty ? (
          <div className="py-16">
            <EmptyState />
          </div>
        ) : (
          storeCategories.map((category, i) => (
            <ProductSection
              key={category.href}
              index={String(i + 1).padStart(2, "0")}
              title={category.label}
              description={category.description}
              products={byCategory[category.href]}
              viewMoreLink={category.href}
            />
          ))
        )}
      </div>
    </>
  );
}
