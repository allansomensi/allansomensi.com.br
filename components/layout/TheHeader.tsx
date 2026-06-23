"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Início", icon: Home },
  { href: "/#aulas", label: "Aulas", icon: BookTextIcon },
  { href: "/loja", label: "Loja", icon: Store },
  { href: "/#sobre", label: "Sobre", icon: User },
  { href: "/#contato", label: "Contato", icon: Mail },
];

export function TheHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Gatilho rápido (20px) para a animação começar logo que o usuário sair do topo absoluto
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled
          ? "border-b border-white/5 bg-[oklch(0.08_0.018_265/0.85)] py-3 shadow-2xl backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex-1">
          <Link
            href="/"
            className="group flex w-fit items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-inner transition-colors group-hover:border-white/20 group-hover:bg-white/10">
              <Image
                src="/logo.svg"
                height={24}
                width={24}
                alt="Logo"
                className="h-auto w-auto opacity-90 invert transition-opacity group-hover:opacity-100"
              />
            </div>
            <span className="hidden text-sm font-bold tracking-[0.15em] text-white/90 uppercase sm:block">
              Allan Somensi
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={buttonVariants({
                variant: "ghost",
                className:
                  "text-sm font-medium tracking-wide text-white/60 transition-all hover:bg-white/5 hover:text-[oklch(0.72_0.17_72)]",
              })}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <a
            href="https://calendly.com/allansomensi"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-md bg-[oklch(0.72_0.17_72)] px-5 py-2.5 text-sm font-bold text-[oklch(0.08_0.02_60)] shadow-[0_0_15px_rgba(235,80,160,0.15)] transition-all duration-300 hover:scale-105 hover:bg-[oklch(0.78_0.17_72)] hover:shadow-[0_0_25px_rgba(235,80,160,0.3)] xl:flex"
          >
            <CalendarPlus className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
            <span>Agende uma aula</span>
          </a>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-lg border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 border-l border-white/10 bg-[oklch(0.1_0.018_265)]/95 backdrop-blur-xl"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <Image
                        src="/logo.svg"
                        height={20}
                        width={20}
                        alt="Logo"
                        className="invert"
                      />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-white/50 uppercase">
                      Allan Somensi
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-2 px-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="group flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <link.icon className="h-4 w-4 opacity-50 transition-transform group-hover:scale-110 group-hover:text-[oklch(0.72_0.17_72)] group-hover:opacity-100" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                  <div className="my-4 h-px w-full bg-white/10" />
                  <a
                    href="https://calendly.com/allansomensi"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsSheetOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-lg bg-[oklch(0.72_0.17_72)] px-4 py-3 text-sm font-bold text-[oklch(0.08_0.02_60)] transition-transform hover:scale-[1.02]"
                  >
                    <CalendarPlus className="h-4 w-4" />
                    <span>Agende uma aula</span>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
