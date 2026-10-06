import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { isExternal } from "@/lib/site";

export const actionVariants = cva(
  "group/action inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ease-out-expo select-none disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.8_0.145_74/0.55)] hover:bg-primary-hover hover:shadow-[0_12px_40px_-8px_oklch(0.8_0.145_74/0.7)] active:scale-[0.98]",
        secondary:
          "border border-line-strong bg-white/[0.04] text-foreground backdrop-blur-md hover:border-white/30 hover:bg-white/[0.08] active:scale-[0.98]",
        ghost: "text-foreground/80 hover:text-primary",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-7 text-[0.95rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ActionLinkProps = VariantProps<typeof actionVariants> &
  Omit<React.ComponentProps<"a">, "href"> & { href: string };

/** Link com aparência de botão. Abre links externos em nova aba. */
export function ActionLink({
  href,
  variant,
  size,
  className,
  ...props
}: ActionLinkProps) {
  const classes = cn(actionVariants({ variant, size }), className);

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
        {...props}
      />
    );
  }

  return <Link href={href} className={classes} {...props} />;
}
