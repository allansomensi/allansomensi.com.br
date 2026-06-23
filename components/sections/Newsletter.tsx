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
        setEmail("");
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
    <section
      id="newsletter"
      className="relative w-full overflow-hidden bg-[oklch(0.13_0.02_265)] py-16 lg:py-24"
    >
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.72 0.17 72) 0%, transparent 70%)",
        }}
      />

      {/* Top/bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[oklch(0.72_0.17_72/0.3)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[oklch(0.72_0.17_72/0.3)] to-transparent" />

      <div className="relative container mx-auto px-4 text-center">
        <p className="eyebrow mb-4">Fique por dentro</p>
        <h2 className="mb-3 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Inscreva-se na Newsletter
        </h2>
        <p className="text-muted-foreground mx-auto mb-10 max-w-md text-lg">
          Novidades, dicas de guitarra e lançamentos exclusivos direto no seu
          e-mail.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-md flex-col items-center gap-3 sm:flex-row"
        >
          <InputGroup className="flex-1 border-white/10 bg-[oklch(0.1_0.016_265)]">
            <InputGroupInput
              placeholder="Seu melhor e-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              required
              className="text-white placeholder:text-white/25"
            />
            <InputGroupAddon>
              <AtSignIcon className="text-white/25" />
            </InputGroupAddon>
          </InputGroup>

          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="shrink-0 bg-[oklch(0.72_0.17_72)] font-semibold text-[oklch(0.08_0.02_60)] hover:bg-[oklch(0.78_0.17_72)]"
          >
            {status === "loading" && <Loader2 className="animate-spin" />}
            {status === "success" && "Inscrito! ✓"}
            {(status === "idle" || status === "error") && (
              <>
                Inscrever-se
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm font-medium ${
              status === "error" ? "text-red-400" : "text-[oklch(0.72_0.17_72)]"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-muted-foreground mt-4 text-xs">
          Sem spam. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
