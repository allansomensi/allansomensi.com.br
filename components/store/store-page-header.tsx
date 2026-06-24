import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface StorePageHeaderProps {
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
}

export function StorePageHeader({
  title,
  description,
  backHref = "/loja",
  backLabel = "Voltar para a loja",
}: StorePageHeaderProps) {
  return (
    <div className="relative overflow-hidden pt-32 pb-16">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.72 0.17 72) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[oklch(0.72_0.17_72/0.3)] to-transparent" />

      <div className="relative container mx-auto px-4 md:px-6">
        <Link
          href={backHref}
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-[oklch(0.72_0.17_72)]"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>

        <p className="eyebrow mb-4">Produtos digitais</p>
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-4 max-w-xl text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
