import type { Metadata } from "next";
import { CategoryPage } from "@/components/store/category-page";
import { presetsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Presets",
  description: "Timbres prontos para usar na sua pedaleira digital.",
  alternates: { canonical: "/loja/presets" },
};

export default function PresetsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <CategoryPage
      query={presetsQuery}
      basePath="/loja/presets"
      crumb="Presets"
      title={<span className="accent">Presets</span>}
      description="Timbres prontos para usar na sua pedaleira digital."
      searchParams={searchParams}
    />
  );
}
