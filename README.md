# Fuentes' Cafe

A food-led website with a curated menu, category filtering, telephone and directions links, published hours and the cafe's Facebook specials. Static Vite frontend, read-only nginx runtime, independent Oracle environments.

## Development

Run `npm ci` then `npm run dev` inside `app/` for a fast frontend preview. `npm run check` builds and validates public files and destinations. Container development and release checks are available through `app.ps1` / `app.sh`.

## Environments

| Branch | URL |
|---|---|
| main | https://fuentes-cafe.xsolutionsmd.com |
| derek-dev | https://fuentes-cafe-derek-dev.xsolutionsmd.com |
| abdul-dev | https://fuentes-cafe-abdul-dev.xsolutionsmd.com |

Each preview push releases only that preview. Production releases require an authorized PR into main. Initial provisioning starts from the same checked source. All environments serve noindex until an indexing decision is made.

See [the handoff](kb/HANDOFF.md), [public sources](kb/sources.md), [feature scope](kb/features.md), [validation](docs/VALIDATION.md) and [deployment contract](docs/ORACLE_DEPLOYMENT.md).
