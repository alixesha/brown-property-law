import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import { SERVICES } from "@/lib/services";

const service = SERVICES[1];

export const Route = createFileRoute("/services/residential-evictions")({
  head: () => ({
    meta: [
      { title: "Residential Evictions | Donteé L. Brown, Attorney at Law" },
      {
        name: "description",
        content:
          "Lawful, efficient eviction representation for Illinois residential landlords — notices, filings, and courtroom advocacy.",
      },
      {
        property: "og:title",
        content: "Residential Evictions | Donteé L. Brown, Attorney at Law",
      },
      {
        property: "og:description",
        content:
          "Illinois residential evictions handled correctly from the first notice to the final order. Call (708) 407-9334.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail service={service} />,
});
