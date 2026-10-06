"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";
import { actionVariants } from "@/components/ui/action-link";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setMessage("Por favor, insira um e-mail válido.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        let errorMessage = "Algo deu errado ao processar sua inscrição.";

        try {
          const errorData = await res.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          console.error(
            "O servidor retornou um erro não-JSON. Status:",
            res.status,
          );
        }

        throw new Error(errorMessage);
      }

      await res.json();

      setMessage("Inscrição feita! Confira seu e-mail.");
      setStatus("success");
      setEmail("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Ocorreu um erro desconhecido.");
      }
      setStatus("error");
    }
  };

  const busy = status === "loading" || status === "success";

  return (
    <section id="newsletter" className="w-full pb-24 lg:pb-32">
      <div className="shell">
        <div className="reveal border-primary/25 relative overflow-hidden rounded-3xl border bg-[linear-gradient(135deg,oklch(0.8_0.145_74/0.16),oklch(0.8_0.145_74/0.03)_45%,transparent)] px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          {/* Cordas decorativas */}
          <div className="pointer-events-none absolute inset-x-0 bottom-5 flex flex-col gap-2 opacity-35">
            {[0.5, 0.75, 1, 1.25, 1.5, 2].map((h, i) => (
              <span
                key={i}
                className="from-primary/0 via-primary/50 to-primary/0 block bg-linear-to-r"
                style={{ height: h }}
              />
            ))}
          </div>

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Newsletter</p>
              <h2 className="display mt-5 text-4xl sm:text-5xl">
                Novidades por <span className="accent">e-mail</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-md">
                Aviso quando sai material novo na loja ou quando tem show
                marcado.
              </p>
            </div>

            <div className="lg:pl-8">
              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="newsletter-email" className="sr-only">
                  Seu e-mail
                </label>
                <div className="border-line-strong bg-surface-0/80 focus-within:border-primary/60 focus-within:ring-primary/20 flex flex-col gap-2 rounded-3xl border p-2 backdrop-blur-md transition-all focus-within:ring-4 sm:flex-row sm:rounded-full">
                  <div className="flex flex-1 items-center gap-3 px-4">
                    <Mail className="text-subtle h-4 w-4 shrink-0" />
                    <input
                      id="newsletter-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={busy}
                      required
                      aria-invalid={status === "error" || undefined}
                      aria-describedby="newsletter-feedback"
                      className="placeholder:text-subtle h-11 w-full bg-transparent text-base outline-none focus-visible:outline-none disabled:opacity-60"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={busy}
                    className={cn(actionVariants({ size: "md" }), "sm:w-auto")}
                  >
                    {status === "loading" && (
                      <>
                        <Loader2 className="animate-spin" />
                        Enviando…
                      </>
                    )}
                    {status === "success" && (
                      <>
                        <Check />
                        Inscrito
                      </>
                    )}
                    {(status === "idle" || status === "error") && (
                      <>
                        Inscrever-se
                        <ArrowRight className="transition-transform group-hover/action:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p
                id="newsletter-feedback"
                role="status"
                aria-live="polite"
                className={cn(
                  "mt-4 min-h-5 px-4 text-sm",
                  status === "error" && "text-destructive",
                  status === "success" && "text-success",
                  !message && "text-subtle",
                )}
              >
                {message || "Dá para cancelar quando quiser."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
