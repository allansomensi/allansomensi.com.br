import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Lessons } from "@/components/sections/Lessons";
import { Newsletter } from "@/components/sections/Newsletter";
import { StoreCategories } from "@/components/sections/StoreCategories";
import { TheHero } from "@/components/sections/TheHero";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <TheHero />
      <Lessons />
      <StoreCategories />
      <About />
      <Faq />
      <Contact />
      <Newsletter />
    </main>
  );
}
