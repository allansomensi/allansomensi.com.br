import Image from "next/image";
import Link from "next/link";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-white/40 transition-colors hover:text-[oklch(0.72_0.17_72)]"
    >
      {children}
    </Link>
  );
}

function SocialIcon({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-white/40 transition-all hover:border-[oklch(0.72_0.17_72/0.3)] hover:bg-[oklch(0.72_0.17_72/0.1)] hover:text-[oklch(0.72_0.17_72)]"
    >
      {children}
    </a>
  );
}

export function TheFooter() {
  return (
    <footer className="border-t border-white/6 bg-[oklch(0.07_0.015_265)]">
      {/* Top line */}
      <div className="h-px bg-linear-to-r from-transparent via-[oklch(0.72_0.17_72/0.4)] to-transparent" />

      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 md:grid-cols-4 md:px-6">
        {/* Brand */}
        <div className="flex flex-col gap-5 sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              width={32}
              height={32}
              alt="Allan Somensi Logo"
              className="opacity-80 invert"
            />
            <span className="text-sm font-bold tracking-widest text-white/50 uppercase">
              Allan Somensi
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/35">
            Professor de guitarra e violão em Bento Gonçalves, RS. Aulas
            presenciais e online.
          </p>
          <a
            href="https://calendly.com/allansomensi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center rounded-md bg-[oklch(0.72_0.17_72/0.12)] px-3.5 py-2 text-sm font-semibold text-[oklch(0.72_0.17_72)] transition-colors hover:bg-[oklch(0.72_0.17_72/0.2)]"
          >
            Agende sua aula →
          </a>
          {/* Social icons */}
          <div className="flex items-center gap-2">
            <SocialIcon
              href="https://instagram.com/allansomensi"
              label="Instagram"
            >
              <Image
                src="/icons/instagram.svg"
                width={16}
                height={16}
                alt=""
                className="opacity-60 invert"
              />
            </SocialIcon>
            <SocialIcon
              href="https://facebook.com/allansomensi"
              label="Facebook"
            >
              <Image
                src="/icons/facebook.svg"
                width={16}
                height={16}
                alt=""
                className="opacity-60 invert"
              />
            </SocialIcon>
            <SocialIcon href="https://spotify.com/allansomensi" label="Spotify">
              <Image
                src="/icons/spotify.svg"
                width={16}
                height={16}
                alt=""
                className="opacity-60 invert"
              />
            </SocialIcon>
            <SocialIcon href="https://youtube.com/allansomensi" label="YouTube">
              <Image
                src="/icons/youtube.svg"
                width={16}
                height={16}
                alt=""
                className="opacity-60 invert"
              />
            </SocialIcon>
          </div>
        </div>

        {/* Shop */}
        <div className="flex flex-col gap-3">
          <h4 className="mb-1 text-xs font-bold tracking-widest text-white/30 uppercase">
            Loja
          </h4>
          <FooterLink href="/loja/backing-tracks">Backing Tracks</FooterLink>
          <FooterLink href="/loja/tablaturas">Tablaturas</FooterLink>
          <FooterLink href="/loja/presets">Presets</FooterLink>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <h4 className="mb-1 text-xs font-bold tracking-widest text-white/30 uppercase">
            Navegação
          </h4>
          <FooterLink href="/#newsletter">Newsletter</FooterLink>
          <FooterLink href="/#contato">Contato</FooterLink>
          <FooterLink href="/#sobre">Sobre</FooterLink>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3">
          <h4 className="mb-1 text-xs font-bold tracking-widest text-white/30 uppercase">
            Suporte
          </h4>
          <FooterLink href="/politica-de-privacidade">
            Política de Privacidade
          </FooterLink>
          <FooterLink href="/termos-de-uso">Termos de Uso</FooterLink>
          <FooterLink href="/#faq">FAQ</FooterLink>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-4 py-5 md:px-6">
        <p className="text-center text-xs text-white/20">
          © {new Date().getFullYear()} Allan Somensi. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
