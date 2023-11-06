<template>
  <!-- <p v-html="option.text"></p> -->
  <div v-if="option.component">
    <component :is="componentLoaderInit" />
  </div>
  <div v-else style="max-width:250px">
   <!-- <p> -->
    {{ option.text }}
    <!-- </p> -->
  </div>
</template>

<script setup lang="ts">
import componentsData from "~~/componentsData";

const route = useRoute();

const component = componentsData.components.find(
  (component) => component.slug === route.params.componentSlug
);

const option = component.options.find(
  (component) => component.slug === route.params.optionSlug
);

const componentLoader: () => ComponentDefinition | null = () => {
  let component: ComponentDefinition | null = null;
  //For some reason having a variable in the import path is generating an error so for now i ll leave it as switch
  switch (option.component) {
    case "checkbox-detail":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Checkbox/Detail.vue`),
      });
      break;
    case "checkbox-criteria":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Checkbox/Criteria.vue`),
      });
      break;
    case "checkbox-default":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Checkbox/DefaultCheckbox.vue`),
      });
      break;
    case "checkbox-aria":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Checkbox/CheckboxGroup.vue`),
      });
      break;
    case "checkbox-code":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Checkbox/Code.vue`),
      });
      break;
  }
  return component;
};
const componentLoaderInit = computed(() => componentLoader());
</script>
