import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { AboutProps } from "@/types";

export function About({ image }: AboutProps) {
  const imageUrl = image?.image
    ? urlFor(image.image).width(800).height(800).url()
    : null;

  return (
    <section id="sobre" className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
            {/* Image col */}
            <div className="w-full shrink-0 lg:w-80">
              {imageUrl ? (
                <div className="relative overflow-hidden rounded-2xl border border-white/8">
                  <div className="aspect-3/4 w-full">
                    <Image
                      src={imageUrl}
                      alt={image?.title || "Allan Somensi"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                  {/* Corner accent */}
                  <div className="absolute right-0 bottom-0 left-0 h-1 bg-linear-to-r from-[oklch(0.72_0.17_72)] via-[oklch(0.72_0.17_72/0.4)] to-transparent" />
                </div>
              ) : (
                <Skeleton className="aspect-3/4 w-full rounded-2xl" />
              )}
            </div>

            {/* Content col */}
            <div className="flex-1">
              <p className="eyebrow mb-4">Quem sou eu</p>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Sobre Mim
              </h2>

              <div className="text-muted-foreground space-y-5 text-base leading-relaxed">
                <p>
                  Há mais de sete anos estudo música, focado no estudo de{" "}
                  <strong className="font-semibold text-white/80">
                    guitarra e violão
                  </strong>
                  . Na guitarra, fui muito influenciado por mestres como{" "}
                  <em>Edu Ardanuy</em>, <em>Kiko Loureiro</em>,{" "}
                  <em>Andy Timmons</em> e <em>Greg Howe</em>. No violão, minha
                  paixão é a música brasileira, especialmente a obra de gigantes
                  como <em>Raphael Rabello</em>, <em>Tom Jobim</em>,{" "}
                  <em>João Bosco</em> e <em>Yamandu Costa</em>.
                </p>
                <p>
                  Minha formação reflete essa dualidade. Aprendi com músicos
                  renomados como <em>Mozart Mello</em> e <em>Kiko Loureiro</em>,
                  além de estudar{" "}
                  <strong className="font-semibold text-white/80">
                    violão de 7 cordas
                  </strong>{" "}
                  com <em>Giovani Pinceta</em>, referência no Rio Grande do Sul.
                  O som que busco é a mistura do Rock com música brasileira — um
                  aprendizado infinito que sigo com estudo e dedicação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
