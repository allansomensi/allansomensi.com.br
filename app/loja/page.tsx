"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  Music,
  Download,
  ShoppingCart,
} from "lucide-react";
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type PurchaseOption = {
  id: string;
  name: string;
  description: string;
  price: string;
  kiwifyLink: string;
};

type Product = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  category: "tablatura" | "backing-track" | "preset";
  badges: string[];
  purchaseOptions: PurchaseOption[];
};

const PRODUCTS: Product[] = [
  // Tablaturas
  {
    id: "tab-1",
    title: "Arranjo Fingerstyle",
    description: "Partitura e tablatura completa do meu arranjo.",
    longDescription:
      "Este pacote contém a tablatura detalhada do meu arranjo. Ideal para quem quer aprender as nuances e técnicas que utilizei. Inclui o arquivo em PDF e Guitar Pro.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Vídeo Aula", "Guitar Pro"],
    purchaseOptions: [
      {
        id: "p1-basico",
        name: "Tablatura (PDF + GPX)",
        description: "Acesso imediato aos arquivos da tablatura.",
        price: "R$ 50,00",
        kiwifyLink: "#",
      },
      {
        id: "p1-completo",
        name: "Combo: Tablatura + Vídeo Aula",
        description: "Tablatura e a vídeo aula completa de 30 min.",
        price: "R$ 80,00",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "tab-2",
    title: "Arranjo Yesterday - Beatles",
    description: "Partitura e tablatura completa.",
    longDescription:
      "Aprenda meu arranjo para Yesterday - Beatles. Inclui PDF e GPX.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Iniciante"],
    purchaseOptions: [
      {
        id: "p2-basico",
        name: "Partitura (PDF)",
        description: "Acesso imediato ao arquivo PDF.",
        price: "R$ 15,00",
        kiwifyLink: "https://checkout.kiwify.com.br/LINK_PRODUTO_2",
      },
    ],
  },
  {
    id: "tab-3",
    title: "Top 20 Fusion Licks",
    description: "Licks de Fusion para improviso.",
    longDescription:
      "Coletânia de 20 licks de fusion, inspirado em guitarristas como Allan Holdsworth e Frank Gambale.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Intermediário"],
    purchaseOptions: [
      {
        id: "p3-basico",
        name: "Tablaturas (PDF)",
        description: "Download imediato das tablaturas.",
        price: "R$ 29,90",
        kiwifyLink: "#",
      },
    ],
  },
  // Backing Tracks
  {
    id: "bt-1",
    title: "Blues Jam em Am (120bpm)",
    description: "Backing track profissional para improviso.",
    longDescription:
      "Uma backing track de alta qualidade de um blues clássico em A menor. Gravada com baixo e bateria reais.",
    imageUrl: "/banners/demo2.jpg",
    category: "backing-track",
    badges: ["MP3", "WAV"],
    purchaseOptions: [
      {
        id: "bt1-basico",
        name: "Blues Jam em Am",
        description: "Download imediato dos arquivos de áudio.",
        price: "R$ 10,99",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "bt-2",
    title: "Bossa Nova Jam em Dm (90bpm)",
    description: "Backing track de Bossa Nova.",
    longDescription:
      "Bossa Nova em D menor. Violão de nylon, baixo acústico e uma percussão leve. Ideal para improvisar.",
    imageUrl: "/banners/demo2.jpg",
    category: "backing-track",
    badges: ["MP3"],
    purchaseOptions: [
      {
        id: "bt2-basico",
        name: "Bossa Nova Jam em Dm (MP3)",
        description: "Download imediato do arquivo MP3.",
        price: "R$ 12,00",
        kiwifyLink: "#",
      },
    ],
  },
  // Presets
  {
    id: "pre-1",
    title: "Timbre Petrucci",
    description: "Preset para a M-VAVE MK300",
    longDescription:
      "O timbre utilizado por Petrucci no Dream Teather. Inclui o preset e um 'Impulse Response' (IR) customizado.",
    imageUrl: "/banners/demo3.jpg",
    category: "preset",
    badges: ["MK300", "IR Customizado"],
    purchaseOptions: [
      {
        id: "pre1-basico",
        name: "Preset Petrucci",
        description: "Download imediato do preset + IR.",
        price: "R$ 30,00",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "pre-2",
    title: "Timbre Zakk Wylde",
    description: "Preset para a M-VAVE MK300",
    longDescription:
      "O timbre utilizado por Zakk no Ozzy. Inclui o preset e um 'Impulse Response' (IR) customizado.",
    imageUrl: "/banners/demo3.jpg",
    category: "preset",
    badges: ["MK300", "IR Customizado"],
    purchaseOptions: [
      {
        id: "pre2-basico",
        name: "Preset Zakk Wylde",
        description: "Download imediato do preset + IR.",
        price: "R$ 30,00",
        kiwifyLink: "#",
      },
    ],
  },
];

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const startingPrice = product.purchaseOptions.reduce((min, p) => {
    const price = parseFloat(p.price.replace("R$ ", "").replace(",", "."));
    return price < min ? price : min;
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

              <DialogDescription className="text-base">
                {product.longDescription}
              </DialogDescription>
            </div>

            <div className="flex flex-col space-y-4 lg:col-span-3">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Escolha sua opção:</h4>
                {product.purchaseOptions.map((option) => (
                  <div
                    key={option.id}
                    className="flex flex-col rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="mb-3 grow sm:mb-0 sm:pr-4">
                      <h5 className="font-semibold">{option.name}</h5>
                      <p className="text-muted-foreground text-sm">
                        {option.description}
                      </p>
                      <span className="text-primary mt-1 block text-xl font-bold">
                        {option.price}
                      </span>
                    </div>

                    <Button asChild className="w-full shrink-0 sm:w-auto">
                      <Link
                        href={option.kiwifyLink}
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

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewMoreLink: string;
}

function ProductSection({
  title,
  products,
  viewMoreLink,
}: ProductSectionProps) {
  return (
    <section className="mb-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Button asChild variant="outline">
          <Link href={viewMoreLink}>
            Ver todos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default function Loja() {
  const tablaturas = PRODUCTS.filter((p) => p.category === "tablatura").slice(
    0,
    3,
  );
  const backingTracks = PRODUCTS.filter(
    (p) => p.category === "backing-track",
  ).slice(0, 3);
  const presets = PRODUCTS.filter((p) => p.category === "preset").slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight">Loja</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Encontre aqui tablaturas, backing tracks e presets para levar seu som
          para o próximo nível.
        </p>
      </div>
      <ProductSection
        title="Tablaturas"
        products={tablaturas}
        viewMoreLink="/loja/tablaturas"
      />
      <ProductSection
        title="Backing Tracks"
        products={backingTracks}
        viewMoreLink="/loja/backing-tracks"
      />
      <ProductSection
        title="Presets"
        products={presets}
        viewMoreLink="/loja/presets"
      />
    </div>
  );
}
