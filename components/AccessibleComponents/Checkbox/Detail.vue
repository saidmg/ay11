<template>
  <Head>
    <Title>Checkbox - Criteria</Title>
  </Head>
  <div
    class="bg-blue-100 border border-blue-900 text-blue-900 px-4 py-3 rounded relative"
    role="alert"
  >
    <strong class="font-bold">As per MDN: </strong>
    <span class="block sm:inline"
      >input of type checkbox are rendered by default as square boxes that are checked
      (ticked) when activated. They allow you to select or deselect single values in a
      form.</span
    >
  </div>
<!-- 
  <p class="font-bold text-xl mb-2 text-gray-700">As a user</p>

  <ul class="text-gray-700 text-base">
    <li>I should be able to navigate by keyboard.</li>
    <li>
      I expect that there will be no animation in case I disabled animations from system
      preferences.
    </li>
    <li>I should see a clear focus style.</li>
    <li>In multiple checkboxes, I should hear the question or title related to them.</li>
  </ul>
  </div> -->
</template>

<script setup>
import perceivable from "~/components/guidelines/perceivable.vue";
import operable from "~/components/guidelines/operable.vue";
import understandable from "~/components/guidelines/understandable.vue";
import robust from "~/components/guidelines/robust.vue";
import CodeBlock from "vue3-code-block";
const guideline = ref("");

const toggleSlideover = (val) => {
  const availableComponents = ["perceivable", "operable", "understandable", "robust"];
  if (availableComponents.includes(val)) guideline.value = val;
  document.getElementById("slideover-container").classList.toggle("invisible");
  document.getElementById("slideover-bg").classList.toggle("opacity-0");
  document.getElementById("slideover-bg").classList.toggle("opacity-50");
  document.getElementById("slideover").classList.toggle("translate-x-full");
};
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
</style>
