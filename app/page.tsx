import { Faq } from "@/components/sections/Faq";
import { Lessons } from "@/components/sections/Lessons";
import { Newsletter } from "@/components/sections/Newsletter";
import { ShopCategories } from "@/components/sections/ShopCategories";
import { TheHero } from "@/components/sections/TheHero";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <TheHero />
      <Lessons />
      <ShopCategories />
      <Faq />
      <Newsletter />
    </main>
  );
}
