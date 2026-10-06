import Image from "next/image";
import { Quote } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import { SectionHeading } from "@/components/ui/section-heading";
import { urlFor } from "@/sanity/lib/image";
import { site } from "@/lib/site";
import { AboutProps } from "@/types";

const INFLUENCES = [
  {
    instrument: "Na guitarra",
    names: ["Edu Ardanuy", "Kiko Loureiro", "Andy Timmons", "Greg Howe"],
  },
  {
    instrument: "No violão",
    names: ["Raphael Rabello", "Tom Jobim", "João Bosco", "Yamandu Costa"],
  },
];

const TEACHERS = [
  { name: "Mozart Mello", detail: "Guitarra" },
  { name: "Kiko Loureiro", detail: "Guitarra" },
  { name: "Giovani Pinceta", detail: "Violão de 7 cordas" },
];

export function About({ image }: AboutProps) {
  const imageUrl = image?.image
    ? urlFor(image.image).width(900).height(1200).quality(85).url()
    : null;

  return (
    <section
      id="sobre"
      className="section-y bg-surface-0 border-line relative w-full overflow-hidden border-y"
    >
      <div className="shell grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Retrato */}
        <div className="reveal relative mx-auto w-full max-w-md lg:sticky lg:top-28 lg:col-span-5 lg:max-w-none">
          <div className="border-primary/30 absolute -inset-3 hidden translate-x-3 translate-y-3 rounded-3xl border lg:block" />
          <div className="border-line bg-surface-1 relative aspect-4/5 overflow-hidden rounded-3xl border">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={image?.imageAlt || image?.title || site.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,oklch(0.8_0.145_74/0.12),transparent_70%)]">
                <Logo className="text-foreground/10 h-32 w-auto" />
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
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

        {/* Texto */}
        <div className="lg:col-span-7">
          <SectionHeading
            className="reveal"
            index="04"
            eyebrow="Sobre mim"
            title={
              <>
                Entre o rock e a{" "}
                <span className="accent">música brasileira</span>.
              </>
            }
          />

          <div className="reveal text-muted-foreground mt-8 space-y-5 text-base leading-relaxed sm:text-lg">
            <p>
              Há mais de sete anos estudo música, com foco em{" "}
              <strong className="text-foreground font-medium">
                guitarra e violão
              </strong>
              . Na guitarra, fui muito influenciado pelos grandes nomes do rock
              e do fusion; no violão, minha paixão é a música brasileira.
            </p>
            <p>
              Minha formação reflete essa dualidade: aprendi com músicos
              renomados e estudei{" "}
              <strong className="text-foreground font-medium">
                violão de 7 cordas
              </strong>{" "}
              com uma das referências do Rio Grande do Sul.
            </p>
          </div>

          <figure className="reveal border-primary my-12 border-l-2 pl-6 sm:pl-8">
            <Quote className="text-primary/60 mb-3 h-5 w-5" />
            <blockquote className="font-serif text-2xl leading-snug italic sm:text-3xl">
              O som que busco é a mistura do rock com a música brasileira — um
              aprendizado infinito, que sigo com estudo e dedicação.
            </blockquote>
          </figure>

          <div className="reveal grid gap-8 sm:grid-cols-3">
            {INFLUENCES.map((group) => (
              <div key={group.instrument}>
                <h3 className="text-subtle font-mono text-[0.7rem] tracking-[0.15em] uppercase">
                  {group.instrument}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.names.map((name) => (
                    <li key={name} className="text-foreground/85 text-sm">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-subtle font-mono text-[0.7rem] tracking-[0.15em] uppercase">
                Formação
              </h3>
              <ul className="mt-4 space-y-2">
                {TEACHERS.map((teacher) => (
                  <li key={teacher.name} className="text-sm">
                    <span className="text-foreground/85">{teacher.name}</span>
                    <span className="text-subtle block text-xs">
                      {teacher.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
