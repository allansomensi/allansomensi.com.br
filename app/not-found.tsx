import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import { ActionLink } from "@/components/ui/action-link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,oklch(0.8_0.145_74/0.14),transparent_70%)]" />

      <Link
        href="/"
        aria-label="Início"
        className="hover:text-primary absolute top-8 transition-colors"
      >
        <Logo className="h-8 w-auto" />
      </Link>

      <div className="relative">
        <p className="eyebrow">Erro 404</p>
        <p
          className="display text-foreground/[0.06] mt-4 text-[clamp(7rem,28vw,16rem)] leading-none select-none"
          aria-hidden="true"
        >
          404
        </p>
        <h1 className="display -mt-[0.5em] text-4xl sm:text-5xl">
          Página <span className="accent">não encontrada</span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-5 max-w-sm">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ActionLink href="/">
            <ArrowLeft />
            Voltar ao início
          </ActionLink>
          <ActionLink href="/loja" variant="secondary">
            Ver a loja
          </ActionLink>
        </div>
      </div>
    </main>
  );
}
