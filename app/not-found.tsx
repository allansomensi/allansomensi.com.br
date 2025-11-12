import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-150px)] min-h-96 items-center justify-center px-6 py-12">
      <div className="flex max-w-md flex-col items-center text-center">
        <TriangleAlert className="text-primary h-16 w-16" />
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight">404</h1>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">
          Página Não Encontrada
        </h2>
        <p className="text-muted-foreground mt-3 text-lg">
          Ops! A página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Voltar para o início</Link>
        </Button>
      </div>
    </div>
  );
}
