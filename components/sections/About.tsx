import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { AboutProps } from "@/types";

export function About({ image }: AboutProps) {
  const imageUrl = image?.image
    ? urlFor(image.image).width(800).height(800).url()
    : null;

  return (
    <div id="sobre" className="w-full py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="w-full md:w-1/3">
            {imageUrl ? (
              <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl md:min-h-100">
                <Image
                  src={imageUrl}
                  alt={image?.title || "Sobre Mim"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ) : (
              <Skeleton className="h-96 w-full rounded-lg shadow-lg md:min-h-100" />
            )}
          </div>

          <div className="w-full space-y-6 text-center md:w-2/3 md:text-left">
            <h2 className="text-center text-4xl font-bold tracking-tighter">
              Sobre Mim
            </h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed md:text-lg">
              <p>
                Há mais de sete anos estudo música, focado no estudo de
                <b> guitarra e violão</b>. Na guitarra, fui muito influenciado
                por mestres como
                <i> Edu Ardanuy</i>, <i> Kiko Loureiro</i>, <i> Andy Timmons</i>{" "}
                e <i> Greg Howe</i>. No violão, minha paixão é a música
                brasileira, especialmente a obra de gigantes como{" "}
                <i> Raphael Rabello</i>, <i> Tom Jobim</i>, <i> João Bosco </i>{" "}
                e <i>Yamandu Costa</i>.
              </p>
              <p>
                Minha formação reflete essa dualidade. Aprendi com músicos
                renomados como <i> Mozart Mello</i> e <i> Kiko Loureiro</i>,
                além de estudar <b>violão de 7 cordas</b> com
                <i> Giovani Pinceta</i>, referência no Rio Grande do Sul. O som
                que busco no instrumento é a mistura do Rock com música
                brasileira. É um aprendizado infinito e que sigo com estudo e
                dedicação na música.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
