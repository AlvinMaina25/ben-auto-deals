# BEN AUTO DEALS

Used-car marketplace website for **BEN AUTO DEALS**, a car dealership in Nairobi, Kenya.

Built with TanStack Start, React, TypeScript, Tailwind CSS and Supabase.
Originally generated with [Lovable](https://lovable.dev) and kept in sync with it.

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

Other scripts: `npm run build`, `npm run lint`, `npm run format`.
Type-check with `npx tsc --noEmit`.

## Business information

All business details (name, address, phone number, email, social links, WhatsApp
link helper, map links) live in one file: [`src/config/brand.ts`](src/config/brand.ts).
Import from there instead of hardcoding contact details.

Items still waiting on the client are marked `TODO(client)` — search the codebase
for that marker (street address, business hours, email, social handles, domain,
exact map pin). Nothing is shown for a detail while it is `TODO(client)`/null.

## Legacy identifiers

The favorites `localStorage` key is now `benautodeals.favorites`. The previous
`ericcardeals.favorites` and `auraauto.favorites` keys are intentionally still
referenced in `src/services/favorites.ts` so existing visitors' saved cars are
migrated once. Database tables and storage bucket IDs were not renamed.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
- Supabase
