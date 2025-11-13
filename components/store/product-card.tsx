import { FileText, Music, Download, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        return <FileText className="mr-2 h-5 w-5" />;
      case "backing-track":
        return <Music className="mr-2 h-5 w-5" />;
      case "preset":
        return <Download className="mr-2 h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex h-full cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <CardHeader className="p-0">
            <div className="relative aspect-video w-full">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </CardHeader>
          <CardContent className="grow p-4">
            <CardTitle className="text-lg leading-tight font-semibold">
              {product.title}
            </CardTitle>
            <CardDescription className="mt-1 text-sm">
              {product.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="flex w-full items-center justify-between">
              <span className="text-muted-foreground text-sm font-medium">
                A partir de
              </span>
              <span className="text-primary text-lg font-bold">
                {product.purchaseOptions.length > 0
                  ? `R$ ${startingPrice.toFixed(2).replace(".", ",")}`
                  : "Grátis"}
              </span>
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>

      {/* Modal*/}
      <DialogContent className="flex max-h-[90vh] flex-col sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-3xl leading-tight font-bold">
            {product.title}
          </DialogTitle>
          <div className="text-muted-foreground flex items-center pt-1">
            {getCategoryIcon(product.category)}
            <span className="capitalize">{product.category}</span>
          </div>
        </DialogHeader>

        <ScrollArea className="grow pr-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
            <div className="flex flex-col space-y-4 lg:col-span-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {product.badges.map((badge) => (
                  <Badge key={badge} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>

              <div className="text-muted-foreground text-base">
                <PortableText value={product.longDescription} />
              </div>
            </div>

            <div className="flex flex-col space-y-4 lg:col-span-3">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Escolha sua opção:</h4>
                {product.purchaseOptions.map((option) => (
                  <div
                    key={option._key}
                    className="flex flex-col rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="mb-3 grow sm:mb-0 sm:pr-4">
                      <h5 className="font-semibold">{option.name}</h5>
                      <p className="text-muted-foreground text-sm">
                        {option.description}
                      </p>
                      <span className="text-primary mt-1 block text-xl font-bold">
                        R$ {option.price}
                      </span>
                    </div>

                    <Button asChild className="w-full shrink-0 sm:w-auto">
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
