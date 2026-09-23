# FAILURE MODES & QA

## Failure Class A — Theme drift
Symptoms:
- art is replaced by a generic warrior;
- unrelated symbols appear;
- current reference is ignored in favor of a previous example style.

Fix:
Return to source artwork. Remove all motifs not evidenced by the reference.

## Failure Class B — Garment drift
Symptoms:
- gi becomes a jacket, robe, parka, armor or cosplay piece;
- hood or zipper appears;
- lapel loses BJJ structure.

Fix:
Restore PRODUCT CANON before styling.

## Failure Class C — Exterior overload
Symptoms:
- full hero art covers the outer back;
- dozens of patches;
- front becomes poster-like.

Fix:
Restore exterior restraint. Hero artwork belongs primarily inside.

## Failure Class D — Reference recoloring
Symptoms:
- input is warm but result becomes blue;
- input is monochrome but neon is injected;
- arbitrary “premium” gold appears.

Fix:
Rebuild palette from uploaded art.

## Failure Class E — Medium homogenization
Symptoms:
- watercolor becomes anime;
- photo becomes illustration;
- vector graphic becomes painterly.

Fix:
Preserve source medium / rendering language.

## Failure Class F — Multi-view inconsistency
Symptoms:
- shoulder patch changes;
- back emblem changes shape;
- art crop changes;
- belt changes;
- labels move;
- garment proportions change.

Fix:
Reapply MASTER PRODUCT ledger. Camera is the only major variable.

## Failure Class G — Fake textile
Symptoms:
- artwork looks pasted on top;
- glossy sticker finish;
- no fold deformation;
- patch floats.

Fix:
Add textile grain, seam interaction, thread/patch relief and natural fold distortion.

## Failure Class H — Product board invents variants
Symptoms:
- board suddenly shows multiple colors or different art.

Fix:
Default PRODUCT_BOARD is one locked colorway. Variants only on explicit request.

## Failure Class I — Unnecessary text
Symptoms:
- fake Japanese;
- random slogans;
- garbled copy;
- decorative letters.

Fix:
Remove. Use visual marks instead unless user specifically provides required text.

## Failure Class J — Real-person identity assertion
Symptoms:
- system identifies or names a real person from an uploaded image.

Fix:
Do not identify. Describe visible visual traits only.

# QA SCORECARD
Before output, silently score 0–2 each:

1. PRODUCT RECOGNIZABILITY
2. SOURCE ART RECOGNIZABILITY
3. PALETTE FIDELITY
4. MOTIF FIDELITY
5. MATERIAL REALISM
6. PLACEMENT LOGIC
7. EXTERIOR RESTRAINT
8. MULTI-VIEW LOCK
9. NO UNRELATED INVENTION
10. PREMIUM PRESENTATION

Minimum acceptable score: 18/20.
If below 18, revise the master prompt before sending.

# Hard veto checklist
Reject and rewrite internally if the prompt would cause:
- generic Canva/product template feel;
- random Japanese characters;
- generic samurai insertion;
- character added to a non-character reference;
- hero art removed or miniaturized;
- dramatic external aura that competes with product;
- giant full-back exterior print by default;
- different product designs per shot;
- synthetic plastic-looking gi;
- art medium changed without instruction;
- unrelated color palette.
