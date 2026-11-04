
import {
  createFileRoute,
  Outlet,
  useMatch,
} from "@tanstack/react-router";

import { ArrowRight, Phone } from "lucide-react";

import officeImg from "@/assets/hero-law-office.jpg";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/buttons";
import { CONTACT, SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Practice Areas | Donteé L. Brown, Attorney at Law",
      },
      {
        name: "description",
        content:
          "Residential closings, residential evictions, land trusts, and HOA & condo association matters — the practice areas of Donteé L. Brown, Attorney at Law.",
      },
      {
        property: "og:title",
        content: "Practice Areas | Donteé L. Brown, Attorney at Law",
      },
      {
        property: "og:description",
        content:
          "Residential closings, evictions, land trusts, and HOA & condo association counsel in Tinley Park, Illinois.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const isServicesIndex = useMatch({
    from: "/services/",
    shouldThrow: false,
  });

  // Child service routes render their own detail page here.
  if (!isServicesIndex) {
    return <Outlet />;
  }

  // Main Practice Areas page.
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Focused Services, Carefully Delivered"
        lead="The practice concentrates on residential real estate and community association law — so every matter gets the depth it deserves."
        image={officeImg}
        imageAlt="Elegant law office overlooking the city at dusk"
      />

      <section className="mx-auto max-w-6xl space-y-20 px-6 py-24">
        {SERVICES.map((service, i) => (
          <div
            key={service.slug}
            className={`grid items-center gap-12 lg:grid-cols-2 ${
              i % 2 === 1
                ? "lg:[&>*:first-child]:order-2"
                : ""
            }`}
          >
            <Reveal direction="left">
              <img
                src={service.image}
                alt={service.imageAlt}
                width={1200}
                height={1008}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
              />
            </Reveal>

            <Reveal direction="right" delay={120}>
              <p className="eyebrow text-accent">
                {`0${i + 1}`}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-primary">
                {service.title}
              </h2>

              <span className="rule-brass mt-4 block" />

              <p className="mt-5 leading-relaxed text-muted-foreground">
                {service.lead}
              </p>

              <div className="mt-7">
                <ButtonLink
                  to={service.path}
                  variant="outline"
                >
                  Learn more
                  <ArrowRight
                    className="size-4"
                    aria-hidden
                  />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        ))}
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <Reveal direction="right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Not Sure Where to Start?
            </h2>

            <p className="mt-3 text-primary-foreground/80">
              A short phone call is the easiest way to find out.
            </p>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <ButtonLink
              href={CONTACT.phoneHref}
              variant="brass"
            >
              <Phone
                className="size-4"
                aria-hidden
              />
              {CONTACT.phone}
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
