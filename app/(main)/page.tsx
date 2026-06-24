import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Lessons } from "@/components/sections/Lessons";
import { Newsletter } from "@/components/sections/Newsletter";
import { StoreCategories } from "@/components/sections/StoreCategories";
import { TheHero } from "@/components/sections/TheHero";
import { client } from "@/sanity/lib/client";
import {
  aboutImageQuery,
  heroBannersQuery,
  storeHighlightsQuery,
} from "@/sanity/lib/queries";

export default async function Home() {
  const [banners, aboutImage, storeHighlights] = await Promise.all([
    client.fetch(heroBannersQuery),
    client.fetch(aboutImageQuery),
    client.fetch(storeHighlightsQuery),
  ]);

  return (
    <main className="flex flex-col items-center">
      <TheHero banners={banners} />
      <Lessons />
      <StoreCategories highlights={storeHighlights} />
      <About image={aboutImage} />
      <Faq />
      <Contact />
      <Newsletter />
    </main>
  );
}
