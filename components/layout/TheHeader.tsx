import Link from "next/link";
import {
  Menu,
  Home,
  User,
  Store,
  BookTextIcon,
  Mail,
  CalendarPlus,
} from "lucide-react";
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
  { href: "/", label: "Início", icon: Home },
  { href: "/#sobre", label: "Sobre", icon: User },
  { href: "/loja", label: "Loja", icon: Store },
  { href: "/#aulas", label: "Aulas", icon: BookTextIcon },
  { href: "/#contato", label: "Contato", icon: Mail },
];

export function TheHeader() {
  return (
    <header className="bg-background supports-backdrop-filter:bg-background/90 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Image
              src="/logo.svg"
              height={50}
              width={50}
              alt="Logo"
              className="dark:invert"
            />
          </Link>
        </div>
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
        <div className="flex flex-1 items-center justify-end gap-3">
          <Button
            variant="default"
            asChild
            className="hidden xl:flex xl:justify-start"
          >
            <Link href="/aulas">
              <CalendarPlus className="h-5 w-5" />
              <span>Agende uma aula</span>
            </Link>
          </Button>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Image
                      src="/logo.svg"
                      height={30}
                      width={30}
                      alt="Logo"
                      className="dark:invert"
                    />
                    <span>Navegação</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={buttonVariants({
                        variant: "ghost",
                        className: "justify-start gap-3",
                      })}
                    >
                      <link.icon className="text-muted-foreground h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                  <Button asChild className="mt-4 justify-start gap-3">
                    <Link href="/aulas">
                      <CalendarPlus className="h-5 w-5" />
                      <span>Agende uma aula</span>
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
