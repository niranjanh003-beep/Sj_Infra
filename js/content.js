/* ============================================================
   SJ INFRA — CONTENT DATA
   VERIFIED = pulled from sjinfraballari.com / the client's brief.
   PLACEHOLDER = not verifiable anywhere; clearly flagged in the UI
   and must be replaced with real data before this site goes live.
   ============================================================ */

const SITE = {
  name: "SJ Infra",
  place: "Ballari",
  phone: "8123543860",
  phoneDisplay: "+91 81235 43860",
  email: "sjinfra5@gmail.com",
  address: "Behind SUCO Bank, Gopalaswamy Road, Gandhinagar, Bellary, Karnataka 583103",
  mapsQuery: "SJ+Infra+Gopalaswamy+Road+Gandhinagar+Bellary+583103",
  facebook: "https://www.facebook.com/profile.php?id=61554949876066",
  instagram: "https://www.instagram.com/sj_infra_ballari/",
  serviceAreas: ["Ballari","Hospet","Sandur","Siruguppa","Rayadurg","Adoni","Ananthapur","Raichur","Sindhanur","Uravakonda"],
  whatsappMessage: "Hello SJ Infra, I'd like to know more about your construction & interior services."
};

// PLACEHOLDER — no verified figures exist yet; UI marks these as "coming soon"
const STATS_PLACEHOLDER = true;
const STATS = [
  { num: "—", cap: "Years Active (add real figure)" },
  { num: "—", cap: "Projects Delivered (add real figure)" },
  { num: "—", cap: "Cities Served across N. Karnataka & A.P. border" },
  { num: "10", cap: "Towns Currently Served" }
];

// Full site map — used in the mobile menu and footer
const NAV_LINKS = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Services", href: "services.html" },
  { label: "Process", href: "process.html" },
  { label: "Projects", href: "projects.html" },
  { label: "Innovation", href: "innovation.html" },
  { label: "Gallery", href: "gallery.html" },
  { label: "Cost Calculator", href: "calculator.html" },
  { label: "FAQ", href: "faq.html" },
  { label: "Contact", href: "contact.html" }
];

// Trimmed set for the desktop header bar so it never overflows.
// Everything else remains reachable via the mobile menu, footer, and CTA buttons.
const MAIN_NAV_LINKS = [
  { label: "About", href: "about.html" },
  { label: "Services", href: "services.html" },
  { label: "Process", href: "process.html" },
  { label: "Projects", href: "projects.html" },
  { label: "Gallery", href: "gallery.html" },
  { label: "Contact", href: "contact.html" }
];

const SERVICES = [
  {
    id: "residential-construction",
    num: "01",
    title: "Residential Construction",
    short: "Independent houses & villas built from foundation to handover.",
    long: "Full turnkey construction of independent homes and villas — structural design coordination, RCC framework, brickwork, plumbing and electrical rough-in, plastering and finishing, carried out under a single site-engineering team so nothing is subcontracted into a black box.",
    points: ["Foundation & structural work","RCC framing and slab casting","Brickwork, plastering & waterproofing","Electrical & plumbing rough-in","Finishing & handover"]
  },
  {
    id: "commercial-construction",
    num: "02",
    title: "Commercial Construction",
    short: "Shops, offices and commercial spaces built for daily operating load.",
    long: "Commercial builds — retail units, offices, small commercial complexes — planned around footfall, service access and long-term maintenance costs, not just the opening-day photo.",
    points: ["Site & structural planning","Fit-out ready shell construction","Electrical load planning","Facade & signage-ready frontage","Compliance-oriented layouts"]
  },
  {
    id: "interior-design",
    num: "03",
    title: "Interior Design & Fit-Out",
    short: "Residential and commercial interiors, from modular kitchens to full fit-outs.",
    long: "Interior design and execution for homes and commercial spaces — space planning, modular furniture, false ceilings, lighting design and finishing, quoted with itemised costs rather than a single vague lump sum.",
    points: ["Space planning & layout design","Modular kitchens & wardrobes","False ceiling & lighting design","Painting, flooring & wall finishes","Furniture & decor execution"]
  },
  {
    id: "exterior-design",
    num: "04",
    title: "Exterior & Facade Design",
    short: "Elevation design, landscaping and exterior finishing.",
    long: "Exterior treatment that carries a building's identity — elevation design, facade finishes, compound and landscape work, planned alongside the structural build rather than bolted on afterward.",
    points: ["Elevation design","Facade materials & finishes","Compound wall & gate work","Basic landscaping","Exterior lighting"]
  },
  {
    id: "layout-planning",
    num: "05",
    title: "Layout & Space Planning",
    short: "Site layouts, floor plans and space-efficiency planning.",
    long: "Layout and space planning for plots and built-up areas — floor plans that balance vaastu preference, natural light, ventilation and practical circulation before a single brick is laid.",
    points: ["Plot & site layout planning","Floor plan design","Vaastu-aligned planning on request","Space-efficiency review","2D/3D layout walkthroughs"]
  },
  {
    id: "renovation",
    num: "06",
    title: "Renovation & Remodeling",
    short: "Structural repair, remodeling and upgrades to existing spaces.",
    long: "Renovation work on existing homes and commercial units — from a single-room remodel to a full structural upgrade — sequenced to keep the rest of the property livable through the work.",
    points: ["Structural assessment","Demolition & rework","Re-plumbing & re-wiring","Interior remodeling","Waterproofing & repair"]
  },
  {
    id: "project-management",
    num: "07",
    title: "Project Management & Consultation",
    short: "Site supervision, vendor coordination and cost consultation.",
    long: "For clients who already have a plan and need execution discipline — site supervision, material procurement coordination, vendor management and milestone-based cost tracking.",
    points: ["Site supervision","Vendor & material coordination","Milestone-based cost tracking","Quality inspection at each stage","Timeline management"]
  }
];

// PLACEHOLDER — SJ Infra has not published a project portfolio anywhere yet.
// These entries are structural placeholders ONLY, clearly labelled in the UI,
// so the page layout is ready the moment real project photos/details arrive.
// Categories fixed to match the four project types: Residential, Commercial, Interior, Layout.
const PROJECT_CATEGORIES = ["All", "Residential", "Commercial", "Interior", "Layout"];
// Single source of truth for service imagery — referenced by the homepage sector grid
// AND each individual service page, so they can never drift out of sync again.
const SERVICE_IMAGES = {
  "residential-construction": "assets/processed/services/svc-residential-construction.webp",
  "commercial-construction": "assets/processed/services/svc-commercial-construction.webp",
  "interior-design": "assets/processed/services/svc-interior-design.webp",
  "exterior-design": "assets/processed/services/svc-exterior-design.webp",
  "layout-planning": "assets/processed/services/svc-layout-planning.webp",
  "renovation": "assets/processed/services/svc-renovation.webp",
  "project-management": "assets/processed/services/svc-project-management.webp"
};

const PROJECTS_ARE_PLACEHOLDER = true;
const PROJECTS = [
  { id:"p1", title:"Ram's Bungalow", category:"Residential", location:"Ballari", year:"—", area:"— sq ft", status:"Completed",
    cover:"assets/processed/exteriors/residential-hero.webp",
    gallery:["assets/processed/gallery/sj-infra-residential-exterior-balconies.webp","assets/processed/gallery/sj-infra-residential-exterior-dusk.webp","assets/processed/exteriors/exterior-detail.webp"] },
  { id:"p2", title:"[Add project name]", category:"Residential", location:"Sandur", year:"—", area:"— sq ft", status:"Add Photo" },
  { id:"p3", title:"[Add project name]", category:"Residential", location:"Hospet", year:"—", area:"— sq ft", status:"Add Photo" },
  { id:"p4", title:"Bharathiya Milk Products — Sweets & Bakery", category:"Commercial", location:"Ballari", year:"—", area:"— sq ft", status:"Completed",
    cover:"assets/processed/exteriors/commercial-hero.webp",
    gallery:["assets/processed/gallery/sj-infra-commercial-retail-interior.webp","assets/processed/interiors/calculator-preview.webp"] },
  { id:"p5", title:"[Add project name]", category:"Commercial", location:"Siruguppa", year:"—", area:"— sq ft", status:"Add Photo" },
  { id:"p6", title:"[Add project name]", category:"Interior", location:"Ballari", year:"—", area:"— sq ft", status:"Add Photo" },
  { id:"p7", title:"[Add project name]", category:"Interior", location:"Adoni", year:"—", area:"— sq ft", status:"Add Photo" },
  { id:"p8", title:"[Add project name]", category:"Layout", location:"Ballari", year:"—", area:"— acres", status:"Add Photo" },
  { id:"p9", title:"[Add project name]", category:"Layout", location:"Rayadurg", year:"—", area:"— acres", status:"Add Photo" }
];

// VERIFIED — testimonials as published on sjinfraballari.com
const TESTIMONIALS = [
  { name: "Abhiram Reddy", quote: "SJ Infra handled our home construction with real transparency — every cost was itemised and nothing came as a surprise at the end." },
  { name: "Jagannatha K", quote: "Good quality of work and the team stayed on top of the site through every stage of construction." },
  { name: "Bheemshankar G", quote: "They delivered exactly what was promised, with honest communication throughout the project." },
  { name: "Sagar Madli", quote: "Professional team, fair pricing, and the finishing quality was better than I expected." }
];

// VERIFIED — pricing structure as published on sjinfraballari.com (per sq ft, construction-only)
const CONSTRUCTION_TIERS = [
  { id:"basic", name:"Basic", rate:1700, desc:"Functional, sound construction with standard-grade materials — for budget-conscious builds that still don't cut structural corners." },
  { id:"standard", name:"Standard", rate:2100, desc:"Better-grade finishes, fittings and fixtures — the most commonly chosen package for family homes." },
  { id:"premium", name:"Premium", rate:2600, desc:"Premium materials, brand fittings and elevated finishing throughout — for clients who want the top tier end to end." }
];

// VERIFIED — interior/fit-out indicative rate bands as used in the client's own calculator logic
const INTERIOR_RATES = {
  residential: { basic: 900, standard: 1400, premium: 2200 },
  commercial: { basic: 750, standard: 1200, premium: 1900 }
};

const FAQS = [
  { q:"Which areas does SJ Infra operate in?", a:"We actively build and execute interiors across Ballari, Hospet, Sandur, Siruguppa, Rayadurg, Adoni, Ananthapur, Raichur, Sindhanur and Uravakonda." },
  { q:"How is construction priced?", a:"Construction is quoted per square foot across three tiers — Basic, Standard and Premium — depending on the material and finish grade you choose. Use the cost calculator for an indicative estimate, then we confirm exact numbers after a site visit." },
  { q:"Do you provide only construction, or interiors too?", a:"Both. We handle turnkey construction, interior design and fit-out, layout planning, exteriors, renovation and project management/consultation — you can engage us for one service or the full build." },
  { q:"Is the cost calculator estimate final?", a:"No — it's an indicative range based on the inputs you give. Final costs are confirmed after reviewing your plot, plan and material choices in person or over a call." },
  { q:"How do I start a project with SJ Infra?", a:"Call or WhatsApp us directly, or fill out the contact form with your project details and preferred timeline, and our team will get back to you to schedule a site visit." },
  { q:"Do you help with layout and floor plan design before construction?", a:"Yes — layout and space planning is one of our core services, including floor plans and site layouts, so the design is settled before any construction begins." }
];

// VERIFIED — real site photography sourced from SJ Infra's Google Drive photo library
// (authorized folder, discovered & processed on 2026-08-31). Property groupings are
// inferred from visual/design consistency, not confirmed project records — treat the
// "property" tag as a rough same-site grouping, not a verified project name.
const GALLERY_PLACEHOLDER = false;
const GALLERY_CATEGORIES = ["All","Construction","Interiors","Exteriors","Materials","Site Progress"];
const GALLERY_ITEMS = [
  { cat:"Exteriors",   src:"assets/processed/exteriors/residential-hero.webp",        label:"Residential exterior — Ram's Bungalow" },
  { cat:"Exteriors",   src:"assets/processed/exteriors/commercial-hero.webp",         label:"Commercial exterior — Bharathiya Milk Products, Sweets & Bakery" },
  { cat:"Exteriors",   src:"assets/processed/exteriors/exterior-detail.webp",         label:"Residential exterior, elevation detail" },
  { cat:"Exteriors",   src:"assets/processed/gallery/sj-infra-residential-exterior-balconies.webp",                label:"Residential exterior, cantilevered balconies" },
  { cat:"Exteriors",   src:"assets/processed/gallery/sj-infra-residential-exterior-dusk.webp",                label:"Residential exterior, dusk" },
  { cat:"Interiors",   src:"assets/processed/interiors/interior-hero.webp",           label:"Living space — marble flooring & natural light" },
  { cat:"Interiors",   src:"assets/processed/hero/home-hero-full.webp",               label:"Double-height living space with glass elevator" },
  { cat:"Interiors",   src:"assets/processed/interiors/about-teaser.webp",            label:"Staircase & glass balustrade detail" },
  { cat:"Interiors",   src:"assets/processed/interiors/innovation-staircase.webp",    label:"Floating staircase with backlit wood panelling" },
  { cat:"Interiors",   src:"assets/processed/interiors/calculator-preview.webp",      label:"Modular kitchen, geometric false ceiling" },
  { cat:"Interiors",   src:"assets/processed/gallery/sj-infra-modular-kitchen-interior.webp",                label:"Modular kitchen, rose-tone cabinetry" },
  { cat:"Interiors",   src:"assets/processed/gallery/sj-infra-commercial-retail-interior.webp",                label:"Commercial interior — retail counter & display" },
  { cat:"Interiors",   src:"assets/processed/gallery/sj-infra-bedroom-interior.webp",                label:"Bedroom, wood-panel accent wall" },
  { cat:"Interiors",   src:"assets/processed/gallery/sj-infra-dressing-area-interior.webp",                label:"Dressing area with backlit mirror" },
  { cat:"Materials",   src:"assets/processed/gallery/sj-infra-entrance-ceiling-detail.webp",                label:"Entrance ceiling detail, carved motif" },
  { cat:"Materials",   src:"assets/processed/gallery/sj-infra-carved-entrance-door.webp",                label:"Stone-carved door frame & teak door" },
  { cat:"Materials",   src:"assets/processed/gallery/sj-infra-jaali-screen-interior.webp",                label:"Jaali screen & wash counter" },
  { cat:"Materials",   src:"assets/processed/gallery/sj-infra-granite-staircase-detail.webp",                label:"Granite staircase & glass railing" },
  { cat:"Materials",   src:"assets/processed/gallery/sj-infra-wall-relief-panel-detail.webp",                label:"Backlit floral relief wall panel" },
  { cat:"Construction",src:"assets/processed/construction/construction-progress.webp",label:"Site progress — kitchen shell, pre-fixture" },
  { cat:"Site Progress",src:"assets/processed/construction/site-visit.webp",          label:"Site visit in progress" }
];
