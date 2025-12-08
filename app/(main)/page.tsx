import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Lessons } from "@/components/sections/Lessons";
import { Newsletter } from "@/components/sections/Newsletter";
import { StoreCategories } from "@/components/sections/StoreCategories";
import { TheHero } from "@/components/sections/TheHero";
import { client } from "@/sanity/lib/client";
import { heroBannersQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const banners = await client.fetch(heroBannersQuery);

  return (
    <main className="flex flex-col items-center">
      <TheHero banners={banners} />
      <Lessons />
      <StoreCategories />
      <About />
      <Faq />
      <Contact />
      <Newsletter />
    </main>
  );
}
