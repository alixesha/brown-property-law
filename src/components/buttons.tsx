import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type AppRoute =
  | "/"
  | "/about"
  | "/services"
  | "/contact"
  | "/services/residential-closings"
  | "/services/residential-evictions"
  | "/services/land-trust"
  | "/services/hoa-condo-association";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const variants = {
  solid: "bg-primary text-primary-foreground hover:bg-secondary shadow-lift hover:shadow-soft",
  brass: "bg-brass text-brass-foreground hover:brightness-108 shadow-lift hover:shadow-soft",
  outline:
    "border border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
  outlineLight:
    "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary",
} as const;

type ButtonLinkProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  /** Internal route (TanStack Link). */
  to?: AppRoute;
  /** External URL or tel:/mailto: link. */
  href?: string;
};

export function ButtonLink({ children, variant = "solid", className, to, href }: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
