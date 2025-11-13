import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Produto",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título do Produto",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description:
        'O identificador único do produto na URL. Ex: "arranjo-fingerstyle-demo"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição Curta (para cards)",
      type: "string",
      description: "Um resumo de uma linha do produto.",
    }),
    defineField({
      name: "longDescription",
      title: "Descrição Longa (para página)",
      type: "array",
      of: [{ type: "block" }],
      description: "A descrição detalhada que aparecerá na página do produto.",
    }),
    defineField({
      name: "mainImage",
      title: "Imagem de Capa",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "badges",
      title: "Badges (Formatos incluídos)",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: 'Ex: "PDF", "Guitar Pro", "Vídeo Aula"',
    }),
    defineField({
      name: "purchaseOptions",
      title: "Opções de Compra",
      type: "array",
      of: [{ type: "purchaseOption" }],
      description: "Adicione os diferentes pacotes (Básico, Completo, etc.)",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "mainImage",
    },
  },
});
