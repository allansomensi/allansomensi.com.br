import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/store/product-card";
import { EmptyState } from "@/components/store/empty-state";
import { cn } from "@/lib/utils";
import { SanityProduct } from "@/types";

export function ProductGrid({ products }: { products: SanityProduct[] }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product._id} className="reveal">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

interface PaginatedProductsProps {
  products: SanityProduct[];
  currentPage: number;
  totalPages: number;
  basePath: string;
}

function pageHref(basePath: string, page: number) {
  return page <= 1 ? basePath : `${basePath}?page=${page}`;
}

export function PaginatedProducts({
  products,
  currentPage,
  totalPages,
  basePath,
}: PaginatedProductsProps) {
  if (products.length === 0) return <EmptyState />;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const linkBase =
    "flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-medium transition-colors";

  return (
    <>
      <ProductGrid products={products} />

      {totalPages > 1 && (
        <nav
          aria-label="Paginação"
          className="mt-16 flex items-center justify-center gap-2"
        >
          {currentPage > 1 ? (
            <Link
              href={pageHref(basePath, currentPage - 1)}
              className={cn(
                linkBase,
                "border-line-strong hover:border-primary/50 hover:text-primary gap-1 border pr-4",
              )}
              aria-label="Página anterior"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Anterior</span>
            </Link>
          ) : (
            <span
              className={cn(
                linkBase,
                "border-line text-subtle gap-1 border pr-4 opacity-50",
              )}
              aria-hidden="true"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Anterior</span>
            </span>
          )}

          <ul className="flex items-center gap-1">
            {pages.map((page) => (
              <li key={page}>
                <Link
                  href={pageHref(basePath, page)}
                  aria-current={page === currentPage ? "page" : undefined}
                  className={cn(
                    linkBase,
                    page === currentPage
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/60 hover:text-foreground hover:bg-white/5",
                  )}
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>

          {currentPage < totalPages ? (
            <Link
              href={pageHref(basePath, currentPage + 1)}
              className={cn(
                linkBase,
                "border-line-strong hover:border-primary/50 hover:text-primary gap-1 border pl-4",
              )}
              aria-label="Próxima página"
            >
              <span className="hidden sm:inline">Próxima</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <span
              className={cn(
                linkBase,
                "border-line text-subtle gap-1 border pl-4 opacity-50",
              )}
              aria-hidden="true"
            >
              <span className="hidden sm:inline">Próxima</span>
              <ChevronRight className="h-4 w-4" />
            </span>
          )}
        </nav>
      )}
    </>
  );
}
