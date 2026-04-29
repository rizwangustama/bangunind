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
        { name: 'description', content: 'BangunInd adalah penyedia jasa konstruksi terpercaya di Sukabumi. Kami melayani irigasi, pekerjaan jalan, renovasi bangunan, pematangan lahan, tenaga kerja, alat berat, hingga pengangkutan puing.' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://bangunind.id/' },
        { property: 'og:title', content: 'BangunInd - Jasa Konstruksi & Infrastruktur Sukabumi' },
        { property: 'og:description', content: 'Layanan lengkap: Infrastruktur, Jalan, Bangunan, Pematangan Lahan, Tenaga Kerja, Alat Berat, dan Pengangkutan Puing di Sukabumi.' },
        { property: 'og:image', content: '/og-image.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://bangunind.id/' },
        { name: 'twitter:title', content: 'BangunInd - Jasa Konstruksi & Infrastruktur Sukabumi' },
        { name: 'twitter:description', content: 'Layanan lengkap: Infrastruktur, Jalan, Bangunan, Pematangan Lahan, Tenaga Kerja, Alat Berat, dan Pengangkutan Puing di Sukabumi.' },
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
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "BangunInd - PT Satset Karya Nusantara",
            "image": "https://bangunind.id/og-image.png",
            "@id": "https://bangunind.id",
            "url": "https://bangunind.id",
            "telephone": "085523951105",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Raya Sukabumi",
              "addressLocality": "Sukabumi",
              "addressRegion": "Jawa Barat",
              "postalCode": "43111",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -6.9237,
              "longitude": 106.9287
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:00",
              "closes": "17:00"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Layanan Konstruksi & Infrastruktur",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Konstruksi Infrastruktur & Irigasi",
                    "description": "Pembangunan saluran irigasi, bendungan kecil, dan jaringan utilitas."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pekerjaan Jalan & Lingkungan",
                    "description": "Konstruksi aspal, paving, trotoar, dan area parkir."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Konstruksi Bangunan & Renovasi",
                    "description": "Pembangunan gedung, rumah residensial, dan renovasi bangunan."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pematangan Lahan & Struktur",
                    "description": "Pekerjaan cut & fill, pemadatan tanah, dan pondasi."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tenaga Kerja Konstruksi",
                    "description": "Penyediaan tukang spesialis dan tim K3 bersertifikat."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dukungan Alat & Material",
                    "description": "Sewa alat berat dan suplai material bangunan berkualitas."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pembersihan & Pengangkutan Puing",
                    "description": "Layanan pembersihan lokasi proyek dan pembuangan limbah konstruksi."
                  }
                }
              ]
            }
          })
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
