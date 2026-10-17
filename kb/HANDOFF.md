# Handoff

<!-- xs-status:start -->
Pipeline status (generated 2026-10-17T22:18:37.078828+00:00):

- **identity**: done
- **research**: done
- **spec**: done
- **assets**: done
- **delivery**: done
- **infra**: done
- **template**: done
- **build**: done
- **deploy**: done
<!-- xs-status:end -->

## Current state

The website uses three independent environments, all noindex. Initial release
`b544e25` and the `c8195fd` documentation handoff passed their CI and live checks.
The current interaction correction frames menu/visit anchors on their content,
restores a visible specials focus outline, and contains the narrow-phone bottom
actions. See `docs/VALIDATION.md`. Compare each environment's `/version.json` with
its own branch head; exact final release receipts are retained in the private
project record rather than creating self-referential revision commits.

| Environment | URL | Branch |
|---|---|---|
| Production | https://fuentes-cafe.xsolutionsmd.com | main |
| Derek | https://fuentes-cafe-derek-dev.xsolutionsmd.com | derek-dev |
| Abdul | https://fuentes-cafe-abdul-dev.xsolutionsmd.com | abdul-dev |

Repository: https://github.com/xsolutionsmd/fuentes-cafe. Actions: https://github.com/xsolutionsmd/fuentes-cafe/actions. Main requires a PR and both application checks, with force pushes and deletion disabled. Each environment accepts only its named branch. Each Oracle stack has a separate updater and GHCR package.

## Last session

2026-10-17 follow-up: at Derek's request, Sol reviewed live visual interactions and
Astra implemented the three reproduced issues. Repeated filter changes, native
keyboard activation, dropdown closing and focus restoration passed. Changes use
the normal preview and reviewed PR release path; the original bootstrap exception
is not needed for this correction.

2026-10-17: sourced business facts and three authentic food photos; Claude Opus 5.5 High implemented the frontend; Astra verified desktop/phone composition and core interactions. See `docs/VALIDATION.md`, `kb/features.md` and `kb/sources.md`. The explicit fast-launch exception used a checked local ARM64 image before repository creation, then adopted the GitHub image. No placeholder release or extra review loop is claimed. Initial publication was verified at 22:15 UTC; all three GitHub releases passed by 22:17 UTC. Fifteen sibling containers were unchanged.

## Next step

Derek works on `derek-dev`; Abdul works on `abdul-dev`. Use a reviewed PR into `main` with release authorization for a later production change. Sync main back afterward. The initial final-handoff push is checked against each environment's own head; detailed revision receipts live in the private project records to avoid self-referential documentation commits.

## Blockers / waiting on

No technical blocker. Owner confirmation is still needed for media reuse, exact current menu/prices, holiday hours and any ordering provider. More storefront and Italian dish photos would improve future iterations.
