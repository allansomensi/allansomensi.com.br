import { Check, MapPin, Video } from "lucide-react";
import { Button } from "../ui/button";

const LESSONS = [
  {
    icon: MapPin,
    title: "Aulas Presenciais",
    description:
      "Atendimento na minha casa ou a domicílio em Bento Gonçalves (RS) e região.",
    features: [
      "Feedback imediato e correções técnicas precisas",
      "Material de apoio exclusivo (Tabs, PDFs)",
      "Metodologia adaptada ao seu nível",
    ],
    cta: "Agendar aula presencial",
    href: "https://calendly.com/allansomensi/presencial",
    highlight: false,
  },
  {
    icon: Video,
    title: "Aulas Online",
    description:
      "Estude do conforto da sua casa ou de qualquer lugar do mundo.",
    features: [
      "Aprenda de qualquer lugar, no seu ritmo",
      "Material de apoio exclusivo (Tabs, PDFs)",
      "Metodologia adaptada às suas metas",
    ],
    cta: "Agendar via WhatsApp",
    href: "https://wa.me/5554981187806",
    highlight: true,
  },
];

export function Lessons() {
  return (
    <section id="aulas" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Eyebrow + heading */}
        <div className="mb-14 text-center">
          <p className="eyebrow mb-3">Aprenda guitarra & violão</p>
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Faça Aulas Comigo
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
            Mais de 7 anos de estudo e experiência. Aulas para todos os níveis,
            do iniciante ao avançado.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {LESSONS.map((lesson) => {
            const Icon = lesson.icon;
            return (
              <div
                key={lesson.title}
                className={`plectrum-accent relative flex flex-col rounded-xl border p-7 transition-all ${
                  lesson.highlight
                    ? "border-[oklch(0.72_0.17_72/0.4)] bg-[oklch(0.13_0.018_265)]"
                    : "border-white/8 bg-[oklch(0.12_0.016_265)]"
                }`}
              >
                {lesson.highlight && (
                  <span className="eyebrow mb-5 inline-block">Recomendado</span>
                )}

                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.72_0.17_72/0.12)]">
                    <Icon className="h-6 w-6 text-[oklch(0.72_0.17_72)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{lesson.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {lesson.description}
                    </p>
                  </div>
                </div>

                <ul className="mb-8 grow space-y-3">
                  {lesson.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.72_0.17_72)]" />
                      <span className="text-white/75">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={
                    lesson.highlight
                      ? "w-full bg-[oklch(0.72_0.17_72)] font-semibold text-[oklch(0.08_0.02_60)] hover:bg-[oklch(0.78_0.17_72)]"
                      : "w-full"
                  }
                  variant={lesson.highlight ? "default" : "outline"}
                >
                  <a
                    href={lesson.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {lesson.cta}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
