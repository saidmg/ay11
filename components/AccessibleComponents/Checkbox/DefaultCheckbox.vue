<template>
  <Head>
    <Title>Checkbox - Aria</Title>
  </Head>
  <div class="grid grid-cols-6 gap-3">
    <div class="col-span-4">
      <ContentDoc :path="'checkbox-default'">
        <template v-slot="{ doc }">
          <div style="width: 30vw">
            <ContentRenderer :value="doc" />
          </div>
          <!-- <h1>{{ doc.title }}</h1> -->
        </template>

        <template #not-found> <h1>Document not found</h1> </template>
      </ContentDoc>
    </div>
    <div class="col-span-2 border-l-4 pl-2 pt-2">
      <!-- Checkbox widget that implements ARIA Authoring Practices -->
      <fieldset>
        <legend>Choose your interests</legend>
        <div>
          <input type="checkbox" id="coding" name="interest" value="coding" checked />
          <label for="coding">Coding</label>
        </div>
        <div>
          <input type="checkbox" id="music" name="interest" value="music" />
          <label for="music">Music</label>
        </div>
      </fieldset>

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
