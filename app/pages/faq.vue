<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-vue-next'
import { gsap } from 'gsap'

useHead({
  title: 'FAQ – Pertanyaan Umum | BangunInd',
  meta: [{ name: 'description', content: 'Temukan jawaban atas pertanyaan umum seputar layanan konstruksi, proses pengerjaan, dan kemitraan dengan BangunInd.' }],
})

const faqs = [
  {
    q: 'Wilayah mana saja yang dicover oleh BangunInd?',
    a: 'Kami melayani seluruh wilayah Kabupaten & Kota Sukabumi, termasuk area Jampang (Ciracap, Surade, Jampang Kulon), Palabuhanratu, Cicurug, Cibadak, dan sekitarnya.',
    open: true
  },
  {
    q: 'Apakah BangunInd melayani renovasi rumah pribadi?',
    a: 'Ya, kami melayani pembangunan baru maupun renovasi bangunan residensial, komersial, hingga fasilitas publik dengan skala pengerjaan yang beragam.',
    open: false
  },
  {
    q: 'Bagaimana sistem pembayaran di BangunInd?',
    a: 'Sistem pembayaran kami fleksibel berdasarkan progres pengerjaan (Termin) yang disepakati dalam kontrak kerja, mulai dari DP hingga pelunasan setelah proyek selesai.',
    open: false
  },
  {
    q: 'Berapa lama estimasi pengerjaan sebuah proyek?',
    a: 'Estimasi waktu sangat bergantung pada skala dan tingkat kesulitan proyek. Tim kami akan memberikan jadwal pengerjaan (Time Schedule) yang detail sebelum proyek dimulai.',
    open: false
  },
  {
    q: 'Apakah material bangunan disediakan oleh BangunInd?',
    a: 'Kami menawarkan dua opsi: pengerjaan borongan (termasuk material) atau jasa tenaga saja. Kami bekerja sama dengan supplier material terpercaya untuk menjamin kualitas standar SNI.',
    open: false
  },
  {
    q: 'Bagaimana cara mendapatkan estimasi biaya (RAB)?',
    a: 'Anda bisa menghubungi kami melalui WhatsApp atau formulir kontak untuk menjadwalkan survei lokasi. Setelah survei, kami akan mengirimkan draf RAB secara detail dan transparan.',
    open: false
  }
]

const activeIdx = ref(0)
let ctx: gsap.Context | null = null

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  ctx = gsap.context(() => {
    gsap.fromTo('.faq-hero', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
    gsap.fromTo('.faq-item', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.3, ease: 'power2.out' })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div class="pt-[72px] min-h-screen bg-surface-light">
    <!-- Hero -->
    <section class="bg-navy py-20 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10" />
      <div class="container mx-auto px-4 md:px-6 relative z-10 text-center faq-hero">
        <div class="orange-bar mx-auto" />
        <h1 class="text-4xl md:text-5xl font-bold font-jakarta text-white mb-6 text-gradient">Pertanyaan Umum (FAQ)</h1>
        <p class="text-white/60 text-lg max-w-2xl mx-auto">
          Temukan jawaban cepat untuk pertanyaan yang sering ditanyakan seputar layanan dan proses kerja BangunInd.
        </p>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="py-20">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-3xl mx-auto space-y-4">
          <div 
            v-for="(item, idx) in faqs" 
            :key="idx"
            class="faq-item bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300"
            :class="activeIdx === idx ? 'shadow-lg border-brand-orange/20' : 'hover:border-gray-200'"
          >
            <button 
              @click="activeIdx = activeIdx === idx ? -1 : idx"
              class="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left group"
            >
              <span class="font-bold text-navy md:text-lg pr-8 transition-colors group-hover:text-brand-orange">
                {{ item.q }}
              </span>
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                :class="activeIdx === idx ? 'bg-brand-orange text-white rotate-180' : 'bg-gray-100 text-navy'"
              >
                <Minus v-if="activeIdx === idx" class="w-4 h-4" />
                <Plus v-else class="w-4 h-4" />
              </div>
            </button>

            <div 
              class="transition-all duration-300 ease-in-out overflow-hidden"
              :style="{ maxHeight: activeIdx === idx ? '500px' : '0' }"
            >
              <div class="px-6 md:px-8 pb-8 text-gray-500 leading-relaxed border-t border-gray-50 pt-6">
                {{ item.a }}
              </div>
            </div>
          </div>
        </div>

        <!-- Still have questions? -->
        <div class="mt-20 max-w-3xl mx-auto text-center bg-navy rounded-3xl p-10 relative overflow-hidden">
          <div class="absolute inset-0 dot-pattern opacity-10" />
          <div class="relative z-10">
            <div class="w-16 h-16 bg-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-orange">
              <HelpCircle class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold text-white font-jakarta mb-4 text-gradient">Masih ada pertanyaan?</h3>
            <p class="text-white/60 mb-8">Hubungi tim kami langsung untuk konsultasi mendalam mengenai proyek Anda.</p>
            <div class="flex flex-wrap justify-center gap-4">
              <NuxtLink to="/kontak-kami" class="btn-primary">
                Hubungi Kami <ArrowRight class="w-5 h-5" />
              </NuxtLink>
              <a href="https://wa.me/6285523951105" class="btn-secondary !bg-white/10 hover:!bg-white/20 !border-white/10">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
