export type Metric = { value: string; label: string; note?: string };
export type EvidenceItem = { label: string; detail: string; available?: boolean; image?: { src: string; alt: string } };
export type ProjectLink = { label: string; href: string };
const projectAsset = (filename: string) => `/portfolio/projects/${filename}`;
export type Project = {
  slug: string; name: string; date: string; role: string; skills: string[]; shortDescription: string;
  visualLabel: string; visualKind: string; problem?: string; whatIBuilt: string; contribution: string[];
  traction?: Metric[]; evidence: EvidenceItem[]; learning: string[]; status: "Ongoing" | "Stopped" | "Deprioritized" | "Launched" | "Completed";
  decision: string; nextProject?: { name: string; slug: string; connection: string };
  featuredTitle?: string; featuredDescription?: string;
  image?: { src: string; alt: string }; links?: ProjectLink[]; context?: string;
};

export const projects: Project[] = [
  {
    slug: "organizational-culture", name: "Bó Đũa — Organizational Culture Program", date: "Jul 2023 — Jun 2024", role: "Co-founder", skills: ["Recruitment", "Team Leadership", "Program Design"],
    shortDescription: "A social project building stronger, more engaged extracurricular organizations in Thanh Hóa.", visualLabel: "Program documentation", visualKind: "program",
    whatIBuilt: "A 12-session leadership training program and initiatives addressing emerging organizational challenges.",
    contribution: ["Recruited and led 20+ members.", "Designed the 12-session leadership training program.", "Validated community needs and developed initiatives in response."],
    traction: [{ value: "20+", label: "members led" }, { value: "12", label: "leadership-training sessions" }],
    evidence: [{ label: "Training-program record", detail: "Recording and documentation of the leadership training program.", available: true, image: { src: projectAsset("bo-dua-training.png"), alt: "Bó Đũa training program documentation" } }],
    learning: ["Recruitment.", "Team leadership.", "Program design.", "Needs assessment.", "Organizational problem-solving."], status: "Completed", decision: "Completed July 2023–June 2024.",
    image: { src: projectAsset("bo-dua.png"), alt: "Bó Đũa organizational culture program" }, links: [{ label: "Facebook fanpage", href: "https://www.facebook.com/profile.php?id=61558104513214" }]
  },
  {
    slug: "international-ielts", name: "Lean Monkey Tutor", date: "Aug — Dec 2025", role: "Co-founder · Team Lead", skills: ["Product Discovery", "Market Research", "Validation"],
    shortDescription: "An international tutoring model for students in Hong Kong, Taiwan, and Thailand, connecting them with Vietnamese tutors.", visualLabel: "Market research evidence", visualKind: "research",
    problem: "Tutoring costs in the target markets were higher than in Vietnam. The intended model was more affordable, high-quality tutoring while paying Vietnamese tutors more.", whatIBuilt: "A service concept and market-entry validation effort across Hong Kong, Taiwan, and Thailand.",
    contribution: ["Led product discovery and market research.", "Validated 5 core hypotheses.", "Conducted cold and warm outreach, market segmentation, and service design.", "Validated pricing through a pilot customer and used feedback to guide decisions."],
    traction: [{ value: "~400", label: "prospects across 3 markets", note: "Resume" }, { value: "300+", label: "leads evaluated / reached", note: "Personal notes" }, { value: "5", label: "core hypotheses validated" }, { value: "1", label: "Thailand student connected with 1 Vietnamese tutor" }],
    evidence: [{ label: "Research and outreach record", detail: "Add outreach, pilot, or research evidence when available." }],
    learning: ["How to research an unfamiliar international market.", "How to evaluate market-entry difficulty.", "How to validate willingness-to-pay.", "How to use evidence to decide whether a business is worth pursuing."], status: "Stopped", decision: "Stopped because the entry barrier was too high.",
    nextProject: { name: "SeeForMe", slug: "seeforme", connection: "Later, another unfamiliar user world was approached through direct research: conversations with blind users." },
    image: { src: projectAsset("lean-monkey-tutor.jpg"), alt: "Lean Monkey Tutor market research" }, links: [{ label: "Planning and research workspace", href: "https://docs.google.com/spreadsheets/d/1FkdL4j6rsj8JC4qY-RzRP6KTWF2SUs8Icmfw4XRf1iI/edit?usp=sharing" }, { label: "Student–tutor connection evidence", href: "https://collection.cloudinary.com/zvwyqs82/926bce45c629016a9706e36b065cd239" }]
  },
  {
    slug: "connection-bracelet", name: "Connection / Customized Bracelet Service", date: "2025", role: "Co-founder · Team Lead", skills: ["Service Design", "Business Model Evaluation"],
    shortDescription: "A one-on-one conversational service where a bracelet was created around the customer’s perceived characteristics and personality.", visualLabel: "Service documentation", visualKind: "bracelet",
    problem: "The project began with the observation that people often lack genuine connection beyond titles, qualifications, or labels.", whatIBuilt: "A service that paired a casual one-on-one conversation with a customized bracelet.",
    contribution: ["Co-founded and led the team.", "Participated in customer interaction and the product/service process.", "Evaluated the model after testing it with real customers."], traction: [{ value: "2", label: "trial sessions with strangers reached through outreach" }],
    evidence: [{ label: "Trial-session documentation", detail: "Add documentation from the two real customer trials when available." }],
    learning: ["How to evaluate whether a business model can scale sustainably rather than simply whether customers like the idea."], status: "Stopped", decision: "Stopped because it was service-heavy, pricing was difficult to determine, and labour costs increased linearly with scale."
  },
  {
    slug: "local-brands-marketplace", name: "Local Brands Marketplace", date: "Dec 2025 — Apr 2026", role: "Co-founder · Team Lead", skills: ["MVP Testing", "Product Models", "Analytics"],
    shortDescription: "An e-commerce MVP gathering Vietnamese handmade and craft products that were otherwise scattered across different places.", visualLabel: "MVP / social-post evidence", visualKind: "marketplace",
    problem: "Vietnamese local handmade and craft brands have strong stories and cultural identity, but are scattered across different places.", whatIBuilt: "An e-commerce website aggregating local handmade and craft products, with two MVPs testing curated and marketplace models.",
    contribution: ["Built and piloted 2 MVPs.", "Tested a curated model against a marketplace model.", "Shared the MVP through social media, analyzed traffic and conversion data, and contacted local brands/craftspeople."],
    traction: [{ value: "2", label: "MVPs" }, { value: "~1.3K", label: "organic visits through social media", note: "Resume" }, { value: "~3K", label: "website visitors", note: "Personal notes" }],
    evidence: [{ label: "MVP evidence", detail: "Project source notes that MVP evidence is available.", available: true }, { label: "Social posts", detail: "Project source notes that social posts are available.", available: true }],
    learning: ["Product-market-fit testing.", "The importance of deeply understanding a domain.", "Traffic as a growth constraint.", "The difference between an attractive idea and a sustainable business."], status: "Deprioritized", decision: "Deprioritized after realizing the cultural research and domain knowledge required significant effort.",
    image: { src: projectAsset("local-brands-marketplace.png"), alt: "Local Brands Marketplace social-post analytics" }, links: [{ label: "First MVP", href: "https://loculmarket.lovable.app" }, { label: "Second MVP", href: "https://triacultural.lovable.app/" }]
  },
  {
    slug: "diy-bracelet-kit", name: "DIY Bracelet Kit", date: "Dec 2025 — Apr 2026", role: "Co-founder · Sales & Marketing Lead", skills: ["Positioning", "Organic Growth", "Sales"],
    shortDescription: "A bracelet-making kit positioned as an engaging offline alternative for women struggling with doomscrolling.", visualLabel: "Product / TikTok evidence", visualKind: "bracelet",
    problem: "Many women struggle with doomscrolling without an engaging alternative. The hypothesis was that bracelet-making could offer a fun, offline activity.", whatIBuilt: "A physical bracelet-making kit.",
    contribution: ["Built the physical product and conducted customer validation.", "Led sales and marketing, including positioning, copywriting, offer crafting, and social media.", "Designed and tested organic-growth experiments and analyzed social-media performance."],
    traction: [{ value: "Several thousand", label: "TikTok views" }], evidence: [{ label: "Product image", detail: "Project source notes that a product image is available.", available: true }, { label: "TikTok evidence", detail: "Project source notes that social-media proof is available.", available: true }],
    learning: ["Customer validation.", "Product positioning.", "Go-to-market.", "Organic growth.", "The effect of team capacity on business sustainability."], status: "Stopped", decision: "Stopped because the activity frequency and intensity became too demanding for a team of 3.",
    image: { src: projectAsset("diy-bracelet-kit.jpg"), alt: "DIY Bracelet Kit product" }, links: [{ label: "Product landing page", href: "https://knotnow.lovable.app" }, { label: "TikTok", href: "https://www.tiktok.com/@knotnow.handmade?is_from_webapp=1&sender_device=pc" }]
  },
  {
    slug: "devhouse", name: "DevHouse", date: "2026 — Present", role: "Co-founder · Product & Growth Associate", skills: ["Product Discovery", "Pricing", "Go-to-Market"],
    shortDescription: "A rapid-sprint SaaS startup, working across discovery, validation, product development, go-to-market, and growth.", visualLabel: "Product portfolio documentation", visualKind: "research",
    whatIBuilt: "Four fast-sprint SaaS mobile app projects, with approximately three weeks per product.",
    contribution: ["Led product discovery for 3 products through user interviews, market research, and competitor analysis.", "Synthesized 100+ customer conversations into feature prioritization and product-roadmap decisions.", "Defined pricing strategies for 2 products, balancing cost constraints, revenue potential, and long-term profitability.", "Worked across discovery, validation, development, go-to-market, and growth."],
    traction: [{ value: "4", label: "rapid-sprint SaaS products" }, { value: "~3 weeks", label: "per product" }, { value: "3", label: "products with discovery led" }, { value: "100+", label: "customer conversations" }, { value: "2", label: "products with pricing strategies defined" }],
    evidence: [{ label: "Product portfolio documentation", detail: "Add original product, research, or launch evidence when available." }],
    learning: ["How to work across the product lifecycle in fast product cycles.", "How research can inform prioritization and roadmap decisions.", "How pricing needs to balance cost constraints, revenue potential, and long-term profitability."], status: "Ongoing", decision: "DevHouse is ongoing.",
    featuredDescription: "Product and marketing work across early-stage SaaS products, from customer discovery and product evaluation to pricing and go-to-market."
  },
  {
    slug: "momo-fulbright", name: "Get Your 2 Ti Well-Spent", date: "Nov — Dec 2025", role: "Product Team Member", skills: ["User Interviews", "Retention Analysis", "Onboarding"],
    shortDescription: "A MoMo × Fulbright MVP helping students plan university courses based on their career goals.", visualLabel: "MVP documentation", visualKind: "program",
    whatIBuilt: "An MVP platform for course planning based on career goals.", contribution: ["Participated in product development.", "Conducted 5 user interviews.", "Identified low retention and recommended clearer onboarding improvements."],
    traction: [{ value: "~200", label: "users in the first week" }, { value: "5", label: "user interviews" }], evidence: [{ label: "MVP documentation", detail: "Add product documentation or MVP evidence when available." }], learning: ["User interviews.", "Retention analysis.", "Onboarding.", "Product improvement based on evidence."], status: "Completed", decision: "Completed November–December 2025.",
    image: { src: projectAsset("two-billion-well-spent.jpg"), alt: "Get Your 2 Ti Well-Spent product" }, links: [{ label: "MVP website", href: "https://two-billion-well-spent-at-fuv.lovable.app/?utm_id=97758_v0_s00_e0_tv4_a1demonpewsrhy" }]
  },
  {
    slug: "lotus-hackathon", name: "Lotus Hackathon", date: "2025", role: "Team Member", skills: ["AI Integration", "Assistive Technology", "Rapid Execution"],
    shortDescription: "An AI-integrated mobile tool for helping visually impaired users interpret images in real time.", visualLabel: "Hackathon evidence", visualKind: "assistive",
    whatIBuilt: "An AI-integrated mobile tool built within 36 hours for visually impaired users to interpret images in real time.", contribution: ["Worked on the product as a team member."], traction: [{ value: "36", label: "hours to build" }, { value: "3rd place", label: "Best Use of TRAE AI" }], evidence: [{ label: "Competition result", detail: "Add competition or project documentation when available." }], learning: ["Rapid execution.", "Team-based building.", "AI integration.", "Assistive technology."], status: "Completed", decision: "Built for the 2025 Lotus Hackathon."
  },
  {
    slug: "seeforme", name: "SeeForMe", date: "2026", role: "DevHouse product", skills: ["User Research", "Feature Prioritization", "Accessibility"],
    shortDescription: "A mobile app intended to explain inaccessible screen elements for blind users when screen readers could not.", visualLabel: "Google Play / product evidence", visualKind: "assistive",
    problem: "Some apps are not compatible with screen readers, leaving elements difficult or impossible for blind users to interpret.", whatIBuilt: "A mobile app triggered by pressing the up and down volume buttons simultaneously to explain an otherwise inaccessible element.",
    contribution: ["Conducted deep user research in an unfamiliar problem space.", "Spoke with approximately 30 blind users, including 1 in-person conversation.", "Worked through what to build and which features to prioritize."], traction: [{ value: "~30", label: "blind users spoken with" }, { value: "1", label: "in-person conversation" }],
    evidence: [{ label: "Google Play analytics", detail: "Store analytics after release.", available: true, image: { src: projectAsset("seeforme-play-analytics.png"), alt: "SeeForMe Google Play analytics" } }, { label: "Subscription analytics", detail: "Trial and subscription analytics after release.", available: true, image: { src: projectAsset("seeforme-subscription-analytics.png"), alt: "SeeForMe subscription analytics" } }], learning: ["How to enter a completely unfamiliar user world.", "How to conduct deep user research.", "How difficult feature prioritization can be in a novel market.", "How external technological developments can change a product’s opportunity."], status: "Stopped", decision: "Stopped after Gemini released a similar feature a few weeks after release.",
    nextProject: { name: "Megatrans", slug: "megatrans", connection: "The next product investigation focused more deeply on competitor research, pricing, and business economics." },
    featuredDescription: "A mobile app for blind users when screen readers cannot interpret an app element, grounded in direct conversations with approximately 30 blind users.",
    image: { src: projectAsset("seeforme.jpg"), alt: "SeeForMe accessibility app" }, context: "DevHouse product", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.devhouse.inclusight" }, { label: "SeeForMe on Facebook", href: "https://www.facebook.com/seeformeai" }]
  },
  {
    slug: "megatrans", name: "Megatrans", date: "2026", role: "DevHouse product", skills: ["Competitor Research", "Pricing", "Financial Planning"],
    shortDescription: "A Chrome extension designed to translate and change text in manga images immediately for smoother reading.", visualLabel: "Extension documentation", visualKind: "research",
    whatIBuilt: "A Google/Chrome extension for immediate translation and text replacement in manga images.", contribution: ["Conducted competitor research across products, pricing, and costs.", "Developed a finance plan and worked on pricing.", "Learned about healthy financial figures for a business."], evidence: [{ label: "Extension documentation", detail: "Add product documentation when available." }], learning: ["Competitor research.", "Pricing.", "Financial planning.", "Cost evaluation.", "Business economics."], status: "Stopped", decision: "Stopped because costs could not be optimized.",
    nextProject: { name: "StickerWords", slug: "stickerwords", connection: "The next product applied continued product and business experimentation, with a stronger GTM focus." },
    featuredDescription: "A manga-translation browser extension, developed through competitor research, pricing work, and business-economics evaluation.", image: { src: projectAsset("megatrans.png"), alt: "Megatrans translation extension" }, context: "DevHouse product", links: [{ label: "Extension installation", href: "https://collection.cloudinary.com/zvwyqs82/2e1521e06de7480440b20697d79812c9" }]
  },
  {
    slug: "stickerwords", name: "StickerWords", date: "2026", role: "DevHouse product", skills: ["GTM", "Prospecting", "Affiliate Marketing"],
    shortDescription: "A language-learning camera app that turns captured objects into vocabulary stickers and spaced-repetition flashcards.", visualLabel: "App / GTM documentation", visualKind: "marketplace",
    whatIBuilt: "A language-learning camera app where users capture an object, turn it into a sticker with target-language vocabulary, and review it through spaced repetition inspired by Anki.", contribution: ["Improved on an existing competitor concept.", "Added the spaced-repetition review feature.", "Led GTM, prospecting, and affiliate acquisition."],
    traction: [{ value: "1,300+", label: "prospects" }, { value: "100+", label: "app visits" }, { value: "10+", label: "countries" }, { value: "2", label: "affiliate influencers" }], evidence: [{ label: "App analytics", detail: "StickerWords app analytics.", available: true, image: { src: projectAsset("stickerwords-analytics.png"), alt: "StickerWords app analytics" } }], learning: ["GTM.", "Prospecting.", "International acquisition.", "Affiliate marketing.", "The importance of motivation and sustainable team execution."], status: "Stopped", decision: "The team moved on because of marketing and team-motivation difficulties.",
    nextProject: { name: "ActionLock", slug: "actionlock", connection: "Growth work continued through viral content, paid acquisition, funnel analysis, and engagement improvements." },
    featuredDescription: "A language-learning camera app, paired with go-to-market work across prospecting, international acquisition, and affiliate marketing.",
    image: { src: projectAsset("stickerwords.png"), alt: "StickerWords language-learning app" }, context: "DevHouse product", links: [{ label: "App Store", href: "https://apps.apple.com/us/app/stickerwords-photo-vocabulary/id6775109404?l=vi" }, { label: "Product website", href: "https://www.stickerwords.online/" }]
  },
  {
    slug: "actionlock", name: "ActionLock", date: "2026 — Present", role: "DevHouse product", skills: ["Content", "Paid Acquisition", "Funnel Analysis"],
    shortDescription: "An app that creates friction around distracting apps: users unlock them only after completing exercises.", visualLabel: "Product / funnel evidence", visualKind: "assistive",
    problem: "People struggling with doomscrolling need a way to create friction between themselves and distracting applications.", whatIBuilt: "An app that locks distracting apps until a user performs push-ups, squats, or other in-app exercises to unlock them.", contribution: ["Worked on marketing and created viral videos.", "Learned multi-platform content and paid advertising.", "Worked on the conversion funnel and product engagement."], traction: [{ value: "Hundreds", label: "installations" }, { value: "0", label: "paid users yet" }], evidence: [{ label: "Acquisition analytics", detail: "ActionLock app analytics.", available: true, image: { src: projectAsset("actionlock-analytics-1.png"), alt: "ActionLock acquisition analytics" } }, { label: "Funnel analytics", detail: "ActionLock app analytics.", available: true, image: { src: projectAsset("actionlock-analytics-2.png"), alt: "ActionLock funnel analytics" } }], learning: ["Viral content.", "Multi-platform content.", "Paid acquisition.", "Funnel analysis.", "Conversion optimization.", "Product engagement."], status: "Ongoing", decision: "Currently improving the funnel, engagement, and conversion.",
    featuredDescription: "An app that makes distracting apps available only after movement, with ongoing work on content, acquisition, engagement, and conversion.",
    image: { src: projectAsset("actionlock.png"), alt: "ActionLock digital well-being app" }, context: "DevHouse product", links: [{ label: "Product website", href: "https://www.actionlock.online/" }, { label: "TikTok", href: "https://www.tiktok.com/@pushup.bro?lang=en" }]
  },
  {
    slug: "innocent-eyes", name: "Innocent Eyes", date: "2026 — Present", role: "Founder", skills: ["Resale", "Branding", "Social Content"],
    shortDescription: "An ongoing curated secondhand store and a first experience in resale and physical products.", visualLabel: "Store documentation", visualKind: "bracelet",
    whatIBuilt: "A curated secondhand store.", contribution: ["Learned to deal with physical products.", "Learned selling, branding, and social-content creation."], evidence: [{ label: "Store documentation", detail: "Add product or content evidence when available." }], learning: ["Physical-product handling.", "Selling.", "Brand building.", "Social content."], status: "Ongoing", decision: "Ongoing.",
    image: { src: projectAsset("innocent-eyes.png"), alt: "Innocent Eyes secondhand store" }, links: [{ label: "Instagram", href: "https://www.instagram.com/innocent.eyes01/" }, { label: "TikTok", href: "https://www.tiktok.com/@innocent.eyes001?lang=en" }]
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
