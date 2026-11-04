import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/buttons";
import { CONTACT, SERVICES, type Service } from "@/lib/services";

export function ServiceDetail({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Practice Area"
        title={service.title}
        lead={service.lead}
        image={service.image}
        imageAlt={service.imageAlt}
      />

      {/* Overview + highlights */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-8">
            {service.sections.map((section, i) => (
              <Reveal key={section.heading} direction="right" delay={i * 100}>
                <h2 className="text-2xl font-bold text-primary">{section.heading}</h2>
                <span className="rule-brass mt-3 block" />
                <p className="mt-4 leading-relaxed text-muted-foreground">{section.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal direction="right" delay={150}>
            <aside className="rounded-lg border border-border bg-card p-8 shadow-lift lg:sticky lg:top-40">
              <h2 className="font-display text-lg font-bold text-primary">How We Help</h2>
              <ul className="mt-5 space-y-3.5">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">Questions about your situation?</p>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-2 inline-flex items-center gap-2 font-display text-lg font-bold text-primary transition-colors hover:text-accent"
                >
                  <Phone className="size-4" aria-hidden />
                  {CONTACT.phone}
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Other practice areas */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Also Available" title="Other Practice Areas" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} direction="right" delay={i * 100}>
                <Link
                  to={s.path}
                  className="group flex h-full flex-col rounded-lg border border-border bg-card p-7 shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <h3 className="font-display text-lg font-bold text-primary group-hover:text-accent">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_auto]">
          <Reveal direction="right">
            <h2 className="text-3xl font-bold sm:text-4xl">Schedule a Consultation</h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              Call the office to discuss your matter and take the first step toward a resolution.
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
