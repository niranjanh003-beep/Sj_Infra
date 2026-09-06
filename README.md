# SJ Infra — Website Build

A static HTML/CSS/JS website for SJ Infra (Ballari construction & interiors studio).

## How to use
- Open `index.html` directly in a browser, or host the whole folder on any static host
  (Netlify, Vercel, GitHub Pages, or your own server) — no build step required.
- All shared content (phone, email, services, pricing tiers, FAQs, testimonials) lives in
  `js/content.js` — edit values there and every page updates automatically.

## What's real vs. placeholder
Verified content (pulled from sjinfraballari.com): phone, email, address, service areas,
testimonials, and the 3-tier construction pricing (₹1,700 / ₹2,100 / ₹2,600 per sq ft).

Clearly flagged placeholders (search for "placeholder-flag" / "disclaimer-box" in the code,
or look for the dashed gold boxes on the live pages):
- **Projects & Gallery** — no real project photos/names exist yet; the layout is fully built
  and ready, just swap in real content in `js/content.js` (`PROJECTS` array) and replace the
  `.ph-block` placeholder tiles with `<img>` tags.
- **Company stats** (years active, projects completed) — not published anywhere; add real
  numbers to the `STATS` array and the homepage trust strip once confirmed.
- **Team/founder info** — not published; the About page has a marked spot for this.
- **Contact form** — front-end only right now (shows a success message but doesn't send
  anywhere). Wire it to an email service (e.g. Formspree) or backend before going live.
- **Google Map embed** — the Contact page has a placeholder block; swap in a real
  `<iframe>` embed of your Maps listing.

## Design system
- **Colour palette**: Deep Forest Green (`#073B2A`, primary) and Dark Green (`#052D21`,
  secondary), Warm Ivory background, and a restrained Muted Gold accent (`#C9A646`) used
  sparingly. See the `:root` block at the top of `css/style.css` for the full tonal ramp.
  To retheme, edit those variables only; every page inherits from them. (Also also check for
  a handful of intentionally-hardcoded gradient/scrim colours further down the file, in the
  `.sector-tile[data-tone]` and `.project-card[data-cat]` blocks, which mirror the same ramp.)
- **Logo**: `images/logo.jpg` is your real logo file, used in the header and footer inside a
  white rounded chip (so it stays legible over both photo and solid backgrounds).
- **Typography**: Playfair Display (editorial high-contrast serif, set in natural mixed
  case — not uppercase, which would defeat the point of a stroke-contrast serif) for
  headlines, Inter for body/UI text — architectural authority paired with modern precision.
- **Homepage "What We Build" grid**: an edge-to-edge image-tile grid of all 7 services plus a
  "View All Services" tile, now populated with real SJ Infra photography via the shared
  `SERVICE_IMAGES` map in `js/content.js`.

## Structure
- `index.html`, `about.html`, `services.html`, `process.html`, `projects.html`,
  `innovation.html`, `gallery.html`, `calculator.html`, `faq.html`, `contact.html`, `404.html`
- `services/*.html` — 7 individual service pages
- `projects/sample-project.html` — project detail template (reads `?id=` from the URL)
- `css/style.css` — full design system
- `js/content.js` — all editable content/data
- `js/main.js` — shared behavior (nav, footer, animations, calculator logic, filters, etc.)
