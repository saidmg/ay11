<template>
  <Head>
    <Title>Button - Aria</Title>
  </Head>
  <div class="m-5">
    <p class="font-bold text-xl mb-2 text-gray-700">
      WAI-ARIA Roles, States, and Properties
    </p>
    <ul class="text-gray-700 text-base">
      <li>The button has role of button.</li>
      <li>
        The button has an accessible label. By default, the accessible name is computed
        from any text content inside the button element. However, it can also be provided
        with aria-labelledby or aria-label.
      </li>
      <li>
        If a description of the button's function is present, the button element has
        aria-describedby set to the ID of the element containing the description.
      </li>
      <li>
        When the action associated with a button is unavailable, the button has
        aria-disabled set to true.
      </li>
      <li>
        If the button is a toggle button, it has an aria-pressed state. When the button is
        toggled on, the value of this state is true, and when toggled off, the state is
        false.
      </li>
    </ul>


   <p class="font-bold text-xl mb-2 text-gray-700 mt-5">
      Things to Consider:
    </p>
    <ul class="text-gray-700 text-base">
      <li>
   You should check the contrast between the text and your button. The contrast ratio
      between text and its background should be at least 4.5:1.
      </li>
      <li>
        You should check the contrast between your button and its background. Optimally, the
      contrast ratio between a button and its background should be at least 3:1.
      </li>
      <li>
      WCAG tell us the minimum target size for buttons should be at least 24 x 24 CSS
      pixels (which can include your button and the padding around it)
      </li>
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
