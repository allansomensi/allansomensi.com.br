import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Política de privacidade" updatedAt="outubro de 2026">
      <p>
        Esta política explica quais dados pessoais são coletados neste site,
        como são usados e quais são os seus direitos, em conformidade com a Lei
        Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
      </p>

      <h2>Dados coletados</h2>
      <ul>
        <li>
          <strong>Newsletter:</strong> o seu endereço de e-mail, quando você se
          inscreve voluntariamente.
        </li>
        <li>
          <strong>Agendamento de aulas:</strong> os dados que você informa ao
          agendar pelo Calendly ou ao entrar em contato pelo WhatsApp ou e-mail.
        </li>
        <li>
          <strong>Compras:</strong> os pagamentos são processados por
          plataformas parceiras. Não tenho acesso aos dados do seu cartão.
        </li>
        <li>
          <strong>Navegação:</strong> métricas anônimas e agregadas de acesso
          (Vercel Analytics), sem uso de cookies de rastreamento.
        </li>
      </ul>

      <h2>Como os dados são usados</h2>
      <p>
        Os dados são utilizados exclusivamente para enviar a newsletter,
        organizar aulas, entregar produtos adquiridos e responder ao seu
        contato. Seus dados não são vendidos nem compartilhados com terceiros
        para fins de marketing.
      </p>

      <h2>Serviços de terceiros</h2>
      <p>
        Este site utiliza serviços como Kit (newsletter), Calendly
        (agendamentos), plataformas de pagamento (checkout dos produtos) e
        Vercel (hospedagem e métricas). Cada serviço possui a sua própria
        política de privacidade.
      </p>

      <h2>Seus direitos</h2>
      <p>
        Você pode, a qualquer momento, solicitar acesso, correção ou exclusão
        dos seus dados, além de cancelar a inscrição na newsletter pelo link
        presente em todos os e-mails.
      </p>

      <h2>Contato</h2>
      <p>
        Para qualquer solicitação sobre os seus dados, escreva para{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
