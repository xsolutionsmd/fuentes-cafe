# Features
Functional presentation site with no application database, submissions, checkout or staff admin.

## Selected features
| Feature | Approach | Behavior |
|---|---|---|
| Curated menu category filtering | integrate | Local static catalog; All, Mexican, Pasta, Plates & wraps. Selected button state; filtered results remain readable on phones. |
| Click to call | integrate | tel:+12404482717; no test call placed. |
| Directions | integrate | Google Maps destination for the verified address. |
| Specials | integrate | Open official Facebook; no claim an old special is current. |
| Mobile navigation | integrate | Accessible open/close navigation, Escape closes, selection closes. |

## Existing systems
Telephone, Google Maps, Facebook. No verified restaurant order integration.

## Operational checklist
Links use real public destinations. No order/booking is submitted by this site. Menu is a selected overview; current prices, availability and photo reuse need owner confirmation. All environments noindex pending owner approval.

## Acceptance
| Phase | Feature | Scenario | Viewport | How tested | Result | Evidence |
|---|---|---|---|---|---|---|
| pre | Menu/navigation | Filters and mobile menu work | 1440px/375px | Browser clicks; Escape handler and focus restoration | pass | All four category states correct; navigation opens/closes and follows anchors; no overflow |
| pre | Public links | Phone, Maps, Facebook correct | Desktop/phone | DOM and destination checks | pass | Correct tel number, verified Maps address and official Facebook; no calls/orders placed |
| live | Core site | Three HTTPS environments render expected revision and links | Desktop/phone | Browser and HTTP checks | fail | Pending release |
