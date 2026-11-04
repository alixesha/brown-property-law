import closingImg from "@/assets/closing-keys.jpg";
import courthouseImg from "@/assets/courthouse.jpg";
import landTrustImg from "@/assets/land-trust.jpg";
import condoImg from "@/assets/condo-association.jpg";

export type ServiceSection = { heading: string; body: string };

export type Service = {
  slug: string;
  path: string;
  title: string;
  short: string;
  image: string;
  imageAlt: string;
  lead: string;
  highlights: string[];
  sections: ServiceSection[];
  metaDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "residential-closings",
    path: "/services/residential-closings",
    title: "Residential Closings",
    short:
      "Guidance from contract to closing table for buyers and sellers of homes, condos, and investment properties.",
    image: closingImg,
    imageAlt: "House keys resting on signed closing documents",
    lead:
      "Buying or selling a home is one of the largest transactions of your life. From reviewing the contract to the final signature at the closing table, every detail is handled with care so you can sign with confidence.",
    highlights: [
      "Contract review, negotiation, and drafting",
      "Coordination with lenders, title companies, and realtors",
      "Review of title commitments and resolution of title issues",
      "Preparation and explanation of closing documents",
      "Attendance at and representation through closing",
      "Post-closing support and follow-up",
    ],
    sections: [
      {
        heading: "For Homebuyers",
        body:
          "Before you sign, your contract is reviewed line by line — contingencies, deadlines, and obligations are explained in plain language. Title commitments are examined, issues are addressed early, and your closing documents are reviewed before you ever sit down at the table.",
      },
      {
        heading: "For Home Sellers",
        body:
          "From listing to closing day, sellers receive practical counsel on disclosure obligations, contract terms, payoffs and liens, and closing logistics — so the sale stays on schedule and surprises stay off the table.",
      },
      {
        heading: "A Calm, Orderly Closing",
        body:
          "Closings should feel like a beginning, not a scramble. You will know what to expect, what to bring, and what each document means before the day arrives.",
      },
    ],
    metaDescription:
      "Residential closing representation for Illinois homebuyers and sellers — contract review, title coordination, and closing table advocacy by Donteé L. Brown, Attorney at Law.",
  },
  {
    slug: "residential-evictions",
    path: "/services/residential-evictions",
    title: "Residential Evictions",
    short:
      "Lawful, efficient eviction representation for residential landlords — from proper notice to final order.",
    image: courthouseImg,
    imageAlt: "County courthouse with stone columns at golden hour",
    lead:
      "When a tenancy goes wrong, the process must be handled correctly from the very first step. Landlord clients receive guidance through every stage of an Illinois residential eviction, done right the first time.",
    highlights: [
      "Preparation and service of proper written notices",
      "Filing and prosecution of eviction actions in court",
      "Courtroom representation through judgment",
      "Guidance on enforcement of possession orders",
      "Advice on lease provisions and documentation",
      "Strategies to avoid costly procedural missteps",
    ],
    sections: [
      {
        heading: "Start With the Right Notice",
        body:
          "Most eviction cases are won or lost before anyone walks into a courtroom. Notices are prepared to meet Illinois requirements — the right notice, for the right ground, served the right way — so the case starts on solid ground.",
      },
      {
        heading: "In the Courtroom",
        body:
          "From filing the complaint through entry of judgment, the case is presented clearly and professionally, with attention to the details that move matters forward rather than delay them.",
      },
      {
        heading: "Beyond the Case",
        body:
          "After an eviction, landlords often need guidance on regaining possession, handling a tenant's belongings, and strengthening leases to prevent the next dispute. Sound advice does not end with the order.",
      },
    ],
    metaDescription:
      "Residential eviction representation for Illinois landlords — notices, court filings, and courtroom advocacy by Donteé L. Brown, Attorney at Law.",
  },
  {
    slug: "land-trust",
    path: "/services/land-trust",
    title: "Land Trusts",
    short:
      "Illinois land trusts established and administered for privacy, easy transfer, and thoughtful planning.",
    image: landTrustImg,
    imageAlt: "Aerial view of a suburban Illinois neighborhood at sunset",
    lead:
      "The Illinois land trust is a time-tested tool for holding residential real estate. Whether you own one property or a portfolio, a land trust can keep your ownership private and your transfers simple.",
    highlights: [
      "Formation of Illinois land trusts tailored to each property",
      "Preparation of trust agreements and deed transfers",
      "Privacy of ownership — title held in the name of the trust",
      "Coordination with trustees and title companies",
      "Guidance on transfers of beneficial interest",
      "Support for lenders, heirs, and co-owners",
    ],
    sections: [
      {
        heading: "Why a Land Trust",
        body:
          "In a land trust, legal title to the property is held by a trustee while you retain full control as beneficiary. Public records show the trust — not you — which keeps your name, your home, and your business private.",
      },
      {
        heading: "Simpler Transfers",
        body:
          "Interests in a land trust can be transferred by assigning beneficial interest, avoiding the deed formalities and recording steps of a conventional transfer. That flexibility makes land trusts a favorite of investors and families alike.",
      },
      {
        heading: "Done Properly, From the Start",
        body:
          "A land trust only works when it is drafted and funded correctly. Trust agreements, deeds, and beneficiary designations are prepared carefully and explained plainly, so the structure does exactly what you intend.",
      },
    ],
    metaDescription:
      "Illinois land trust formation and administration — privacy of ownership and simplified transfers, prepared by Donteé L. Brown, Attorney at Law in Tinley Park.",
  },
  {
    slug: "hoa-condo-association",
    path: "/services/hoa-condo-association",
    title: "HOA & Condo Association Matters",
    short:
      "Counsel for homeowners, condominium, and townhome associations — governance, enforcement, and collection.",
    image: condoImg,
    imageAlt: "Exterior of a well-maintained condominium building",
    lead:
      "Community associations live and die by their documents and their process. Board members and homeowners alike receive practical counsel on governing documents, meetings, enforcement, and collections.",
    highlights: [
      "Review and amendment of declarations, bylaws, and rules",
      "Guidance on board meetings, notices, and voting",
      "Covenant and rule enforcement with proper procedure",
      "Assessment collection, including lien matters",
      "Dispute resolution between boards and owners",
      "Advice for individual homeowners on their rights",
    ],
    sections: [
      {
        heading: "For Associations and Boards",
        body:
          "Boards are held to the documents they enforce. Meetings, notices, votes, and enforcement actions are reviewed for procedural correctness, so decisions stand up to challenge and communities run smoothly.",
      },
      {
        heading: "Enforcement and Collections",
        body:
          "From courtesy notices to formal demand, enforcement is carried out step by step — with the paper trail and procedure Illinois law requires, preserving the association's ability to act.",
      },
      {
        heading: "For Homeowners",
        body:
          "Owners receive clear guidance on what their association can and cannot do — assessments, rules, architectural decisions, and meetings — and practical options when a board oversteps.",
      },
    ],
    metaDescription:
      "Legal counsel for HOAs, condominium, and townhome associations in Illinois — governance, enforcement, and assessment collection by Donteé L. Brown, Attorney at Law.",
  },
];

export const CONTACT = {
  address: "16335 S. Harlem Ave. #415, Tinley Park, IL 60477",
  phone: "(708) 407-9334",
  phoneHref: "tel:+17084079334",
  fax: "(708) 292-0118",
  directions:
    "https://www.google.com/maps/search/?api=1&query=16335+S+Harlem+Ave+%23415%2C+Tinley+Park%2C+IL+60477",
};
