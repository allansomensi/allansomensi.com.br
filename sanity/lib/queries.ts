import { groq } from "next-sanity";

export const lojaQuery = groq`{
  "tablaturas": *[_type == "product" && category->slug.current == "tablatura"] | order(_createdAt desc) [0...3] {
    _id,
    title,
    slug,
    description,
    longDescription,
    "imageUrl": mainImage.asset->url,
    "category": category->title,
    badges,
    purchaseOptions
  },
  "backingTracks": *[_type == "product" && category->slug.current == "backing-track"] | order(_createdAt desc) [0...3] {
    _id,
    title,
    slug,
    description,
    longDescription,
    "imageUrl": mainImage.asset->url,
    "category": category->title,
    badges,
    purchaseOptions
  },
  "presets": *[_type == "product" && category->slug.current == "preset"] | order(_createdAt desc) [0...3] {
    _id,
    title,
    slug,
    description,
    longDescription,
    "imageUrl": mainImage.asset->url,
    "category": category->title,
    badges,
    purchaseOptions
  }
}`;

export const backingTracksQuery = groq`{
  "products": *[_type == "product" && category->slug.current == "backing-track"] | order(_createdAt desc) [$start...$end] {
    _id,
    title,
    slug,
    description,
    longDescription,
    "imageUrl": mainImage.asset->url,
    "category": category->title,
    badges,
    purchaseOptions
  },
  "totalCount": count(*[_type == "product" && category->slug.current == "backing-track"])
}`;

export const tablaturasQuery = groq`{
  "products": *[_type == "product" && category->slug.current == "tablatura"] | order(_createdAt desc) [$start...$end] {
    _id,
    title,
    slug,
    description,
    longDescription,
    "imageUrl": mainImage.asset->url,
    "category": category->title,
    badges,
    purchaseOptions
  },
  "totalCount": count(*[_type == "product" && category->slug.current == "tablatura"])
}`;

export const presetsQuery = groq`{
  "products": *[_type == "product" && category->slug.current == "preset"] | order(_createdAt desc) [$start...$end] {
    _id,
    title,
    slug,
    description,
    longDescription,
    "imageUrl": mainImage.asset->url,
    "category": category->title,
    badges,
    purchaseOptions
  },
  "totalCount": count(*[_type == "product" && category->slug.current == "preset"])
}`;

export const heroBannersQuery = groq`
  *[_type == "heroBanner" && active == true] | order(order asc) {
    _id,
    title,
    description,
    image,
    buttonText,
    link,
    order
  }
`;
