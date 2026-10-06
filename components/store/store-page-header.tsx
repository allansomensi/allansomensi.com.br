import Link from "next/link";
import { ChevronRight, CreditCard, Mail } from "lucide-react";
import { storeCategories } from "@/lib/site";
import { cn } from "@/lib/utils";

interface StorePageHeaderProps {
  title: React.ReactNode;
  description: string;
  /** Rota da aba ativa (ex.: "/loja/tablaturas"). */
  active: string;
  crumb?: string;
}

const TABS = [
  { href: "/loja", label: "Tudo" },
  ...storeCategories.map((c) => ({ href: c.href, label: c.label })),
];

const PERKS = [
  { icon: Mail, label: "Download enviado por e-mail" },
  { icon: CreditCard, label: "Pix ou cartão de crédito" },
];

export function StorePageHeader({
  title,
  description,
  active,
  crumb,
}: StorePageHeaderProps) {
  return (
    <header className="border-line relative overflow-hidden border-b pt-32 sm:pt-36 lg:pt-44">
      <div className="glow-top pointer-events-none absolute inset-0" />

      <div className="shell relative">
        <nav aria-label="Trilha de navegação">
          <ol className="text-subtle flex items-center gap-1.5 font-mono text-[0.7rem] tracking-[0.12em] uppercase">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Início
              </Link>
            </li>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <li>
              {crumb ? (
                <Link
                  href="/loja"
                  className="hover:text-primary transition-colors"
                >
                  Loja
                </Link>
              ) : (
                <span className="text-foreground/80" aria-current="page">
                  Loja
                </span>
              )}
            </li>
            {crumb && (
              <>
                <ChevronRight className="h-3 w-3" aria-hidden="true" />
                <li className="text-foreground/80" aria-current="page">
                  {crumb}
                </li>
              </>
            )}
          </ol>
        </nav>

        <h1 className="display mt-6 max-w-4xl text-[2.6rem] sm:mt-8 sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
          {description}
        </p>

        <ul className="text-muted-foreground mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {PERKS.map(({ icon: Icon, label }) => (
            <li key={label} className="inline-flex items-center gap-2">
              <Icon className="text-primary h-4 w-4" />
              {label}
            </li>
          ))}
        </ul>

        <nav
          aria-label="Categorias da loja"
          className="-mx-5 mt-12 [scrollbar-width:none] overflow-x-auto px-5 sm:mx-0 sm:px-0"
        >
          <ul className="flex w-max gap-1">
            {TABS.map((tab) => {
              const isActive = tab.href === active;
              return (
                <li key={tab.href}>
                  <Link
                    href={tab.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative block px-4 py-4 text-sm font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-foreground/55 hover:text-foreground",
                    )}
                  >
                    {tab.label}
                    <span
                      className={cn(
                        "bg-primary absolute inset-x-4 bottom-0 h-0.5 rounded-full transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
