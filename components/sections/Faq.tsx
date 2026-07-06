import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function Faq() {
  return (
    <section id="faq" className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3">Tire suas dúvidas</p>
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
              Não encontrou o que procura?{" "}
              <Link
                href="/#contato"
                className="text-[oklch(0.72_0.17_72)] hover:underline"
              >
                Entre em contato
              </Link>
              .
            </p>
          </div>

          {/* Accordion */}
          <Accordion
            className="w-full space-y-2"
            collapsible
            defaultValue="item-1"
            type="single"
          >
            {questions.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="stage-card rounded-xl border px-6 data-[state=open]:border-[oklch(0.72_0.17_72/0.25)] data-[state=open]:bg-(--surface-2)"
              >
                <AccordionTrigger className="py-5 text-left text-sm leading-snug font-semibold text-white/85 hover:text-[oklch(0.72_0.17_72)] hover:no-underline data-[state=open]:text-[oklch(0.72_0.17_72)]">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const questions = [
  {
    id: "item-1",
    title: "Como funciona o agendamento das aulas?",
    content:
      "Basta clicar no botão 'Agendar Aula' e o agendamento será realizado pelo site Calendly.com. Você receberá um e-mail de confirmação com todos os detalhes após o agendamento.",
  },
  {
    id: "item-2",
    title: "Qual é a política de cancelamento ou remarcação de aula?",
    content:
      "Peço que qualquer cancelamento ou necessidade de remarcação seja feito com, no mínimo, 24 horas de antecedência. Aulas canceladas com menos de 24h de aviso prévio serão cobradas normalmente.",
  },
  {
    id: "item-3",
    title: "Onde as aulas presenciais acontecem?",
    content:
      "As aulas presenciais são realizadas a domicílio na casa do aluno ou na minha casa, em Bento Gonçalves (RS). Aulas remotas são realizadas via Google Meet.",
  },
  {
    id: "item-4",
    title:
      "Como recebo os produtos digitais (tabs, backing tracks) após a compra?",
    content:
      "Imediatamente após a confirmação do pagamento, você receberá um e-mail automático contendo um link seguro para fazer o download dos seus arquivos. Verifique sua caixa de spam caso não o encontre.",
  },
  {
    id: "item-5",
    title: "Quais formas de pagamento são aceitas?",
    content:
      "Para produtos digitais e agendamento de aulas, aceitamos pagamentos via Cartão de Crédito e Pix.",
  },
  {
    id: "item-6",
    title: "Em quais formatos os arquivos da loja são entregues?",
    content:
      "As Backing Tracks são entregues em formato MP3 ou WAV de alta qualidade. As Tablaturas estão disponíveis em formato PDF e, na maioria dos casos, também em formato Guitar Pro (.gpx ou .gp5). Verifique a descrição de cada produto para mais detalhes.",
  },
  {
    id: "item-7",
    title: "Não encontrei minha dúvida aqui. Como posso entrar em contato?",
    content:
      "Para qualquer outra dúvida, por favor, entre em contato comigo por email, WhatsApp ou pelas redes sociais. Responderei o mais breve possível!",
  },
];