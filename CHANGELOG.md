# tayyibatfood.com — Changelog

> Developer-facing changelog. User-facing version renders at `/ar/التحديثات/` and `/en/updates/` from `data/updates.json`.
> When shipping a change that matters to users, add an entry to `data/updates.json` AS WELL — the JSON is the canonical source.

## [2026-04-17] v2.1 — The Depth Pass

### Added
- **Updates tracker** — `/ar/التحديثات/` and `/en/updates/` render `data/updates.json` with category colors, date grouping, and empty states.
- **Videos section** — `/ar/فيديوهات/` and `/en/videos/` render `data/videos.json`. Cards use YouTube thumbnails; click opens embedded lightbox with chapter markers from the transcript.
- **Weekly meal plan content** — 7 days × 2 meals, grounded in the `js/food-database.js` allowed list (avoids chicken, eggs, dairy, legumes, onion, garlic).
- **Color depth**: ottoman-tinted warm shadows, gradient library, SVG grain texture overlay on body, gradient accent line on page-heroes, richer hover states.
- New CSS tokens: `--shadow-warm-{sm,md,lg}`, `--gradient-{parchment,hero,ottoman,olive,saffron,accent-line}`, `--grain-texture`.
- New page-level components: `.page-hero`, `.page-hero--gradient`, `.update-card`, `.video-card`, `.video-lightbox`, `.day-card`, `.meal`, `.protocol-note`, `.shopping-cta`, `.section-note`.

### Removed
- `المَطبخ المحايد` / `The Neutral Kitchen` tagline stripped from 24 files (meta tags, titles, OG cards, JSON-LD, header brand-tag span, CSS comments, internal demo notes).
- `.brand-tag` span no longer rendered in header; `.brand-text` wrapper also removed from live markup.

### Changed
- Primary nav now: الرئيسية · البحث · جدول الوجبات · الموسوعة · فيديوهات د. ضياء (5 items, brief-compliant).
- Footer's "عن الموقع" column now includes "التحديثات" link.
- `og:site_name` simplified to `الطيبات · tayyibatfood.com`.
- Organization schema `alternateName` now an array including the Arabic name.

## [2026-04-17] v2.0.1 — Logo Refresh
- Replaced `ط`-badge + text wordmark with new الطيبات image logo across 22 pages.
- Full favicon set (16/32/48/180/192/512 + multi-size .ico), `site.webmanifest`, `og-logo.png` on parchment.

## [2026-04-16] v2.0 — The Neutral Kitchen Rebuild
- Initial v2.0 codebase: Plausible analytics, Organization + WebSite + SearchAction JSON-LD, hreflang, AI-scraper robots.txt, netlify.toml with security headers and cache policy.

---

## How to add an entry going forward
1. **For user-visible changes**: append to `data/updates.json` at the top of the `entries` array. Categories: `design`, `content`, `feature`, `fix`, `seo`.
2. **For dev-only changes**: add a line here under the current date. No JSON edit needed.
3. **For each deploy**: increment version in the section header (e.g., v2.1 → v2.2).
