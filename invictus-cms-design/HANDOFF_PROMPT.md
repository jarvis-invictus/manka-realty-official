# Task: Restyle the Real Decap CMS to Match an Approved Design Reference

You're working on the Decap CMS admin panel for the Manka Realty website (`admin/index.html`, `admin/config.yml`, and any custom CSS/JS files already referenced from `admin/index.html`). A real, approved visual design has been created as a reference in Magic Patterns — a coded mockup, not just images, showing exactly what the admin should look like. Your job is to make the real, functioning app visually match this reference. **This is a styling task, not a rebuild** — every existing feature (data loading, the react-select fix, the modal/menu roles, the login flow, keyboard focus, the watermark removal) must keep working exactly as it does now. Nothing about how the app *functions* should change, only how it *looks*.

**Design reference:**
- Live preview: https://project-invictus-cms-manka-realty-admin-dashboard-332.magicpatterns.app
- Editor (full source code): https://www.magicpatterns.com/c/tuzcmbrv5fdscmmfwkox8e

Look at both — the preview shows the actual rendered screens, the editor shows the real component code and exact class names/structure, which is more useful for translating this into the real app's CSS.

---

## Scope: three screens only — not the login screen

Restyle these three, matching the reference as closely as possible:
1. **Properties list/grid view** — including the new Residential/Commercial filter and the property cards with photo thumbnails
2. **Entry editor** — the grouped collapsible sections and the live preview pane (note: the reference's preview pane does NOT have an "Inquire via WhatsApp" button — match that, the real app's preview pane should also drop it, it's not needed in an internal admin tool)
3. **Media Library** — including the more prominent, better-explained Trash/recovery feature

**Do not touch the login screen in this batch.** The design reference shows a password field + a dropdown to select your name, but the real app still authenticates via actual GitHub OAuth — that password/name mechanism doesn't exist yet as real, working functionality. Making the login screen visually match the reference without the real authentication system behind it would mean either faking a form that doesn't actually check anything, or rushing security-sensitive work under the banner of a styling task. The login redesign happens in a separate batch, once the real custom authentication system is built. For now, leave the current "Login with GitHub" screen's actual mechanism untouched — you may apply the new color/typography tokens below to it for basic visual consistency (background, wordmark treatment, button colors) but do not add, remove, or fake any form fields there.

---

## Exact design tokens to use (pulled directly from the approved reference — use these values precisely, don't approximate)

```css
/* Color palette */
--navy-50:  #eef2fb;
--navy-100: #dbe3f6;
--navy-200: #bcccef;
--navy-300: #8ea9e2;
--navy-400: #5a7fd0;
--navy-500: #3a5dba;
--navy-600: #2a459c;
--navy-700: #22397f;
--navy-800: #1e3a8a;  /* primary brand color — buttons, active states */
--navy-900: #172b60;  /* hover state for primary buttons */
--navy-950: #101c40;

--color-canvas: #f5f6f8;      /* page background */
--color-ink: #12161f;          /* primary text */
--color-ink-muted: #5b6472;    /* secondary text */
--color-ink-soft: #8b94a3;     /* tertiary/placeholder text */
--color-line: #e5e8ee;         /* borders */

/* Typography */
font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;

/* Shape */
--radius-card: 14px;

/* Shadows */
--shadow-card: 0 1px 2px rgba(16,28,64,0.04), 0 6px 16px -8px rgba(16,28,64,0.12);
--shadow-raised: 0 2px 4px rgba(16,28,64,0.05), 0 16px 32px -12px rgba(16,28,64,0.18);
--shadow-overlay: 0 24px 64px -16px rgba(16,28,64,0.34);
```

Define these as CSS custom properties in the admin stylesheet and use them consistently — this replaces any ad-hoc color/spacing values from the previous design-token batch. If the previous batch's tokens differ from these, these new ones take precedence (this is the final, approved reference).

---

## Specific things to match, precisely

- **Property cards** must show a real photo thumbnail at the top of each card (this was explicitly broken before — cards showing text only with blank space is the exact bug being fixed here).
- **Residential/Commercial filter**: add this as a segmented control or tabs near the top of the Properties page, above the grid, matching the reference. Filter based on each property's `property_type` field (already exists in the schema as Residential/Commercial).
- **Entry editor's live preview pane**: match the reference's card layout (photo, price badge, title, status pill, description, spec chips) but without the WhatsApp button.
- **Media Library**: add the plain-language explanation text near the top (what this screen is for, how deletion/recovery works) and make the Trash tab visually more prominent — reference the editor code directly for the exact copy and layout used.
- **Sidebar**: only "Properties" should appear under Collections — no other collection items.

---

## Guardrails, given this project's history

- **Use specific, scoped selectors — never broad wildcards.** Previous batches introduced a serious regression (the entire app hidden via an overly broad selector) from exactly this kind of mistake.
- **Confirmed-working elements not to break:** the `input[role="combobox"]` react-select fix, `[role="dialog"]`/`[role="menu"]`/`[role="menuitem"]` styling, the Decap watermark removal, the GitHub login flow, keyboard focus indicators, the Contents/Media tab bar.
- **Test incrementally** — restyle one screen, reload the live site, check it, then move to the next. Don't apply everything blind and check once at the end.

---

## Verification before reporting this done

Load the actual live `/admin` URL (hard refresh) and confirm:
- [ ] Properties list shows real photo thumbnails on every card, and the Residential/Commercial filter works
- [ ] Entry editor's grouped sections and live preview pane match the reference, with no WhatsApp button in the preview
- [ ] Media Library shows the explanatory text and a more prominent Trash tab, and the existing restore functionality still works
- [ ] Login screen's actual GitHub OAuth mechanism is completely untouched and still works end-to-end (log out, log back in)
- [ ] All previously-confirmed-working elements (combobox fix, modal/menu roles, watermark removal, focus indicators, tab bar) still work — check each one directly, don't assume
- [ ] Colors, spacing, and shadows visibly match the token values above, not just "similar"
