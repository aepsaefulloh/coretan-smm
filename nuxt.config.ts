// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt'],
  css: ['~/assets/css/main.css']
})