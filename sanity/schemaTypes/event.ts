import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Agenda",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: 'Ex: "Show acústico — Choro & MPB"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Data e horário",
      type: "datetime",
      options: { timeStep: 15 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "venue",
      title: "Local",
      type: "string",
      description: 'Ex: "Teatro Municipal"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "Cidade",
      type: "string",
      description: 'Ex: "Bento Gonçalves, RS"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "on-sale",
      options: {
        layout: "radio",
        list: [
          { title: "Ingressos à venda", value: "on-sale" },
          { title: "Entrada franca", value: "free" },
          { title: "Em breve", value: "soon" },
          { title: "Esgotado", value: "sold-out" },
        ],
      },
    }),
    defineField({
      name: "ticketUrl",
      title: "Link (ingressos ou evento)",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    }),
  ],
  orderings: [
    {
      title: "Data",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", venue: "venue", date: "date" },
    prepare({ title, venue, date }) {
      const when = date
        ? new Date(date).toLocaleDateString("pt-BR", {
            timeZone: "America/Sao_Paulo",
          })
        : "Sem data";
      return { title, subtitle: `${when} · ${venue ?? ""}` };
    },
  },
});
