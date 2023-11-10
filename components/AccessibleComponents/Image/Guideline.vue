<template>
  <Head>
    <Title>Checkbox - Criteria</Title>
  </Head>
  <div class="m-5">
    <p class="font-bold text-xl mb-2 text-gray-700">Keep in mind:</p>
    <ul class="text-gray-700 text-base">
      <li>alt text should be less than 250 characters.</li>
      <li>
        Avoid using the title attribute in lieu of alt text. Keyboard-only users or mobile
        users may never see the title.
      </li>
      <li>
        Image links should describe the purpose of the link, and must never describe the
        image.
      </li>
      <li>Decorative images should have blank or empty alt text</li>
      <li>Provide color contrast and other design elements to help color blind users</li>
      <li>
        Complex images, like charts or graphs, should have long description located near
        the image. The image’s alt text should describe where the close by image is.
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
