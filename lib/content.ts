import type { Track } from "@/lib/site";

export const clients = [
  "Gabble",
  "Krisiyukta",
  "ButtonShift",
  "TEDxGateway",
  "TEDxMargao",
  "Prayasa",
  "Innerheal Therapy",
  "Pixemo Studios",
  "Citraverse",
  "Hotelzify",
  "Lodgezify",
  "PaidYET",
  "Muttley Crew",
  "3eco",
  "House of Toast",
  "The Painted Sky",
  "Gym Konnect",
  "OneBoard",
  "RoziRoti",
  "Build3",
  "Pratilipi",
];

export const offers: {
  id: string;
  track: Track;
  kicker: string;
  title: string;
  summary: string;
  points: string[];
  note: string;
}[] = [
  {
    id: "dtc",
    track: "dtc",
    kicker: "D2C",
    title: "Performance that protects margin",
    summary:
      "Acquisition, creative testing, retention, and a Shopify store that can take the spend.",
    points: [
      "Account structure around hero products, contribution margin, and payback — not ROAS alone.",
      "Creative, landing page, and cart feedback in one loop.",
      "Lifecycle flows so the second order does not depend on a discount.",
      "Shopify build, design, CRO, SEO, and migration when the store is the leak.",
    ],
    note: "A one-off audit or migration is often ₹50k–₹1.5L. An ongoing development or CRO retainer is often ₹1L–₹3L a month. Larger builds and growth partnerships run ₹2L–₹5L+, depending on scope. The number comes after the call.",
  },
  {
    id: "b2b",
    track: "b2b",
    kicker: "B2B",
    title: "Pipeline a founder can hand off",
    summary:
      "ICP, the workflow, and a motion someone who was not in the founding story can run.",
    points: [
      "Who you sell to, what you promise, and the same story on the site, in outbound, and in content.",
      "Capture, enrich, route, and notify — Make, Zapier, n8n, and Clay — so leads do not sit in a sheet.",
      "Landing pages, forms, and the step where qualified traffic drops.",
      "Stages, definitions, and a dashboard that shows pipeline, not noise.",
    ],
    note: "B2B scope is set on the call. It depends on whether you need the message, the workflow, or a pipeline the team can run without you.",
  },
];

export const fit = {
  for: [
    "Early-stage teams launching or scaling one motion.",
    "D2C brands that want to spend more without unprofitable orders.",
    "B2B teams whose pipeline still depends on the founder.",
  ],
  not: [
    "A theme tweak with no growth goal.",
    "Eleven channels still labeled experiments, with no end date.",
    "A sales hire before one channel repeats.",
  ],
};

export const steps = [
  {
    title: "Book 30 minutes",
    body: "Say whether you need D2C, B2B, or both. I read it before we talk.",
  },
  {
    title: "We find the leak",
    body: "The channel that already produces anything, the offer, and the step where people drop.",
  },
  {
    title: "You leave with a system",
    body: "What to scale, what to stop, and the number we will watch: margin, ROAS, or qualified pipeline.",
  },
];

export const cases = [
  {
    label: "Muttleycrew · D2C",
    subtitle: "Amazon + Meta ads",
    headline: "Scaling performance while protecting contribution margin.",
    context:
      "A premium D2C brand looking to scale beyond early channel wins without burning cash on unprofitable orders.",
    moves: [
      "Rebuilt account structure around hero SKUs, contribution margin, and cohort payback instead of pure ROAS.",
      "Tight feedback loop between creatives, landing pages, and cart metrics to double down on what converted profitably.",
      "Layered in basic lifecycle flows so new customers came back without over-relying on discounting.",
    ],
    outcome:
      "Able to push spend materially on Amazon and Meta while keeping contribution margin healthy and repeat purchases growing.",
  },
  {
    label: "Gabble.io · Product signups",
    subtitle: "Top-of-funnel engine",
    headline: "Turning inconsistent spikes into a predictable signup system.",
    context:
      "A B2B product with strong early interest, inconsistent weekly signup volume, and no clear attribution.",
    moves: [
      "Clarified ICP and messaging so outreach, the website, and content spoke to the same high-intent segment.",
      "Built a simple scorecard for channels and campaigns so budget moved to what was working.",
      "Set up lightweight automation to nurture interested users back into a demo or trial.",
    ],
    outcome:
      "Weekly signups became steady and attributable, with a clear view of which levers to pull.",
  },
  {
    label: "Build3 · Lead engine",
    subtitle: "Outbound + inbound pipeline",
    headline: "From ad-hoc leads to a repeatable engine.",
    context:
      "An impact-driven organisation relying on the founder network and sporadic inbound.",
    moves: [
      "Mapped the buyer journey and tightened qualification so only aligned opportunities entered the pipeline.",
      "Designed outbound plays with clear offers and follow-up cadences that matched the audience.",
      "Created simple dashboards so the team could see where deals were stalling.",
    ],
    outcome:
      "A repeatable lead engine the team could run, not just the founder, with clearer visibility on pipeline health.",
  },
  {
    label: "Citraverse & ButtonShift · B2B + D2C",
    subtitle: "Full-funnel experimentation",
    headline: "Finding the few experiments that actually move the needle.",
    context:
      "Early-stage products testing multiple channels and offers at once, without a clear sense of what worked.",
    moves: [
      "Prioritised experiments with a simple impact-versus-effort frame and a weekly decision on what to ship.",
      "Standardised tracking so every test had a success metric and a decision date.",
      "Reused winning offers, angles, and flows across markets instead of starting from scratch.",
    ],
    outcome:
      "A smaller set of experiments, clearer learnings, and acquisition wins the team could repeat.",
  },
  {
    label: "OneBoard · B2B SaaS",
    subtitle: "Positioning + demos",
    headline: "Aligning positioning, offers, and outreach around the right buyer.",
    context:
      "A SaaS product with strong retention once adopted, slow top-of-funnel, and long sales cycles.",
    moves: [
      "Refined positioning and the homepage so they spoke to the most valuable segment.",
      "Reworked outreach to lead with outcomes instead of features.",
      "Clarified next steps and timelines so prospects moved faster through evaluation.",
    ],
    outcome:
      "More qualified demos, and a shorter path from first touch to closed-won.",
  },
];

export const quotes = [
  {
    company: "Gym Konnect",
    quote:
      "Rakesh helped us scale our paid acquisition without burning through budget. ROAS improved meaningfully in the first 8 weeks.",
  },
  {
    company: "OneBoard",
    quote:
      "Clear strategy and execution. We went from zero to a repeatable pipeline in a few months.",
  },
  {
    company: "RoziRoti",
    quote:
      "He understood our category and audience from day one. Growth became predictable.",
  },
  {
    company: "Build3",
    quote:
      "Practical GTM setup and hands-on execution. Exactly what we needed at this stage.",
  },
  {
    company: "Pratilipi",
    quote:
      "Strong on both strategy and delivery. We saw real impact on our key metrics.",
  },
  {
    company: "Lodgezify",
    quote:
      "Rakesh helped us launch and iterate quickly. Revenue and clarity both went up.",
  },
  {
    company: "Hotelzify",
    quote:
      "Focused on what moves the needle. We got a clear playbook and better results.",
  },
  {
    company: "Gabble",
    quote:
      "From chaos to a system we can scale. Highly recommend for early-stage GTM.",
  },
  {
    company: "Kumar Jyanav, co-founder",
    quote:
      "He has a real knack for building things from scratch. While most people get daunted by the chaos of early-stage building, Rakesh thrives in it.",
  },
  {
    company: "Aamir Ahmed",
    quote:
      "What stood out is his ability to connect strategy with execution. He doesn’t just talk in ideas; he knows how to break them down, test them, and get them moving.",
  },
];

export const roles = [
  {
    role: "Chief of Staff",
    company: "Webless",
    time: "Jun 2026 — Present",
    place: "San Francisco",
    summary:
      "Generative search and content discovery for business websites — faster to implement, and built to be cited when buyers research in AI answers.",
  },
  {
    role: "Growth consultant",
    company: "47 Creations",
    time: "Oct 2023 — Present",
    place: "Guwahati",
    summary:
      "GTM for early-stage startups across edtech, agritech, D2C, SaaS, hospitality, and wellness. This is the practice the call is for.",
  },
  {
    role: "Chief of Staff & CISO",
    company: "BeGig",
    time: "Sep 2022 — Dec 2023",
    place: "Gurugram",
    summary:
      "A Tech Mahindra–backed freelancer marketplace. Tighter ops, security, and decision-making after a $2M+ raise.",
  },
  {
    role: "Head of Programs, founding team",
    company: "Pratilipi (Grow91)",
    time: "Oct 2021 — Sep 2022",
    place: "Bengaluru",
    summary:
      "Onboarded 100+ creators. Launched creator-led D2C brands and scaled them to about ₹8Cr ARR, at 6×+ ROAS and a cost per result under ₹150.",
  },
  {
    role: "Co-founder",
    company: "Tribe X 47",
    time: "Mar 2020 — Sep 2021",
    place: "Bengaluru",
    summary:
      "Creator commerce with 200+ creators and $1M+ in sales. Acquired by Grow91, Pratilipi.",
  },
  {
    role: "Risk Analyst",
    company: "Amazon",
    time: "Jan 2020 — Sep 2021",
    place: "Bengaluru",
    summary: "Data-driven fraud investigations, and the tooling used to run them.",
  },
  {
    role: "Associate",
    company: "ShareChat",
    time: "Jun 2019 — Dec 2019",
    place: "Bengaluru",
    summary: "Regional growth and community campaigns, measured past vanity metrics.",
  },
];

export const notes = [
  {
    title: "An experiment needs an end date",
    body: "Early teams often have a few channels that produce pipeline and several more still labeled experiments. If a channel has no question and no decision date, it is a habit. Take one channel to conviction before you add a second.",
  },
  {
    title: "Hire after the motion repeats",
    body: "A senior sales hire does not create demand. If deals die when the founder leaves the call, the hire makes that failure louder. Stay founder-led until the ICP, the kill objection, and what people do after they buy are clear. Then hand a deal to someone who was not in the founding story.",
  },
  {
    title: "Earn the meeting on the site",
    body: "Most buyers rank a shortlist before the first call. At early stage there is no brand memory doing that work, so the site is often the only salesperson they meet. Say who it is for, who it is not, and what the call covers. Then ask.",
  },
];

export const faqs = [
  {
    q: "What happens on the 30-minute call?",
    a: "You bring the stage, the channel that already produces anything, and the number you want to move. I tell you whether I can help, and what the first month would actually be.",
  },
  {
    q: "Do you work on both D2C and B2B?",
    a: "Yes. They are equal offers. Some teams need one. Some need both. The call is the same either way.",
  },
  {
    q: "What does D2C work cost?",
    a: "A one-off audit or migration is often ₹50k–₹1.5L. Ongoing development or a CRO retainer is often ₹1L–₹3L a month. Full-store builds and longer growth partnerships run ₹2L–₹5L+, depending on complexity. I share a number after the scope is clear.",
  },
  {
    q: "How do we know it is working?",
    a: "We pick the number before the work starts. For D2C that is usually contribution margin, ROAS, and repeat purchase. For B2B it is qualified pipeline, conversion by stage, and whether someone other than the founder can run the motion. You should be able to see what moved this week.",
  },
  {
    q: "Is this only a Shopify build?",
    a: "No. Shopify development, design, CRO, SEO, and migration sit inside the D2C offer when the store is what is leaking. The work is the growth system around it.",
  },
  {
    q: "What tools do you use?",
    a: "Shopify, Klaviyo, Meta, Google, Amazon, Make, Zapier, n8n, and Clay. The tools support the system. They do not replace the ICP or the offer.",
  },
];

export const tools = [
  "Shopify",
  "Klaviyo",
  "Meta",
  "Google",
  "Amazon",
  "Make",
  "Zapier",
  "n8n",
  "Clay",
];

export const projects = [
  {
    name: "Link Origin",
    detail: "Hover a link to see where it actually goes.",
    href: "https://chromewebstore.google.com/detail/link-origin-%E2%80%94-see-where-l/lpjepgakigllllnncammkpmhjjejibog",
  },
  {
    name: "LinkedIn Knowledge Manager",
    detail: "Save, tag, and search posts you want to keep.",
    href: "https://chromewebstore.google.com/detail/popup-linkedin-knowledge/pmejgpmingcbhpifjefenjkjaamlomha",
  },
  {
    name: "Ad Blocker",
    detail: "Per-site rules, local-first.",
    href: "https://chromewebstore.google.com/detail/ad-blocker/leljldbdgkcokhdbigpbookdhfflpfid",
  },
  {
    name: "Amazon Product Media Downloader",
    detail: "Product images and video, one click.",
    href: "https://chromewebstore.google.com/detail/amazon-product-media-down/mkkimjdlnoahloobcdkbmdamlgegjmgk",
  },
  {
    name: "HEIC Converts",
    detail: "HEIC to JPG or PNG in the browser.",
    href: "https://heicconverts.com/",
  },
  {
    name: "Kommi",
    detail: "A web app at kommi.in.",
    href: "https://kommi.in/",
  },
];
