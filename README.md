# AsianCoding.com

B2B SEO and lead-capture engine for Asian Coding Systems.

## Features

- 🎯 Landing pages: Barcode Scanner, RFID Warehouse, Warehouse Automation, Retail POS
- 📋 Lead capture with attribution tracking (UTM, source page, keyword group)
- 📊 GA4 & GTM integration with event hooks (cta_click, form_start, generate_lead, etc.)
- 🔍 SEO metadata, schema markup, canonical URLs
- 🤖 robots.txt & sitemap.xml
- 🔐 Noindex protection for internal pages (/dashboard, /proposal)

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Analytics:** GA4 ready

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Test

```bash
npm run build      # Build production bundle
npm start          # Serve production build
npm run lint       # ESLint
npm run type-check # TypeScript type check
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── (landing)/          # Landing page group
│   │   ├── barcode-scanner-thailand/
│   │   ├── rfid-warehouse-system/
│   │   ├── warehouse-automation-thailand/
│   │   ├── retail-pos-barcode-system/
│   │   └── contact/
│   ├── (internal)/         # Internal pages (noindex)
│   │   ├── dashboard/
│   │   ├── proposal/
│   │   └── admin/
│   ├── api/                # API routes
│   │   └── leads/          # Lead submission endpoint
│   ├── robots.txt          # SEO crawl rules
│   └── sitemap.xml         # SEO sitemap
├── components/             # Reusable components
│   ├── SEO/
│   │   ├── HeadMeta.tsx
│   │   ├── Schema.tsx
│   │   └── CanonicalLink.tsx
│   ├── Forms/
│   │   ├── LeadForm.tsx
│   │   └── LeadFormField.tsx
│   ├── Analytics/
│   │   └── EventTracker.tsx
│   └── Navigation/
│       ├── Header.tsx
│       └── Footer.tsx
├── hooks/                  # Custom React hooks
│   ├── useAttribution.ts   # UTM & attribution capture
│   └── useAnalytics.ts     # GA4 event tracking
├── utils/                  # Utility functions
│   ├── seo.ts              # SEO helpers
│   ├── schema.ts           # JSON-LD schema helpers
│   └── attribution.ts      # Attribution logic
└── config/
    └── seoConfig.ts        # SEO metadata configuration
```

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://asiancoding.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

## Deployment

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy
5. Test all landing pages, forms, and SEO

## SEO Checklist

- [x] Meta tags (title, description, robots)
- [x] Canonical URLs
- [x] Schema markup (LocalBusiness, ContactPoint)
- [x] robots.txt & sitemap.xml
- [x] OG tags for social sharing
- [x] Noindex for internal pages
- [x] Mobile viewport
- [x] Language attributes

## Lead Attribution Fields

All lead forms capture:
- `source_page` — Current page path
- `cta_source` — CTA button/link ID
- `utm_source` — From URL params
- `utm_medium` — From URL params
- `utm_campaign` — From URL params
- `keyword_group` — Inferred from page

## GA4 Events

- `cta_click` — CTA button/link clicked
- `form_start` — User focused first form field
- `form_field_blur` — User left form field
- `generate_lead` — Form submitted (conversion)
- `line_click` — WhatsApp/Viber link clicked
- `call_click` — Phone call link clicked
- `page_scroll` — User scrolled past 50%
- `video_play` — Video started

## Contributing

Follow existing patterns. Keep changes small and reviewable.

## License

MIT
