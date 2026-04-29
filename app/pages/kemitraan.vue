<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { Handshake, Building, Users, Briefcase, CheckCircle2 } from 'lucide-vue-next'
import { gsap } from 'gsap'

useHead({ title: 'Kemitraan – BangunInd' })

const categories = [
  { title: 'Sub-Kontraktor', desc: 'Kami mencari mitra spesialis berkompeten untuk mendukung aspek teknis proyek besar kami.', icon: Building },
  { title: 'Supplier Material', desc: 'Terbuka bagi penyedia material berkualitas tinggi dengan harga kompetitif dan stok terjamin.', icon: Briefcase },
  { title: 'Agen Properti', desc: 'Jalin kerjasama dalam pemasaran dan pengembangan unit properti yang kami bangun bersama.', icon: Users },
]

const benefits = [
  { t: 'Ekosistem Proyek Luas', d: 'Akses ke berbagai proyek konstruksi di seluruh wilayah Indonesia.' },
  { t: 'Sistem Pembayaran Teratur', d: 'Termin pembayaran yang jelas dan tepat waktu.' },
  { t: 'Standar Kerjasama Profesional', d: 'Kontrak transparan dan proses seleksi yang adil bagi semua calon mitra.' },
  { t: 'Pertumbuhan Bersama', d: 'Kesempatan meningkatkan kapabilitas dan skala bisnis Anda bersama kami.' },
]

let ctx: gsap.Context | null = null

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })

  ctx = gsap.context(() => {
    gsap.fromTo('.page-hero-content', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.2 })

    gsap.fromTo('.partner-card', { y: 60, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.15, duration: 0.8,
      immediateRender: false,
      scrollTrigger: { trigger: '.partner-grid', start: 'top 88%', once: true },
    })

    gsap.fromTo('.benefit-text', { x: -60, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.9,
      immediateRender: false,
      scrollTrigger: { trigger: '.benefit-section', start: 'top 88%', once: true },
    })
    gsap.fromTo('.benefit-image', { x: 60, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.9,
      immediateRender: false,
      scrollTrigger: { trigger: '.benefit-section', start: 'top 88%', once: true },
    })

    gsap.fromTo('.cta-partnership', { scale: 0.94, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 0.9,
      immediateRender: false,
      scrollTrigger: { trigger: '.cta-partnership', start: 'top 90%', once: true },
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div class="pt-[72px]">
    <section class="bg-navy py-24 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10" />
      <div class="container mx-auto px-4 md:px-6 relative z-10 text-center page-hero-content">
        <div class="orange-bar mx-auto" />
        <h1 class="text-4xl md:text-6xl font-bold font-jakarta text-white mb-6">Program Kemitraan</h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">
          Mari berkolaborasi membangun masa depan Indonesia dengan peluang kerjasama yang saling menguntungkan.
        </p>
      </div>
    </section>

    <section class="section-pad bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="partner-grid grid lg:grid-cols-3 gap-8">
          <div v-for="cat in categories" :key="cat.title" class="partner-card card-base p-10 text-center group">
            <div class="w-20 h-20 rounded-full bg-surface-light flex items-center justify-center text-brand-orange mx-auto mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
              <component :is="cat.icon" class="w-10 h-10" />
            </div>
            <h3 class="text-2xl font-bold font-jakarta text-navy mb-4">{{ cat.title }}</h3>
            <p class="text-gray-500 leading-relaxed mb-8">{{ cat.desc }}</p>
            <button class="btn-outline-orange w-full py-3 text-sm">Daftar Jadi Mitra</button>
          </div>
        </div>
      </div>
    </section>

    <section class="benefit-section section-pad bg-surface-light relative overflow-hidden">
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="benefit-text">
            <div class="orange-bar" />
            <h2 class="section-title text-navy mb-8">Mengapa Bermitra Dengan BangunInd?</h2>
            <div class="space-y-6">
              <div v-for="item in benefits" :key="item.t" class="flex gap-4">
                <div class="mt-1"><CheckCircle2 class="w-6 h-6 text-brand-orange" /></div>
                <div>
                  <h4 class="text-xl font-bold font-jakarta text-navy mb-1">{{ item.t }}</h4>
                  <p class="text-gray-500 leading-relaxed">{{ item.d }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="benefit-image relative">
            <div class="rounded-3xl overflow-hidden shadow-2xl rotate-3">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000" alt="Partnership" class="w-full h-auto" />
            </div>
            <div class="absolute -bottom-6 -left-6 bg-brand-orange p-8 rounded-3xl text-white shadow-xl -rotate-3">
              <Handshake class="w-12 h-12 mb-4" />
              <p class="text-2xl font-bold font-jakarta">200+</p>
              <p class="text-white/80 text-sm">Mitra Aktif</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="cta-partnership gradient-navy p-12 md:p-16 rounded-[3rem] text-white text-center relative overflow-hidden">
          <div class="absolute inset-0 dot-pattern opacity-10" />
          <h2 class="text-3xl md:text-4xl font-bold font-jakarta mb-6 relative z-10">Mulai Kolaborasi Sekarang</h2>
          <p class="text-white/70 text-lg mb-10 relative z-10">
            Isi formulir pendaftaran mitra kami dan tim procurement kami akan segera menghubungi Anda.
          </p>
          <div class="flex flex-wrap justify-center gap-4 relative z-10">
            <button class="btn-primary">Isi Formulir Pendaftaran</button>
            <button class="btn-secondary">Panduan Kemitraan (PDF)</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
