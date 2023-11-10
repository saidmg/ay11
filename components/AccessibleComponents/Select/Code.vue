<template>
  <Head>
    <Title>Select - Code</Title>
  </Head>
  <div class="wrapper content">
    <nav class="tabs" style="padding-top: 0px; margin-top: 0px">
      <div
        class="selector"
        style="padding-top: 0px; margin-top: 0px; text-align: center"
      ></div>
      <button
        v-for="(file, index) in codeFiles"
        :key="file"
        class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
        style="padding-top: 0px; margin-top: 0px; display: inline-block; margin: 2px"
        :class="{ active: codeFile == file }"
        @click="() => (codeFile = file)"
      >
        <span>{{
          file
            .split("-")
            .map(function (item) {
              return item.charAt(0).toUpperCase() + item.substring(1);
            })
            .join(" ")
        }}</span>
      </button>
    </nav>
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
  <div v-if="codeFile">
    <ContentDoc :path="codeFile">
      <template v-slot="{ doc }">
        <div style="width: 50vw">
          <!-- <h1>{{ doc.title }}</h1> -->
          <ContentRenderer :value="doc" />
        </div>
      </template>
      <template #not-found> <h1 class="text-center">Document not found</h1> </template>
    </ContentDoc>
  </div>
</template>

<script setup>
import perceivable from "~/components/guidelines/perceivable.vue";
import operable from "~/components/guidelines/operable.vue";
import understandable from "~/components/guidelines/understandable.vue";
import robust from "~/components/guidelines/robust.vue";
import CodeBlock from "vue3-code-block";
const codeFiles = ["select", "select-js", "select-css"];
const codeFile = ref(codeFiles[0]);
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

.active {
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
