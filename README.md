# NorthOrbis AIMA

Production-ready Next.js 15 website for NorthOrbis AIMA, an AI-augmented social media marketing agency for HVAC contractors.

## Run Locally

```bash
corepack prepare pnpm@9.15.9 --activate
pnpm install
pnpm dev --hostname 0.0.0.0
```

## Verification

```bash
pnpm typecheck
pnpm build
```

## Structure

```text
src/app
  api/lead/route.ts
  about/page.tsx
  audit/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  case-studies/page.tsx
  contact/page.tsx
  privacy/page.tsx
  process/page.tsx
  services/page.tsx
  terms/page.tsx
  layout.tsx
  page.tsx
  globals.css
  opengraph-image.tsx
  robots.ts
  sitemap.ts
src/components
  forms/lead-form.tsx
  ui/button.tsx
  ui/container.tsx
  final-cta.tsx
  hero-visual.tsx
  logo.tsx
  pricing-card.tsx
  reveal.tsx
  section-heading.tsx
  site-footer.tsx
  site-header.tsx
  trust-strip.tsx
src/lib
  content.ts
  seo.ts
  utils.ts
  validation.ts
public/images
  hvac-coil.jpg
  hvac-diagnostics.jpg
  hvac-inspection.jpg
```

## Notes

- The lead forms validate on the client and server, then return success from `/api/lead`.
- Connect the production hook in `src/app/api/lead/route.ts` to your CRM, email service, or automation platform.
- The attached `NorthOrbis.jpg` was not present in the workspace, so the site uses a geometric black-and-gold logo component and favicon. Replace or extend `src/components/logo.tsx` when the final logo asset is available.
- HVAC photography is downloaded from Pexels free stock images.
# NorthOrbis
