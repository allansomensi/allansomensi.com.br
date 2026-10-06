import Image from "next/image";
import {
  ArrowUpRight,
  CreditCard,
  FileMusic,
  Mail,
  Music,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
} from "lucide-react";
import { PortableText } from "next-sanity";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { actionVariants } from "@/components/ui/action-link";
import { urlFor } from "@/sanity/lib/image";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { SanityProduct } from "@/types";

const CATEGORY_ICONS: Record<string, typeof Music> = {
  tablatura: FileMusic,
  "backing-track": Music,
  preset: SlidersHorizontal,
};

function CategoryTag({
  product,
  className,
}: {
  product: SanityProduct;
  className?: string;
}) {
  const Icon = CATEGORY_ICONS[product.categorySlug ?? ""] ?? ShoppingBag;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.12em] uppercase",
        className,
      )}
    >
      <Icon className="h-3 w-3" />
      {product.category}
    </span>
  );
}

function Badges({ badges }: { badges?: string[] }) {
  if (!badges?.length) return null;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {badges.map((badge) => (
        <li
          key={badge}
          className="border-line-strong text-foreground/65 rounded-md border px-2 py-0.5 font-mono text-[0.65rem]"
        >
          {badge}
        </li>
      ))}
    </ul>
  );
}

export function ProductCard({ product }: { product: SanityProduct }) {
  const options = product.purchaseOptions ?? [];
  const startingPrice = options.length
    ? Math.min(...options.map((o) => o.price))
    : null;

  const cover = (width: number, height: number) =>
    product.mainImage
      ? urlFor(product.mainImage).width(width).height(height).quality(85).url()
      : product.imageUrl;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group panel panel-interactive flex h-full w-full cursor-pointer flex-col overflow-hidden text-left"
        >
          <div className="bg-surface-2 relative aspect-16/10 w-full overflow-hidden">
            {cover(800, 500) && (
              <Image
                src={cover(800, 500)}
                alt={product.imageAlt || product.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="ease-out-expo object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            <CategoryTag
              product={product}
              className="absolute top-3 left-3 border border-white/15 bg-black/55 text-white/85 backdrop-blur-md"
            />
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="group-hover:text-primary text-lg leading-snug font-semibold tracking-tight transition-colors">
              {product.title}
            </h3>
            <p className="text-muted-foreground mt-2 line-clamp-2 text-sm leading-relaxed">
              {product.description}
            </p>

            <div className="mt-4">
              <Badges badges={product.badges} />
            </div>

            <div className="border-line mt-auto flex items-end justify-between border-t pt-5">
              <div>
                <p className="text-subtle font-mono text-[0.6rem] tracking-[0.15em] uppercase">
                  {options.length > 1 ? "A partir de" : "Preço"}
                </p>
                <p className="mt-1 text-xl font-semibold tracking-tight tabular-nums">
                  {startingPrice !== null
                    ? formatPrice(startingPrice)
                    : "Em breve"}
                </p>
              </div>
              <span className="border-line-strong group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="border-line bg-surface-3 max-h-[92svh] gap-0 overflow-y-auto rounded-3xl p-0 sm:max-w-4xl">
        <div className="grid lg:grid-cols-2">
          {/* Coluna da mídia + descrição */}
          <div className="border-line flex flex-col gap-6 border-t p-6 sm:p-8 lg:border-t-0 lg:border-r">
            <div className="border-line bg-surface-2 relative aspect-16/10 overflow-hidden rounded-2xl border">
              {cover(1280, 800) && (
                <Image
                  src={cover(1280, 800)}
                  alt={product.imageAlt || product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              )}
            </div>
            <Badges badges={product.badges} />
            {product.longDescription?.length ? (
              <div className="prose-site text-sm">
                <PortableText value={product.longDescription} />
              </div>
            ) : (
              <p className="text-muted-foreground text-sm leading-relaxed">
                {product.description}
              </p>
            )}
          </div>

          {/* Coluna de compra */}
          <div className="order-first flex flex-col p-6 sm:p-8 lg:order-none">
            <CategoryTag
              product={product}
              className="bg-primary/12 text-primary w-fit"
            />
            <DialogTitle className="mt-4 pr-8 text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
              {product.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {product.description}
            </DialogDescription>

            <h4 className="text-subtle mt-8 font-mono text-[0.65rem] tracking-[0.2em] uppercase">
              {options.length > 1 ? "Escolha sua opção" : "Comprar"}
            </h4>

            {options.length > 0 ? (
              <ul className="mt-4 flex flex-col gap-3">
                {options.map((option) => (
                  <li
                    key={option._key}
                    className="border-line hover:border-primary/40 rounded-2xl border bg-white/[0.02] p-5 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold">{option.name}</p>
                        {option.description && (
                          <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                            {option.description}
                          </p>
                        )}
                      </div>
                      <p className="text-primary shrink-0 text-xl font-semibold tracking-tight tabular-nums">
                        {formatPrice(option.price)}
                      </p>
                    </div>
                    <a
                      href={option.checkoutLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(actionVariants(), "mt-4 w-full")}
                    >
                      <ShoppingBag />
                      Comprar agora
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="border-line text-muted-foreground mt-4 rounded-2xl border p-5 text-sm">
                Este produto estará disponível em breve.
              </p>
            )}

            <ul className="text-muted-foreground mt-auto flex flex-col gap-2.5 pt-8 text-xs">
              <li className="flex items-center gap-2.5">
                <Mail className="text-primary h-3.5 w-3.5" />
                Link de download enviado por e-mail logo após o pagamento
              </li>
              <li className="flex items-center gap-2.5">
                <CreditCard className="text-primary h-3.5 w-3.5" />
                Pix ou cartão de crédito
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="text-primary h-3.5 w-3.5" />
                Checkout seguro em plataforma parceira
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
