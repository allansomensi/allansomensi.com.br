import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutImage",
  title: "Sobre Mim",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título Interno",
      type: "string",
      description:
        "Apenas para identificação no painel (Ex: 'Foto de Perfil Principal')",
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
          description:
            "Descreva a imagem detalhadamente para acessibilidade e SEO.",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
