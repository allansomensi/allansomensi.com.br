const WORDS = [
  "Guitarra",
  "Violão 7 cordas",
  "Rock",
  "Choro",
  "Fusion",
  "MPB",
  "Blues",
  "Improvisação",
  "Harmonia",
  "Bossa nova",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {WORDS.map((word, i) => (
        <li key={word} className="flex items-center">
          <span
            className={
              i % 2 === 0
                ? "text-foreground/85 px-6 text-2xl font-semibold tracking-tight md:px-10 md:text-4xl"
                : "accent text-foreground/60 px-6 text-3xl md:px-10 md:text-5xl"
            }
          >
            {word}
          </span>
          <span className="bg-primary h-1.5 w-1.5 rotate-45" />
        </li>
      ))}
    </ul>
  );
}

/** Faixa contínua com os estilos e instrumentos — dá ritmo à página. */
export function Marquee() {
  return (
    <div className="border-line relative w-full overflow-hidden border-y [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] py-6 md:py-8">
      <p className="sr-only">Estilos: {WORDS.join(", ")}.</p>
      <div
        className="animate-marquee flex w-max hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
