"use client";

import { useState } from "react";
import { ArrowRightIcon, AtSignIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage("Por favor, insira um e-mail.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Sucesso! Você está inscrito.");
        setStatus("success");
        setEmail(""); // Limpa o campo
      } else {
        throw new Error(data.error || "Algo deu errado.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Ocorreu um erro desconhecido.");
      }
      setStatus("error");
    }
  };

  return (
    <div
      id="newsletter"
      className="bg-secondary/80 dark:bg-secondary/40 relative mx-auto flex w-full flex-col justify-between gap-y-6 border-x px-2 py-8 sm:py-10 md:px-4"
    >
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

      <div className="flex flex-col items-center justify-center gap-2">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <InputGroup className="bg-card max-w-[280px]">
            <InputGroupInput
              placeholder="Digite seu email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              required
            />
            <InputGroupAddon>
              <AtSignIcon />
            </InputGroupAddon>
          </InputGroup>

          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" && <Loader2 className="animate-spin" />}

            {status === "success" && "Inscrito!"}

            {(status === "idle" || status === "error") && (
              <>
                Inscrever-se <ArrowRightIcon className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {message && (
          <p
            className={`mt-2 text-sm ${
              status === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>

      <div className="pointer-events-none absolute -bottom-px left-1/2 w-screen -translate-x-1/2 border-b" />
    </div>
  );
}
