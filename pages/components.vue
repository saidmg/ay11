<template>
  <div>
    <div class="flex flex-row justify-center flex-grow text-black">
      <div class="prose mr-4 p-8 bg-white rounded-md flex flex-col">
        <!-- <h3 class="mb-3 font-bold">Components</h3> -->

        <div class="mb-8">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              @input="filterComponentList"
            />
          </div>
        </div>

        <div
          class="space-y-1 mb-4 flex flex-col sidebar"
          v-for="(component, index) in filteredComponentsData"
          :key="component.slug"
        >
          <NuxtLink
            :key="component.slug"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
            :to="`/components/${component.slug}/option/detail`"
            :class="{
              active:
                `/components/${component.slug}` ===
                `/components/${$route.params.componentSlug}`,
            }"
          >
            <span>{{ component.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div
        class="prose p-12 bg-white rounded-md text-black " style="width:60vw; height:75vh;overflow:overlay"
      >
        <div v-if="componentSlug != 'overview'">
          <!-- <h1 class="text-center font-bold mb-2">{{ componentSlug }}</h1> -->
          <div class="wrapper content">
            <nav class="tabs">
              <div class="selector "></div>
              <NuxtLink
                v-for="(tab, index) in componentTabs($route.params.componentSlug)"
                :key="componentSlug"
                class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
                :to="`/components/${componentSlug}/option/${tab.slug}`"
                :class="{ active: tab.slug === `${$route.params.optionSlug}` }"
              >
                <span>{{ tab.slug }}</span>
              </NuxtLink>
            </nav>

            <div class="prose bg-white content p-8 text-black">
              <NuxtErrorBoundary>
                <NuxtPage />
                <template #error="{ error }">
                  <p>
                    Oh no, something went wrong!
                    <code>{{ error }}</code>
                  </p>
                  <p>
                    <button
                      class="hover:cursor-pointer bg-gray-500 text-white font-bold py-1 px-3 rounded"
                      @click="resetError(error)"
                    >
                      Reset
                    </button>
                  </p>
                </template>
              </NuxtErrorBoundary>
            </div>
          </div>
        </div>
        <div v-else>
          <Overview />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import componentsData from "~~/componentsData";

const route = useRoute();
const componentSlug = ref(route.params.componentSlug ?? "overview");
const filteredComponentsData = ref(componentsData.components.sort((a, b) => a.slug.localeCompare(b.slug)));

const filterComponentList = (searchValue) => {
  filteredComponentsData.value = componentsData.components.filter((component) => {
    return component.title.toLowerCase().includes(searchValue.target.value.toLowerCase());
  });
};

const resetError = async (error) => {
  await navigateTo(`/components/${componentSlug.value}/option/detail`);
  error.value = null;
};

const componentTabs = (slug) => {
  return filteredComponentsData.value.filter((component)=> { return component.slug == slug})[0].options
}

onBeforeRouteUpdate((to, from, next) => {
  if (to.params.componentSlug && to.params.componentSlug != from.params.componentSlug) {
    componentSlug.value = to.params.componentSlug;
  }
  next();
});
</script>
<style>
.content {
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
}
.tabs {
  /* margin-top: 50px; */
  font-size: 15px;
  padding: 0px;
  list-style: none;
  background: #fff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  display: inline-block;
  position: relative;
}

.tabs a {
  text-decoration: none;
  color: #777;
  text-transform: uppercase;
  padding: 10px 20px;
  display: inline-block;
  position: relative;
  z-index: 1;
  list-style: none;
  margin: auto;
}

.tabs a.active {
  color: black;
  font-weight: bolder;
}
.sidebar a.active {
  color: black;
  font-weight: bolder;
}

.tabs a i {
  margin-right: 5px;
}

.tabs .selector {
  height: 100%;
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  border-radius: 50px;
}
</style>
