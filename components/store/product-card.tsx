import {
  FileText,
  Music,
  Download,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import { SanityProduct } from "@/types";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

interface ProductCardProps {
  product: SanityProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const startingPrice = product.purchaseOptions.reduce((min, p) => {
    return p.price < min ? p.price : min;
  }, Infinity);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "tablatura":
        return <FileText className="h-4 w-4" />;
      case "backing-track":
        return <Music className="h-4 w-4" />;
      case "preset":
        return <Download className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "tablatura":
        return "Tablatura";
      case "backing-track":
        return "Backing Track";
      case "preset":
        return "Preset";
      default:
        return category;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-white/8 bg-[oklch(0.12_0.016_265)] transition-all hover:border-[oklch(0.72_0.17_72/0.35)] hover:shadow-[0_0_0_1px_oklch(0.72_0.17_72/0.08),0_12px_40px_oklch(0_0_0/0.5)]">
          {/* Image */}
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={
                product.mainImage
                  ? urlFor(product.mainImage).width(800).height(450).url()
                  : product.imageUrl
              }
              alt={product.imageAlt || product.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Category pill overlay */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-xs font-semibold text-white/80 backdrop-blur-sm">
              {getCategoryIcon(product.category)}
              <span>{getCategoryLabel(product.category)}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="mb-1.5 text-base leading-snug font-bold">
              {product.title}
            </h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Badges */}
            {product.badges?.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-1.5">
                {product.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-white/50"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {/* Price row */}
            <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-4">
              <div>
                <p className="text-xs text-white/35">A partir de</p>
                <p className="text-lg font-bold text-[oklch(0.72_0.17_72)]">
                  {product.purchaseOptions.length > 0
                    ? `R$ ${startingPrice.toFixed(2).replace(".", ",")}`
                    : "Grátis"}
                </p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[oklch(0.72_0.17_72/0.12)] text-[oklch(0.72_0.17_72)] transition-colors group-hover:bg-[oklch(0.72_0.17_72)] group-hover:text-[oklch(0.08_0.02_60)]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="flex max-h-[90vh] flex-col border-white/10 bg-[oklch(0.11_0.016_265)] sm:max-w-3xl">
        <DialogHeader>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-[oklch(0.72_0.17_72/0.3)] bg-[oklch(0.72_0.17_72/0.1)] px-2.5 py-1 text-xs font-semibold text-[oklch(0.72_0.17_72)]">
              {getCategoryIcon(product.category)}
              {getCategoryLabel(product.category)}
            </span>
          </div>
          <DialogTitle className="text-2xl leading-tight font-extrabold tracking-tight">
            {product.title}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="grow pr-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
            {/* Left col */}
            <div className="flex flex-col space-y-4 lg:col-span-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/8">
                <Image
                  src={
                    product.mainImage
                      ? urlFor(product.mainImage).width(1280).height(720).url()
                      : product.imageUrl
                  }
                  alt={product.imageAlt || product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {product.badges?.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/50"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              <div className="text-muted-foreground text-sm leading-relaxed">
                <PortableText value={product.longDescription} />
              </div>
            </div>

            {/* Right col — purchase options */}
            <div className="flex flex-col space-y-4 lg:col-span-3">
              <h4 className="text-xs font-bold tracking-widest text-white/40 uppercase">
                Escolha sua opção
              </h4>
              <div className="space-y-3">
                {product.purchaseOptions.map((option) => (
                  <div
                    key={option._key}
                    className="plectrum-accent rounded-xl border border-white/8 bg-[oklch(0.13_0.018_265)] p-5 transition-colors hover:border-[oklch(0.72_0.17_72/0.3)]"
                  >
                    <div className="mb-4">
                      <h5 className="font-bold">{option.name}</h5>
                      {option.description && (
                        <p className="text-muted-foreground mt-1 text-sm">
                          {option.description}
                        </p>
                      )}
                      <p className="mt-2 text-2xl font-extrabold text-[oklch(0.72_0.17_72)]">
                        R$ {option.price.toFixed(2).replace(".", ",")}
                      </p>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-[oklch(0.72_0.17_72)] font-semibold text-[oklch(0.08_0.02_60)] hover:bg-[oklch(0.78_0.17_72)]"
                    >
                      <Link
                        href={option.checkoutLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Comprar Agora
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
