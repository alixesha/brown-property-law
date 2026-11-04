import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import { SERVICES } from "@/lib/services";

const service = SERVICES[3];

export const Route = createFileRoute("/services/hoa-condo-association")({
  head: () => ({
    meta: [
      { title: "HOA & Condo Association Matters | Donteé L. Brown, Attorney at Law" },
      {
        name: "description",
        content:
          "Counsel for HOA, condominium, and townhome associations — governance, enforcement, collections, and homeowner rights.",
      },
      {
        property: "og:title",
        content: "HOA & Condo Association Matters | Donteé L. Brown, Attorney at Law",
      },
      {
        property: "og:description",
        content:
          "Governance, enforcement, and assessment collection counsel for Illinois community associations. Call (708) 407-9334.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail service={service} />,
});
