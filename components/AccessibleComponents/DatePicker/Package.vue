<template>
  <Head>
    <Title>Date Picker - Package</Title>
  </Head>
  <p class="font-bold text-xl mb-2 text-gray-700 mt-5">Accessible Date Picker:</p>
  <ul class="text-gray-700 text-base">
    <li>
      <a href="https://duetds.github.io/date-picker/" target="_blank"
        ><strong>Duet Date Picker</strong></a
      >
      is an open source version of Duet Design System’s accessible date picker. It can be
      implemented and used across any JavaScript framework or no framework at all.
    </li>

    <li>
      <a href="https://fymmot.github.io/inclusive-dates/" target="_blank"
        ><strong>Tommy's inclusive datepicker </strong></a
      >
      A human-friendly and fully accessible datepicker with support for natural language
      input, written in Typescript.
    </li>
  </ul>
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
