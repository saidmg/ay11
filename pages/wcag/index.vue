<template>
  <Head>
    <Title>WCAG - Overview</Title>
  </Head>
  <h1 class="text-3xl text-center">The W3C Web Content Accessibility Guidelines</h1>

  <div class="content my-5 rounded">
    <div class="max-w-5xl rounded overflow-hidden shadow-lg">
      <div class="px-8 m-5 py-4">
        <h2 class="font-bold text-xl mb-2 text-gray-700">The four principles</h2>

        <ul class="text-gray-700 text-base">
          <li>
            Perceivable - Information can be presented in different ways; for example, in
            braille, different text sizes, text-to-speech, or symbols, etc.
          </li>
          <li>
            Operable - Functionality can be used in different modalities; for example,
            keyboard, mouse, sip-and-puff, speech input, touch, etc.
          </li>
          <li>
            Understandable - Information and functionality is understandable; for example
            consistent navigation, simple language, etc.
          </li>
          <li>
            Robust - Content can be interpreted reliably by a wide variety of browsers,
            media players, and assistive technologies.
          </li>
        </ul>
      </div>
      <div class="px-6 pt-4 pb-2 mb-5">
        <span class="text-gray-700 text-base mr-5">Guidelines Overview:</span>
        <button
          @click="toggleSlideover('perceivable')"
          class="bg-transparent mr-2 hover:bg-blue-950 text-blue-950 font-semibold hover:text-white py-2 px-4 border border-blue-950 hover:border-transparent rounded"
        >
          Perceivable
        </button>
        <button
          @click="toggleSlideover('operable')"
          class="bg-transparent mr-2 hover:bg-blue-950 text-blue-950 font-semibold hover:text-white py-2 px-4 border border-blue-950 hover:border-transparent rounded"
        >
          Operable
        </button>
        <button
          @click="toggleSlideover('understandable')"
          class="bg-transparent mr-2 hover:bg-blue-950 text-blue-950 font-semibold hover:text-white py-2 px-4 border border-blue-950 hover:border-transparent rounded"
        >
          Understandable
        </button>
        <button
          @click="toggleSlideover('robust')"
          class="bg-transparent mr-2 hover:bg-blue-950 text-blue-950 font-semibold hover:text-white py-2 px-4 border border-blue-950 hover:border-transparent rounded"
        >
          Robust
        </button>

        <div class="w-screen flex items-center justify-center dark:bg-slate-900">
          <div id="slideover-container" class="w-full h-full fixed inset-0 invisible">
            <div
              @click="toggleSlideover"
              id="slideover-bg"
              class="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 opacity-0"
            ></div>
            <div
              id="slideover"
              style="overflow-y: auto"
              class="w-96 bg-white h-full absolute right-0 duration-300 ease-out transition-all translate-x-full dark:bg-slate-900 border border-white"
            >
              <div
                class="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5"
                @click="toggleSlideover"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
              <div v-if="guideline == 'perceivable'">
                <perceivable />
              </div>
              <div v-else-if="guideline == 'operable'">
                <operable />
              </div>
              <div v-else-if="guideline == 'understandable'">
                <understandable />
              </div>
              <div v-else-if="guideline == 'robust'">
                <robust />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import perceivable from "~/components/guidelines/perceivable.vue";
import operable from "~/components/guidelines/operable.vue";
import understandable from "~/components/guidelines/understandable.vue";
import robust from "~/components/guidelines/robust.vue";

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
