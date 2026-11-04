import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Printer } from "lucide-react";

const SERVICES = [
  { to: "/services/residential-closings", label: "Residential Closings" },
  { to: "/services/residential-evictions", label: "Residential Evictions" },
  { to: "/services/land-trust", label: "Land Trusts" },
  { to: "/services/hoa-condo-association", label: "HOA & Condo Association Matters" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-deep text-primary-foreground/75">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold text-primary-foreground">Donteé L. Brown</p>
          <p className="eyebrow mt-1 text-brass">Attorney at Law</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Residential real estate and community association counsel for homeowners, landlords, and
            associations across the south suburbs of Chicago.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-brass">Practice Areas</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="transition-colors hover:text-brass">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-brass">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden />
              <span>
                16335 S. Harlem Ave. #415
                <br />
                Tinley Park, IL 60477
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden />
              <a href="tel:+17084079334" className="transition-colors hover:text-brass">
                (708) 407-9334
              </a>
            </li>
            <li className="flex gap-3">
              <Printer className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden />
              <span>Fax (708) 292-0118</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs leading-relaxed text-primary-foreground/50">
          <p>
            The information on this website is for general informational purposes only and does not
            constitute legal advice, nor does it create an attorney-client relationship. Viewing or
            using this site does not establish such a relationship.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} Donteé L. Brown, Attorney at Law. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
