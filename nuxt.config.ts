// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "es-ES",
        iso: "es-ES",
        name: "Español",
        file: "es-ES.json",
      },
      {
        code: "it-IT",
        iso: "it-IT",
        name: "Italian",
        file: "it-IT.json",
      },
    ],
    defaultLocale: "it-IT",
    vueI18n: {
      fallbackLocale: "it-IT",
    },
  },
});
