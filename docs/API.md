# Runtime and interaction contract

The site is stateless. No customer details are collected and no order, booking, email or payment is submitted.

- `GET /`: authored page and local static resources.
- `GET /health`: HTTP 200, plain `ok`.
- `GET /version.json`: uncached JSON containing the exact image source `revision`.
- Missing files return HTTP 404. All environments return `X-Robots-Tag: noindex, nofollow`.

Menu categories filter the authored local catalog; All restores every category. Filtering must preserve accessible selected state. Mobile navigation opens/closes and dismisses on Escape or link selection. Telephone links use `tel:+12404482717`; directions use the verified restaurant address; specials open the official Facebook page. No test phone calls or business messages are part of validation.

Published menu entries are an illustrative selection from the linked public sources, with current availability confirmed by telephone. No prices, dietary guarantees or online order delivery promises are inferred.
