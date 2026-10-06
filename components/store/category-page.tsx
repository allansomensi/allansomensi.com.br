import { PaginatedProducts } from "@/components/store/product-grid";
import { StorePageHeader } from "@/components/store/store-page-header";
import { client } from "@/sanity/lib/client";
import { SanityProduct } from "@/types";

const ITEMS_PER_PAGE = 9;

interface CategoryPageProps {
  query: string;
  basePath: string;
  title: React.ReactNode;
  crumb: string;
  description: string;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/** Página paginada de uma categoria da loja. */
export async function CategoryPage({
  query,
  basePath,
  title,
  crumb,
  description,
  searchParams,
}: CategoryPageProps) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Math.floor(Number(page)) || 1);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = currentPage * ITEMS_PER_PAGE;

  const { products, totalCount } = await client.fetch<{
    products: SanityProduct[];
    totalCount: number;
  }>(query, { start, end });

  return (
    <>
      <StorePageHeader
        title={title}
        crumb={crumb}
        description={description}
        active={basePath}
      />
      <div className="shell py-16 lg:py-20">
        <PaginatedProducts
          products={products}
          currentPage={currentPage}
          totalPages={Math.ceil(totalCount / ITEMS_PER_PAGE)}
          basePath={basePath}
        />
      </div>
    </>
  );
}
