<template>
  <Head>
    <Title>Image - Detail</Title>
  </Head>
  <div class="m-5">
     <p class="font-bold text-xl mb-2 text-gray-700 mt-5">There is multiple types of Images:</p>
    <ul class="text-gray-700 text-base">
      <li>
       <strong>Decoration</strong>. You should use CSS background images for decorative images, but if you
        must use HTML, add a blank alt="". If the image isn't part of the content, a
        screen reader shouldn't waste time reading it.
      </li>
      <li>
        <strong>Content</strong>. If your image provides significant information, provide the same
        information in a brief alt text - or even better, in the main text which everybody
        can see. Don't write redundant alt text. How annoying would it be for a sighted
        user if all paragraphs were written twice in the main content? If the image is
        described adequately by the main text body, you can just use alt="".
      </li>
      <li>
        <strong>Link</strong>. If you put an image inside a tags, to turn an image into a link, you still
        must provide accessible link text. In such cases you may, either, write it inside
        the same a element, or inside the image's alt attribute - whichever works best in
        your case.
      </li>
      <li>
        <strong>Text</strong>. You should not put your text into images. If your main heading needs a drop
        shadow, for example, use CSS for that rather than putting the text into an image.
        However, If you really can't avoid doing this, you should supply the text inside
        the alt attribute.
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
