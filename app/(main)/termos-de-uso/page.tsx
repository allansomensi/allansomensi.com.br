import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de uso",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Termos de uso" updatedAt="outubro de 2026">
      <p>
        Ao utilizar este site, contratar aulas ou adquirir produtos digitais,
        você concorda com os termos abaixo.
      </p>

      <h2>Aulas</h2>
      <ul>
        <li>
          Cancelamentos e remarcações devem ser feitos com, no mínimo, 24 horas
          de antecedência.
        </li>
        <li>
          Aulas canceladas com menos de 24 horas de aviso prévio são cobradas
          normalmente.
        </li>
      </ul>

      <h2>Produtos digitais</h2>
      <ul>
        <li>
          Após a confirmação do pagamento, o link de download é enviado
          automaticamente para o e-mail informado na compra.
        </li>
        <li>
          Os arquivos são licenciados para uso pessoal. Não é permitido
          revender, redistribuir ou compartilhar publicamente o material.
        </li>
        <li>
          Reembolsos seguem as regras da plataforma de pagamento utilizada e o
          Código de Defesa do Consumidor.
        </li>
      </ul>

      <h2>Propriedade intelectual</h2>
      <p>
        Textos, imagens, gravações e materiais disponibilizados neste site são
        de autoria de {site.name}, salvo indicação em contrário, e não podem ser
        reproduzidos sem autorização.
      </p>

      <h2>Contato</h2>
      <p>
        Dúvidas sobre estes termos? Escreva para{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
