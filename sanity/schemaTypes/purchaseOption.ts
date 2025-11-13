import { defineField, defineType } from "sanity";

export default defineType({
  name: "purchaseOption",
  title: "Opção de Compra",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Nome da Opção",
      type: "string",
      description: 'Ex: "Combo: Tablatura + Vídeo Aula"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "optionId",
      title: "ID da Opção",
      type: "slug",
      options: {
        source: "name",
      },
      description: 'Um ID único para esta opção (ex: "p1-completo").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição da Opção",
      type: "string",
      description: 'Ex: "Tablatura e a vídeo aula completa de 30 min."',
    }),
    defineField({
      name: "price",
      title: "Preço (em BRL)",
      type: "number",
      description: "Use ponto como decimal. Ex: 80.00",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "checkoutLink",
      title: "Link de Checkout (Kiwify, etc)",
      type: "url",
      description: "O link direto para o pagamento desta opção.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
    },
  },
});
