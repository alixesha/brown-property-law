import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string, exact?: boolean) =>
    exact ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary text-primary-foreground">
      {/* Utility strip */}
      <div className="hidden border-b border-white/10 lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs tracking-wide text-primary-foreground/70">
          <p>16335 S. Harlem Ave. #415, Tinley Park, IL 60477</p>
          <p>
            Phone{" "}
            <a href="tel:+17084079334" className="font-semibold text-primary-foreground hover:text-brass">
              (708) 407-9334
            </a>
            <span className="mx-3 text-white/20">|</span>
            Fax (708) 292-0118
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-xl font-bold tracking-wide transition-colors group-hover:text-brass sm:text-2xl">
            Donteé L. Brown
          </span>
          <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-primary-foreground/60">
            Attorney at Law
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-brass",
                isActive(item.to, "exact" in item ? item.exact : false)
                  ? "text-brass"
                  : "text-primary-foreground/85",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+17084079334"
            className="inline-flex items-center gap-2 rounded-md bg-brass px-5 py-2.5 text-sm font-semibold text-brass-foreground transition-all hover:brightness-108"
          >
            <Phone className="size-4" aria-hidden />
            (708) 407-9334
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-deep px-6 py-4 md:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-3 text-sm font-medium tracking-wide hover:bg-white/5 hover:text-brass",
                    isActive(item.to, "exact" in item ? item.exact : false)
                      ? "text-brass"
                      : "text-primary-foreground/85",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+17084079334"
                className="mt-2 flex items-center justify-center gap-2 rounded-md bg-brass px-5 py-3 text-sm font-semibold text-brass-foreground"
              >
                <Phone className="size-4" aria-hidden />
                Call (708) 407-9334
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
