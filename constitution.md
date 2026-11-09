# Project Constitution — The Movie Vault

This document defines the non-negotiable foundations for this repository. Read it before adding or changing features.

## Guiding Principles

- **Simplicity first** — prefer the smallest solution that solves the problem. If a change needs a long explanation, it is probably over-engineered.
- **No hardcoded secrets or endpoints** — configuration belongs in environment variables; visual design tokens belong in styles, not in `.env` files.
- **Traceability** — every value, dependency, and route should make its origin and purpose obvious.
- **Debuggability** — fail loudly and visibly; avoid silent fallbacks that hide broken data.
- **Official patterns** — use the documented API of each framework and library before inventing a workaround.
- **Portfolio clarity** — this repository is part of a public portfolio. Code should read as clean, intentional, and easy for a reviewer to follow.

## Technology Stack Foundations

| Layer | Choice | Rationale |
| --- | --- | --- |
| Framework | React 19 + Vite 7 | Fast dev server and a modern React baseline. |
| Language | TypeScript | Types routes, API responses, and component props. |
| Routing | TanStack Router | Type-safe routes and generated route tree. |
| State | Redux Toolkit + React Redux | Centralises movie results, selected page, and loading state. |
| Styling | SCSS | Variables and nesting for themes and component styles. |
| API | TMDB REST API | Movie search and detail data. |

**Rule of thumb:** a new dependency must solve a concrete problem that the current stack cannot solve cleanly. Justify it in the change that introduces it.

## Core Premises

### 1. Scope

A focused movie browser that demonstrates typed routing, Redux state, and pagination. Avoid adding accounts, watchlists, or a backend until the core browsing flow is polished.

### 2. Environment Isolation

- The app reads these values from the environment: `VITE_ACCESS_TOKEN`.
- Keep real values in `.env` (gitignored) and document them in the example file and README.
- Never commit keys, tokens, database URLs, or credentials.
- Validate required values at the point of use and fail with a clear message.

### 3. Architecture

- Routes stay thin; page logic lives in `shared/pagesComponents/`.
- Reusable UI belongs in `shared/components/` and utilities in `shared/utils/`.
- Redux owns cross-component movie state; local state is for transient UI only.

### 4. Data and State

- TMDB is the source of truth; Redux caches the current search page and selected UI page.
- Loading and error states must be explicit.
- Do not persist search results; refresh should start clean.

### 5. Styling and UX

- SCSS variables in `src/styles/` define themes and shared values.
- Component styles live in `src/styles/components/` or beside the component.
- Support both light and dark themes through the existing variable sets.

### 6. Quality Gates

- `npm run build` (which runs `tsc -b`) and `npm run lint` are the gates.
- Manually test search, pagination boundaries, detail navigation, missing posters, and API failure.
- Keep placeholders visible during loading rather than shifting the layout.

### 7. Deployment

- Build with Vite and publish `dist/` to GitHub Pages through Actions, or deploy to Vercel.
- Configure the base path and SPA fallback for deep links.
- Keep the TMDB token in CI secrets and document its client-side exposure.

## What to Avoid

- Editing `routeTree.gen.ts` manually.
- Storing the TMDB token in source or committing `.env`.
- Mixing UI page numbers with TMDB API page numbers.
- Letting a failed request render as an empty successful result.

## Checklist Before Adding Anything New

- Does this solve a real problem for this project, or am I adding scope for its own sake?
- Is every new value configuration-driven rather than hardcoded?
- Does the change follow the existing folder and naming patterns?
- Is there a clear failure path when data, the network, or the environment is unavailable?
- Have I run the available lint/build/test command and fixed what it reports?
- Did I update `README.md` and `MEMORY.md` if behaviour or setup changed?

## Philosophy Statement

This repository exists to show thoughtful front-end engineering: clear structure, readable code, and deliberate trade-offs. The goal is not to use every tool available, but to make every file explain itself. Simplicity is the feature.
