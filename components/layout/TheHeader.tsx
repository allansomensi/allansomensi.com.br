"use client";

import Link from "next/link";
import { useState } from "react";
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
  { href: "/#aulas", label: "Aulas", icon: BookTextIcon },
  { href: "/loja", label: "Loja", icon: Store },
  { href: "/#sobre", label: "Sobre", icon: User },
  { href: "/#contato", label: "Contato", icon: Mail },
];

export function TheHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[oklch(0.08_0.018_265/0.95)] backdrop-blur-md">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex-1">
          <Link
            href="/"
            className="group flex items-center gap-3 text-lg font-bold"
          >
            <Image
              src="/logo.svg"
              height={38}
              width={38}
              alt="Logo"
              className="h-auto invert transition-opacity group-hover:opacity-80"
            />
            <span className="hidden text-sm font-bold tracking-widest text-white/70 uppercase sm:block">
              Allan Somensi
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={buttonVariants({
                variant: "ghost",
                className:
                  "text-sm font-medium tracking-wide text-white/60 transition-colors hover:bg-white/5 hover:text-[oklch(0.72_0.17_72)]",
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
            className="hidden items-center gap-2 rounded-md bg-[oklch(0.72_0.17_72)] px-4 py-2 text-sm font-semibold text-[oklch(0.08_0.02_60)] transition-all hover:scale-[1.02] hover:bg-[oklch(0.78_0.17_72)] active:scale-[0.98] xl:flex"
          >
            <CalendarPlus className="h-4 w-4" />
            <span>Agende uma aula</span>
          </a>

          <ThemeToggle />

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/10 bg-white/5 text-white hover:bg-white/10"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 border-white/10 bg-[oklch(0.1_0.018_265)]"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-3">
                    <Image
                      src="/logo.svg"
                      height={28}
                      width={28}
                      alt="Logo"
                      className="invert"
                    />
                    <span className="text-sm font-bold tracking-widest text-white/50 uppercase">
                      Allan Somensi
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-1 px-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-[oklch(0.72_0.17_72)]"
                    >
                      <link.icon className="h-4 w-4 opacity-50" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                  <div className="my-3 h-px bg-white/8" />
                  <a
                    href="https://calendly.com/allansomensi"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsSheetOpen(false)}
                    className="flex items-center gap-3 rounded-md bg-[oklch(0.72_0.17_72)] px-3 py-2.5 text-sm font-semibold text-[oklch(0.08_0.02_60)] transition-all hover:bg-[oklch(0.78_0.17_72)]"
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
