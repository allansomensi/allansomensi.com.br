import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "../ui/theme-toggle";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/loja", label: "Loja" },
  { href: "/agenda", label: "Agenda" },
  { href: "/contato", label: "Contato" },
];

export function TheHeader() {
  return (
    <header className="bg-background supports-backdrop-filter:bg-background/90 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Image
            src="/logo.svg"
            height={50}
            width={50}
            alt="Logo"
            className="dark:invert"
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={buttonVariants({ variant: "ghost" })}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline" size="icon" asChild>
            <Link href="/carrinho">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Abrir carrinho de compras</span>
            </Link>
          </Button>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Navegação</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
