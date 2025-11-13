"use client";

import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/store/product-card";
import { PRODUCTS } from "@/lib/data";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 9;

export function PresetsList() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const allPresets = PRODUCTS.filter((p) => p.category === "preset");
  const currentPage = Number(page) || 1;
  const totalPages = Math.ceil(allPresets.length / ITEMS_PER_PAGE);

  const paginatedProducts = allPresets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <>
      {paginatedProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={
                    hasPrevPage ? `/loja/presets?page=${currentPage - 1}` : "#"
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
                    hasNextPage ? `/loja/presets?page=${currentPage + 1}` : "#"
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
