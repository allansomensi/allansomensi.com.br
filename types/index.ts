import { PortableTextBlock } from "sanity";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  alt?: string;
}

export interface SanityPurchaseOption {
  _key: string;
  name: string;
  description: string;
  price: number;
  checkoutLink: string;
}

export interface SanityProduct {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  longDescription: PortableTextBlock[];
  mainImage: SanityImage;
  imageUrl: string;
  imageAlt?: string;
  category: string;
  categorySlug?: string;
  badges?: string[];
  purchaseOptions: SanityPurchaseOption[];
}

export interface LojaPageData {
  tablaturas: SanityProduct[];
  backingTracks: SanityProduct[];
  presets: SanityProduct[];
}

export interface HeroBannerProps {
  banners: {
    _id: string;
    title: string;
    description: string;
    image: SanityImage;
    imageAlt?: string;
    buttonText: string;
    link: string;
  }[];
}

export interface AboutProps {
  image: {
    title: string;
    image: SanityImage;
    imageAlt?: string;
  } | null;
}

export interface StoreHighlight {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  href: string;
  tags?: string[];
  order: number;
}

export interface AgendaEvent {
  _id: string;
  title: string;
  date: string;
  venue: string;
  city: string;
  ticketUrl?: string;
  status?: "on-sale" | "free" | "sold-out" | "soon";
}
