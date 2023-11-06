
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true},
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode','@nuxt/content'],
  content: {
    highlight: {
      theme: 'dark-plus',
    },
  },
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
})