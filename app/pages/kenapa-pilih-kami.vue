<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ShieldCheck, Zap, HeartHandshake, Leaf, Clock, Banknote } from 'lucide-vue-next'
import { gsap } from 'gsap'

useHead({ title: 'Kenapa Pilih Kami – BangunInd' })

const reasons = [
  { title: 'Kualitas Premium', desc: 'Kami menggunakan material standar terbaik dan pengawasan ketat untuk hasil sempurna.', icon: ShieldCheck, color: 'bg-blue-500/10 text-blue-600' },
  { title: 'Pengerjaan Cepat', desc: 'Manajemen proyek efisien – selesai sesuai atau lebih cepat dari jadwal.', icon: Clock, color: 'bg-orange-500/10 text-orange-600' },
  { title: 'Biaya Kompetitif', desc: 'Transparansi anggaran tanpa biaya tersembunyi, nilai terbaik untuk investasi Anda.', icon: Banknote, color: 'bg-green-500/10 text-green-600' },
  { title: 'Solusi Inovatif', desc: 'Selalu mengadopsi teknologi dan metode terbaru untuk tantangan konstruksi yang kompleks.', icon: Zap, color: 'bg-purple-500/10 text-purple-600' },
  { title: 'Ramah Lingkungan', desc: 'Berkomitmen pada praktik konstruksi berkelanjutan yang meminimalkan dampak negatif.', icon: Leaf, color: 'bg-emerald-500/10 text-emerald-600' },
  { title: 'Layanan Purna Jual', desc: 'Dukungan pemeliharaan dan garansi struktur untuk ketenangan pikiran jangka panjang.', icon: HeartHandshake, color: 'bg-rose-500/10 text-rose-600' },
]

let ctx: gsap.Context | null = null

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })

  ctx = gsap.context(() => {
    gsap.fromTo('.page-hero-content', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.2 })

    gsap.fromTo('.commit-text', { x: -60, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.9,
      immediateRender: false,
      scrollTrigger: { trigger: '.commit-section', start: 'top 88%', once: true },
    })
    gsap.fromTo('.commit-image', { x: 60, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.9,
      immediateRender: false,
      scrollTrigger: { trigger: '.commit-section', start: 'top 88%', once: true },
    })

    gsap.fromTo('.reason-card', { y: 60, opacity: 0, scale: 0.96 }, {
      y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.8,
      immediateRender: false,
      scrollTrigger: { trigger: '.reasons-grid', start: 'top 88%', once: true },
    })

    gsap.fromTo('.testimonial-card', { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.2, duration: 0.8,
      immediateRender: false,
      scrollTrigger: { trigger: '.testimonials-grid', start: 'top 88%', once: true },
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
        <h1 class="text-4xl md:text-6xl font-bold font-jakarta text-white mb-6">Kenapa Pilih Kami</h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">
          Lebih dari sekadar membangun, kami memberikan nilai tambah melalui dedikasi, keahlian, dan komitmen pada setiap detail.
        </p>
      </div>
    </section>

    <section class="commit-section section-pad bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div class="commit-text">
            <div class="orange-bar" />
            <h2 class="section-title text-navy mb-6">Komitmen Kami Terhadap Keunggulan</h2>
            <p class="text-gray-600 text-lg mb-8 leading-relaxed">
              Di BangunInd, kami percaya bahwa setiap struktur yang kami bangun adalah representasi dari reputasi kami.
            </p>
            <div class="space-y-6">
              <div v-for="item in [
                { t: 'Standar K3 Internasional', d: 'Keamanan tenaga kerja dan lingkungan proyek adalah prioritas utama kami.' },
                { t: 'Tenaga Ahli Bersertifikat', d: 'Setiap anggota tim kami memiliki sertifikasi resmi di bidangnya masing-masing.' }
              ]" :key="item.t" class="flex gap-4">
                <div class="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <ShieldCheck class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="text-lg font-bold font-jakarta text-navy">{{ item.t }}</h4>
                  <p class="text-gray-500 text-sm">{{ item.d }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="commit-image relative">
            <div class="rounded-3xl overflow-hidden aspect-video shadow-2xl">
              <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=1000" alt="Quality" class="w-full h-full object-cover" />
            </div>
            <div class="absolute -top-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div class="flex items-center gap-4">
                <div class="text-4xl font-bold font-jakarta text-brand-orange">99%</div>
                <div class="text-xs text-gray-500 font-medium">Proyek Selesai<br>Tepat Waktu</div>
              </div>
            </div>
          </div>
        </div>

        <div class="reasons-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="reason in reasons" :key="reason.title" class="reason-card p-10 rounded-3xl border border-gray-100 hover:border-brand-orange/30 hover:shadow-card-hover transition-all duration-300 bg-white group">
            <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300', reason.color]">
              <component :is="reason.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold font-jakarta text-navy mb-4">{{ reason.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ reason.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad bg-surface-light">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <div class="orange-bar mx-auto" />
          <h2 class="section-title text-navy mb-4">Apa Kata Klien Kami</h2>
        </div>
        <div class="testimonials-grid grid md:grid-cols-2 gap-8">
          <div v-for="t in [
            { name: 'Bapak Hermawan', comp: 'CEO Property Dev', text: 'BangunInd memberikan hasil luar biasa untuk proyek apartemen kami. Profesionalisme dan kecepatan kerja mereka sangat mengesankan.' },
            { name: 'Ibu Maya', comp: 'Home Owner', text: 'Membangun rumah impian jadi sangat mudah dengan tim BangunInd. Desain arsitekturnya modern dan eksekusi konstruksinya rapi sekali.' }
          ]" :key="t.name" class="testimonial-card bg-white p-10 rounded-[2rem] shadow-card relative">
            <div class="absolute -top-4 -left-4 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white text-3xl font-serif">"</div>
            <p class="text-gray-600 italic mb-8 text-lg">"{{ t.text }}"</p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-gray-200" />
              <div>
                <h5 class="font-bold text-navy">{{ t.name }}</h5>
                <p class="text-sm text-gray-500">{{ t.comp }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
