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
  "on-sale": {
    label: "Ingressos",
    className: "border-primary/40 bg-primary/10 text-primary",
  },
  free: {
    label: "Entrada franca",
    className: "border-success/40 bg-success/10 text-success",
  },
  soon: {
    label: "Em breve",
    className: "border-line-strong text-foreground/70",
  },
  "sold-out": { label: "Esgotado", className: "border-line text-subtle" },
};

function StatusPill({ status }: { status: AgendaEvent["status"] }) {
  const { label, className } = STATUS[status ?? "on-sale"];
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.15em] whitespace-nowrap uppercase",
        className,
      )}
    >
      {label}
    </span>
  );
}

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
  const canLink = event.ticketUrl && event.status !== "sold-out";

  const content = (
    <>
      <div className="flex w-14 shrink-0 flex-col items-center self-start pt-1 sm:w-24 sm:self-center sm:pt-0">
        <span className="text-3xl font-semibold tracking-tighter tabular-nums sm:text-5xl">
          {date.day}
        </span>
        <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">
          {date.month}
        </span>
      </div>

      <div className="border-line min-w-0 flex-1 border-l pl-4 sm:pl-8">
        <p className="text-subtle font-mono text-[0.65rem] tracking-[0.15em] uppercase">
          {date.weekday} · {date.year}
        </p>
        <h3 className="group-hover:text-primary mt-1.5 text-lg font-semibold tracking-tight transition-colors sm:truncate sm:text-xl">
          {event.title}
        </h3>
        <p className="text-muted-foreground mt-2 flex flex-col gap-1 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
          <span className="inline-flex gap-1.5">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            {event.venue} · {event.city}
          </span>
          <span className="inline-flex gap-1.5">
            <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            {date.time}
          </span>
        </p>
        <div className="mt-3 flex items-center gap-3 sm:hidden">
          <StatusPill status={event.status} />
          {canLink && (
            <span className="text-primary inline-flex items-center gap-1 text-sm font-medium">
              Ver detalhes <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>

      <div className="hidden items-center gap-3 sm:flex">
        <StatusPill status={event.status} />
        {canLink && (
          <span className="border-line-strong group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </>
  );

  const className =
    "group flex items-center gap-3 py-6 sm:gap-6 sm:py-7 transition-colors";

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
              Próximos <span className="accent">shows</span>
            </>
          }
          description="Shows, workshops e participações que já estão marcados."
        >
          <div className="text-muted-foreground mt-2 flex items-center gap-3 text-sm">
            <Equalizer />
            {hasEvents
              ? `${events.length} ${events.length === 1 ? "data confirmada" : "datas confirmadas"}`
              : "Nenhuma data marcada"}
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
              <p className="max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
                Nenhum show marcado por enquanto.
              </p>
              <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                Quando tiver data nova, aviso no Instagram e na newsletter.
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
