```vue [components/Checkbox/Checkbox.vue] {3-4,7}
<template>
  <div
    role="checkbox"
    :aria-checked="checkboxValue"
    @click="toggleCheckbox"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
    tabindex="0"
    :id="props.id"
  >
    {{ props.label }}
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const emit = defineEmits(["updated"]);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  defaultValue: {
    type: Boolean,
    default: false,
  },
});

const checkboxValue = ref(props.defaultValue);
//Checkbox widget that implements ARIA Authoring Practices
const toggleCheckbox = (e) => {
  checkboxValue.value = !checkboxValue.value;
  emit("updated", { id: e.target.id, value: checkboxValue.value });
};

// Make sure to prevent page scrolling on space down
const onKeyDown = (e) => {
  if (event.key === " ") {
    event.preventDefault();
  }
};

const onKeyUp = (e) => {
  if (event.key === " ") {
    event.preventDefault();
    toggleCheckbox(e);
  }
};
</script>

```
