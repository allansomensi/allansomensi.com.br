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
      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
    >
      {children}
    </Link>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </a>
  );
}

export function TheFooter() {
  return (
    <footer className="bg-background w-full border-t py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-6">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              width={32}
              height={32}
              alt="Allan Somensi Logo"
              className="dark:invert"
            />
            <span className="text-lg font-semibold">Allan Somensi</span>
          </div>

          <FooterLink href="/aulas">Agende sua aula de guitarra</FooterLink>
          <div className="mt-2 flex items-center gap-4">
            <SocialIcon href="https://instagram.com/allanrsomensi">
              <Image
                src={"/icons/instagram.svg"}
                width={20}
                height={20}
                alt="Instagram Icon"
                className="dark:invert"
              />
              <span className="sr-only">Instagram</span>
            </SocialIcon>
            <SocialIcon href="https://facebook.com/allanrsomensi">
              <Image
                src={"/icons/facebook.svg"}
                width={20}
                height={20}
                alt="Facebook Icon"
                className="dark:invert"
              />
              <span className="sr-only">Facebook</span>
            </SocialIcon>
            <SocialIcon href="https://spotify.com/allansomensi">
              <Image
                src={"/icons/spotify.svg"}
                width={20}
                height={20}
                alt="Spotify Icon"
                className="dark:invert"
              />
              <span className="sr-only">Spotify</span>
            </SocialIcon>
            <SocialIcon href="https://youtube.com/allansomensi">
              <Image
                src={"/icons/youtube.svg"}
                width={20}
                height={20}
                alt="Youtube Icon"
                className="dark:invert"
              />
              <span className="sr-only">YouTube</span>
            </SocialIcon>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:items-start">
          <h4 className="mb-2 font-semibold">Loja</h4>
          <FooterLink href="/loja">Backing Tracks</FooterLink>
          <FooterLink href="/partituras">Tablaturas</FooterLink>
          <FooterLink href="/backing-tracks">Presets</FooterLink>
        </div>

        <div className="flex flex-col items-center gap-2 sm:items-start">
          <h4 className="mb-2 font-semibold">Navegação</h4>
          <FooterLink href="#newsletter">Newsletter</FooterLink>
          <FooterLink href="#contato">Contato</FooterLink>
          <FooterLink href="#sobre">Sobre</FooterLink>
        </div>

        <div className="flex flex-col items-center gap-2 sm:items-start">
          <h4 className="mb-2 font-semibold">Suporte</h4>
          <FooterLink href="/politica-de-privacidade">
            Política de Privacidade
          </FooterLink>
          <FooterLink href="/termos-de-uso">Termos de Uso</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
        </div>
      </div>

      <div className="container mx-auto mt-12 border-t px-4 pt-8 md:px-6">
        <p className="text-muted-foreground text-center text-sm">
          © {new Date().getFullYear()} Allan Somensi. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
