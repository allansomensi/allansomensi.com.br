import { defineField, defineType } from "sanity";

export default defineType({
  name: "storeHighlight",
  title: "Destaque da Loja",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: 'Ex: "Backing Tracks"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "string",
      description: "Uma linha descrevendo a categoria.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Texto Alternativo",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Link de Destino",
      type: "string",
      description: 'Rota interna. Ex: "/loja/backing-tracks"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: 'Ex: ".mp3", ".wav", "Rock · Blues · Metal"',
    }),
    defineField({
      name: "order",
      title: "Ordem de Exibição",
      type: "number",
      description: "1 = primeiro card, 2 = segundo, etc.",
      initialValue: 1,
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: "active",
      title: "Ativo?",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Ordem de Exibição",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
  },
});
