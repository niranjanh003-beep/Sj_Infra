# SJ Infra — Image Quality & Processing Report

## What kind of processing was actually applied

**Important distinction, stated plainly:** the master rebuild brief asked for
"AI DSLR architectural photographer" enhancement (Phase 5) and AI object-removal /
inpainting (Phase 6). I do not have access to a generative image-editing or
inpainting model in this environment — only conventional programmatic image
processing (Python/Pillow). So what's actually in `/assets/processed/` is:

- Smart cropping to the target aspect ratio, computed per-image (never blind
  center-crop) to preserve architectural lines, focal points, and negative space
  for text overlays
- Removal of the phone-screenshot "HDR" badge / UI chrome via crop, not inpainting
- Contrast +6%, color saturation +8%, sharpness +15% (fixed, modest values —
  chosen to avoid the "oversharpened/HDR/plastic" look the brief explicitly warns
  against)
- One white-balance correction (red-channel pull) on a single warm-cast image
- Resizing to responsive widths, WebP export at quality 84

**What was NOT done, because the tooling doesn't exist here:** no upscaling beyond
the source resolution, no deblurring, no generative detail recovery, no object
removal/cleanup (litter, cables, minor clutter), no perspective correction beyond
what cropping achieves, no inpainting of any kind. Every photo's actual pixel
content is untouched original content, just cropped/color-adjusted/resized.

If true DSLR-grade enhancement or object cleanup is wanted, that needs either a
dedicated image-editing tool/service connected to this environment, or the
original camera files run through desktop software (Lightroom/Photoshop) by a
human editor — recommending this rather than approximating it with a plain
sharpen filter and calling it "AI enhancement," which it isn't.

## Per-image quality assessment (all 31 real source photos)

Resolution ceiling: every source file is a phone screenshot of the Photos app
(~1080×1930px), not a full camera-resolution original. Fine for the sizes used on
this site; would look soft if blown up much larger than ~1400px wide.

| Quality band | Count | Notes |
|---|---|---|
| Excellent | 19 | Sharp, well-composed, good light, minimal distractions |
| Good | 9 | Sharp and usable, but a duplicate angle, minor clutter, or awkward crop limits it to secondary placement |
| Needs enhancement | 3 | People/debris in frame, or a warm color cast that conventional white-balance correction only partly fixes |
| Rejected | 0 | Nothing was rejected outright; the 3 "needs enhancement" images are still in use where their content (e.g. genuine site-visit documentation) outweighs the flaw |

## Images still needing better source material

- **Bedroom interior, wardrobe shots (Property B/D)** — warm tungsten color cast is
  only partially correctable without the original RAW/camera file; a true neutral
  white balance would need the source photo, not this screenshot derivative.
- **Ram's Bungalow process shot** — has two people and a dog in frame; works fine
  as an honest "site visit" documentary image but isn't hero-clean.
- **Interior category still has no confirmed-project cover photo** — plenty of
  real interior photos exist, just none tied to a confirmed project name yet.
- **Any true full-bleed 2400px+ desktop hero** — would need original camera files,
  not these phone-screenshot derivatives, to hold up at that size.

## Processing pipeline reference

See `assets/image-manifest.json` for the complete per-image record: source file,
processed path, website location, crop ratio, output dimensions, processing
applied, and quality score — 32 entries covering every processed derivative
currently used on the site.
