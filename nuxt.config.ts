// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'], 
  ui: {
    primary: 'green',
    gray: 'cool'
  }, 
})
