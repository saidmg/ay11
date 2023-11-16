<template>
  <Head>
    <Title>Date Picker - Detail</Title>
  </Head>
  <p class="font-bold text-xl mb-2 text-gray-700">Keep in mind:</p>
  <ul class="text-gray-700 text-base">
    <li>Use placeholders to indicate the input format.</li>
    <li>
      Provide format suggestions when the user activates the field (placeholder disappears
      once the input is activated).
    </li>
    <li>Indicate current date.</li>
    <li>Use explicit labels for your date fields.</li>
    <li>
      Users must be able to use a date picker using touch, a mouse, screen readers, and a
      keyboard.
    </li>
    <li>
      Consider Separating day, month, and year fields as it makes it easier for screen
      readers and keyboard users to enter dates.
    </li>
    <li>Block Unavailable Dates</li>
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
