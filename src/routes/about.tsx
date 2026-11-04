
import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  GraduationCap,
  Home,
  Building2,
  FileText,
  Scale,
  ArrowRight,
} from "lucide-react";

import deskImg from "@/assets/attorney-desk.jpg";
import consultImg from "@/assets/consultation.jpg";

import { PageHero, SectionHeading } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/buttons";
import { CONTACT } from "@/lib/services";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Donteé L. Brown, Esq. | DLB ESQ. — Tinley Park, IL",
      },
      {
        name: "description",
        content:
          "Learn about Donteé L. Brown's education, legal background, and focused practice in residential real estate, land trusts, evictions, and Illinois condominium law.",
      },
      {
        property: "og:title",
        content: "About Donteé L. Brown, Esq. | DLB ESQ.",
      },
      {
        property: "og:description",
        content:
          "Learn about the attorney, education, experience, and legal services behind DLB ESQ. in Tinley Park, Illinois.",
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
  component: About,
});

const EDUCATION = [
  {
    institution: "Alabama State University",
    degree: "Undergraduate Education",
    detail: "Graduated in 2004, Cum Laude",
  },
  {
    institution: "The John Marshall Law School",
    degree: "Juris Doctor (J.D.)",
    detail: "Earned in 2010 · Chicago, Illinois",
  },
  {
    institution: "The John Marshall Law School",
    degree: "Master of Laws (LL.M.) in Real Estate Law",
    detail: "Earned in 2012 · Chicago, Illinois",
  },
];

const PRACTICE_AREAS = [
  {
    icon: Home,
    title: "Residential Real Estate",
    description:
      "Legal representation for residential buyers and sellers, with attention to the contracts, documentation, and details involved in closing.",
  },
  {
    icon: FileText,
    title: "Residential Evictions",
    description:
      "Guidance for residential landlords navigating eviction proceedings and applicable legal requirements in the covered Cook County districts.",
  },
  {
    icon: Scale,
    title: "Land Trusts",
    description:
      "Assistance with Illinois land trusts for clients considering ownership privacy and more flexible property transfers.",
  },
  {
    icon: Building2,
    title: "HOA & Condominium Law",
    description:
      "Counsel for condominium associations, homeowners associations, and individual condominium owners on applicable governance and legal matters.",
  },
];

const VALUES = [
  {
    title: "Clear Communication",
    body:
      "Legal matters can be stressful. The goal is to help clients understand their options, the relevant process, and the next steps in straightforward language.",
  },
  {
    title: "Careful Preparation",
    body:
      "Contracts, notices, trust documents, and association records deserve careful review. Attention to detail is an important part of responsible legal work.",
  },
  {
    title: "Matter-Specific Counsel",
    body:
      "Every property and legal situation is different. Advice should take account of the facts, the applicable law, and the client's particular needs.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Attorney"
        title="Donteé L. Brown, Attorney at Law"
        lead="Focused legal counsel for residential real estate and community association matters in Tinley Park and the south suburbs of Chicago."
        image={deskImg}
        imageAlt="Professional attorney desk with legal documents"
      />

      {/* Attorney Background */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal direction="right">
            <p className="eyebrow text-accent">The Attorney</p>

            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              A Focused Approach to Real Estate Law
            </h2>

            <span className="rule-brass mt-5 block" />

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Donteé L. Brown, Esq. is an attorney based in Tinley Park,
              Illinois, whose practice focuses on residential real estate
              transactions, residential evictions, Illinois land trusts,
              and homeowners and condominium association matters.
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              His legal education includes a Juris Doctor degree and
              advanced graduate study in real estate law. This educational
              background aligns with the firm's emphasis on property
              transactions, ownership arrangements, and community
              association issues.
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              The firm also highlights experience with Neighborhood
              Assistance Corporation of America (NACA) transactions.
              Clients can contact the office to discuss their specific
              circumstances, the services available, and whether the
              matter falls within the firm's practice.
            </p>

            <div className="mt-8">
              <ButtonLink to="/services" variant="outline">
                Explore Practice Areas
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal direction="left" delay={120}>
            <img
              src={consultImg}
              alt="Professional consultation setting"
              width={1200}
              height={1200}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* Education */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Academic Background"
            title="Education & Legal Training"
          />

          <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-muted-foreground">
            A foundation in undergraduate education, legal training, and
            specialized study in real estate law.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {EDUCATION.map((item, i) => (
              <Reveal key={`${item.institution}-${item.degree}`} direction="right" delay={i * 100}>
                <article className="h-full rounded-lg border border-border bg-card p-7 shadow-lift transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <GraduationCap className="size-6" aria-hidden />
                  </div>

                  <p className="mt-6 text-sm font-semibold tracking-wide text-accent">
                    {item.detail}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-primary">
                    {item.degree}
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {item.institution}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Areas of Focus"
          title="Property Matters That Matter"
        />

        <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-muted-foreground">
          The practice is centered on four key areas of residential real
          estate and community association law.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PRACTICE_AREAS.map((area, i) => {
            const Icon = area.icon;

            return (
              <Reveal key={area.title} direction="right" delay={i * 100}>
                <article className="flex h-full gap-5 rounded-lg border border-border bg-card p-7 shadow-lift">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-muted text-accent">
                    <Icon className="size-6" aria-hidden />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      {area.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* NACA and Professional Approach */}
      <section className="bg-muted py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <Reveal direction="right">
            <p className="eyebrow text-accent">Transaction Knowledge</p>

            <h2 className="mt-3 text-3xl font-bold text-primary">
              Understanding Residential Transactions
            </h2>

            <span className="rule-brass mt-4 block" />

            <p className="mt-5 leading-relaxed text-muted-foreground">
              Residential real estate transactions involve important
              documents, deadlines, and decisions. The firm's stated
              knowledge of Neighborhood Assistance Corporation of America
              (NACA) transactions is relevant to clients who need legal
              assistance with this type of home purchase.
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Each transaction should be considered on its own facts.
              Contact the office to discuss the property, the transaction,
              and the legal assistance you may need.
            </p>
          </Reveal>

          <Reveal direction="left" delay={120}>
            <div className="rounded-lg border border-border bg-card p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-primary">
                How the Firm Approaches Its Work
              </h3>

              <div className="mt-7 space-y-6">
                {VALUES.map((value) => (
                  <div key={value.title}>
                    <h4 className="font-bold text-primary">
                      {value.title}
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {value.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <Reveal direction="right">
            <p className="eyebrow text-primary-foreground/70">
              Get in Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Let's Discuss Your Property Matter
            </h2>

            <p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/80">
              Contact the Tinley Park office to discuss your legal needs
              and find out whether the firm can assist with your matter.
            </p>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="flex flex-wrap gap-4">
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
