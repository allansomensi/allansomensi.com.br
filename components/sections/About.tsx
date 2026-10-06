import Image from "next/image";
import { Logo } from "@/components/icons/logo";
import { SectionHeading } from "@/components/ui/section-heading";
import { urlFor } from "@/sanity/lib/image";
import { site } from "@/lib/site";
import { AboutProps } from "@/types";

function Name({ children }: { children: React.ReactNode }) {
  return <em className="text-foreground/90">{children}</em>;
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="text-foreground font-medium">{children}</strong>;
}

export function About({ image }: AboutProps) {
  const imageUrl = image?.image
    ? urlFor(image.image).width(900).height(1125).quality(85).url()
    : null;

  return (
    <section
      id="sobre"
      className="section-y bg-surface-0 border-line relative w-full overflow-hidden border-y"
    >
      {/* No mobile: título → foto → texto. No desktop: foto à esquerda. */}
      <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-20 lg:gap-y-8">
        <SectionHeading
          className="reveal lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:self-end"
          index="04"
          eyebrow="Quem sou eu"
          title={
            <>
              Sobre <span className="accent">mim</span>
            </>
          }
        />

        <div className="reveal relative mx-auto w-full max-w-sm lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:self-center">
          <div className="border-primary/30 absolute -inset-3 hidden translate-x-3 translate-y-3 rounded-3xl border lg:block" />
          <div className="border-line bg-surface-1 relative aspect-4/5 overflow-hidden rounded-3xl border">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={image?.imageAlt || image?.title || site.name}
                fill
                sizes="(max-width: 1024px) 384px, 40vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,oklch(0.8_0.145_74/0.12),transparent_70%)]">
                <Logo className="text-foreground/10 h-32 w-auto" />
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
              <div>
                <p className="font-semibold tracking-tight">{site.name}</p>
                <p className="text-foreground/60 font-mono text-[0.65rem] tracking-[0.15em] uppercase">
                  {site.location}
                </p>
              </div>
              <Logo className="text-primary h-6 w-auto" />
            </div>
          </div>
        </div>

        <div className="reveal text-muted-foreground space-y-5 text-base leading-relaxed sm:text-lg lg:col-span-7 lg:col-start-6 lg:row-start-2">
          <p>
            Há mais de sete anos estudo música, focado no estudo de{" "}
            <Strong>guitarra e violão</Strong>. Na guitarra, fui muito
            influenciado por mestres como <Name>Edu Ardanuy</Name>,{" "}
            <Name>Kiko Loureiro</Name>, <Name>Andy Timmons</Name> e{" "}
            <Name>Greg Howe</Name>. No violão, minha paixão é a música
            brasileira, especialmente a obra de gigantes como{" "}
            <Name>Raphael Rabello</Name>, <Name>Tom Jobim</Name>,{" "}
            <Name>João Bosco</Name> e <Name>Yamandu Costa</Name>.
          </p>
          <p>
            Minha formação reflete essa dualidade. Aprendi com músicos renomados
            como <Name>Mozart Mello</Name> e <Name>Kiko Loureiro</Name>, além de
            estudar <Strong>violão de 7 cordas</Strong> com{" "}
            <Name>Giovani Pinceta</Name>, referência no Rio Grande do Sul. O som
            que busco é a mistura do Rock com música brasileira — um aprendizado
            infinito que sigo com estudo e dedicação.
          </p>
        </div>
      </div>
    </section>
  );
}
