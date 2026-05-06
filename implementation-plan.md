# Taleem Engine + Action Runner — Implementation Plan

## 🎯 Objective

Build a clean, deterministic system where:

DSL → Builder → Compiled Presentation → Player → Action Runner

No runtime compilation.
No schema guessing.
If it compiles → it runs.

---

# 🧠 Core Architecture (LOCK THIS)

## Layers

I. DSL (authoring)
II. Builder / Engine (compiler)
III. Compiled Presentation (runtime JSON)
IV. Player (timeline controller)
V. Action Runner (state executor)

---

## Golden Rule

Compiled output must be:

* complete
* deterministic
* executable with ZERO logic downstream

---

# 📦 Target Output (Compiled Presentation)

Each slide MUST be:

```json
{
  "start": number,
  "end": number,
  "html": string,
  "groups": { ... },
  "actions": [
    { "time": number, "state": { ... } }
  ]
}
```

Full deck:

```json
{
  "version": "v3",
  "name": "...",
  "background": { ... },
  "deck": [ slides... ]
}
```

---

# ⚙️ Phase 1 — Clean Action Runner Contract

## 1. Input

```js
runActions(actions, groups, t, root)
```

## 2. Responsibilities

At time t:

I. Find active state:

* latest action where action.time ≤ t

II. Reset:

* remove ALL group classes from ALL elements

III. Apply:

* apply classes using state + groups

---

## 3. Rules (STRICT)

I. No DOM mutation
II. No partial state
III. No incremental logic
IV. Ignore missing ids safely
V. Order:

1. removed
2. hidden
3. effects

---

## 4. Optimization (optional)

* Pre-sort actions
* Use pointer or binary search for lookup

---

# 🧱 Phase 2 — Player Refactor

## REMOVE COMPLETELY

* renderTaleemSlide
* any slide interpretation logic
* any schema-based rendering

---

## NEW PLAYER FLOW

Loop:

I. currentTime = timer.now()

II. Find slide:

```js
slide = getSlideAtTime(deck, currentTime)
```

III. If slide changed:

* root.innerHTML = slide.html
* actions = slide.actions
* groups = slide.groups

IV. Compute local time:

```js
slideTime = currentTime - slide.start
```

V. Run:

```js
runActions(actions, groups, slideTime, root)
```

---

## Player Role (FINAL)

* timeline control
* DOM swap
* pass data to runner

NO logic.

---

# 🧩 Phase 3 — Builder Responsibilities

Builder MUST guarantee:

I. Valid HTML
II. All IDs exist in HTML
III. All states reference valid IDs
IV. No conflicting states
V. Actions fully defined
VI. timings baked into actions
VII. groups explicitly defined

---

## Validation Checklist

For each slide:

* ids in actions ⊆ ids in HTML
* no duplicates
* no conflicting states (hidden + focus)
* times are sorted
* first action exists at time 0

---

# 🧪 Phase 4 — Testing Strategy

## 1. Unit Tests (Builder)

Input DSL → expect compiled output

Test:

* snapshot HTML
* snapshot actions
* snapshot groups

---

## 2. Runtime Tests

Load compiled JSON directly into player

Check:

* scrubbing works
* no flicker
* no missing classes
* correct transitions

---

## 3. Edge Cases

* empty state
* missing ids
* overlapping times
* large timelines

---

# 🧠 Phase 5 — Primitive Mapping (internal to builder)

Builder must map DSL → primitives:

I. progressiveReveal → hidden
II. highlightOne → focus + dim
III. oneAtATime → removed
IV. custom → correct/wrong/etc.

---

# 🔥 Phase 6 — Remove Legacy System

DELETE:

* taleem-slides runtime usage
* runPrimitive adapter
* golden-deck JSON
* field-based slide schema (label/content/etc.)

---

# 🚀 Phase 7 — Final Package Structure

taleem-engine:

* /dsl
* /builder
* /templates
* /primitives
* /compiler

taleem-action-runner:

* runActions
* class application logic

---

# 🎯 Final Mental Model

DSL = source code
Builder = compiler
Compiled Deck = executable
Player = scheduler
Runner = CPU

---

# ⚡ Final Rule

If anything needs fixing after compile → system is broken.

---

# ✅ DONE CRITERIA

* Player uses ONLY compiled deck
* No renderTaleemSlide anywhere
* Actions drive all behavior
* Runner applies pure state
* System works via JSON alone

---

End of Plan.
