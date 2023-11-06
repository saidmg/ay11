<!-- # Custom Code Blocks -->
<!-- ## Vue Code Block With Line Highlighting -->
```vue [components/Checkbox/CheckboxGroup.vue] {4,8}
<template>
  <!-- Checkbox widget that implements ARIA Authoring Practices -->
  <h3 id="id-group-label">Sandwich Condiments</h3>
  <div role="group" aria-labelledby="id-group-label">
    <ul class="checkboxes">
      <li v-for="checkbox in checkboxes" :key="checkboxes.id">
        <Checkbox
          :id="checkbox.id"
          :label="checkbox.label"
          :default-value="checkbox.default"
          @updated="(id) => {console.log('checkbox updated:', id);}"
        />
      </li>
    </ul>
  </div>
</template>
<script setup>
import Checkbox from './Checkbox.vue'
const checkboxes = reactive([
  {
    id: "lettuce",
    label: "Lettuce",
    default: "true",
  },
  {
    id: "tomato",
    label: "Tomato",
  },
  {
    id: "mustard",
    label: "Mustard",
  },
  {
    id: "sprouts",
    label: "Sprouts",
    default: "true",
  },
]);
</script>
```
