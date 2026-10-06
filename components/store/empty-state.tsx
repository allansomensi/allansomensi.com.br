import { PackageOpen } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";

export function EmptyState({
  title = "Nenhum produto por aqui ainda",
  description = "Novos materiais estão a caminho. Inscreva-se na newsletter para ser avisado dos lançamentos.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="panel flex flex-col items-center gap-5 px-6 py-16 text-center">
      <span className="border-line-strong text-primary flex h-14 w-14 items-center justify-center rounded-2xl border bg-white/4">
        <PackageOpen className="h-6 w-6" />
      </span>
      <div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <ActionLink href="/#newsletter" variant="secondary" size="sm">
        Quero ser avisado
      </ActionLink>
    </div>
  );
}
