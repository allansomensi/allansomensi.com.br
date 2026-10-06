const WHATSAPP_NUMBER = "5554981187806";

export const site = {
  name: "Allan Somensi",
  url: "https://allansomensi.com.br",
  role: "Guitarrista & professor",
  location: "Bento Gonçalves, RS",
  email: "contato@allansomensi.com.br",
  whatsapp: {
    number: WHATSAPP_NUMBER,
    display: "(54) 98118-7806",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  calendly: {
    base: "https://calendly.com/allansomensi",
    presencial: "https://calendly.com/allansomensi/presencial",
  },
  socials: {
    instagram: "https://instagram.com/allansomensi",
    youtube: "https://youtube.com/allansomensi",
    spotify: "https://spotify.com/allansomensi",
    facebook: "https://facebook.com/allansomensi",
  },
} as const;

export const mainNav = [
  { href: "/#aulas", label: "Aulas", section: "aulas" },
  { href: "/loja", label: "Loja", section: "loja" },
  { href: "/#agenda", label: "Agenda", section: "agenda" },
  { href: "/#sobre", label: "Sobre", section: "sobre" },
  { href: "/#contato", label: "Contato", section: "contato" },
] as const;

export const storeCategories = [
  {
    href: "/loja/tablaturas",
    label: "Tablaturas",
    description:
      "Transcrições, arranjos e exercícios para acelerar seu estudo.",
  },
  {
    href: "/loja/backing-tracks",
    label: "Backing Tracks",
    description:
      "Faixas em alta qualidade para tocar junto e treinar o seu som.",
  },
  {
    href: "/loja/presets",
    label: "Presets",
    description: "Timbres prontos para usar na sua pedaleira digital.",
  },
] as const;

export function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}
