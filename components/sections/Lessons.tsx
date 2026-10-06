import {
  ArrowRight,
  CalendarCheck,
  Check,
  MapPin,
  Sparkles,
  TrendingUp,
  Video,
} from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const LESSONS = [
  {
    icon: MapPin,
    label: "Presencial",
    title: "Aulas presenciais",
    description:
      "Na minha casa ou a domicílio, em Bento Gonçalves (RS) e região.",
    features: [
      "Feedback imediato e correções técnicas precisas",
      "Material de apoio exclusivo (tabs e PDFs)",
      "Metodologia adaptada ao seu nível",
    ],
    cta: "Agendar aula presencial",
    href: site.calendly.presencial,
    highlight: false,
  },
  {
    icon: Video,
    label: "Online",
    title: "Aulas online",
    description:
      "Estude do conforto da sua casa ou de qualquer lugar do mundo, via Google Meet.",
    features: [
      "Aprenda de qualquer lugar, no seu ritmo",
      "Material de apoio exclusivo (tabs e PDFs)",
      "Metodologia adaptada às suas metas",
    ],
    cta: "Agendar via WhatsApp",
    href: site.whatsapp.href,
    highlight: true,
  },
];

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Agende",
    description:
      "Escolha o melhor horário pelo Calendly ou me chame no WhatsApp.",
  },
  {
    icon: Sparkles,
    title: "Primeira aula",
    description:
      "Entendemos juntos o seu nível, seus objetivos e o som que você busca.",
  },
  {
    icon: TrendingUp,
    title: "Evolua",
    description:
      "Um plano de estudo sob medida, com material de apoio a cada etapa.",
  },
];

export function Lessons() {
  return (
    <section id="aulas" className="section-y relative w-full">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionHeading
            className="reveal lg:col-span-5 lg:self-start"
            index="01"
            eyebrow="Aulas"
            title={
              <>
                Guitarra e violão, <span className="accent">sob medida</span>{" "}
                para você.
              </>
            }
            description="Para quem está começando e para quem já toca e quer continuar evoluindo. Cada aula parte dos seus objetivos e do seu momento."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {LESSONS.map((lesson) => {
              const Icon = lesson.icon;
              return (
                <article
                  key={lesson.title}
                  className={cn(
                    "reveal panel relative flex flex-col overflow-hidden p-7 sm:p-8",
                    lesson.highlight &&
                      "border-primary/40 bg-[linear-gradient(160deg,oklch(0.8_0.145_74/0.12),transparent_55%)]",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl border",
                        lesson.highlight
                          ? "border-primary/40 bg-primary/15 text-primary"
                          : "border-line-strong text-foreground/80 bg-white/4",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    {lesson.highlight ? (
                      <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 font-mono text-[0.65rem] font-medium tracking-[0.15em] uppercase">
                        Recomendado
                      </span>
                    ) : (
                      <span className="text-subtle font-mono text-[0.65rem] tracking-[0.15em] uppercase">
                        {lesson.label}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                    {lesson.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {lesson.description}
                  </p>

                  <ul className="border-line mt-7 mb-9 flex grow flex-col gap-3.5 border-t pt-7">
                    {lesson.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ActionLink
                    href={lesson.href}
                    variant={lesson.highlight ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {lesson.cta}
                    <ArrowRight className="transition-transform group-hover/action:translate-x-0.5" />
                  </ActionLink>
                </article>
              );
            })}
          </div>
        </div>

        {/* Como funciona */}
        <ol className="border-line mt-20 grid gap-px overflow-hidden rounded-2xl border bg-(--line) md:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="reveal bg-background flex gap-5 p-7 sm:p-8"
              >
                <span className="text-primary font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="flex items-center gap-2.5 font-semibold">
                    <Icon className="text-foreground/50 h-4 w-4" />
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
