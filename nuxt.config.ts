// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'robin' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;400;700&display=swap',
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss"],
  imports: {
    dirs: ['constants/**', 'composables/**', 'utils/helper/**'],
  },
  css: ['~/assets/css/main.css'],
})

