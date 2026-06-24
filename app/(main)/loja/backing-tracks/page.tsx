import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { BackingTracksList } from "@/components/store/backing-tracks-list";
import { StorePageHeader } from "@/components/store/store-page-header";
import { SanityProduct } from "@/types";
import { backingTracksQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

const ITEMS_PER_PAGE = 9;

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Skeleton className="h-72 w-full" />
      <Skeleton className="h-72 w-full" />
      <Skeleton className="h-72 w-full" />
    </div>
  );
}

export default async function BackingTracksPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;

  const currentPage = Number(resolvedSearchParams.page) || 1;
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = currentPage * ITEMS_PER_PAGE;

  const { products, totalCount } = await client.fetch<{
    products: SanityProduct[];
    totalCount: number;
  }>(backingTracksQuery, { start, end });

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen">
      <StorePageHeader
        title="Backing Tracks"
        description="Faixas em alta qualidade para tocar junto e treinar o seu som."
      />
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <Suspense fallback={<ProductGridSkeleton />}>
          <BackingTracksList
            products={products}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </Suspense>
      </div>
    </div>
  );
}
