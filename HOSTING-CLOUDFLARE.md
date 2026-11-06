# Hosting Brightlane Studio on Cloudflare

The site is a TanStack Start app: a small server (for page rendering) plus static
files. The build already targets Cloudflare Workers, so hosting is three commands.

## 1. Install dependencies

```sh
npm install
```

Node.js 20 or newer is required.

## 2. Build

```sh
npm run build
```

This creates:

- `.output/server/index.mjs` — the worker (server-side rendering)
- `.output/public/` — static files (CSS, JS, images)

## 3. Deploy

```sh
npx wrangler login
npx wrangler deploy
```

`wrangler login` opens a browser to sign in to your Cloudflare account.
`wrangler deploy` uploads the worker and the static files using the settings in
`wrangler.toml`, then prints your live URL, e.g.
`https://brightlane-studio.<your-subdomain>.workers.dev`.

## Previewing the build locally

```sh
npx wrangler dev
```

This runs the production build on your machine before you deploy it.

## Using your own domain

In the Cloudflare dashboard: **Workers & Pages → brightlane-studio → Settings →
Domains & Routes**, then add your domain. If the domain is already on Cloudflare,
point it at the worker and it serves the site.

## Editing the site

All visible content lives under `src/`:

- `src/components/portfolio/` — one file per section (nav, hero, about, services,
  projects, testimonials, contact, footer)
- `src/assets/` — the four project screenshots
- `src/styles.css` — colours, fonts, and effects

After changing anything: `npm run build && npx wrangler deploy`.
