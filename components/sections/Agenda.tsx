import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { InstagramIcon } from "@/components/icons/social";
import { eventDateParts } from "@/lib/format";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { AgendaEvent } from "@/types";

const STATUS: Record<
  NonNullable<AgendaEvent["status"]>,
  { label: string; className: string }
> = {
  "on-sale": { label: "Ingressos", className: "text-primary" },
  free: { label: "Entrada franca", className: "text-success" },
  soon: { label: "Em breve", className: "text-muted-foreground" },
  "sold-out": { label: "Esgotado", className: "text-subtle line-through" },
};

/** Barras de equalizador — indicam que a agenda está "ao vivo". */
function Equalizer() {
  return (
    <span className="flex h-3.5 items-end gap-0.5" aria-hidden="true">
      {[0, 0.2, 0.4, 0.1].map((delay) => (
        <span
          key={delay}
          className="bg-primary animate-eq h-full w-0.5 origin-bottom rounded-full"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </span>
  );
}

function EventRow({ event }: { event: AgendaEvent }) {
  const date = eventDateParts(event.date);
  const status = STATUS[event.status ?? "on-sale"];
  const canLink = event.ticketUrl && event.status !== "sold-out";

  const content = (
    <>
      <div className="flex w-20 shrink-0 flex-col items-center sm:w-24">
        <span className="text-4xl font-semibold tracking-tighter tabular-nums sm:text-5xl">
          {date.day}
        </span>
        <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">
          {date.month}
        </span>
      </div>

      <div className="border-line min-w-0 flex-1 border-l pl-5 sm:pl-8">
        <p className="text-subtle font-mono text-[0.65rem] tracking-[0.15em] uppercase">
          {date.weekday} · {date.year}
          <span className={cn("sm:hidden", status.className)}>
            {" "}
            · {status.label}
          </span>
        </p>
        <h3 className="group-hover:text-primary mt-1.5 text-lg font-semibold tracking-tight transition-colors sm:truncate sm:text-xl">
          {event.title}
        </h3>
        <p className="text-muted-foreground mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {event.venue} — {event.city}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {date.time}
          </span>
        </p>
      </div>

      <div className="hidden items-center gap-3 sm:flex">
        <span
          className={cn(
            "font-mono text-[0.7rem] tracking-[0.15em] uppercase",
            status.className,
          )}
        >
          {status.label}
        </span>
        {canLink && (
          <span className="border-line-strong group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </>
  );

  const className =
    "group flex items-center gap-4 py-6 sm:gap-6 sm:py-7 transition-colors";

  return (
    <li className="border-line reveal border-b first:border-t">
      {canLink ? (
        <a
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      ) : (
        <div className={className}>{content}</div>
      )}
    </li>
  );
}

export function Agenda({ events }: { events: AgendaEvent[] }) {
  const hasEvents = events?.length > 0;

  return (
    <section id="agenda" className="section-y w-full">
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <SectionHeading
          className="reveal lg:sticky lg:top-32 lg:col-span-4 lg:self-start"
          index="03"
          eyebrow="Agenda"
          title={
            <>
              Próximas <span className="accent">apresentações</span>
            </>
          }
          description="Shows, workshops e participações. Chega mais — vai ser bom te ver por lá."
        >
          <div className="text-muted-foreground mt-2 flex items-center gap-3 text-sm">
            <Equalizer />
            {hasEvents
              ? `${events.length} ${events.length === 1 ? "data confirmada" : "datas confirmadas"}`
              : "Novas datas em breve"}
          </div>
        </SectionHeading>

        <div className="lg:col-span-8">
          {hasEvents ? (
            <ul>
              {events.map((event) => (
                <EventRow key={event._id} event={event} />
              ))}
            </ul>
          ) : (
            <div className="panel reveal relative flex flex-col items-start gap-6 overflow-hidden p-8 sm:p-12">
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.145_74/0.18),transparent_70%)]" />
              <span className="text-subtle font-mono text-xs tracking-[0.2em] uppercase">
                Sem datas anunciadas
              </span>
              <p className="max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
                O próximo show está sendo{" "}
                <span className="accent">afinado</span>.
              </p>
              <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                Acompanhe no Instagram para saber em primeira mão, ou
                inscreva-se na newsletter logo abaixo.
              </p>
              <ActionLink href={site.socials.instagram} variant="secondary">
                <InstagramIcon />
                Seguir no Instagram
              </ActionLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
