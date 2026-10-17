# Validation — 2026-10-17

The first release uses the explicitly requested build-first sequence: local implementation and focused checks, direct Oracle bootstrap, then GitHub/Actions and independent previews. No placeholder or exhaustive review is claimed.

Claude Opus 5.5 High implemented the visual UI. Astra checked the functional behavior and integration. Browser review at desktop 1440×1000 and phone 375×812 found no missing images, horizontal overflow, clipped controls or awkward composition in hero, menu and visit sections. Saved screenshots are retained in the private project run evidence.

Actual browser clicks verified All, Mexican, Pasta and Plates & wraps filters, selected states, mobile navigation and anchor closing. A dispatched Escape event verified closing and focus restoration. Phone, Maps and Facebook link destinations match sourced business records. No call, order or business contact was made. No site runtime errors were observed.

The Vite production build and static checks passed. The ARM64 release container passed health, read-only runtime and exact `/version.json` revision checks. All six initial push CI/release workflows passed; all three HTTPS sites matched their branch heads, with noindex and uncached version responses. Main adopted its immutable GHCR release after the direct bootstrap. Actual filter clicks on both previews passed, with no broken images, horizontal overflow or runtime errors. Current release state belongs in `kb/HANDOFF.md`.

All environments are noindex. Menu examples have no prices and prompt visitors to call for current availability. There is no checkout, reservation, contact form, database or pretend order submission.

## Interaction correction — 2026-10-17

Sol's focused live review reproduced three issues: the phone visit anchor landed on
the photo, the specials CTA's focus outline matched its red background, and the
Directions icon crossed its cell boundary at 320px. Astra corrected the anchor
targets, removed motion from the anchored contact card, added a contrasting focus
outline, and stacked narrow-phone action icons above their labels.

The changed source passed `npm run check` and real Chromium checks at 1440, 375
and 320px. All four filter states had correct groups/pressed states and zero scroll
delta at desktop and 320px. Native Space activation and Escape/focus restoration
passed. At 375px the visit card lands at y88 below the sticky header, with hours
ending at y557. At 320px every action icon/label fits its own cell and targets remain
52px tall. Actual desktop focus and phone screenshots were reviewed. No new site
runtime errors appeared. Reduced-motion CSS remains intact; runtime emulation was
not available in this browser. Source, runtime and workflow receipts are retained
in the private project records; no automated full accessibility audit is claimed.
