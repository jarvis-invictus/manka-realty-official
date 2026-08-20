# Invictus CMS — Approved Design Reference

This is the exact source code for the approved Magic Patterns design mockup — a working React app, not just images. It is a **visual reference only**, not something to deploy directly: the real CMS is Decap CMS with real GitHub-backed data, and this reference exists so the agent restyling the real app can see and copy the exact structure, class names, and design tokens rather than guessing from a description.

**Live preview of this exact code:** https://project-invictus-cms-manka-realty-admin-dashboard-332.magicpatterns.app
**Editor (for further reference/edits):** https://www.magicpatterns.com/c/tuzcmbrv5fdscmmfwkox8e

## What's in here

- `tailwind.config.js` — the exact color palette, border-radius, and shadow tokens (navy brand color, card styling)
- `src/index.css` — base styles and font import
- `src/pages/` — the three screens in scope for restyling: `Properties.tsx` (list/grid with Residential/Commercial filter), `EntryEditor.tsx` (grouped sections + live preview), and `Login.tsx` (reference only — see note below)
- `src/components/` — every reusable piece: property cards, the media library with its Trash tab, form fields, the sidebar, top bar, etc.
- `src/data/` — sample placeholder data, structured the same way as the real Decap schema (property type, listing type, status, pricing, locality, BHK, etc.)

## Important: the Login screen is reference-only, not ready to implement as-is

This mockup's login screen shows a password field plus a dropdown to pick your name — but that's the *target* design for a custom authentication system that hasn't been built yet in the real CMS (which currently uses real GitHub OAuth). Do not copy this screen's behavior into the live site until the real auth backend (shared password + name-based commit attribution) is actually built. Use this only as the visual target for that future work.

## How to use this

Pass this whole folder (or the individual component files) to the agent working on the real Decap CMS as a structural and visual reference — "make the real app's Properties list, entry editor, and Media Library match this," using the exact tokens in `tailwind.config.js`. See the accompanying prompt file for the full instructions already written for this handoff.
