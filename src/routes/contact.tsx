import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Navigation, Phone, Printer } from "lucide-react";
import consultImg from "@/assets/consultation.jpg";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/buttons";
import { CONTACT } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Donteé L. Brown, Attorney at Law — Tinley Park, IL" },
      {
        name: "description",
        content:
          "Contact the Law Office of Donteé L. Brown: 16335 S. Harlem Ave. #415, Tinley Park, IL 60477. Phone (708) 407-9334 · Fax (708) 292-0118.",
      },
      { property: "og:title", content: "Contact | Donteé L. Brown, Attorney at Law" },
      {
        property: "og:description",
        content:
          "Call (708) 407-9334 to schedule a consultation at the Tinley Park, Illinois office.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const CARDS = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    note: "Call to schedule a consultation.",
    linkText: "Call now",
  },
  {
    icon: Printer,
    label: "Fax",
    value: CONTACT.fax,
    href: null,
    note: "For documents and correspondence.",
    linkText: null,
  },
  {
    icon: MapPin,
    label: "Office",
    value: "16335 S. Harlem Ave. #415\nTinley Park, IL 60477",
    href: CONTACT.directions,
    note: "Conveniently located on Harlem Avenue.",
    linkText: "Get directions",
  },
] as const;

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact the Office"
        lead="Every matter starts with a conversation. Call the office, stop by, or request directions — we are ready to listen."
        image={consultImg}
        imageAlt="Attorney and client shaking hands over a conference table"
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Reach Us" title="Phone, Fax & Location" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.label} direction="right" delay={i * 100}>
              <div className="flex h-full flex-col rounded-lg border border-border bg-card p-8 text-center shadow-lift">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <card.icon className="size-5" aria-hidden />
                </span>
                <h3 className="eyebrow mt-5 text-accent">{card.label}</h3>
                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-3 whitespace-pre-line font-display text-lg font-bold text-primary transition-colors hover:text-accent"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-3 whitespace-pre-line font-display text-lg font-bold text-primary">
                    {card.value}
                  </p>
                )}
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{card.note}</p>
                {card.href && card.linkText && (
                  <a
                    href={card.href}
                    className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-accent"
                  >
                    <Navigation className="size-3.5" aria-hidden />
                    {card.linkText}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="right" delay={200}>
          <div className="mx-auto mt-16 max-w-3xl rounded-lg border border-border bg-muted p-8 text-center">
            <h3 className="font-display text-xl font-bold text-primary">Scheduling a Consultation</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Consultations are arranged by phone so your matter can be discussed directly and
              confidentially. Please have relevant documents nearby — contracts, notices, or
              association correspondence — so the conversation is as productive as possible.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <ButtonLink href={CONTACT.phoneHref} variant="solid">
                <Phone className="size-4" aria-hidden />
                {CONTACT.phone}
              </ButtonLink>
              <ButtonLink href={CONTACT.directions} variant="outline">
                Get Directions
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
