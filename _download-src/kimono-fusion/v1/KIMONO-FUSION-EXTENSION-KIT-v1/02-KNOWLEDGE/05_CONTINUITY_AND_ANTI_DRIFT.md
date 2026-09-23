# MASTER PRODUCT CONTINUITY & ANTI-DRIFT

## Core concept
Once the design is defined, create a conceptual identifier:

`MASTER_PRODUCT_ID: KFG-001`

All requested views are renders of exactly that same physical product.

## Immutable product ledger
Silently define and lock:
- BASE_COLOR;
- JACKET_MATERIAL;
- PANTS_MATERIAL;
- LAPEL_WIDTH;
- LAPEL_STITCH_COUNT_STYLE;
- HERO_ART_CROP;
- HERO_ART_COLORWAY;
- UPPER_BACK_EMBLEM_GEOMETRY;
- SHOULDER_EMBLEM_GEOMETRY;
- LABEL_COUNT;
- LABEL_POSITIONS;
- BELT_STYLE;
- BELT_RED_BAR_POSITION;
- PANTS_REINFORCEMENT_GEOMETRY;
- HEM_LENGTH;
- SLEEVE_LENGTH;
- ART_RENDER_LANGUAGE.

## Allowed variation between images
Only these may change unless explicitly requested:
- camera angle;
- focal length;
- crop;
- garment state: open / closed;
- product orientation;
- macro magnification;
- lighting intensity within the same studio family;
- layout of a product board.

## Forbidden drift
Between views, never:
- change emblem geometry;
- move a patch to another sleeve;
- change kimono base color;
- change the art character or subject;
- redraw the hero artwork into a different pose;
- change hairstyle;
- change source palette;
- change belt knot family;
- change label count;
- change lapel construction;
- change pant knee panels;
- invent extra graphics visible only in one view;
- change the exterior from minimal to heavily printed;
- swap material from pearl weave to smooth fashion fabric.

## View-to-view logic

### FRONT
If the hero art is hidden, only a small amount may be visible at the collar opening.
Do not invent a different front print.

### BACK
Must show the same locked upper-back emblem.
No full hero art on the outside.

### OPEN INTERIOR
Must reveal the exact art implied by the collar glimpse in HERO_3Q / FRONT.

### MACRO
Macro views must be crops of already-defined product details, not opportunities to redesign them.

### PRODUCT BOARD
All panels must match the standalone views.

## Anti-drift wording for master prompt
Use explicit phrases such as:
- “the exact same physical kimono in every image”;
- “do not redesign between views”;
- “identical patch geometry and placement”;
- “identical hero artwork crop and colorway”;
- “identical textile construction and labels”;
- “camera changes only; product design remains locked.”

## Canonical-first sequence
When image generation workflow permits multiple renders:
1. establish OPEN_INTERIOR as visual truth for hero art;
2. establish FRONT and BACK as exterior truth;
3. derive HERO_3Q from the same product;
4. derive macros from the locked product;
5. assemble PRODUCT_BOARD only after the design is stable.

## If the system can use a previously generated image
Use the approved MASTER PRODUCT render as an additional visual reference for later views.
Treat it as product-identity evidence, not as a replacement for the user's original art.

## Final continuity test
A viewer should believe every image was photographed during the same product shoot of one single physical sample.
