<template>
  <Head>
    <Title>Components</Title>
  </Head>
  <div v-if="option.component">
    <component :is="componentLoaderInit" />
  </div>
  <div v-else style="max-width:250px">
    {{ option.text }}
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
    
    case "icon-link-detail":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/IconLink/Detail.vue`),
      });
      break;
    case "icon-link-code":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/IconLink/Code.vue`),
      });
      break;

     case "lists-detail":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/List/Detail.vue`),
      });
      break;
    case "lists-code":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/List/Code.vue`),
      });
      break;

    case "buttons-detail":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Button/Detail.vue`),
      });
      break;
    case "buttons-aria":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Button/Aria.vue`),
      });
      break;
    case "images-detail":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Image/Detail.vue`),
      });
      break;
    case "images-guideline":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Image/Guideline.vue`),
      });
      break;
    case "select-aria":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Select/Aria.vue`),
      });
      break;
    case "select-detail":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Select/Detail.vue`),
      });
      break;
    case "select-code":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Select/Code.vue`),
      });
      break;
    case "date-picker-package":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/DatePicker/Package.vue`),
      });
      break;
    case "date-picker-detail":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/DatePicker/Detail.vue`),
      });
      break;

    case "navigation-detail":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Navigation/Detail.vue`),
      });
      break;

    case "navigation-aria":
      component = defineAsyncComponent({
        loader: () => /* @vite-ignore */ import(`@/components/AccessibleComponents/Navigation/Aria.vue`),
      });
      break;
  }
  return component;
};
const componentLoaderInit = computed(() => componentLoader());
</script>
