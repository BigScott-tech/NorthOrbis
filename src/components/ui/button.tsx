import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-obsidian shadow-gold hover:bg-gold-bright focus-visible:outline-gold",
  secondary:
    "bg-white text-obsidian hover:bg-platinum focus-visible:outline-white",
  ghost:
    "bg-transparent text-platinum hover:bg-white/10 focus-visible:outline-white",
  outline:
    "border border-gold/40 bg-gold/5 text-gold-soft hover:border-gold hover:bg-gold/10 focus-visible:outline-gold"
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base"
};

export function buttonVariants({ variant = "primary", size = "md", className }: ButtonOptions = {}) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );
}

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonOptions) {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
}
