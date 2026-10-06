import { ArrowUpRight, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";

const QUESTIONS = [
  {
    id: "agendamento",
    title: "Como funciona o agendamento das aulas?",
    content:
      "Clique em “Agendar aula” e escolha um horário no Calendly. Depois do agendamento você recebe um e-mail de confirmação. Se preferir, dá para marcar pelo WhatsApp também.",
  },
  {
    id: "cancelamento",
    title: "Qual é a política de cancelamento ou remarcação?",
    content:
      "Peço que cancelamentos ou remarcações sejam feitos com, no mínimo, 24 horas de antecedência. Aulas canceladas com menos de 24h de aviso prévio são cobradas normalmente.",
  },
  {
    id: "local",
    title: "Onde as aulas presenciais acontecem?",
    content:
      "As aulas presenciais acontecem a domicílio, na casa do aluno, ou na minha casa, em Bento Gonçalves (RS). As aulas online são realizadas pelo Google Meet.",
  },
  {
    id: "entrega",
    title: "Como recebo os produtos digitais após a compra?",
    content:
      "Assim que o pagamento é confirmado, chega um e-mail com o link para baixar os arquivos. Se não aparecer, dá uma olhada no spam.",
  },
  {
    id: "pagamento",
    title: "Quais formas de pagamento são aceitas?",
    content: "Cartão de crédito e Pix, tanto para as aulas quanto para a loja.",
  },
  {
    id: "formatos",
    title: "Em quais formatos os arquivos da loja são entregues?",
    content:
      "As backing tracks vêm em MP3 ou WAV. As tablaturas vêm em PDF e, na maioria dos casos, também em Guitar Pro (.gpx ou .gp5). Cada produto informa os formatos na descrição.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-y w-full">
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal flex flex-col gap-10 lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <SectionHeading
            index="05"
            eyebrow="FAQ"
            title={
              <>
                Perguntas <span className="accent">frequentes</span>
              </>
            }
          />

          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="panel panel-interactive group flex items-center gap-4 p-5"
          >
            <span className="bg-primary/15 text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
              <MessageCircle className="h-5 w-5" />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-semibold">
                Não achou sua dúvida?
              </span>
              <span className="text-muted-foreground block text-sm">
                Me chama no WhatsApp.
              </span>
            </span>
            <ArrowUpRight className="text-subtle group-hover:text-primary h-4 w-4 transition-all group-hover:rotate-45" />
          </a>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue={QUESTIONS[0].id}
          className="reveal lg:col-span-7"
        >
          {QUESTIONS.map((item, i) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-line border-b first:border-t"
            >
              <AccordionTrigger className="group/trigger hover:text-primary data-[state=open]:text-primary items-center gap-6 rounded-none py-6 text-base font-medium hover:no-underline sm:text-lg [&>svg]:size-5">
                <span className="flex items-baseline gap-5">
                  <span className="text-subtle font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-7 pl-10 text-[0.95rem] leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
