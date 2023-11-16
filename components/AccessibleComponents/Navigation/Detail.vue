<template>
  <Head>
    <Title>Navigation - Detail</Title>
  </Head>
  <p class="font-bold text-xl mb-2 text-gray-700">Best Practices:</p>
  <ul class="text-gray-700 text-base">
    <li>
      Using conventional locations for menus, such as across the top of the page or along
      the left side.
    </li>
    <li>Providing a visual heading to label menus.</li>
    <li>
      Providing generous sizes for clickable areas, generally no smaller than 44px by
      44px.
    </li>
    <li>
      Ensuring that menus are keyboard operable and focus is never hidden from users.
    </li>
    <li>
      <a
        href="https://www.w3.org/WAI/tutorials/menus/structure/#indicate-the-current-item"
        target="_blank"
        ><strong>Indicating the current page</strong>
      </a>
      using a hidden span or aria-current.
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
