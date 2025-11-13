import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TablaturasList } from "@/components/store/tablaturas-list";
import { SanityProduct } from "@/types";
import { tablaturasQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

const ITEMS_PER_PAGE = 9;

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Skeleton className="h-[300px] w-full" />
      <Skeleton className="h-[300px] w-full" />
      <Skeleton className="h-[300px] w-full" />
    </div>
  );
}

export default async function TablaturasPage({
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
  }>(tablaturasQuery, { start, end });

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
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight">
          Tablaturas
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Todas as minhas tablaturas, arranjos e materiais de estudo.
        </p>
      </div>

      <Suspense fallback={<ProductGridSkeleton />}>
        <TablaturasList
          products={products}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Suspense>
    </div>
  );
}
