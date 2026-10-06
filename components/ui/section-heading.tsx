import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
  children?: React.ReactNode;
}

/**
 * Cabeçalho padrão das seções: rótulo mono numerado, título com
 * destaque em serifa itálica e descrição opcional.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
  children,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        className,
      )}
    >
      <p className="eyebrow">
        {index && <span className="text-subtle">{index}</span>}
        {eyebrow}
      </p>
      <Heading
        className={cn(
          "display max-w-3xl text-4xl sm:text-5xl lg:text-6xl",
          Heading === "h1" && "lg:text-7xl",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "text-muted-foreground max-w-xl text-base leading-relaxed sm:text-lg",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
