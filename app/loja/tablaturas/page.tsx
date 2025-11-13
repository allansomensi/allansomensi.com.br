import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { TablaturasList } from "@/components/store/tablaturas-list";
import { Skeleton } from "@/components/ui/skeleton";

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Skeleton className="h-[300px] w-full" />
      <Skeleton className="h-[300px] w-full" />
      <Skeleton className="h-[300px] w-full" />
    </div>
  );
}

export default function TablaturasPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <Button asChild variant="outline" className="mb-6">
        <Link href="/loja">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a Loja
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
        <TablaturasList />
      </Suspense>
    </div>
  );
}
