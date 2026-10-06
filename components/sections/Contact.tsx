import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { InstagramIcon } from "@/components/icons/social";
import { site } from "@/lib/site";

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsapp.display,
    hint: "Resposta mais rápida",
    href: site.whatsapp.href,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: site.email,
    hint: "Parcerias e orçamentos",
    href: `mailto:${site.email}`,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@allansomensi",
    hint: "Bastidores e novidades",
    href: site.socials.instagram,
  },
];

export function Contact() {
  return (
    <section id="contato" className="section-y w-full pt-0 lg:pt-0">
      <div className="shell">
        <div className="panel reveal relative overflow-hidden p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,oklch(0.8_0.145_74/0.14),transparent_65%)]" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                index="06"
                eyebrow="Contato"
                title={
                  <>
                    Vamos <span className="accent">conversar</span>?
                  </>
                }
                description="Dúvidas sobre aulas, produtos, shows ou parcerias — escolha o canal que preferir."
              />

              <ul className="mt-10 grid grid-cols-1 gap-3">
                {CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  const external = channel.href.startsWith("http");
                  return (
                    <li key={channel.label}>
                      <a
                        href={channel.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group border-line hover:border-primary/40 flex items-center gap-4 rounded-2xl border bg-white/[0.02] p-4 transition-all duration-300 hover:bg-white/[0.04] sm:p-5"
                      >
                        <span className="border-line-strong group-hover:border-primary/40 group-hover:bg-primary/15 group-hover:text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors">
                          <Icon className="h-[18px] w-[18px]" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="text-subtle block font-mono text-[0.65rem] tracking-[0.15em] uppercase">
                            {channel.label}
                            <span className="hidden sm:inline">
                              {" "}
                              · {channel.hint}
                            </span>
                          </span>
                          <span className="group-hover:text-primary mt-0.5 block truncate font-medium transition-colors sm:text-lg">
                            {channel.value}
                          </span>
                        </span>
                        <ArrowUpRight className="text-subtle group-hover:text-primary h-4 w-4 shrink-0 transition-all duration-300 group-hover:rotate-45" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* QR code — útil só em telas grandes, para abrir no celular */}
            <div className="hidden lg:col-span-5 lg:flex lg:justify-end">
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-line bg-surface-2 ease-out-expo flex flex-col items-center gap-5 rounded-3xl border p-6 transition-transform duration-500 hover:-rotate-1"
              >
                <span className="rounded-2xl bg-white p-4 shadow-2xl">
                  <Image
                    src="/wa-qrcode.svg"
                    alt="QR code para abrir uma conversa no WhatsApp"
                    width={176}
                    height={176}
                    className="h-44 w-44"
                  />
                </span>
                <span className="text-center">
                  <span className="block text-sm font-medium">
                    Aponte a câmera do celular
                  </span>
                  <span className="text-subtle block font-mono text-[0.65rem] tracking-[0.15em] uppercase">
                    e fale comigo no WhatsApp
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
