# The Movie Vault — Working Memory

_Last updated: 2026-11-02_

## Current status

- Search, pagination, and movie detail routes work against TMDB.
- TanStack Router, Redux Toolkit, SCSS themes, and React Compiler are configured.
- No tests or deployment workflow yet.

## Key decisions

- Used TanStack Router for typed routes and Redux Toolkit for shared movie state.
- Sliced TMDB results into ten-item UI pages to keep the pagination UI simple.

## Known limitations and follow-ups

- TMDB token is exposed client-side.
- No automated tests for pagination or formatting helpers.
- No deployment workflow or base-path configuration yet.

## Mistakes to avoid

- Do not edit the generated route tree.
- Do not assume `VITE_ACCESS_TOKEN` is available without a restart.
- Do not fetch a new API page for every UI page change; use the slice calculation.

## Next steps

- Add a Pages or Vercel deployment workflow.
- Add tests for pagination and formatting utilities.
- Add richer detail data and error boundaries.

---

Keep this file under ~60 lines. Summarise or delete notes that no longer add value.
