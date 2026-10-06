import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import packageJson from "@/package.json";
import { Logo } from "@/components/icons/logo";
import {
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
  YoutubeIcon,
} from "@/components/icons/social";
import { ActionLink } from "@/components/ui/action-link";
import { site, storeCategories } from "@/lib/site";

const SOCIALS = [
  { href: site.socials.instagram, label: "Instagram", icon: InstagramIcon },
  { href: site.socials.youtube, label: "YouTube", icon: YoutubeIcon },
  { href: site.socials.spotify, label: "Spotify", icon: SpotifyIcon },
  { href: site.socials.facebook, label: "Facebook", icon: FacebookIcon },
];

const COLUMNS = [
  {
    title: "Loja",
    links: storeCategories.map((c) => ({ href: c.href, label: c.label })),
  },
  {
    title: "Navegação",
    links: [
      { href: "/#aulas", label: "Aulas" },
      { href: "/#agenda", label: "Agenda" },
      { href: "/#sobre", label: "Sobre" },
      { href: "/#contato", label: "Contato" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { href: "/#faq", label: "Perguntas frequentes" },
      { href: "/politica-de-privacidade", label: "Política de privacidade" },
      { href: "/termos-de-uso", label: "Termos de uso" },
    ],
  },
];

export function TheFooter() {
  return (
    <footer className="bg-surface-0 border-line relative overflow-hidden border-t">
      <div className="hairline absolute inset-x-0 top-0" />

      <div className="shell grid grid-cols-1 gap-12 pt-16 pb-12 md:grid-cols-12 lg:pt-20">
        {/* Marca */}
        <div className="flex flex-col items-start gap-6 md:col-span-5">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Início"
          >
            <Logo className="text-primary h-8 w-auto" />
            <span className="text-lg font-semibold tracking-tight">
              {site.name}
            </span>
          </Link>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
            Guitarrista e professor de guitarra e violão em {site.location}.
            Aulas presenciais e online.
          </p>
          <ActionLink href={site.calendly.base} size="sm" variant="secondary">
            Agende sua aula
            <ArrowUpRight />
          </ActionLink>
          <ul className="flex items-center gap-2">
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="border-line text-foreground/60 hover:border-primary/40 hover:text-primary hover:bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-subtle font-mono text-[0.65rem] tracking-[0.2em] uppercase">
                {column.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Assinatura gigante */}
      <div className="shell hidden select-none sm:block" aria-hidden="true">
        <p className="display from-foreground/[0.09] bg-linear-to-b to-transparent bg-clip-text text-center text-[min(13vw,11.5rem)] leading-[0.8] font-semibold whitespace-nowrap text-transparent">
          Allan Somensi
        </p>
      </div>

      <div className="border-line border-t">
        <div className="shell text-subtle flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p className="font-mono">v{packageJson.version}</p>
        </div>
      </div>
    </footer>
  );
}
