"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarPlus, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ActionLink } from "@/components/ui/action-link";
import { Logo } from "@/components/icons/logo";
import { InstagramIcon, YoutubeIcon } from "@/components/icons/social";
import { cn } from "@/lib/utils";
import { mainNav, site } from "@/lib/site";

/** Observa as seções da home e devolve o id da que está em foco. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const sections = mainNav
      .map((item) => document.getElementById(item.section))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export function TheHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(pathname === "/");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (item: (typeof mainNav)[number]) =>
    item.href === "/loja"
      ? pathname.startsWith("/loja")
      : activeSection === item.section;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#conteudo"
        className="bg-primary text-primary-foreground sr-only rounded-full px-4 py-2 text-sm font-medium focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Pular para o conteúdo
      </a>

      <div
        className={cn(
          "shell ease-out-expo transition-[padding] duration-500",
          isScrolled ? "pt-3" : "pt-5",
        )}
      >
        <div
          className={cn(
            "ease-out-expo flex items-center justify-between gap-6 rounded-full border py-2 pr-2 pl-5 transition-all duration-500",
            isScrolled
              ? "border-line bg-surface-0/75 shadow-[0_20px_50px_-20px_oklch(0_0_0/0.8)] backdrop-blur-xl backdrop-saturate-150"
              : "border-transparent bg-transparent",
          )}
        >
          {/* Marca */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${site.name}, página inicial`}
          >
            <Logo className="text-foreground group-hover:text-primary h-7 w-auto transition-colors duration-300" />
            <span className="flex flex-col leading-none">
              <span className="text-[0.95rem] font-semibold tracking-tight">
                {site.name}
              </span>
              <span className="text-subtle mt-1 font-mono text-[0.6rem] tracking-[0.2em] uppercase">
                Guitarrista
              </span>
            </span>
          </Link>

          {/* Navegação desktop */}
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = isActive(item);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                        active
                          ? "text-foreground"
                          : "text-foreground/60 hover:text-foreground",
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "bg-primary absolute inset-x-0 -bottom-0.5 mx-auto h-1 w-1 rounded-full transition-all duration-300",
                          active
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ActionLink
              href={site.calendly.base}
              size="sm"
              className="w-9 px-0 sm:w-auto sm:px-4"
              aria-label="Agendar aula"
            >
              <CalendarPlus />
              <span className="hidden sm:inline">Agendar aula</span>
            </ActionLink>

            {/* Menu mobile */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="border-line-strong flex h-9 w-9 items-center justify-center rounded-full border bg-white/4 transition-colors hover:bg-white/8 lg:hidden"
                  aria-label="Abrir menu"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-line bg-surface-3 w-full gap-0 p-0 sm:max-w-sm"
              >
                <div className="flex items-center gap-3 px-6 pt-6">
                  <Logo className="text-primary h-7 w-auto" />
                  <SheetTitle className="text-base font-semibold tracking-tight">
                    {site.name}
                  </SheetTitle>
                </div>
                <SheetDescription className="sr-only">
                  Navegação principal do site
                </SheetDescription>

                <nav aria-label="Menu" className="mt-10 flex-1 px-6">
                  <ul className="flex flex-col">
                    {mainNav.map((item, i) => (
                      <li key={item.href} className="border-line border-b">
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="group flex items-baseline gap-4 py-4"
                        >
                          <span className="text-subtle font-mono text-xs">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="group-hover:text-primary text-3xl font-semibold tracking-tight transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="flex flex-col gap-5 p-6">
                  <ActionLink
                    href={site.calendly.base}
                    size="lg"
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <CalendarPlus />
                    Agendar uma aula
                  </ActionLink>
                  <div className="text-muted-foreground flex items-center justify-between text-sm">
                    <a
                      href={site.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary inline-flex items-center gap-1 transition-colors"
                    >
                      WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <div className="flex items-center gap-4">
                      <a
                        href={site.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-primary transition-colors"
                      >
                        <InstagramIcon className="h-4 w-4" />
                      </a>
                      <a
                        href={site.socials.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="hover:text-primary transition-colors"
                      >
                        <YoutubeIcon className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
