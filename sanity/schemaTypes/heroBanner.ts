import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroBanner",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título Principal",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Imagem de Fundo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "buttonText",
      title: "Texto do Botão",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link de Destino",
      description: "Ex: /loja (interno) ou https://instagram.com (externo)",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
    }),
    defineField({
      name: "order",
      title: "Ordem de Exibição",
      type: "number",
      description: "Use 1 para o primeiro slide, 2 para o segundo, etc.",
      initialValue: 0,
    }),
    defineField({
      name: "active",
      title: "Ativo?",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
