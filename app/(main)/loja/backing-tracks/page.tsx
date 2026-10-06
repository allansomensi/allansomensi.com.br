import type { Metadata } from "next";
import { CategoryPage } from "@/components/store/category-page";
import { backingTracksQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Backing Tracks",
  description:
    "Backing tracks em alta qualidade (MP3 e WAV) para tocar junto e treinar improvisação.",
  alternates: { canonical: "/loja/backing-tracks" },
};

export default function BackingTracksPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <CategoryPage
      query={backingTracksQuery}
      basePath="/loja/backing-tracks"
      crumb="Backing Tracks"
      title={
        <>
          Backing <span className="accent">Tracks</span>
        </>
      }
      description="Faixas em alta qualidade para tocar junto, improvisar e treinar o seu som."
      searchParams={searchParams}
    />
  );
}
