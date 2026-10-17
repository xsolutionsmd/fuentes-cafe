# Design brief


## Visitor job and primary action
Browse a useful food selection, then call or get directions. Authentic appetizing food and a warm neighborhood cafe identity. [S1–S4]

## Content plan
Compact header, food-led hero, selected menu with category buttons, concise about/food story without invented history, hours and visit card, restrained footer. No fabricated reviews. Current menu availability confirmed by phone.

## Template site
Speed-first first build (2026-10-17): one reference inspected, per Derek's reduced-scope request.

- **Reference:** https://www.tacombi.com/ (inspected live at 1280px desktop). Chosen for a warm,
  food-led Mexican restaurant identity with confident type. Traits adopted: soft, heavy display
  serif headline with one contrasting accent word; cream + chile-red palette; rounded pill CTAs;
  photo-led hero beside the headline. Not adopted: promo banner, popups, ordering/rewards flows,
  their identity or artwork.
- **Stitch:** one bounded attempt (project `7037725350297160350`, desktop prompt from the facts
  below). The generation call timed out and no screen appeared on three follow-up checks within
  about five minutes; no further time spent. Fallback: direct implementation from the reference
  and this brief.
- **Media roles** (business Facebook posts, optimised WebP in `app/public/media/`):
  hero = enchiladas with rice and black beans (`75b1f73fbfcf`, cropped below the lid);
  menu section = blackened fish with pico de gallo (`ad4550addee4`);
  visit section = grilled chicken salad (`e4ec797feae8`, cropped below the sauce cups).
  Alt text describes the photo only; no photo is captioned as a current menu item.

## Visual direction
Warm Italian/Mexican neighborhood cafe: cream paper, espresso ink, one chile-red accent,
basil green only for small labels.

- **Type:** Fraunces (variable, SOFT axis at display sizes) for headlines, wordmark and dish
  names, with italic red accent words; Instrument Sans for body and controls. Both OFL,
  self-hosted in `app/public/fonts/` (no external runtime requests).
- **Tokens:** paper `#f6efe3`, paper-deep `#ecdfca`, ink `#2a1a12`, ink-soft `#5b4637`,
  chile `#b3311d`, basil `#3d5a37`; 22px image radius; pill buttons.
- **Structure:** sticky compact header with a typographic wordmark (not presented as an official
  logo) → hero (headline uses the business's own words, menu/call/directions CTAs, static hours
  line, enchiladas photo) → one-line food statement → selected menu with All / Mexican / Pasta /
  Plates & wraps filters (aria-pressed buttons, polite live status) and a call-for-availability
  note → chile-red Facebook specials band → hours and visit card (address, phone, hours table,
  call, directions, holiday caveat) → compact dark footer.
- **Phone:** toggle navigation (Escape, outside click and link selection close it); after the
  hero buttons scroll away, a floating Call / Directions / Menu bar appears.
- **Motion:** short hero entrance, gentle section reveals that replay on return, filter
  re-entrance; all disabled under reduced motion. No ongoing decorative movement, so no pause
  control is needed.
- **Excluded:** decorative numbering, reviews/ratings, prices, history or chef claims, ordering,
  forms, and visitor-facing preview banners. Robots stay `noindex`.

## Accepted decisions and corrections
<!-- Dated feedback from Derek, Abdul or the client. Newer explicit corrections win. -->

## X Solutions standing design rules

- Thoughtful, distinctive, professional and clean: strong typography, authentic
  photography, smooth restrained motion, enjoyable interaction; necessary copy only.
- No decorative numbering: no section ordinals, numbered badges, photo prefixes or
  counters such as 01 / 02. Factual numbers (prices, phone, dates) are fine.
- Choose photos for composition, quality, real work shown, variety and recency across
  the whole history, not just the newest posts. Never present generated or competitor
  work as the client's.
- Check every form control against its containing card (including padding) on narrow
  phones, with enlarged text and focus states; page-level overflow checks are not enough.
- Native inputs, keyboard access, visible focus, reduced-motion support and a pause
  control for ongoing decorative movement.
- Consistent SVG arrows/icons (no text glyphs or emoji arrows). No visitor-facing demo,
  preview or "functionality" banners and no repeated disclaimers.
- Optimise without degrading the experience: right-sized media, lazy loading, no
  needless browser work.
