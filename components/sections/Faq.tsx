import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <div
      id="faq"
      className="mx-auto w-full max-w-3xl space-y-7 px-4 py-8 sm:py-10"
    >
      <div className="space-y-2">
        <h2 className="text-center text-4xl font-bold tracking-tighter">
          Perguntas Frequentes
        </h2>
        <p className="text-muted-foreground max-w-2xl text-center">
          Aqui estão as dúvidas mais comuns sobre aulas, produtos digitais e
          agendamentos. Se não encontrar o que procura, sinta-se à vontade para
          entrar em contato comigo.
        </p>
      </div>
      <Accordion
        className="bg-card dark:bg-card/50 w-full -space-y-px rounded-lg shadow"
        collapsible
        defaultValue="item-1"
        type="single"
      >
        {questions.map((item) => (
          <AccordionItem
            className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
            key={item.id}
            value={item.id}
          >
            <AccordionTrigger className="px-4 py-4 text-left text-[15px] leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-4 pb-4">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
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
      "As aulas presenciais são realizadas a domicílio na casa do aluno ou na minha casa, aulas remotas são realizadas via Google Meet.",
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
