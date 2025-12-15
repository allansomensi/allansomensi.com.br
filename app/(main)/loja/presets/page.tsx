import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PresetsList } from "@/components/store/presets-list";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { SanityProduct } from "@/types";
import { presetsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

const ITEMS_PER_PAGE = 9;

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Skeleton className="h-75 w-full" />
      <Skeleton className="h-75 w-full" />
      <Skeleton className="h-75 w-full" />
    </div>
  );
}

export default async function PresetsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = currentPage * ITEMS_PER_PAGE;

  const { products, totalCount } = await client.fetch<{
    products: SanityProduct[];
    totalCount: number;
  }>(presetsQuery, { start, end });

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <Button asChild variant="outline" className="mb-6">
        <Link href="/loja">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a loja
        </Link>
      </Button>

      <div className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight">Presets</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Timbres prontos para sua pedaleira digital.
        </p>
      </div>

      <Suspense fallback={<ProductGridSkeleton />}>
        <PresetsList
          products={products}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Suspense>
    </div>
  );
}
