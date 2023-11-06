<template>
  <Head>
    <Title>Tools</Title>
  </Head>

  <div class="content p-5 m-9">
    <!-- <embed src="https://contrastchecker.com/" style="width:500px; height: 500px;"> -->

    <h1 class="text-3xl my-5 px-8">Tools</h1>

    <div class="grid grid-cols-2 m:auto">
      <div class="px-8 m-5 py-4 rounded overflow-hidden shadow-lg bg-teal-50">
        <h2 class="font-bold text-xl mb-2 text-gray-700">Color Contrast</h2>
        https://contrastchecker.com/
      </div>

      <div class="px-8 m-5 py-4 rounded overflow-hidden shadow-lg bg-teal-50">
        <h2 class="font-bold text-xl mb-2 text-gray-700">Color Checker</h2>
        https://developer.paciellogroup.com/color-contrast-checker/
      </div>
    </div>

    <div class="grid grid-cols-2 m:auto">
      <div class="px-8 m-5 py-4 rounded overflow-hidden shadow-lg bg-teal-50">
        <h2 class="font-bold text-xl mb-2 text-gray-700">
          WAVE Web Accessibility Evaluation Tool
        </h2>
      </div>

      <div class="px-8 m-5 py-4 rounded overflow-hidden shadow-lg bg-teal-50">
        <h2 class="font-bold text-xl mb-2 text-gray-700">Web Developer</h2>
        https://developer.paciellogroup.com/color-contrast-checker/
      </div>
    </div>

    <div class="grid grid-cols-2 m:auto">
      <div class="px-8 m-5 py-4 rounded overflow-hidden shadow-lg bg-teal-50">
        <h2 class="font-bold text-xl mb-2 text-gray-700">Bionic Reader</h2>
      </div>

      <div class="px-8 m-5 py-4 rounded overflow-hidden shadow-lg bg-teal-50"></div>
    </div>
  </div>
</template>

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
