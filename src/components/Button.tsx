import clsx from "clsx";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all",
        "font-body focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep focus-visible:ring-offset-2",
        "active:scale-[0.98]",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-5 py-3 text-[15px]",
        size === "lg" && "px-6 py-4 text-base",
        variant === "primary" && [
          "text-cream",
          "bg-gradient-to-br from-sage to-sage-deep",
          "shadow-[0_6px_16px_rgba(71,89,58,0.32),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.15)]",
          "border border-white/20",
          "hover:from-sage-deep hover:to-sage-ink"
        ],
        variant === "secondary" && [
          "bg-transparent text-ink border border-ink/20",
          "hover:bg-cream-warm"
        ],
        variant === "ghost" && [
          "bg-transparent text-ink-soft",
          "hover:text-ink hover:bg-cream-warm"
        ],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
