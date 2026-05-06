// /src/compiler/templates/compileEq.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileEq(slide) {
  const rawItems = slide.data ?? [];

  if (!rawItems.length) {
    throw new Error(
      "eq: requires lines"
    );
  }

  const items =
    addIdToItems(rawItems);

  // --------------------------------------------------
  // build lines + spItems
  // --------------------------------------------------

  const lines =
    items.map(line => {
      const spItems =
        (line.spItems || []).map(
          (sp, i) => ({
            ...sp,

            id:
              `${line.id}-sp-${i + 1}`
          })
        );

      return {
        ...line,

        spItems
      };
    });

  // --------------------------------------------------
  // primitive items
  // IMPORTANT:
  // preserve relationships
  // --------------------------------------------------

  const primitiveItems =
    lines.map(line => ({
      id: line.id,

      showAt: line.showAt,

      spIds:
        line.spItems.map(
          sp => sp.id
        )
    }));

  // --------------------------------------------------
  // html
  // --------------------------------------------------

  const html = `
    <section class="slide eq">

      <ul class="eq-lines">

        ${lines.map(line => `
          <li
            id="${line.id}"

            class="eq-line"
          >
            ${line.content}
          </li>
        `).join("")}

      </ul>

      <div class="eq-side-panel">

        ${lines.map(line =>
          line.spItems.map(sp => {

            if (sp.name === "image") {
              return `
                <div
                  id="${sp.id}"

                  class="eq-explain-item hidden"
                >
                  <img src="${sp.content}" />
                </div>
              `;
            }

            return `
              <div
                id="${sp.id}"

                class="eq-explain-item hidden"
              >
                ${sp.content}
              </div>
            `;
          }).join("")
        ).join("")}

      </div>

    </section>
  `;

  return {
    html,

    animation:
      "eqHighlightOne",

    primitiveItems
  };
}