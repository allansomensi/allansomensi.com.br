import { ArrowRightIcon, AtSignIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function Newsletter() {
  return (
    <div className="bg-secondary/80 dark:bg-secondary/40 relative mx-auto flex w-full flex-col justify-between gap-y-6 border-x px-2 py-8 md:px-4">
      <div className="pointer-events-none absolute -top-px left-1/2 w-screen -translate-x-1/2 border-t" />

      <div className="space-y-1">
        <h2 className="text-center text-2xl font-semibold tracking-tight md:text-4xl">
          Inscreva-se na Newsletter!
        </h2>
        <p className="text-muted-foreground text-center text-sm text-balance md:text-base">
          Receba novidades, dicas de guitarra e lançamentos exclusivos
          diretamente no seu e-mail.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <InputGroup className="bg-card max-w-[280px]">
          <InputGroupInput placeholder="Digite seu email" />
          <InputGroupAddon>
            <AtSignIcon />
          </InputGroupAddon>
        </InputGroup>

        <Button>
          Inscrever-se <ArrowRightIcon />
        </Button>
      </div>

      <div className="pointer-events-none absolute -bottom-px left-1/2 w-screen -translate-x-1/2 border-b" />
    </div>
  );
}
