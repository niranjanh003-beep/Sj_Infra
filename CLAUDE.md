# CLAUDE.md — SJ Infra Ballari Website (Project Memory)

This file is the persistent source of truth for this project. Update it whenever a
major decision is made. Do not erase prior decisions unless explicitly told to.

## 1. Project Purpose
Static marketing website for **SJ Infra**, a construction + interiors studio based in
Ballari, Karnataka. Goal: reposition it as a premium Indian architecture/engineering/
construction brand (inspired by L&T, Shapoorji Pallonji, Tata Projects, HCC — principles
only, never copied) while staying strictly factual about SJ Infra itself.

Live reference site (primary factual source): https://sjinfraballari.com/
Instagram (secondary source): https://www.instagram.com/sj_infra_ballari/
Photo library (Drive): https://drive.google.com/drive/folders/1MvSZY0tN_Wslq3JPuxuJWK3DJfbURsS7
Prior Lovable project: https://lovable.dev/projects/9695748f-ecc6-4186-93b0-245474d114e0

## 2. Architecture
Static HTML/CSS/JS, no build step, no framework.
- `js/content.js` — single source of data (SITE, NAV_LINKS, SERVICES, PROJECTS,
  TESTIMONIALS, CONSTRUCTION_TIERS, INTERIOR_RATES, FAQS, GALLERY_CATEGORIES). Every
  page reads from this file — edit once, updates everywhere.
- `js/main.js` — shared behavior: header/footer rendering, mobile menu, scroll-reveal
  animation, FAQ accordion, testimonial slider, contact form (front-end only, does not
  send anywhere yet).
- `css/style.css` — full design system in `:root` custom properties.
- Each top-level page (`index.html`, `about.html`, etc.) is hand-written HTML that
  injects header/footer/dynamic sections via `main.js` + inline `<script>` blocks.
- `services/*.html` (7 pages) — one per SERVICES entry, presumably static per-service copy.
- `projects/sample-project.html` — single template, reads `?id=` query param against
  the PROJECTS array (no per-project static pages).
- `calculator.html` — has its own multi-step calculator logic inline (not in main.js).

## 3. Design System — ✅ RESOLVED 2026-08-31
**Originally flagged as a conflict; now resolved.** The codebase's palette/type didn't
match the handover brief when this project started. The user's later two prompts both
re-specified the same premium palette explicitly, which was taken as confirmation and
implemented in full — see section 15 for the complete migration record.

| | Spec (all three briefs agree) | Current code (as of this update) |
|---|---|---|
| Deep green | `#073B2A` | `#073B2A` ✅ |
| Dark green | `#052D21` | `#052D21` ✅ |
| Ivory | `#F7F5EF` | `#F7F5EF` ✅ |
| Accent | Muted gold `#C9A646` | `#C9A646` ✅ (was a green tint before) |
| Headline type | Premium editorial serif | Playfair Display, natural mixed case ✅ (was bold-uppercase Archivo) |
| Body/UI type | Modern clean sans | Inter (unchanged, was already correct) |


## 4. Routes / Sitemap
`index.html`, `about.html`, `services.html`, `process.html`, `projects.html`,
`innovation.html`, `gallery.html`, `calculator.html`, `faq.html`, `contact.html`, `404.html`
Service detail: `services/{residential-construction, commercial-construction,
interior-design, exterior-design, layout-planning, renovation, project-management}.html`
Project detail: `projects/sample-project.html?id=` (template only, no per-project pages yet)

## 5. Image System — currently all placeholders
- Only real asset in repo: `images/logo.jpg`.
- Every photo slot site-wide is a CSS-drawn `.ph-block` placeholder (diagonal cross +
  label text), not an `<img>`. ~25 placeholder slots across the site (index has 3,
  sample-project has 4, gallery has 2, each service page has 1, etc. — see audit below).
- No `/assets/source/` or `/assets/processed/` directories exist yet — need to be created
  per the brief's asset-organization spec (section 12 of the brief) once real photos land.
- No WebP/AVIF or responsive image pipeline exists yet.
- **Photo sourcing access, as of this audit:**
  - Google Drive folder link resolves and is shared, but its file listing is JS-rendered —
    it could NOT be browsed or enumerated via a plain page fetch. A **Google Drive
    connector is available** (not yet connected) that would let Claude actually search,
    read, and download files from the folder directly — recommended next step once the
    user wants photos pulled in.
  - Instagram profile page blocks automated fetching (robots.txt disallow) — could not be
    scraped directly. It remains usable only via manual download/upload by the user, or a
    dedicated Instagram-capable connector if one is connected later.

## 6. Content / Factuality Rules
- `sjinfraballari.com` is the factual source of truth; never invent stats, projects,
  clients, awards, certifications, or dates.
- Content already marked **VERIFIED** in `content.js` (checked against the live site
  during this audit — confirmed accurate): phone `+91 81235 43860`, email
  `sjinfra5@gmail.com`, the 4 testimonials (names + quotes match live site), and the
  3-tier construction pricing (₹1,700 / ₹2,100 / ₹2,600 per sq ft, matches live
  "Basic/Standard/Premium Package" copy).
- Content already marked **PLACEHOLDER** in `content.js` (correctly flagged, do not
  unflag without real data): STATS (years active, projects delivered), PROJECTS (all 9
  entries are `[Add project name]` stubs), team/founder info.
- **Discrepancy noticed (not yet resolved):** `content.js` lists Facebook as
  `facebook.com/profile.php?id=61554949876066`; the live site instead links to
  `facebook.com/Constructionandarchitecturalandinterior/`. Similarly `content.js`'s
  Instagram is the profile URL while the live site links a specific Reel. Needs the
  user to confirm which are the correct/current official links before either is
  changed.
- Live site's actual calculator is materially more detailed than this codebase's
  version (property type branches for residential interior / commercial interior /
  new construction residential / new construction commercial, MEP add-ons, structural
  system choices, etc.) — current `calculator.html` implements a simpler subset. Not a
  factual error, just a scope gap — flagged as a possible future improvement, not
  changed yet.

## 7. Development Rules
- Inspect → understand → plan → implement → test, in that order.
- Don't rewrite functioning code unnecessarily; no new dependencies without reason.
- Content stays in `content.js`, separate from markup where practical.
- No build step — keep it that way unless the user asks to add one.
- Never overwrite original photographs; processed derivatives only, originals kept
  untouched in `/assets/source/`.
- Label every claim as **FACT / INFERENCE / RECOMMENDATION / NEEDS USER INPUT**.

## 8. Current Implementation Status
Structurally complete static site: all 10 top-level pages + 7 service pages + 1
project template + 404 exist and appear to share header/footer/nav via `main.js`.
Interactive pieces present: mobile menu, scroll-reveal, FAQ accordion, testimonial
slider, multi-step calculator (own logic), contact form (front-end only, no backend).
Zero real project/site photography integrated. Design system internally consistent
but not yet reconciled with the new brief's palette/typography direction (see §3).

## 9. Known Issues
- Contact form doesn't submit anywhere (README-documented, needs Formspree or backend).
- Google Map on Contact page is a placeholder, no real embed.
- No per-project static pages, only a query-param template — fine for a placeholder
  phase, may not be ideal for SEO once real projects/photos exist (case-study structure
  requested in brief §15 implies dedicated project pages might read better).
- Calculator is a simplified subset of the live site's actual calculator flow.

## 10. Pending Tasks (not started — waiting on user direction)
1. Resolve the palette/typography conflict in §3.
2. Decide how to pull real photography: connect the Google Drive MCP connector, or
   have the user export/upload photos manually.
3. Build the image intelligence pipeline (discovery → analysis → classification →
   matching → cropping → enhancement → optimization) once real photos are accessible.
4. Get real PROJECTS data (names, locations, photos) to replace the 9 placeholder stubs.
5. Confirm correct Facebook/Instagram links.
6. Decide whether to expand `calculator.html` to match the live site's fuller flow.

## 11. Important Decisions Log
- **2026-08-31 — Google Drive connected & photo library discovered.** Authorized folder
  contains 42 files → 31 genuine usable photographs across ~6 distinct properties,
  including two identified real client projects: "Ram's Bungalow" (residential, signage
  visible) and "Bharathiya Milk Products — Sweets & Bakery" (commercial, signage
  visible). Full inventory and per-image quality/crop notes were reported to the user
  before processing.
- **2026-08-31 — First round of image integration shipped.** Cropped/enhanced/exported
  ~30 WebP derivatives into `/assets/processed/{hero,exteriors,interiors,construction,
  services,gallery}`. Wired into: homepage hero (responsive srcset, 480–1920px), homepage
  about-teaser image, homepage calculator-CTA image, the 7 service "sector" tiles, and a
  full rebuild of `gallery.html` (real `GALLERY_ITEMS` array in `content.js`, replacing
  the placeholder masonry + placeholder lightbox with real photography and a working
  lightbox). All 31 originals preserved untouched in `/assets/source/`.
- **Deliberately NOT touched:** `projects.html` / the homepage "Selected work" preview
  and the `PROJECTS` array. Pairing these specific real photos with the existing
  `[Add project name]` placeholder entries would fabricate project identity (wrong per
  the factual-content rule) — needs real project names/locations from the user first.
- **Palette/typography conflict (see §3): still unresolved**, untouched this round —
  only images were added, no color/type changes made.

## 12. QA / Repair Pass — 2026-08-31
Full-site audit performed against every HTML page, content.js, and all image/link
references. Root-cause bug found and fixed: the 7 individual service pages had never
been wired to any image at all (static, disconnected placeholder), which is why
Home → Residential Construction → the service page itself showed inconsistent imagery.
Fixed via a single shared `SERVICE_IMAGES` map in `content.js`, referenced by both the
homepage sector grid and all 7 service-page heroes, using the site's existing
`relPrefix()` helper for correct path resolution at any folder depth.

Also fixed in this pass: about.html photo, contact.html Google Maps embed (real iframe,
not a screenshot), 404.html background, services.html calculator preview, and — found
during the scan, not part of the original report — a **second, separate** placeholder
in the homepage's own "Selected work" preview grid (distinct code path from
projects.html, easy to miss). Both now render real cover photos for the two
confirmed-identity projects (Ram's Bungalow, Bharathiya Milk Products) and a redesigned
"Photography pending" state (not a broken-looking box) for the rest.

Added `assets/image-manifest.json` — 32 entries, each with source file, processed path,
website location, ratio, dimensions, processing applied, and quality score.

Full verification performed (not just code read-through): every asset path resolved
against the filesystem (32/32 found), every SERVICES id checked against actual
`services/*.html` files (7/7 exist), every inline `<script>` brace/paren-balanced,
`content.js` syntax-checked, no empty `src=""`, no dead `href="#"`, no `onclick`
handlers anywhere in the repo. Could not do a live browser/responsive screenshot pass —
network access is sandboxed in this environment (including localhost) — so mobile
breakpoints were verified by CSS rule inspection (grid stacking, `clamp()` gutters,
percentage-based image sizing) rather than visual render. Recommend the user do one real
mobile-device pass before launch.

## 13. Remaining Known Gaps (intentional, not bugs)
- Interior category on the homepage preview + `projects.html` still shows "Photography
  pending" — no interior project has confirmed name/identity yet (p6, p7 are still
  placeholder), even though plenty of real interior *photos* exist in the gallery.
  Deliberately not forced together to avoid misattributing photos to an unconfirmed
  project.
- 7 of 9 `PROJECTS` entries remain placeholder — same reason, unresolved from before.

## 14. Flags Needing Your Review (carried over, still open)
1. **Client signage visible in hero-quality photos.** "Ram's Bungalow" and "Bharathiya
   Milk Products" branding is legible in several processed images (residential-hero.webp,
   commercial-hero.webp, gallery-09/gallery-07, projects.html cards, etc.). These are
   almost certainly SJ Infra's own completed projects, but there's no explicit
   confirmation of client sign-off to publish their branded buildings site-wide.
   Recommend confirming before launch, or asking for tighter crops that exclude signage.
2. **People visible, incidental:** a few gallery/exterior/site-progress images have
   small, non-identifiable people in frame. Not portraits, not the subject, flagging
   per policy.
3. **`/assets/source/` is ~96MB** (31 uncompressed screenshot-resolution PNGs/JPEGs).
   Fine to keep in the working project for reference, but exclude it from whatever
   directory actually gets deployed to production hosting — only `/assets/processed/`
   (~2.4MB) should ship.
4. **Resolution ceiling:** every source photo is a Photos-app screenshot (phone-screen
   resolution, ~1080×1930), not the original camera file. Looks good at the sizes used
   here; if a future need calls for a true full-bleed 2400px+ desktop hero, ask for the
   original camera files rather than upscaling these further.
5. **Property identity unconfirmed** for most groupings (only Ram's Bungalow and
   Bharathiya Milk Products have visible signage). If real names/locations/dates become
   available, `PROJECTS` in `content.js` can finally move off placeholder data.
6. **"Completed" status inference:** `p1` and `p4` are now marked `status:"Completed"`
   based on visual evidence (finished, signed, apparently-occupied buildings) — this is
   an inference from photos, not a confirmed fact from SJ Infra. Flagging per the
   FACT/INFERENCE distinction.
7. **No live browser QA possible in this environment** — network access (including
   localhost) is sandboxed here, so the responsive/visual pass was done by CSS rule
   inspection, not by rendering the site. Recommend one real-browser pass at 360–1920px
   before publishing.

## 15. Master Premium Rebuild Pass — 2026-08-31 (second QA round)
A follow-up brief asked for a full luxury rebuild: possible React/TypeScript/Tailwind
migration, "AI DSLR architectural photographer" enhancement, AI object-removal/inpainting,
and a ground-up visual overhaul. Decisions made, with reasoning:

**Did NOT migrate to React/TypeScript/Tailwind.** The brief's own stated criterion was
"does the new architecture allow a substantially better premium result — if not, don't
migrate just to migrate." The site's actual quality gaps were photography (fixed in
earlier passes) and typography/palette (fixed this pass) — neither requires a framework
change. A blind rewrite of 15+ pages with no live-browser preview available in this
environment (network is sandboxed here, including localhost) would be high-risk for no
proven visual benefit. This is a judgement call, reversible if the user disagrees.

**Did NOT do generative "AI DSLR" enhancement or AI object-removal/inpainting.** No such
tool is available in this environment — only conventional Pillow-based processing (crop,
contrast, saturation, sharpen, one white-balance correction). Continued using that,
honestly labeled as such rather than dressed up as AI enhancement. See
`assets/image-quality-report.md` for the full, honest breakdown of what was and wasn't
done, and what would need real DSLR originals or a connected image-editing tool.

**DID migrate the color palette and typography** — this directly resolves the conflict
flagged all the way back in section 3 of this document. The user's second and third
prompts both explicitly re-specified the same premium palette (`#073B2A` / `#052D21` /
`#C9A646`), so this pass treated that as a resolved decision and implemented it fully:
- `:root` CSS variables updated to the new ramp (forest-950 through forest-600, gold,
  gold-soft, ivory, border)
- Found and fixed 9 additional hardcoded color instances that bypassed the variable
  system entirely (`.sector-tile[data-tone]` gradients, `.project-card[data-cat]`
  gradients, and 5 decimal-form `rgba(46,74,62,...)` instances) — a plain hex grep alone
  would have missed these
- Swapped Archivo → Playfair Display for `--serif`, kept Inter for `--sans`
- **Removed `text-transform:uppercase` from h1/h2.** This was a real bug, not just a
  palette mismatch: forcing an editorial high-contrast serif into all-caps defeats the
  entire visual point of stroke-contrast serif type and looks clumsy, not premium.
  Headings now render in natural mixed case.
- Updated `README.md`'s design-system section, which still described the old palette

**DID rename generic asset filenames to semantic ones** per the brief's Phase 11 —
`gallery-01.webp` etc. → `sj-infra-entrance-ceiling-detail.webp` etc. (11 files renamed,
26 references updated across `content.js`, `about.html`, and `image-manifest.json`),
then re-verified all 32 asset references still resolve.

**Section rhythm / "cheap pattern" audit:** checked for excessive shadows, rounded
rectangles, glassmorphism per the brief's "avoid" list. Found the existing system was
already disciplined (2px/50%/20px-pill radii only, 2 restrained box-shadows, 2 modest
backdrop-filter uses) — no changes needed there. Section vertical rhythm
(`clamp(70px,9vw,140px)`) was already generous. This confirms the real gaps were always
photography + typography, not layout mechanics.

**Created `assets/image-quality-report.md`** — honest per-image quality bands, what
processing was/wasn't applied, and what still needs better source material.

**Still not possible in this environment:** live browser rendering at any breakpoint
(network sandboxed, including localhost) — same limitation as the previous QA pass,
verified via CSS rule inspection instead. Recommend one real-browser pass before launch.
