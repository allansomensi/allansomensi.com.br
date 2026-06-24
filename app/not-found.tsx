import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.72 0.17 72) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* Big number */}
        <p className="eyebrow mb-4">Erro</p>
        <h1
          className="text-[clamp(6rem,20vw,14rem)] leading-none font-extrabold tracking-tight text-white/5 select-none"
          aria-hidden="true"
        >
          404
        </h1>

        <div className="-mt-8">
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-[oklch(0.72_0.17_72)]" />
          <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            Página não encontrada
          </h2>
          <p className="text-muted-foreground mt-4 max-w-sm text-lg">
            A página que você está procurando não existe ou foi movida.
          </p>

          <Link
            href="/"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[oklch(0.72_0.17_72)] px-7 py-3.5 text-sm font-bold text-[oklch(0.08_0.02_60)] transition-all hover:scale-105 hover:bg-[oklch(0.78_0.17_72)]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
