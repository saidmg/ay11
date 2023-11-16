<template>
  <Head>
    <Title>Navigation - Aria</Title>
  </Head>
  <div class="grid grid-cols-6 gap-3">
    <div class="col-span-4">
      <ContentDoc :path="'navigation-aria'">
        <template v-slot="{ doc }">
          <div style="width: 30vw">
            <ContentRenderer :value="doc" />
          </div>
          <!-- <h1>{{ doc.title }}</h1> -->
        </template>

        <template #not-found> <h1>Document not found</h1> </template>
      </ContentDoc>
    </div>
    <div class="col-span-2 border-l-4 pl-2">
      <!-- Navigation widget that implements ARIA Authoring Practices -->
      <div
        class="bg-blue-100 border border-blue-900 text-blue-900 px-4 py-3 mb-2 mb-2 mt-7 rounded relative"
        role="alert"
      >
        <strong class="font-bold">role="menubar": </strong>
        <span class="block sm:inline"
          >Navigation is visually presented as a horizontal menu bar.</span
        >
      </div>

      <div
        class="bg-blue-100 border border-blue-900 text-blue-900 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">aria-haspopup=”true”: </strong>
        <span class="block sm:inline"
          >When we get to a menuitem that has a sub-menu that pops up.</span
        >
      </div>
      <div
        class="bg-blue-100 border border-blue-900 text-blue-900 px-4 py-3 my-2 rounded relative"
        role="alert"
      >
        <strong class="font-bold">Sub-menu a role of menu: </strong>
        <span class="block sm:inline">Because this is a vertical submenu.</span>
      </div>
      <div
        class="bg-blue-100 border border-blue-900 text-blue-900 px-4 py-3 my-2 rounded relative"
        role="alert"
      >
        <strong class="font-bold">ARIA state of aria-hidden=”true”: </strong>
        <span class="block sm:inline"
          >Deals with whether an element is supposed to be visible to a user at a certain
          time</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>

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
