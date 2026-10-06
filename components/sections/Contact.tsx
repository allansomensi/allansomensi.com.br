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
    href: site.whatsapp.href,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@allansomensi",
    href: site.socials.instagram,
  },
];

export function Contact() {
  return (
    <section id="contato" className="section-y w-full pt-0 lg:pt-0">
      <div className="shell">
        <div className="reveal sm:panel relative sm:overflow-hidden sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -top-40 left-1/2 hidden h-80 w-[60rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,oklch(0.8_0.145_74/0.14),transparent_65%)]" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                index="06"
                eyebrow="Contato"
                title={
                  <>
                    Fale <span className="accent">comigo</span>
                  </>
                }
                description="Tem alguma dúvida? Manda uma mensagem."
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
                        className="group border-line hover:border-primary/40 flex items-center gap-3 rounded-2xl border bg-white/[0.02] p-3.5 transition-all duration-300 hover:bg-white/[0.04] sm:gap-4 sm:p-5"
                      >
                        <span className="border-line-strong group-hover:border-primary/40 group-hover:bg-primary/15 group-hover:text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors sm:h-11 sm:w-11">
                          <Icon className="h-[18px] w-[18px]" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="text-subtle block font-mono text-[0.65rem] tracking-[0.15em] uppercase">
                            {channel.label}
                          </span>
                          <span className="group-hover:text-primary mt-0.5 block truncate font-medium transition-colors sm:text-lg">
                            {channel.value}
                          </span>
                        </span>
                        <ArrowUpRight className="text-subtle group-hover:text-primary hidden h-4 w-4 shrink-0 transition-all duration-300 group-hover:rotate-45 sm:block" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* QR code: só faz sentido em telas grandes, para abrir no celular */}
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
                    Escaneie com o celular
                  </span>
                  <span className="text-subtle block font-mono text-[0.65rem] tracking-[0.15em] uppercase">
                    para abrir o WhatsApp
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
