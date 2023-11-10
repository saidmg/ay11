<template>
  <Head>
    <Title>Checkbox - Criteria</Title>
  </Head>
  <p class="font-bold text-xl mb-2 text-gray-700 mt-8">Keep in mind:</p>
  <ul class="text-gray-700 text-base">
    <li>
      In most cases, for the greatest clarity, use button elements for clickable areas.
    </li>
    <li>
      Avoid using div or img tags to create buttons. Screen readers generally won't know
      that either is a usable button.
    </li>
    <li>
      If you must use a different HTML element to do the same functionality as a button,
      use the aria role='button' to let screen readers know the area is clickable.
    </li>
    <li>
      You can also use an input for a button (especially used in forms) as long as it has
      a type='button'.
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
