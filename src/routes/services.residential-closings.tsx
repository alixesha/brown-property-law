import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import { SERVICES } from "@/lib/services";

const service = SERVICES[0];

export const Route = createFileRoute("/services/residential-closings")({
  head: () => ({
    meta: [
      { title: "Residential Closings | Donteé L. Brown, Attorney at Law" },
      {
        name: "description",
        content:
          "Contract-to-closing representation for Illinois homebuyers and sellers — contract review, title coordination, and closing table advocacy.",
      },
      { property: "og:title", content: "Residential Closings | Donteé L. Brown, Attorney at Law" },
      {
        property: "og:description",
        content:
          "Careful, calm residential closings for Illinois homebuyers and sellers. Call (708) 407-9334.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail service={service} />,
});
