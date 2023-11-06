<template>
  <MyCustomLink :to="to">
    <span class="text-base font-medium text-gray-500 hover:text-sky-900">
      {{ title }}

  </span>

  </MyCustomLink>
</template>
<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>