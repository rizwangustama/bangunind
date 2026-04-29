// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: '%s | BangunInd – PT Satset Karya Nusantara',
      title: 'Konstruksi & Infrastruktur Sukabumi',
      htmlAttrs: { lang: 'id' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'BangunInd adalah penyedia jasa konstruksi dan infrastruktur terpercaya di Sukabumi. Kami melayani pembangunan jalan, irigasi, gedung, dan pematangan lahan dengan hasil berkualitas.' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://bangunind.id/' },
        { property: 'og:title', content: 'BangunInd - Konstruksi & Infrastruktur Sukabumi' },
        { property: 'og:description', content: 'Solusi konstruksi lengkap: jalan, irigasi, gedung, dan pematangan lahan di wilayah Sukabumi.' },
        { property: 'og:image', content: '/og-image.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://bangunind.id/' },
        { name: 'twitter:title', content: 'BangunInd - Konstruksi & Infrastruktur Sukabumi' },
        { name: 'twitter:description', content: 'Solusi konstruksi lengkap: jalan, irigasi, gedung, dan pematangan lahan di wilayah Sukabumi.' },
        { name: 'twitter:image', content: '/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@400;500;600&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
