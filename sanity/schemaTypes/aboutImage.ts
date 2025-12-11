import { defineType, defineField } from "sanity";

export const aboutImage = defineType({
  name: "aboutImage",
  title: "Sobre Mim",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título (para Alt Text)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
