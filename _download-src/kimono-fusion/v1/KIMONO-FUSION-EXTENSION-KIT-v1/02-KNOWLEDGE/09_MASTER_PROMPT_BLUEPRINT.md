# MASTER PROMPT BLUEPRINT

## Purpose
This file defines the content architecture of the single final prompt produced for the user.

The final answer should be ONE SELF-CONTAINED MASTER PROMPT capable of defining one canonical kimono and a coherent multi-angle image series.

## Required prompt sections

# MASTER PRODUCT — [short descriptive title]

[MASTER_PRODUCT_ID]
Assign one conceptual ID such as KFG-001 and state that every render is the exact same physical product.

[REFERENCE_ART_LOCK]
Describe the uploaded art completely enough that the prompt stands on its own:
- art type;
- primary anchor;
- secondary motifs;
- palette;
- medium/render style;
- composition;
- atmosphere.
Never say “use the uploaded image” or “same as reference.”
Never rely on hidden context.

[FUSION_CONCEPT]
State the exact translation:
- what remains hero artwork;
- what becomes upper-back emblem;
- what becomes shoulder emblem;
- what becomes micro labels;
- what stays intentionally absent.

[PRODUCT_CANON]
Describe the BJJ gi structure and exact base color.

[EXTERIOR_DESIGN]
Describe front/back/sleeve design with restraint.

[INTERIOR_HERO_ART]
Describe the hero artwork at high fidelity and how it occupies the internal panels.

[PLACEMENT_MAP]
List placements by zone.

[MATERIAL_AND_MANUFACTURING]
Define pearl weave, printed interior, embroidery, woven patch, label, pants construction and belt.

[COLOR_SYSTEM]
Provide concise palette and functions.
When useful, include approximate hex values derived from the visible artwork.

[CONTINUITY_LOCK]
Explicitly lock:
- same product;
- same artwork crop;
- same emblems;
- same labels;
- same belt;
- same materials;
- same dimensions;
- camera-only variation.

[STUDIO_AND_LIGHTING]
Neutral premium studio unless user requested another environment.

[REQUIRED_IMAGE_SERIES]
Request, by default:
01 HERO_3Q
02 OPEN_INTERIOR_FULL
03 FRONT_ORTHO_FULL
04 BACK_ORTHO_FULL
05 INTERIOR_HERO_CLOSE
06 DETAIL_MACRO_BOARD
07 PRODUCT_BOARD
08 MATERIAL_MACRO

For each view, restate the product is identical.

[QUALITY_PRIORITY]
Prioritize:
source fidelity > product consistency > material realism > premium presentation > decorative invention.

[VETO_LIST]
Include only the most relevant vetoes from Failure Modes.

## Output behavior
Default final response:
- no explanation;
- no design lecture;
- no separate slide prompts;
- no multiple alternative concepts;
- no confirmation request if an image is already supplied;
- one long MASTER PROMPT in Markdown.

## If the user asks to generate the images
Use the same internally built MASTER PROMPT as the generation specification.
Generate the locked product series if image generation is available.

## If the user asks only for the prompt
Return only the MASTER PROMPT.

## If user supplies multiple art references
Treat all as art-source inputs only if the user explicitly says to combine them.
Otherwise ask which image is the primary artwork.

## If user supplies a kimono base and an artwork
Lock garment shape/material/color from the kimono base and art identity from the artwork.

## If user supplies only artwork
Use the canonical premium BJJ gi system and choose a base color that supports the art while preserving palette fidelity.

## If user asks for a color variant
Create a new PRODUCT_VARIANT_ID but preserve the art composition and placement system.
Do not silently create variants in the default output.
