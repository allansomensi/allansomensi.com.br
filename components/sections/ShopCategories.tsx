import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ShopCategories() {
  return (
    <div className="py-8 lg:py-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tighter">
          Produtos Digitais
        </h2>
        <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-center text-lg">
          Encontre os melhores recursos para transformar o seu som.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Backing Tracks</CardTitle>
              <CardDescription>
                Pacotes de faixas em alta qualidade para tocar junto.
              </CardDescription>
            </CardHeader>
            <CardContent className="grow">
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
                <Image
                  src={"/categories/backing-tracks.png"}
                  fill
                  alt="Backing Tracks"
                  className="object-cover"
                />
              </div>
              <ul className="list-inside list-disc text-sm">
                <li>
                  Formatos <strong>.mp3</strong> e <strong>.wav</strong>
                </li>
                <li>Vários gêneros (Rock, Blues, Metal)</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Ver mais</Button>
            </CardFooter>
          </Card>
          {/* Card 2: Presets */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Presets de Timbre</CardTitle>
              <CardDescription>
                Timbres prontos para usar na sua pedaleira.
              </CardDescription>
            </CardHeader>
            <CardContent className="grow">
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
                <Image
                  src={"/categories/presets.png"}
                  fill
                  alt="Presets"
                  className="object-cover"
                />
              </div>
              <ul className="list-inside list-disc text-sm">
                <li>Timbres de Artistas Famosos</li>
                <li>Pedidos personalizados</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Ver mais</Button>
            </CardFooter>
          </Card>
          {/* Card 3: Tablaturas */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Tablaturas e PDFs</CardTitle>
              <CardDescription>
                Material didático, exercícios e transcrições detalhadas.
              </CardDescription>
            </CardHeader>
            <CardContent className="grow">
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
                <Image
                  src={"/categories/tablaturas.png"}
                  fill
                  alt="Tablaturas"
                  className="object-cover"
                />
              </div>
              <ul className="list-inside list-disc text-sm">
                <li>
                  Formatos <strong>.pdf</strong> e <strong>.gpx</strong>
                </li>
                <li>Transcrição de solos e arranjos</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Ver mais</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
