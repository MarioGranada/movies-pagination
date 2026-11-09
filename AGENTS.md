# AGENTS.md — The Movie Vault

Compact guide for future OpenCode sessions. It records only the facts an agent is likely to miss or get wrong.

## Quickstart

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies. |
| `cp .env.example .env` | Add the TMDB token. |
| `npm run dev` | Start Vite at http://localhost:5173. |
| `npm run build` | Type-check and build. |

## Requirements

- Node.js 20 or newer.
- npm (a `package-lock.json` is committed).
- A TMDB account and API read-access token.

## Environment

- Create a `.env` file (or `.env.local` where the framework expects it) and set the variables. Never commit real secrets.

  - `VITE_ACCESS_TOKEN` — TMDB API v4 read-access token used as a Bearer token.
- `VITE_ACCESS_TOKEN` is required and is exposed to the browser.
- Only `VITE_*` variables are available in client code.

## Architecture

- `src/routes/` — file-based routes; `routeTree.gen.ts` is generated.
- `src/shared/pagesComponents/Root/` — search and pagination orchestration.
- `src/shared/components/` — reusable UI and pagination controls.
- `src/store/` — movies, loading, and config slices.
- `src/shared/helpers/customFetch.ts` — authenticated fetch wrapper.
- `src/styles/` — SCSS themes and component styles.

## Commands and build order

- Run `npm run build` before finishing; it includes the TypeScript check.
- Run `npm run lint` for static analysis.
- Do not hand-edit `routeTree.gen.ts`; let the router plugin regenerate it.

## Conventions and gotchas

- A missing or invalid TMDB token produces 401 responses that look like empty data.
- TanStack Router needs the plugin in `vite.config.ts`; removing it breaks generated routes.
- The pagination logic distinguishes UI pages from API pages; do not collapse them into one value.
- SCSS theme variables are design tokens, not environment values.

## Memory

- Read `MEMORY.md` first to understand the current status and decisions.
- Before changing behaviour, read `constitution.md` and keep the change aligned with it.
- After a task, update `MEMORY.md` with status, decisions, and mistakes to avoid. Keep it short.
- If a rule becomes permanent, move it into this file instead of leaving it in memory.
- Never store secrets, tokens, or personal data in `MEMORY.md`.
