import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero-law-office.jpg";
import deskImg from "@/assets/attorney-desk.jpg";
import consultImg from "@/assets/consultation.jpg";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/buttons";
import { SectionHeading } from "@/components/page-hero";
import { CONTACT, SERVICES } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Donteé L. Brown, Attorney at Law | Real Estate & Association Counsel — Tinley Park, IL",
      },
      {
        name: "description",
        content:
          "Residential closings, evictions, land trusts, and HOA & condo association matters handled with care in Tinley Park, Illinois. Call (708) 407-9334.",
      },
      { property: "og:title", content: "Donteé L. Brown, Attorney at Law — Tinley Park, IL" },
      {
        property: "og:description",
        content:
          "Residential closings, evictions, land trusts, and HOA & condo association counsel in Tinley Park, Illinois.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Split-screen hero: image enters from the left, text from the right */}
      <section className="bg-primary text-primary-foreground">
        <div className="grid lg:min-h-[calc(100svh-8.5rem)] lg:grid-cols-2">
          <Reveal direction="left" className="relative min-h-[320px] lg:min-h-full">
            <img
              src={heroImg}
              alt="Downtown Chicago at dusk seen from a private law office"
              width={1200}
              height={1600}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/25 to-primary/55" />
          </Reveal>
          <div className="relative flex items-center px-6 py-20 sm:px-10 lg:px-16">
            <Reveal direction="right">
              <p className="eyebrow text-brass">Residential Real Estate & Association Counsel</p>
              <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Donteé L. Brown
              </h1>
              <p className="mt-3 font-display text-lg italic text-brass sm:text-xl">Attorney at Law</p>
              <span className="rule-brass mt-7 block" />
              <p className="mt-7 max-w-xl leading-relaxed text-primary-foreground/85">
                Personal, detail-driven representation for homebuyers and sellers, landlords, community
                associations, and families planning for the future — from the heart of Tinley Park.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <ButtonLink to="/contact" variant="brass">
                  Schedule a Consultation
                </ButtonLink>
                <ButtonLink to="/services" variant="outlineLight">
                  Explore Services
                </ButtonLink>
              </div>
              <div className="mt-10 space-y-3 border-t border-white/10 pt-8 text-sm text-primary-foreground/75">
                <p className="flex items-center gap-3">
                  <MapPin className="size-4 shrink-0 text-brass" aria-hidden />
                  {CONTACT.address}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-brass" aria-hidden />
                  <a href={CONTACT.phoneHref} className="transition-colors hover:text-brass">
                    {CONTACT.phone}
                  </a>
                  <span className="text-white/20">|</span>
                  Fax {CONTACT.fax}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="What We Do" title="Practice Areas" />
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} direction="right" delay={(i % 2) * 100}>
              <a
                href={service.path}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <Reveal direction="left" delay={120}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width={1200}
                    height={1008}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </Reveal>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-bold text-primary group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Learn more
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-muted py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="left">
            <img
              src={deskImg}
              alt="Scales of justice and legal documents on a wooden desk"
              width={1104}
              height={1408}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
            />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="eyebrow text-accent">Meet Your Attorney</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-primary sm:text-4xl">
              Careful Counsel. Clear Answers.
            </h2>
            <span className="rule-brass mt-5 block" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              The Law Office of Donteé L. Brown was built on a simple principle: clients deserve an
              attorney who picks up the phone, explains the process in plain language, and treats every
              document as if the outcome depends on it — because it often does.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you are closing on your first home, resolving a tenancy dispute, or guiding a
              community association, you receive attentive, personal service from start to finish.
            </p>
            <div className="mt-8">
              <ButtonLink to="/about" variant="outline">
                About the Firm
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <Reveal direction="left">
            <img
              src={consultImg}
              alt="Attorney and client shaking hands over a conference table"
              width={1200}
              height={1200}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
            />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Start With a Conversation
            </h2>
            <span className="rule-brass mt-5 block" />
            <p className="mt-6 leading-relaxed text-primary-foreground/80">
              Every matter begins the same way — with a phone call. Tell us what you are facing, and we
              will walk you through the options and the road ahead.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={CONTACT.phoneHref} variant="brass">
                <Phone className="size-4" aria-hidden />
                {CONTACT.phone}
              </ButtonLink>
              <ButtonLink to="/contact" variant="outlineLight">
                Contact the Office
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
