import { Mail, Smartphone } from "lucide-react";
import Image from "next/image";

const WHATSAPP_NUMBER = "5554981187806";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_NUMBER_DISPLAY = "(54) 98118-7806";
const EMAIL_ADDRESS = "contato@allansomensi.com.br";

export function Contact() {
  return (
    <section id="contato" className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3">Fale comigo</p>
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Contato
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Tem alguma dúvida? Manda uma mensagem.
            </p>
          </div>

          {/* Contact card */}
          <div className="overflow-hidden rounded-2xl border border-white/8 bg-[oklch(0.12_0.016_265)]">
            {/* Top bar */}
            <div className="h-1 bg-linear-to-r from-transparent via-[oklch(0.72_0.17_72)] to-transparent" />

            <div className="flex flex-col items-center gap-10 p-8 md:flex-row md:gap-12">
              {/* QR Code */}
              <div className="shrink-0">
                <p className="mb-3 text-center text-xs font-bold tracking-widest text-white/30 uppercase">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/10 bg-white p-3 transition-opacity hover:opacity-90"
                >
                  <Image
                    src="/wa-qrcode.svg"
                    alt="QR Code WhatsApp"
                    width={140}
                    height={140}
                    className="h-36 w-36"
                  />
                </a>
              </div>

              {/* Divider (hidden on mobile, vertical on md+) */}
              <div className="hidden h-32 w-px bg-white/8 md:block" />
              <div className="h-px w-full bg-white/8 md:hidden" />

              {/* Contact info */}
              <div className="flex flex-col gap-5">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/4 p-4 transition-all hover:border-[oklch(0.72_0.17_72/0.3)] hover:bg-[oklch(0.72_0.17_72/0.06)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.72_0.17_72/0.12)]">
                    <Mail className="h-5 w-5 text-[oklch(0.72_0.17_72)]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-white/30 uppercase">
                      E-mail
                    </p>
                    <p className="text-sm font-medium text-white/70 transition-colors group-hover:text-[oklch(0.72_0.17_72)]">
                      {EMAIL_ADDRESS}
                    </p>
                  </div>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/4 p-4 transition-all hover:border-[oklch(0.72_0.17_72/0.3)] hover:bg-[oklch(0.72_0.17_72/0.06)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.72_0.17_72/0.12)]">
                    <Smartphone className="h-5 w-5 text-[oklch(0.72_0.17_72)]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-white/30 uppercase">
                      WhatsApp
                    </p>
                    <p className="text-sm font-medium text-white/70 transition-colors group-hover:text-[oklch(0.72_0.17_72)]">
                      {WHATSAPP_NUMBER_DISPLAY}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
