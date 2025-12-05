import { Mail, Smartphone } from "lucide-react";
import Image from "next/image";

const WHATSAPP_NUMBER = "5554981187806";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_NUMBER_DISPLAY = "(54) 98118-7806";
const EMAIL_ADDRESS = "contato@allansomensi.com.br";

export function Contact() {
  return (
    <div id="contato" className="w-full py-8 sm:py-10">
      <div className="container mx-auto flex max-w-lg flex-col items-center gap-y-6 px-4">
        <div className="text-center">
          <h2 className="text-primary text-center text-4xl font-bold tracking-tighter">
            Contato
          </h2>
        </div>
        <div className="flex w-full flex-col-reverse items-center justify-center gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex flex-col items-center gap-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/wa-qrcode.svg"}
                alt="QR Code para contato via WhatsApp"
                width={1000}
                height={1000}
                className="h-40 w-40 rounded-lg bg-white"
              />
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="group flex items-center gap-2"
            >
              <Mail className="text-primary h-5 w-5 shrink-0" />
              <span className="text-muted-foreground group-hover:text-primary text-base font-medium transition-colors">
                {EMAIL_ADDRESS}
              </span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              <Smartphone className="text-primary h-5 w-5 shrink-0" />
              <span className="text-muted-foreground group-hover:text-primary text-base font-medium transition-colors">
                {WHATSAPP_NUMBER_DISPLAY}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
