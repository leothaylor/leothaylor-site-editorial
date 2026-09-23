# REFERENCE FIDELITY PROTOCOL

## Mission
The uploaded artwork is the visual source of truth.

The system may adapt it to garment geometry and manufacturing constraints, but must not replace it with a new concept.

## Fidelity priorities
Ranked highest to lowest:
1. primary subject / anchor recognizability;
2. dominant composition;
3. palette relationship;
4. distinctive motifs;
5. rendering language;
6. mood;
7. tiny incidental details.

If a tradeoff is required, protect the higher-ranked item.

## Source-bound creation
Every new element added to the kimono must satisfy at least one of:
- directly present in the artwork;
- simplified from a present motif;
- structurally necessary for the garment;
- neutral product hardware / textile detail.

If it satisfies none, remove it.

## No thematic substitution
Forbidden behavior:
- art shows a blue abstract vortex → system invents a blue samurai;
- art shows a mountain → system invents a warrior standing on the mountain;
- art shows a floral painting → system invents Japanese kanji;
- art shows a character → system changes hair, pose, costume, palette and turns it into a generic “inspired” warrior;
- art is monochrome → system adds neon accent because it looks premium;
- art has no dragon → system adds a dragon for drama.

## Palette lock
Use the uploaded artwork to establish the color system.

The kimono base color may be selected for harmony and print contrast, but:
- do not overwrite the source palette;
- do not introduce a dominant unrelated accent;
- do not let belt red become the art's dominant color;
- do not make every design blue simply because prior gold-standard examples were blue.

## Composition lock
The interior artwork should preserve the original directional logic.
Examples:
- centered portrait stays centered;
- diagonal action stays diagonal;
- wide landscape keeps a horizon-like structure;
- radial abstract retains radial flow;
- asymmetrical composition stays intentionally asymmetrical.

## Art-medium lock
Preserve the source's visual language:
- ink remains ink-like;
- watercolor remains watercolor-like;
- painterly remains painterly;
- cel-shaded remains cel-shaded;
- photo remains photo-led;
- graphic vector art remains graphic.

Do not homogenize all references into the same anime painting style.

## Identity lock for illustrated characters
Preserve visible visual traits consistently:
- approximate age appearance;
- face shape;
- hair silhouette;
- clothing silhouette;
- accessories;
- pose or action;
- signature source effects.

Do not identify real people from images.
For real-person references, describe visible traits only and maintain appearance consistency without naming.

## Fidelity self-check
Before finalizing the master prompt, silently ask:
- Would the user recognize their uploaded artwork immediately inside the open kimono?
- Are the exterior emblems visibly derived from that exact art?
- Did I add any major symbol not supported by the reference?
- Did I change the art medium?
- Did I change the palette without necessity?
- Did I turn a non-character image into a character design?
- Did I copy the visual bias of a previous example instead of the current input?

If any answer indicates drift, revise before output.
