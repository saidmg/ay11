<template>
  <Head>
    <Title>Checkbox - Aria</Title>
  </Head>
  <div class="grid grid-cols-6 gap-3">
    <div class="col-span-4">
      <p class="font-bold text-xl mb-2 text-gray-700">Accessibility Features</p>
      <ul class="text-gray-700 text-base">
        <li>
          To help assistive technology users understand that each checkbox is part of a
          set of related checkboxes named Sandwich Condiments, the checkboxes are wrapped
          in a group labeled by the h3 heading element.
        </li>
        <li>
          To enable assistive technology users to perceive the set of checkboxes as a list
          of four items, each div element that serves as a checkbox is contained within a
          li element contained by a ul element.
        </li>
        <li>
          Because transparent borders are visible on some systems when operating system
          high contrast settings are enabled, transparency cannot be used to create a
          visual difference between the element that is focused and other elements.
          Instead of using transparency, the focused element has a thicker border and less
          padding. When an element receives focus, its border changes from 0 to 2 pixels
          and padding is reduced by 2 pixels. When an element loses focus, its border
          changes from 2 pixels to 0 and padding is increased by 2 pixels.
        </li>
        <li>
          To ensure the borders of the inline SVG checkbox graphics in the CSS have
          sufficient contrast with the background when high contrast settings invert
          colors, the color of the borders are synchronized with the color of the text
          content.
        </li>
      </ul>
    </div>
    <div class="col-span-2 border-l-4 pl-2 pt-2">
      <!-- Checkbox widget that implements ARIA Authoring Practices -->
      <h3 id="id-group-label">Sandwich Condiments</h3>
      <div role="group" aria-labelledby="id-group-label">
        <ul class="checkboxes">
          <li v-for="checkbox in checkboxes" :key="checkboxes.id">
            <Checkbox
              :id="checkbox.id"
              :label="checkbox.label"
              :default-value="checkbox.default"
              @updated="
                (id) => {
                  console.log('checkbox updated:', id);
                }
              "
            />
          </li>
        </ul>
      </div>

      <div
        class="bg-blue-100 border border-blue-900 text-blue-900 px-4 py-3 mb-2 my-8 rounded relative"
        role="alert"
      >
        <strong class="font-bold">Tab Key: </strong>
        <span class="block sm:inline">Moves keyboard focus to the checkbox.</span>
      </div>
      <div
        class="bg-blue-100 border border-blue-900 text-blue-900 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">Space Key: </strong>
        <span class="block sm:inline"
          >Toggles checkbox between checked and unchecked states.</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import Checkbox from "./Checkbox.vue";
const checkboxes = reactive([
  {
    id: "lettuce",
    label: "Lettuce",
    default: "true",
  },
  {
    id: "tomato",
    label: "Tomato",
  },
  {
    id: "mustard",
    label: "Mustard",
  },
  {
    id: "sprouts",
    label: "Sprouts",
    default: "true",
  },
]);
</script>
<style scoped>
li {
  list-style: square;
}

[role="listitem"] {
  display: list-item;
}

.pretend-ul [role="listitem"] {
  list-style: disc; /* default bullet */
}

/* a nested list should have a different glyph */
.pretend-ul [role="listitem"] [role="listitem"] {
  list-style: circle;
}

/* and etc. */
.pretend-ul [role="listitem"] [role="listitem"] [role="listitem"] {
  list-style: square;
}

ul.checkboxes {
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 1em;
}

ul.checkboxes li {
  list-style: none;
  margin: 1px;
  padding: 0;
}

[role="checkbox"] {
  display: inline-block;
  padding: 4px 8px;
  cursor: pointer;
}

[role="checkbox"]::before {
  position: relative;
  top: 1px;
  left: -4px;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='16' width='16' style='forced-color-adjust: auto;'%3E%3Crect x='2' y='2' height='13' width='13' rx='2' stroke='currentcolor' stroke-width='1' fill-opacity='0' /%3E%3C/svg%3E");
}

[role="checkbox"][aria-checked="true"]::before {
  position: relative;
  top: 1px;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='16' width='16' style='forced-color-adjust: auto;'%3E%3Crect x='2' y='2' height='13' width='13' rx='2' stroke='currentcolor' stroke-width='1' fill-opacity='0' /%3E%3Cpolyline points='4,8 7,12 12,5' fill='none' stroke='currentcolor' stroke-width='2' /%3E%3C/svg%3E");
}

[role="checkbox"]:focus,
[role="checkbox"]:hover {
  padding: 2px 6px;
  border: 2px solid #005a9c;
  border-radius: 5px;
  background-color: #def;
}

[role="checkbox"]:hover {
  cursor: pointer;
}
</style>
