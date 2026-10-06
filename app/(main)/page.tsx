import { About } from "@/components/sections/About";
import { Agenda } from "@/components/sections/Agenda";
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
  upcomingEventsQuery,
} from "@/sanity/lib/queries";

// Revalida a cada hora para que shows já realizados saiam da agenda.
export const revalidate = 3600;

export default async function Home() {
  const [banners, aboutImage, storeHighlights, events] = await Promise.all([
    client.fetch(heroBannersQuery),
    client.fetch(aboutImageQuery),
    client.fetch(storeHighlightsQuery),
    client.fetch(upcomingEventsQuery),
  ]);

  return (
    <>
      <TheHero banners={banners} />
      <Lessons />
      <StoreCategories highlights={storeHighlights} />
      <Agenda events={events} />
      <About image={aboutImage} />
      <Faq />
      <Contact />
      <Newsletter />
    </>
  );
}
