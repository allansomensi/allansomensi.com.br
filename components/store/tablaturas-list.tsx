"use client";

import { ProductCard } from "@/components/store/product-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SanityProduct } from "@/types";

interface TablaturasListProps {
  products: SanityProduct[];
  currentPage: number;
  totalPages: number;
}

export function TablaturasList({
  products,
  currentPage,
  totalPages,
}: TablaturasListProps) {
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <>
      {products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={
                    hasPrevPage
                      ? `/loja/tablaturas?page=${currentPage - 1}`
                      : "#"
                  }
                  aria-disabled={!hasPrevPage}
                  className={
                    !hasPrevPage ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              <PaginationItem>
                <span className="px-4 py-2 text-sm font-medium">
                  Página {currentPage} de {totalPages}
                </span>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href={
                    hasNextPage
                      ? `/loja/tablaturas?page=${currentPage + 1}`
                      : "#"
                  }
                  aria-disabled={!hasNextPage}
                  className={
                    !hasNextPage ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      ) : (
        <p className="text-center text-lg">Nenhum produto encontrado.</p>
      )}
    </>
  );
}
