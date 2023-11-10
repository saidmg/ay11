<template>
  <Head>
    <Title>Checkbox - Code</Title>
  </Head>
  <div class="wrapper content">
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
  <div >
    <ContentDoc :path="'icon-list-fontawesome'">
      <template v-slot="{ doc }">
        <div style="width: 50vw">
          <!-- <h1>{{ doc.title }}</h1> -->
          <ContentRenderer :value="doc" />
        </div>
      </template>
      <template #not-found> <h1 class="text-center">Document not found</h1> </template>
    </ContentDoc>
  </div>
  <div >
    <ContentDoc :path="'icon-list-svg'">
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
