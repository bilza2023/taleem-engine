
# Taleem Engine

`taleem-engine` is a deterministic educational presentation engine.

It provides a complete authoring pipeline:

```txt
DSL
→ Compiler
→ HTML
→ Actions
→ Groups
→ Player
````

The engine transforms structured slide definitions into deterministic presentation JSON that can be rendered by any compatible player.

---

# Philosophy

Taleem is built around one core principle:

```txt
Author once.
Render anywhere.
```

The engine itself:

* does NOT manipulate DOM
* does NOT run animations
* does NOT manage playback
* does NOT contain UI logic

Instead:

```txt
taleem-engine
=
pure compilation system
```

The engine compiles declarative educational content into:

* HTML
* animation groups
* deterministic action timelines

---

# Installation

```bash
npm install taleem-engine
```

---

# Quick Example

```js
import { Taleem }
  from "taleem-engine";

const taleem =
  new Taleem();

taleem
  .at(0)

  .titleAndSubtitle()

  .title(
    "Introduction",
    0
  )

  .subtitle(
    "Learning Taleem Engine",
    3
  );

taleem.end(10);

const presentation =
  taleem.compile();

console.log(presentation);
```

---

# Core Architecture

```txt
Authoring DSL
↓
Slide Templates
↓
Animation Primitives
↓
Compiled Presentation JSON
↓
Player
```

---

# System Layers

# 1. DSL Layer

The DSL is the authoring API.

Example:

```js
taleem
  .at(0)

  .bulletList()

  .bullet(
    "Point one",
    0
  )

  .bullet(
    "Point two",
    2
  );
```

The DSL creates:

* structured slide definitions
* normalized timing intent
* canonical educational data

---

# 2. Templates

Templates compile slides into HTML.

Example:

```txt
bulletList
→ compileBulletList()

eq
→ compileEq()

imageGrid
→ compileImageGrid()
```

Templates:

* generate HTML
* assign ids
* define primitive behavior

Templates do NOT:

* run animations
* manage playback
* manipulate DOM

---

# 3. Animation Primitives

Animation primitives generate deterministic state transitions.

Current primitives:

```txt
progressiveReveal
focusOne
eqHighlightOne
showOneAtATime
```

Primitives generate:

```js
{
  groups,
  actions
}
```

Example action:

```js
{
  time: 10,

  state: {
    hidden: [],
    focus: ["item-2"],
    dim: ["item-1"]
  }
}
```

---

# 4. Compiler

The compiler orchestrates the full pipeline.

Responsibilities:

* compile timings
* resolve asset paths
* compile templates
* run primitives
* generate final presentation JSON

Output:

```js
{
  name,
  background,
  deck
}
```

---

# 5. Player

The player is intentionally dumb.

The player only:

* renders HTML
* applies classes
* executes actions

The player does NOT understand:

* educational semantics
* slide meaning
* authoring logic
* timing reasoning

All intelligence lives inside the engine.

---

# Supported Slides

```txt
titleAndSubtitle
titleAndPara
bulletList
twoColumnText
imageSlide
imageWithTitle
imageWithCaption
imageLeftBulletsRight
imageRightBulletsLeft
table
barChart
progressbar
quoteSlide
keyIdeasSlide
focusList
eq
fillImage
imageStrip
imageGrid
textGrid
skeleton
```

---

# Animation Model

Most slides use:

```txt
progressiveReveal
```

Specialized slides use:

```txt
focusOne
eqHighlightOne
showOneAtATime
```

This keeps the system:

* deterministic
* composable
* scalable
* minimal

---

# Asset Resolution

Images are intentionally authored simply:

```js
.image("image.png", 10)
```

During compilation:

```txt
resolveAssetPaths()
```

patches paths using:

```js
taleem.metaData.base =
  "/content/images/";
```

Result:

```txt
/content/images/image.png
```

This keeps authoring clean while preserving deployment flexibility.

---

# Deterministic Output

The same input always produces the same output.

This allows Taleem presentations to support:

* HTML players
* React renderers
* Canvas renderers
* video export
* PDF export
* AI generation pipelines
* offline playback
* static export systems

without changing authoring syntax.

---

# Design Principles

## Deterministic

Same input → same output.

---

## Dumb Player

All intelligence lives in the compiler.

---

## Declarative Authoring

Authors describe:

* what exists
* when it appears

The engine handles execution.

---

## Minimal Primitive Set

A small primitive system powers the entire engine.

---

# Testing

The engine includes deterministic compiler tests powered by Vitest.

Run tests:

```bash
npm test
```

Current test coverage includes:

* golden deck compilation
* eq slide compilation
* timing resolution
* primitive generation
* asset resolution

---

# Current Status

`taleem-engine` now supports:

* full canonical slide coverage
* deterministic animation timelines
* educational focus systems
* equation walkthroughs
* progressive reveal systems
* asset resolution
* executable presentation JSON

The engine is production-ready for:

* educational decks
* AI-generated slides
* structured lessons
* Taleem ecosystem tooling

---

# Future Direction

Potential future expansions:

* themes
* narration metadata
* localization
* accessibility layers
* video export
* collaborative authoring
* interactive overlays
* AI-assisted lesson generation

The current architecture already supports these directions without major redesign.

---

# Final Summary

`taleem-engine` is not a slide renderer.

It is a:

```txt
deterministic educational presentation compiler
```

built around:

* declarative authoring
* deterministic state
* composable primitives
* player simplicity
* scalable educational storytelling

