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

## Render Deployment

This is a Next.js app with API routes, so deploy it as a Render **Web Service**, not a Static Site.

- Root Directory: leave blank, or use `.` if Render asks for a value.
- Build Command: `corepack enable && corepack prepare pnpm@9.15.9 --activate && pnpm install --frozen-lockfile && pnpm build`
- Start Command: `corepack pnpm start`
- Health Check Path: `/api/health`

Do not set the root or publish directory to `dist`. Next.js builds to `.next`, and this project needs the Node server for `/api/lead`.

You can also use the included `render.yaml` Blueprint.

## Lead Notifications

The `/api/lead` route accepts contact and audit submissions, then sends the lead through every configured channel. One failed optional channel will not break the whole form if another channel succeeds.

Supported channels:

- SMTP email via `nodemailer` using `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, and `NOTIFICATION_EMAIL_TO`.
- ntfy push notifications using `NTFY_TOPIC` or `NTFY_TOPIC_URL`.
- WAHA WhatsApp bridge using `WAHA_API_URL`, `WAHA_API_KEY`, `WAHA_SESSION`, and `WAHA_TO`.
- Generic webhook using `LEAD_WEBHOOK_URL` and optional `LEAD_WEBHOOK_SECRET`.

Recommended launch setup:

1. Configure SMTP email as the dependable lead-capture channel.
2. Configure ntfy as the free open-source mobile push channel.
3. Use WAHA only if you are comfortable self-hosting an unofficial WhatsApp Web bridge with a dedicated WhatsApp number.

Example test:

```bash
curl -X POST http://localhost:3000/api/lead \
  -H 'Content-Type: application/json' \
  -d '{
    "formType":"audit",
    "name":"Test Owner",
    "email":"owner@example.com",
    "phone":"5551234567",
    "company":"Test HVAC",
    "website":"https://example.com",
    "market":"Denver",
    "monthlyRevenue":"$250k-$750k",
    "serviceInterest":"Free HVAC Marketing Audit",
    "message":"Please audit our ads and lead quality.",
    "consent":true,
    "companyWebsite":""
  }'
```

## Structure

```text
src/app
  api/health/route.ts
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
  notifications
  seo.ts
  utils.ts
  validation.ts
public/images
  hvac-coil.jpg
  hvac-diagnostics.jpg
  hvac-inspection.jpg
```

## Notes

- The lead forms validate on the client and server, then notify configured channels from `/api/lead`.
- The attached `NorthOrbis.jpg` was not present in the workspace, so the site uses a geometric black-and-gold logo component and favicon. Replace or extend `src/components/logo.tsx` when the final logo asset is available.
- HVAC photography is downloaded from Pexels free stock images.
