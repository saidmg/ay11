<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="min-h-screen h-100 dark:accent-slate-900 dark:bg-slate-900">
    <div>
      <div class="navbar relative dark:bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
          >
            <div class="flex justify-start lg:w-0 lg:flex-1"></div>
            <nav class="hidden md:flex space-x-10">
              <MyLink to="/wcag" title="WCAG" />
              <MyLink to="/aria" title="Aria" />
              <MyLink
                :to="`/components`" title="Components"
              />
              <MyLink to="/tools" title="Tools" />
            </nav>

            <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
            <button
              class="ml-5"
              @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
            >
              <svg
                v-if="$colorMode.value == 'light'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-50"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="grid justify-items-center flex items-top">
      <div class="mt-16 dark:text-white">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import componentsData from "~~/componentsData";
type Theme = "light" | "dark";

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>
