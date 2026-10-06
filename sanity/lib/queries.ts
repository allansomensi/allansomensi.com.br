import { groq } from "next-sanity";

const productFields = groq`{
    _id,
    title,
    slug,
    description,
    longDescription,
    mainImage,
    "imageUrl": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    "category": category->title,
    "categorySlug": category->slug.current,
    badges,
    purchaseOptions
  }`;

export const lojaQuery = groq`{
  "tablaturas": *[_type == "product" && category->slug.current == "tablatura"] | order(_createdAt desc) [0...3] ${productFields},
  "backingTracks": *[_type == "product" && category->slug.current == "backing-track"] | order(_createdAt desc) [0...3] ${productFields},
  "presets": *[_type == "product" && category->slug.current == "preset"] | order(_createdAt desc) [0...3] ${productFields}
}`;

export const backingTracksQuery = groq`{
  "products": *[_type == "product" && category->slug.current == "backing-track"] | order(_createdAt desc) [$start...$end] ${productFields},
  "totalCount": count(*[_type == "product" && category->slug.current == "backing-track"])
}`;

export const tablaturasQuery = groq`{
  "products": *[_type == "product" && category->slug.current == "tablatura"] | order(_createdAt desc) [$start...$end] ${productFields},
  "totalCount": count(*[_type == "product" && category->slug.current == "tablatura"])
}`;

export const presetsQuery = groq`{
  "products": *[_type == "product" && category->slug.current == "preset"] | order(_createdAt desc) [$start...$end] ${productFields},
  "totalCount": count(*[_type == "product" && category->slug.current == "preset"])
}`;

export const heroBannersQuery = groq`
  *[_type == "heroBanner" && active == true] | order(order asc) {
    _id,
    title,
    description,
    image,
    "imageAlt": image.alt,
    buttonText,
    link,
    order
  }
`;

export const aboutImageQuery = groq`
  *[_type == "aboutImage"] | order(_updatedAt desc)[0] {
    title,
    image,
    "imageAlt": image.alt
  }
`;

export const storeHighlightsQuery = groq`
  *[_type == "storeHighlight" && active == true] | order(order asc) {
    _id,
    title,
    description,
    image,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    href,
    tags,
    order
  }
`;

// Mantém o evento visível até ~6h após o início.
export const upcomingEventsQuery = groq`
  *[_type == "event" && dateTime(date) > dateTime(now()) - 60 * 60 * 6] | order(date asc) [0...8] {
    _id,
    title,
    date,
    venue,
    city,
    ticketUrl,
    status
  }
`;
