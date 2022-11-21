export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@huntersofbook/chatwoot-nuxt'
  ],
  chatwoot: {
    init: {
      websiteToken: 'b6BejyTTuxF4yPt61ZTZHjdB'
    },
    settings: {
      locale: 'ru',
      position: 'right',
      launcherTitle: 'Chat',
      // ... and more settings
    },
    // If this is loaded you can make it true, https://github.com/nuxt-modules/partytown
    partytown: false,
  }
  })