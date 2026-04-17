# tayyibatfood.com — v1.1

**المَطبخ المحايد · The Neutral Kitchen**

Production codebase for [tayyibatfood.com](https://tayyibatfood.com) — a bilingual (AR-first, EN mirror) documentation site for the Tayyibat dietary system.

---

## The contract

This build implements two authoritative documents together:

1. **Tayyibatfood Developer Handoff Brief v1.0** (Zezo / Strike Media) — the strategic, editorial, and architectural framework
2. **Tayyibatfood Design System Amendment v1.1** — the sage + saffron palette reframe and liquid-glass treatment upgrade

When the two conflict, v1.1 wins.

## Stack

- **Next.js 14** (App Router) with static export (`output: "export"`)
- **TypeScript** — strict mode
- **Tailwind CSS** — token system mirrors the v1.1 palette contract
- **Netlify** — hosting, build pipeline, CDN

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produces /out — this is what Netlify deploys
```

## Design system guardrails (enforced in QA)

- **Ottoman red** (`#8B2332`) may appear only inside `VerdictBadge` and `VerdictCard`. Every other occurrence in the codebase is a bug.
- **Liquid glass** (`.glass-base`, any `backdrop-filter`) may appear only on: `SiteHeader`, `LookupSearch`, `Chip`, `VerdictCard`. Editorial surfaces stay parchment-clean.
- **Fonts** — Markazi Text (display), Rubik (body), Amiri (editorial), Source Serif 4 (Latin). Do not introduce Cairo, Tajawal, Inter, Roboto, or any system default.
- **Disclaimer** — the verbatim §8.3 text appears in every page footer. Do not paraphrase.
- **Forbidden chrome words** — علاج, شفاء, طبي, دكتور, صحي, نحف, تخسيس, cure, treat, heal, medical, doctor. Editorial body can discuss these concepts. UI chrome cannot.

## Performance budget

- Lighthouse Mobile Performance ≥ 85
- LCP < 2.5s on 3G Fast
- CLS < 0.05
- First-load JS < 150 KB gzipped

Verify with `npm run build` → inspect `.next/analyze` or run Lighthouse directly against a local `npx serve out/`.

## Project structure

```
src/
├── app/                   # Next.js App Router
│   ├── layout.tsx         # Root HTML — AR default
│   ├── page.tsx           # Homepage (AR)
│   ├── globals.css        # v1.1 token system + glass base
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── not-found.tsx
│   ├── القاموس/          # Dictionary (AR)
│   │   ├── page.tsx       # List
│   │   └── [slug]/        # Detail (one per food)
│   ├── الموسوعة/          # Encyclopedia (AR)
│   ├── البدائل/           # Substitutions (AR)
│   ├── جدول-الوجبات/      # Meal plan (AR)
│   ├── السجل/             # Archive (AR) — controversy scoped here
│   └── en/                # English mirror — full parity
├── components/            # UI primitives + section assemblies
└── lib/                   # types, foods (data), search, i18n, analytics
```

## Deploy

Configured for **Netlify** via `netlify.toml`. Push to the `main` branch of `tayyibatfood/tayyibatfood` and Netlify auto-deploys to site `dc01fbed-40ff-431f-96a0-de799a2d6aa3`.

See `PUSH_INSTRUCTIONS.md` for the exact command sequence.

## Content expansion

Dictionary data lives in `src/lib/foods.ts` — 30 seeded entries at launch. Target for end of Month 1: 100 entries. Month 3: 300+ (the SEO moat). Add entries by appending to the `FOODS` array. The static build picks them up automatically — no other changes required.

---

© Strike Media · All rights reserved · v1.1
