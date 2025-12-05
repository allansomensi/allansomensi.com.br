import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export function Lessons() {
  return (
    <div id="aulas" className="py-8 lg:py-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-14 text-center text-4xl font-bold tracking-tighter">
          Faça Aulas Comigo
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {/* Card 1: Aulas Presenciais */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Aulas Presenciais</CardTitle>
              <CardDescription>
                Atendimento presencial na minha casa ou a domicílio em Bento
                Gonçalves (RS) e região.
              </CardDescription>
            </CardHeader>
            <CardContent className="grow">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="text-primary mr-2 h-4 w-4" />
                  Feedback imediato
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-2 h-4 w-4" />
                  Correções técnicas mais precisas
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-2 h-4 w-4" />
                  Material de apoio (Tabs, PDFs)
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="default" asChild>
                <a
                  href="https://calendly.com/allansomensi/presencial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar aula
                </a>
              </Button>
            </CardFooter>
          </Card>
          {/* Card 2: Aulas Online */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Aulas Online</CardTitle>
              <CardDescription>
                Estude do conforto da sua casa ou de qualquer lugar do mundo.
              </CardDescription>
            </CardHeader>
            <CardContent className="grow">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="text-primary mr-2 h-4 w-4" />
                  Aprenda de qualquer lugar
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-2 h-4 w-4" />
                  Metodologia adaptada às suas metas
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-2 h-4 w-4" />
                  Material de apoio (Tabs, PDFs)
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="default" asChild>
                <a
                  href="https://wa.me/5554981187806"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar aula
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
