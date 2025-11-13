export type PurchaseOption = {
  id: string;
  name: string;
  description: string;
  price: string;
  kiwifyLink: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  category: "tablatura" | "backing-track" | "preset";
  badges: string[];
  purchaseOptions: PurchaseOption[];
};

export const PRODUCTS: Product[] = [
  // Tablaturas
  {
    id: "tab-1",
    title: "Arranjo Fingerstyle",
    description: "Partitura e tablatura completa do meu arranjo.",
    longDescription:
      "Este pacote contém a tablatura detalhada do meu arranjo. Ideal para quem quer aprender as nuances e técnicas que utilizei. Inclui o arquivo em PDF e Guitar Pro.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Vídeo Aula", "Guitar Pro"],
    purchaseOptions: [
      {
        id: "p1-basico",
        name: "Tablatura (PDF + GPX)",
        description: "Acesso imediato aos arquivos da tablatura.",
        price: "R$ 50,00",
        kiwifyLink: "#",
      },
      {
        id: "p1-completo",
        name: "Combo: Tablatura + Vídeo Aula",
        description: "Tablatura e a vídeo aula completa de 30 min.",
        price: "R$ 80,00",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "tab-2",
    title: "Arranjo Yesterday - Beatles",
    description: "Partitura e tablatura completa.",
    longDescription:
      "Aprenda meu arranjo para Yesterday - Beatles. Inclui PDF e GPX.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Iniciante"],
    purchaseOptions: [
      {
        id: "p2-basico",
        name: "Partitura (PDF)",
        description: "Acesso imediato ao arquivo PDF.",
        price: "R$ 15,00",
        kiwifyLink: "https://checkout.kiwify.com.br/LINK_PRODUTO_2",
      },
    ],
  },
  {
    id: "tab-3",
    title: "Top 20 Fusion Licks",
    description: "Licks de Fusion para improviso.",
    longDescription:
      "Coletânia de 20 licks de fusion, inspirado em guitarristas como Allan Holdsworth e Frank Gambale.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Intermediário"],
    purchaseOptions: [
      {
        id: "p3-basico",
        name: "Tablaturas (PDF)",
        description: "Download imediato das tablaturas.",
        price: "R$ 29,90",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "tab-4",
    title: "Arranjo Fingerstyle",
    description: "Partitura e tablatura completa do meu arranjo.",
    longDescription:
      "Este pacote contém a tablatura detalhada do meu arranjo. Ideal para quem quer aprender as nuances e técnicas que utilizei. Inclui o arquivo em PDF e Guitar Pro.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Vídeo Aula", "Guitar Pro"],
    purchaseOptions: [
      {
        id: "p1-basico",
        name: "Tablatura (PDF + GPX)",
        description: "Acesso imediato aos arquivos da tablatura.",
        price: "R$ 50,00",
        kiwifyLink: "#",
      },
      {
        id: "p1-completo",
        name: "Combo: Tablatura + Vídeo Aula",
        description: "Tablatura e a vídeo aula completa de 30 min.",
        price: "R$ 80,00",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "tab-5",
    title: "Arranjo Fingerstyle",
    description: "Partitura e tablatura completa do meu arranjo.",
    longDescription:
      "Este pacote contém a tablatura detalhada do meu arranjo. Ideal para quem quer aprender as nuances e técnicas que utilizei. Inclui o arquivo em PDF e Guitar Pro.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Vídeo Aula", "Guitar Pro"],
    purchaseOptions: [
      {
        id: "p1-basico",
        name: "Tablatura (PDF + GPX)",
        description: "Acesso imediato aos arquivos da tablatura.",
        price: "R$ 50,00",
        kiwifyLink: "#",
      },
      {
        id: "p1-completo",
        name: "Combo: Tablatura + Vídeo Aula",
        description: "Tablatura e a vídeo aula completa de 30 min.",
        price: "R$ 80,00",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "tab-6",
    title: "Arranjo Fingerstyle",
    description: "Partitura e tablatura completa do meu arranjo.",
    longDescription:
      "Este pacote contém a tablatura detalhada do meu arranjo. Ideal para quem quer aprender as nuances e técnicas que utilizei. Inclui o arquivo em PDF e Guitar Pro.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Vídeo Aula", "Guitar Pro"],
    purchaseOptions: [
      {
        id: "p1-basico",
        name: "Tablatura (PDF + GPX)",
        description: "Acesso imediato aos arquivos da tablatura.",
        price: "R$ 50,00",
        kiwifyLink: "#",
      },
      {
        id: "p1-completo",
        name: "Combo: Tablatura + Vídeo Aula",
        description: "Tablatura e a vídeo aula completa de 30 min.",
        price: "R$ 80,00",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "tab-7",
    title: "Arranjo Fingerstyle",
    description: "Partitura e tablatura completa do meu arranjo.",
    longDescription:
      "Este pacote contém a tablatura detalhada do meu arranjo. Ideal para quem quer aprender as nuances e técnicas que utilizei. Inclui o arquivo em PDF e Guitar Pro.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Vídeo Aula", "Guitar Pro"],
    purchaseOptions: [
      {
        id: "p1-basico",
        name: "Tablatura (PDF + GPX)",
        description: "Acesso imediato aos arquivos da tablatura.",
        price: "R$ 50,00",
        kiwifyLink: "#",
      },
      {
        id: "p1-completo",
        name: "Combo: Tablatura + Vídeo Aula",
        description: "Tablatura e a vídeo aula completa de 30 min.",
        price: "R$ 80,00",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "tab-8",
    title: "Arranjo Fingerstyle",
    description: "Partitura e tablatura completa do meu arranjo.",
    longDescription:
      "Este pacote contém a tablatura detalhada do meu arranjo. Ideal para quem quer aprender as nuances e técnicas que utilizei. Inclui o arquivo em PDF e Guitar Pro.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Vídeo Aula", "Guitar Pro"],
    purchaseOptions: [
      {
        id: "p1-basico",
        name: "Tablatura (PDF + GPX)",
        description: "Acesso imediato aos arquivos da tablatura.",
        price: "R$ 50,00",
        kiwifyLink: "#",
      },
      {
        id: "p1-completo",
        name: "Combo: Tablatura + Vídeo Aula",
        description: "Tablatura e a vídeo aula completa de 30 min.",
        price: "R$ 80,00",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "tab-9",
    title: "Arranjo Fingerstyle",
    description: "Partitura e tablatura completa do meu arranjo.",
    longDescription:
      "Este pacote contém a tablatura detalhada do meu arranjo. Ideal para quem quer aprender as nuances e técnicas que utilizei. Inclui o arquivo em PDF e Guitar Pro.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Vídeo Aula", "Guitar Pro"],
    purchaseOptions: [
      {
        id: "p1-basico",
        name: "Tablatura (PDF + GPX)",
        description: "Acesso imediato aos arquivos da tablatura.",
        price: "R$ 50,00",
        kiwifyLink: "#",
      },
      {
        id: "p1-completo",
        name: "Combo: Tablatura + Vídeo Aula",
        description: "Tablatura e a vídeo aula completa de 30 min.",
        price: "R$ 80,00",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "tab-10",
    title: "Arranjo Fingerstyle",
    description: "Partitura e tablatura completa do meu arranjo.",
    longDescription:
      "Este pacote contém a tablatura detalhada do meu arranjo. Ideal para quem quer aprender as nuances e técnicas que utilizei. Inclui o arquivo em PDF e Guitar Pro.",
    imageUrl: "/banners/demo1.jpg",
    category: "tablatura",
    badges: ["PDF", "Vídeo Aula", "Guitar Pro"],
    purchaseOptions: [
      {
        id: "p1-basico",
        name: "Tablatura (PDF + GPX)",
        description: "Acesso imediato aos arquivos da tablatura.",
        price: "R$ 50,00",
        kiwifyLink: "#",
      },
      {
        id: "p1-completo",
        name: "Combo: Tablatura + Vídeo Aula",
        description: "Tablatura e a vídeo aula completa de 30 min.",
        price: "R$ 80,00",
        kiwifyLink: "#",
      },
    ],
  },

  // Backing Tracks
  {
    id: "bt-1",
    title: "Blues Jam em Am (120bpm)",
    description: "Backing track profissional para improviso.",
    longDescription:
      "Uma backing track de alta qualidade de um blues clássico em A menor. Gravada com baixo e bateria reais.",
    imageUrl: "/banners/demo2.jpg",
    category: "backing-track",
    badges: ["MP3", "WAV"],
    purchaseOptions: [
      {
        id: "bt1-basico",
        name: "Blues Jam em Am",
        description: "Download imediato dos arquivos de áudio.",
        price: "R$ 10,99",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "bt-2",
    title: "Bossa Nova Jam em Dm (90bpm)",
    description: "Backing track de Bossa Nova.",
    longDescription:
      "Bossa Nova em D menor. Violão de nylon, baixo acústico e uma percussão leve. Ideal para improvisar.",
    imageUrl: "/banners/demo2.jpg",
    category: "backing-track",
    badges: ["MP3"],
    purchaseOptions: [
      {
        id: "bt2-basico",
        name: "Bossa Nova Jam em Dm (MP3)",
        description: "Download imediato do arquivo MP3.",
        price: "R$ 12,00",
        kiwifyLink: "#",
      },
    ],
  },

  // Presets
  {
    id: "pre-1",
    title: "Timbre Petrucci",
    description: "Preset para a M-VAVE MK300",
    longDescription:
      "O timbre utilizado por Petrucci no Dream Teather. Inclui o preset e um 'Impulse Response' (IR) customizado.",
    imageUrl: "/banners/demo3.jpg",
    category: "preset",
    badges: ["MK300", "IR Customizado"],
    purchaseOptions: [
      {
        id: "pre1-basico",
        name: "Preset Petrucci",
        description: "Download imediato do preset + IR.",
        price: "R$ 30,00",
        kiwifyLink: "#",
      },
    ],
  },
  {
    id: "pre-2",
    title: "Timbre Zakk Wylde",
    description: "Preset para a M-VAVE MK300",
    longDescription:
      "O timbre utilizado por Zakk no Ozzy. Inclui o preset e um 'Impulse Response' (IR) customizado.",
    imageUrl: "/banners/demo3.jpg",
    category: "preset",
    badges: ["MK300", "IR Customizado"],
    purchaseOptions: [
      {
        id: "pre2-basico",
        name: "Preset Zakk Wylde",
        description: "Download imediato do preset + IR.",
        price: "R$ 30,00",
        kiwifyLink: "#",
      },
    ],
  },
];
