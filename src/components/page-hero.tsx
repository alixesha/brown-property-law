import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal direction="right" className={align === "center" ? "text-center" : "text-left"}>
      <p className={`eyebrow ${tone === "dark" ? "text-brass" : "text-accent"}`}>{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${
          tone === "dark" ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <span className={`rule-brass mt-5 ${align === "center" ? "" : ""}`} />
      {align === "center" && <span className="block" />}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <Reveal direction="right">
          <p className="eyebrow text-brass">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <span className="rule-brass mt-6" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {lead}
          </p>
        </Reveal>
        <Reveal direction="left" delay={120}>
          <img
            src={image}
            alt={imageAlt}
            width={1200}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
          />
        </Reveal>
      </div>
    </section>
  );
}
