import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  /** "right" = element enters from the right (text). "left" = enters from the left (images). */
  direction?: "left" | "right";
  /** Extra delay in milliseconds for staggered entrances. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({ direction = "right", delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-revealed");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "reveal",
        direction === "left" ? "reveal-from-left" : "reveal-from-right",
        className,
      )}
    >
      {children}
    </div>
  );
}
