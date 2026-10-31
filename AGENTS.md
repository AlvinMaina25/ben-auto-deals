<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project: BEN AUTO DEALS

- Brand: **BEN AUTO DEALS** (Nairobi car dealer). The site was previously branded
  "Eric Car Deals" and before that "AuraAuto / Aura Motors" — do not reintroduce
  those names.
- All business info (name, address, phones, email, socials, WhatsApp/map helpers)
  comes from `src/config/brand.ts`. Never hardcode contact details elsewhere.
- Supplied facts: name, Nairobi location (no street address), phone 0703 189296,
  tagline "Quality used cars in Nairobi". Do not invent business facts (street
  address, awards, statistics, testimonials, staff names, opening hours, email,
  social handles, nationwide claims). Use a `TODO(client)` placeholder instead —
  nothing shows while a value is TODO/null.
- The only intentional remaining references to the old brands are the legacy
  `ericcardeals.favorites` and `auraauto.favorites` localStorage keys in
  `src/services/favorites.ts`, kept for the one-time favorites migration.
- Keep the existing architecture, routes, database schema, auth and payments intact.

## Logo & visual identity

- The dealership badge mark lives at `src/assets/ben-auto-deals-badge.png`
  (256px display copy: `ben-auto-deals-badge-256.png`). The single lockup
  component is `src/components/layout/BrandLogo.tsx` — use it in the header,
  footer and auth pages instead of re-creating the wordmark by hand.
- Favicon (`public/favicon.png`) and `public/apple-touch-icon.png` are derived
  from the badge mark. Do not replace them with unrelated icons.
- Palette: obsidian-slate dark base with a warm amber-gold/bronze accent —
  keep all colors in `src/styles.css` oklch tokens; never hardcode colors.
- The footer hides business hours while `brand.hours` still starts with
  "TODO" — never invent hours, just fill in `src/config/brand.ts`.
