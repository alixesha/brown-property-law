import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/service-detail";
import { SERVICES } from "@/lib/services";

const service = SERVICES[2];

export const Route = createFileRoute("/services/land-trust")({
  head: () => ({
    meta: [
      { title: "Land Trusts | Donteé L. Brown, Attorney at Law" },
      {
        name: "description",
        content:
          "Illinois land trust formation and administration — privacy of ownership and simplified transfers, prepared carefully the first time.",
      },
      { property: "og:title", content: "Land Trusts | Donteé L. Brown, Attorney at Law" },
      {
        property: "og:description",
        content:
          "Keep your ownership private and your transfers simple with an Illinois land trust. Call (708) 407-9334.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail service={service} />,
});
