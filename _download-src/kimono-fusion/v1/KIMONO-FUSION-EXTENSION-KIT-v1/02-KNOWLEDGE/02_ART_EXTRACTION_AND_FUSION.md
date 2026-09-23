# ART EXTRACTION & FUSION ENGINE

## Purpose
Defines how any uploaded artwork is translated into a premium kimono system without replacing its identity.

## Input types
The user may upload:
- abstract art;
- anime / illustrated character;
- comic art;
- painting;
- photograph;
- landscape;
- tattoo design;
- symbol;
- logo-like graphic;
- pattern;
- texture;
- architecture;
- cyberpunk scene;
- watercolor;
- monochrome drawing;
- mixed-media artwork.

Do not assume the input is a character.

## Internal extraction model
Before writing the final prompt, silently extract:

### A. ART TYPE
Choose the closest class:
CHARACTER / ABSTRACT / LANDSCAPE / SYMBOLIC / PATTERN / PHOTOGRAPHIC / TYPOGRAPHIC / MIXED.

### B. PRIMARY ANCHOR
The single element that makes the art recognizable:
- character silhouette;
- face + pose;
- mountain/horizon;
- central symbol;
- main geometric motif;
- dominant object;
- unique composition.

### C. SECONDARY MOTIFS
Identify 2–5 supporting motifs actually present in the uploaded artwork:
- flames;
- lightning;
- branches;
- circular halo;
- clouds;
- geometric lines;
- mechanical fragments;
- waves;
- floral shapes;
- stars;
- ink splashes;
- architecture;
- etc.

Never invent a secondary motif merely because it “fits the theme.”

### D. PALETTE
Extract:
- dominant base color;
- dominant luminous/accent color;
- secondary color;
- deepest dark;
- lightest highlight;
- optional micro-accent.

Preserve the original palette relationship. Do not inject neon, gold, red, blue or purple unless supported by the artwork or requested.

### E. RENDER LANGUAGE
Extract:
- line quality;
- painterly vs graphic;
- soft vs hard edges;
- realism level;
- cel-shading vs textured painting;
- grain;
- glow;
- contrast;
- brush/ink behavior;
- material feel.

### F. COMPOSITIONAL DNA
Extract:
- subject position;
- direction of movement;
- symmetry/asymmetry;
- center of visual mass;
- negative space;
- vertical/horizontal flow;
- crop;
- dominant shapes.

### G. EMOTIONAL ENERGY
Examples:
calm / violent / mystical / ceremonial / technical / melancholic / sacred / brutal / elegant / surreal.
Use only as a supporting descriptor, never as permission to replace the art.

## Fusion hierarchy
Apply extracted art through this priority order:

### 1 — HERO INTERIOR ART
Preserve the uploaded artwork as the dominant interior graphic.
The primary anchor must remain recognizably the same visual idea after adaptation.

### 2 — EXTERIOR EMBLEM
Derive one simplified emblem from a real motif found in the artwork.
Good derivations:
- silhouette fragment;
- recurring geometric mark;
- shape from a halo;
- branch structure;
- flame contour;
- eye shape;
- architectural motif;
- abstract line cluster.

Bad derivations:
- random Japanese character;
- unrelated dragon;
- generic skull;
- generic samurai;
- tribal symbol;
- invented mythology.

### 3 — SHOULDER / SLEEVE MARK
Create a smaller sibling mark from the same visual family as the exterior emblem.

### 4 — MICRO LABELS
Use tiny color accents and simplified motif fragments only.
Do not add legible fake copy.

## Fusion rules by input type

### CHARACTER
Preserve:
- main pose;
- silhouette;
- costume read;
- hair / major shape language;
- signature effects actually visible;
- source palette;
- composition around the character.

Do not replace the character with “a generic warrior.”

If the uploaded image depicts a real person, do not identify them by name. Describe visible traits and preserve the visual composition without asserting identity.

### LANDSCAPE
Hero interior should remain landscape-led.
Preserve:
- horizon;
- major landforms;
- lighting;
- sky structure;
- focal object.

Do not invent a character to “make it cooler.”

### ABSTRACT
Preserve:
- shape vocabulary;
- proportions;
- rhythm;
- palette;
- texture;
- negative-space behavior.

Do not turn abstract art into a figurative scene.

### SYMBOL / LOGO-LIKE ART
Use the original symbol as the hero identity.
Scale and crop it elegantly.
Exterior marks may be controlled reductions of the same geometry.

Do not invent a new mascot.

### PHOTOGRAPHIC
Preserve the photographic subject and its visual structure.
Adapt to textile print with controlled tonal treatment only when needed for manufacturability.

### PATTERN
Use the pattern as an interior all-over or panel-based textile system.
Exterior should use small fragments or badges derived from the same pattern.

## Key principle
**TRANSFER THE ART INTO THE PRODUCT; DO NOT TRANSFORM THE PRODUCT INTO A LOOSE INTERPRETATION OF THE ART.**
