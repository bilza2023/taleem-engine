# Taleem Engine — Developer README

## Purpose

This document explains the internal architecture of `taleem-engine`.

It is intended for:

* engine contributors
* compiler developers
* template authors
* player integrators
* future maintainers

This is NOT an authoring guide.

---

# High-Level Architecture

`taleem-engine` is a deterministic presentation compiler.

Input:

```txt id="n4rdrs"
DSL slide definitions
```

Output:

```txt id="80a2tm"
Executable presentation JSON
```

Pipeline:

```txt id="1u3xjg"
DSL
→ Compiler
→ Templates
→ Animation Primitives
→ Actions + Groups
→ Final Presentation JSON
```

---

# Core Design Philosophy

The engine separates:

```txt id="v5fj1v"
AUTHORING
from
PLAYBACK
```

The engine contains:

* semantic meaning
* educational structure
* timing logic
* animation logic

The player contains:

* rendering
* class application
* playback timing

This separation is intentional and fundamental.

---

# Folder Structure

```txt id="4wwz5x"
src/

  compiler/
    animation-primtives/
    templates/
    utils/

  dsl/
    slides/

  index.js
```

---

# DSL Layer

Location:

```txt id="vng6ai"
src/dsl/
```

The DSL layer is responsible for authoring ergonomics.

Example:

```js id="eh5owm"
TaleemEngine.at(0)
  .bulletList()
  .bullet("Point 1", 0)
  .bullet("Point 2", 3);
```

The DSL:

* creates normalized slide objects
* stores timing metadata
* remains framework-independent

The DSL does NOT:

* generate HTML
* generate actions
* manipulate DOM

---

# DSL Builder Pattern

Each slide has a builder class:

```txt id="vf4rkh"
src/dsl/slides/
```

Example:

```txt id="j0r9iq"
BulletListBuilder.js
Eq.js
FocusListBuilder.js
```

Each builder:

* mutates `slide.data`
* returns `this`
* supports fluent chaining

Example:

```js id="mlf8ot"
bullet(content, showAt) {
  this.slide.data.push({
    name: "bullet",
    content,
    showAt
  });

  return this;
}
```

---

# TimelineContext

`TimelineContext` powers:

```js id="jlwmn5"
TaleemEngine.at(10)
```

It creates slides using:

* fixed `start`
* deferred `end`

Each method:

* creates slide shell
* pushes into deck
* returns appropriate builder

---

# Compiler

Location:

```txt id="56ozm6"
src/compiler/
```

Main entry:

```txt id="9gql08"
src/compiler/index.js
```

Responsibilities:

* compile timings
* resolve asset paths
* compile templates
* execute animation primitives
* generate final deck

---

# Compilation Flow

```txt id="5iyu2x"
slide DSL
→ template(slide)
→ primitive(...)
→ compiled slide
```

Each slide becomes:

```js id="n9n5ef"
{
  type,
  start,
  end,
  html,
  groups,
  actions
}
```

---

# Templates

Location:

```txt id="nbdj3o"
src/compiler/templates/
```

Templates convert slide data into:

* HTML
* ids
* primitive selection

Example:

```js id="l7ylg7"
return {
  html,
  animation: "progressiveReveal",
  ids
};
```

Templates MUST NOT:

* mutate playback state
* run animations
* apply DOM changes

Templates are pure compilation functions.

---

# Template Contract

Every template returns:

```js id="4avvqb"
{
  html,
  animation,
  ids
}
```

Where:

| Field     | Purpose             |
| --------- | ------------------- |
| html      | rendered slide html |
| animation | primitive name      |
| ids       | ordered reveal ids  |

---

# Animation Primitives

Location:

```txt id="n8efl8"
src/compiler/animation-primtives/
```

Primitives convert:

* ids
* timing metadata

into:

```js id="8k9kvy"
{
  groups,
  actions
}
```

---

# Current Primitives

## progressiveReveal

Sequential visibility.

Used by most slides.

---

## focusOne

One item focused while others dim.

Used by:

* focusList

---

## eqHighlightOne

Specialized educational walkthrough primitive.

Supports:

* focused equation lines
* side-panel reveals
* explanation content

---

## showOneAtATime

Only one visible item at a time.

Useful for:

* image sequences
* walkthroughs
* staged layouts

---

# Action Model

Actions are deterministic state snapshots.

Example:

```js id="m4r7n4"
{
  time: 10,

  state: {
    hidden: [],
    focus: ["item-2"],
    dim: ["item-1"]
  }
}
```

The player applies these classes directly.

---

# Groups

Groups define semantic CSS mappings.

Example:

```js id="0a3fyz"
{
  hidden: ["hidden"],
  focus: ["focus"],
  dim: ["dim"]
}
```

The player does not interpret semantics.

It only applies classes.

---

# Timing Compilation

Location:

```txt id="mfmij0"
src/compiler/utils/compileTimings.js
```

Responsibilities:

* infer slide end times
* propagate presentation end
* normalize timing ranges

This guarantees:

* deterministic playback
* contiguous slide flow

---

# Asset Resolution

Location:

```txt id="4z8nbe"
src/compiler/utils/resolveAssetPaths.js
```

Purpose:

* patch relative asset paths
* keep DSL clean

Example DSL:

```js id="lc1rku"
.image("image.png", 10)
```

Compiled result:

```txt id="uwbjup"
/content/images/image.png
```

using:

```js id="4s9x2n"
TaleemEngine.metaData.base
```

---

# Canonical Slide List

```txt id="e98k2f"
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

# Adding New Slides

To add a new slide:

## 1. Add DSL Builder

```txt id="1r0kfe"
src/dsl/slides/
```

---

## 2. Register in:

```txt id="msu3o7"
src/dsl/index.js
```

and:

```txt id="i9f8hy"
TimelineContext.js
```

---

## 3. Add Template

```txt id="r0jwuy"
src/compiler/templates/
```

Return:

* html
* animation
* ids

---

## 4. Register Template

```txt id="l9n7b9"
templates/index.js
```

---

## 5. Add Primitive (if needed)

Usually unnecessary.

Prefer reusing:

* progressiveReveal
* focusOne
* showOneAtATime

before creating new primitives.

---

# Important Architectural Rule

```txt id="ckp7qc"
DO NOT put logic in the player.
```

All intelligence belongs inside:

* compiler
* templates
* primitives

The player must remain:

* dumb
* deterministic
* renderer-only

This is a core invariant.

---

# Determinism

The engine guarantees:

```txt id="vkgmn5"
same input
=
same output
```

This is critical for:

* testing
* video export
* AI generation
* synchronization
* reproducibility

Avoid:

* runtime randomness
* hidden state
* implicit mutation

---

# Long-Term Direction

The architecture is intentionally designed to support:

* AI deck generation
* multiple renderers
* offline rendering
* video export
* static HTML export
* collaborative editing
* theme systems
* localization
* educational metadata
* narration systems

without changing the core DSL model.

---

# Final Principle

`taleem-engine` is NOT a UI framework.

It is:

```txt id="xgkz5m"
a deterministic educational compilation engine
```

Everything in the architecture should reinforce:

* determinism
* simplicity
* composability
* renderer independence
* player dumbness

😄🔥
