import type { Metadata } from "next";
import { CategoryPage } from "@/components/store/category-page";
import { tablaturasQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Tablaturas",
  description:
    "Transcrições, arranjos e exercícios de guitarra e violão em PDF e Guitar Pro.",
  alternates: { canonical: "/loja/tablaturas" },
};

export default function TablaturasPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <CategoryPage
      query={tablaturasQuery}
      basePath="/loja/tablaturas"
      crumb="Tablaturas"
      title={
        <>
          <span className="accent">Tablaturas</span>
        </>
      }
      description="Transcrições, arranjos e exercícios em PDF e Guitar Pro."
      searchParams={searchParams}
    />
  );
}
