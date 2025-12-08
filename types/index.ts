import { SanityAsset } from "@sanity/image-url";
import { PortableTextBlock } from "sanity";

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
  imageUrl: string;
  category: string;
  badges: string[];
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
    image: SanityAsset;
    buttonText: string;
    link: string;
  }[];
}
