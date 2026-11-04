import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import deskImg from "@/assets/attorney-desk.jpg";
import consultImg from "@/assets/consultation.jpg";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/buttons";
import { CONTACT } from "@/lib/services";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Donteé L. Brown | Attorney at Law — Tinley Park, IL" },
      {
        name: "description",
        content:
          "Meet Donteé L. Brown, an Illinois attorney serving homebuyers, sellers, landlords, and community associations from Tinley Park.",
      },
      { property: "og:title", content: "About Donteé L. Brown | Attorney at Law" },
      {
        property: "og:description",
        content:
          "Personal, detail-driven legal counsel for residential real estate and community association matters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    title: "Clear Communication",
    body: "Legal matters are stressful enough. You will always know where your case stands and what happens next — in plain language, not legalese.",
  },
  {
    title: "Meticulous Preparation",
    body: "Contracts, notices, trust agreements, and association documents are reviewed line by line. Details decided early prevent disputes later.",
  },
  {
    title: "Personal Attention",
    body: "This is a law office, not a case factory. Clients work directly with the attorney on matters that matter most — their homes and their communities.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Firm"
        title="Donteé L. Brown, Attorney at Law"
        lead="A practice built around the people, homes, and neighborhoods of the south suburbs — where every client is a neighbor, not a number."
        image={deskImg}
        imageAlt="Attorney's desk with scales of justice and legal documents"
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-8">
            <Reveal direction="right">
              <h2 className="text-2xl font-bold text-primary">A Focused Practice</h2>
              <span className="rule-brass mt-3 block" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Donteé L. Brown is an Illinois attorney concentrating in residential real estate and
                community association law. The practice represents homebuyers and sellers through
                closing, assists residential landlords with lawful eviction proceedings, establishes
                and administers Illinois land trusts, and advises homeowners and condominium
                associations on governance, enforcement, and collections.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                From the office on Harlem Avenue in Tinley Park, clients across the south suburbs of
                Chicago receive counsel tailored to their situation — never a one-size-fits-all answer.
              </p>
            </Reveal>
            <Reveal direction="right" delay={100}>
              <h2 className="text-2xl font-bold text-primary">The Way We Work</h2>
              <span className="rule-brass mt-3 block" />
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Good outcomes are rarely dramatic. They come from careful review of the contract,
                the right notice served the right way, a trust drafted properly the first time, and a
                board meeting held by the book. That diligence is the standard here — on every matter,
                for every client.
              </p>
            </Reveal>
          </div>
          <Reveal direction="left" delay={150}>
            <img
              src={consultImg}
              alt="Attorney and client shaking hands over a conference table"
              width={1200}
              height={1200}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-soft lg:sticky lg:top-40"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="What Guides Us" title="Our Commitments" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} direction="right" delay={i * 100}>
                <div className="h-full rounded-lg border border-border bg-card p-8 shadow-lift">
                  <span className="rule-brass block" />
                  <h3 className="mt-5 font-display text-lg font-bold text-primary">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <Reveal direction="right">
            <h2 className="text-3xl font-bold sm:text-4xl">Let's Talk About Your Matter</h2>
            <p className="mt-3 text-primary-foreground/80">
              Call to schedule a consultation at the Tinley Park office.
            </p>
          </Reveal>
          <Reveal direction="right" delay={120} className="flex flex-wrap gap-4">
            <ButtonLink href={CONTACT.phoneHref} variant="brass">
              <Phone className="size-4" aria-hidden />
              {CONTACT.phone}
            </ButtonLink>
            <ButtonLink to="/contact" variant="outlineLight">
              Contact the Office
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
