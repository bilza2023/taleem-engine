
# Taleem DSL API

This document is the canonical API reference for `taleem-engine`.

All examples are directly copy-pasteable.

The API is intentionally small, deterministic, and educational-first.

---

# Installation

```bash
npm install taleem-engine
```

---

# Create Presentation

```js
import { Taleem } from "taleem-engine";

const taleem = new Taleem();
```

---

# Presentation Metadata

```js
taleem.metaData.name = "My Presentation";

taleem.metaData.base = "/content/images/";
```

---

# titleAndSubtitle

```js
taleem.at(0).titleAndSubtitle()

  .title("taleem Slides", 0)

  .subtitle("A calm, structured way to present ideas", 3);
```

---

# titleAndPara

```js
taleem.at(10).titleAndPara()

  .title("What is taleem Slides?", 10)

  .para(
    "taleem Slides is a simple system that turns structured data into clear visual slides.",
    13
  );
```

---

# bulletList

```js
taleem.at(20).bulletList()

  .bullet("Slides are generated from clean data", 20)

  .bullet("Nothing changes behind the scenes", 22)

  .bullet("The author controls what appears", 24)

  .bullet("The same lesson looks the same everywhere", 26);
```

---

# twoColumnText

```js
taleem.at(30).twoColumnText()

  .leftText("taleem-browser shows complete slides.", 30)

  .rightText("taleem-player reveals ideas progressively.", 34);
```

---

# imageSlide

```js
taleem.at(40).imageSlide()

  .image("image.png", 40);
```

---

# imageWithTitle

```js
taleem.at(50).imageWithTitle()

  .title("Visual Support Matters", 50)

  .image("image.png", 53);
```

---

# imageWithCaption

```js
taleem.at(60).imageWithCaption()

  .image("image.png", 60)

  .caption("Images help anchor understanding", 63);
```

---

# imageLeftBulletsRight

```js
taleem.at(70).imageLeftBulletsRight()

  .image("image.png", 70)

  .bullet("Each slide focuses on one idea", 72)

  .bullet("Points are revealed in order", 74)

  .bullet("Students follow step by step", 76);
```

---

# imageRightBulletsLeft

```js
taleem.at(80).imageRightBulletsLeft()

  .image("image.png", 80)

  .bullet("Slides remain stable and predictable", 82)

  .bullet("The teacher controls the pace", 84)

  .bullet("Learning stays calm and focused", 86);
```

---

# table

```js
taleem.at(90).table()

  .row("Layer , Role", 90)

  .row("taleem-core , Defines schema", 92)

  .row("taleem-player , Playback", 94);
```

---

# barChart

```js
taleem.at(100).barChart()

  .bar("Clarity", 6, 100)

  .bar("Structure", 5, 102)

  .bar("Consistency", 6, 104);
```

---

# progressbar

```js
taleem.at(110).progressbar()

  .bar("Lesson Progress", 60, 110);
```

---

# quoteSlide

```js
taleem.at(120).quoteSlide()

  .quote("Clarity makes learning easier.", 120)

  .author("— taleem", 123);
```

---

# keyIdeasSlide

```js
taleem.at(130).keyIdeasSlide()

  .card("🧠", "Focus", 130)

  .card("📘", "Clarity", 132)

  .card("🎯", "Understanding", 134)

  .card("🧠", "Deliberation", 136);
```

---

# eq

```js
taleem.at(140).eq()

  .title("Expansion of a Binomial", 140, [
    {
      name: "text",
      content: "Expand the square step by step."
    },

    {
      name: "text",
      content: "Then combine like terms."
    }
  ])

  .math("(a+b)^2", 141, [
    {
      name: "text",
      content: "The bracket multiplies itself."
    }
  ])

  .math("= (a+b)(a+b)", 142, [
    {
      name: "image",
      content: "box.webp"
    },

    {
      name: "text",
      content: "Area model of multiplication."
    }
  ]);
```

---

# fillImage

```js
taleem.at(155).fillImage()

  .image("image.png", 155);
```

---

# focusList

```js
taleem.at(160).focusList()

  .heading("Step-by-step focus", 160)

  .bullet("Understand the idea", 162)

  .bullet("Break it into parts", 164)

  .bullet("Verify the result", 166);
```

---

# imageStrip

```js
taleem.at(170).imageStrip()

  .image("box.webp", 170)

  .image("image.png", 172)

  .image("whatisforce.webp", 174);
```

---

# imageGrid

```js
taleem.at(180).imageGrid()

  .image("box.webp", 180)

  .image("image.png", 182)

  .image("whatisforce.webp", 184)

  .image("box.webp", 186);
```

---

# skeleton

```js
taleem.at(190).skeleton()

  .title("Understanding Force", 190)

  .image("whatisforce.webp", 192)

  .para("Force is a push or pull.", 194);
```

---

# textGrid

```js
taleem.at(200).textGrid()

  .text("Clear structure improves understanding", 200)

  .text("Each idea should be isolated", 202)

  .text("Visual layout reduces confusion", 204)

  .text("Consistency improves learning", 206);
```

---

# End Presentation

```js
taleem.end(210);
```

---

# Compile Presentation

```js
const presentation = taleem.compile();
```
