import { ArrowRight, Check, MapPin, Video } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const LESSONS = [
  {
    icon: MapPin,
    label: "Presencial",
    title: "Aulas presenciais",
    description: "Na minha casa ou na sua, em Bento Gonçalves (RS) e região.",
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
    description: "Pelo Google Meet, de onde você estiver.",
    features: [
      "Horários flexíveis, sem deslocamento",
      "Material de apoio exclusivo (tabs e PDFs)",
      "Metodologia adaptada às suas metas",
    ],
    cta: "Agendar via WhatsApp",
    href: site.whatsapp.href,
    highlight: true,
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
                Presenciais ou <span className="accent">online</span>
              </>
            }
            description="Para quem está começando e para quem já toca. O conteúdo de cada aula depende do que você quer aprender."
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
      </div>
    </section>
  );
}
