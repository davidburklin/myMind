// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },

  image: {
    dir: 'assets/images',
  },

  modules: [
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@pinia/nuxt'
  ]
})
