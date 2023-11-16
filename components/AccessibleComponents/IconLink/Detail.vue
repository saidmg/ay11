<template>
  <Head>
    <Title>IconLink - Detail</Title>
  </Head>
  <div class="m-5">
    <div
      class="bg-blue-100 border border-blue-900 text-blue-900 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold">Note: </strong>
      <span class="block sm:inline">
        Adding an Icon link to our project can be done by multiple ways, such as using
        font awesome or an SVG.
      </span>
    </div>
    
    <p class="font-bold text-xl mb-2 text-gray-700 mt-5">
      Keep in mind:
    </p>
    <ul class="text-gray-700 text-base">
      <li>The click area might be too small.</li>
      <li>Not everyone will understand the icon.</li>
      <li>The link has no meaning at all. Screen readers will just read link.</li>
    </ul>
  </div>
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
