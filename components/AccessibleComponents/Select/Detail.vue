<template>
  <Head>
    <Title>Select - Detail</Title>
  </Head>
    <p class="font-bold text-xl mb-2 text-gray-700">Keep in mind:</p>
    <ul class="text-gray-700 text-base">
      <li>
        If the combobox is collapsed and the user types printable characters, the listbox
        is displayed and receives accessibility focus via aria-activedescendant. This
        enables users to perceive the presence of the options, and enables assistive
        technology users to comprehend the size of the list of options.
      </li>
      <li>
        Navigating the list of options does not set the value of the input. This gives
        screen reader users, who need to navigate among the options to perceive them, the
        ability to explore options without losing the current value of the input. The
        value is set when users press Space, Enter, or Tab, or when focus moves out of the
        combobox. The current value is retained if the listbox is closed with Escape or if
        the user collapses the list by clicking the input.
      </li>
      <li>
        Browsers do not manage visibility of elements referenced by aria-activedescendant
        like they do for elements with focus. When a keyboard event changes the active
        option in the listbox, the JavaScript scrolls the option referenced by
        aria-activedescendant into view. Managing aria-activedescendant visibility is
        essential to accessibility for people who use a browser's zoom feature to increase
        the size of content.
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
