import { Faq } from "@/components/sections/Faq";
import { Newsletter } from "@/components/sections/Newsletter";
import { TheHero } from "@/components/sections/TheHero";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <TheHero />
      <Faq />
      <Newsletter />
    </main>
  );
}
