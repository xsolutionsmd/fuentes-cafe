# Validation — 2026-10-17

The first release uses the explicitly requested build-first sequence: local implementation and focused checks, direct Oracle bootstrap, then GitHub/Actions and independent previews. No placeholder or exhaustive review is claimed.

Claude Opus 5.5 High implemented the visual UI. Astra checked the functional behavior and integration. Browser review at desktop 1440×1000 and phone 375×812 found no missing images, horizontal overflow, clipped controls or awkward composition in hero, menu and visit sections. Saved screenshots are retained in the private project run evidence.

Actual browser clicks verified All, Mexican, Pasta and Plates & wraps filters, selected states, mobile navigation and anchor closing. A dispatched Escape event verified closing and focus restoration. Phone, Maps and Facebook link destinations match sourced business records. No call, order or business contact was made. No site runtime errors were observed.

The Vite production build and static checks passed. The ARM64 release container passed health, read-only runtime and exact `/version.json` revision checks. All six initial push CI/release workflows passed; all three HTTPS sites matched their branch heads, with noindex and uncached version responses. Main adopted its immutable GHCR release after the direct bootstrap. Actual filter clicks on both previews passed, with no broken images, horizontal overflow or runtime errors. Current release state belongs in `kb/HANDOFF.md`.

All environments are noindex. Menu examples have no prices and prompt visitors to call for current availability. There is no checkout, reservation, contact form, database or pretend order submission.
