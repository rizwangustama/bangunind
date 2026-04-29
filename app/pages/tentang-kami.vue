<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { Eye, Target } from 'lucide-vue-next'
import { gsap } from 'gsap'

useHead({ 
  title: 'Tentang Kami',
  meta: [{ name: 'description', content: 'Kenali BangunInd (PT Satset Karya Nusantara), penyedia layanan konstruksi dengan pengalaman lebih dari 10 tahun di Sukabumi.' }]
})

const milestones = [
  { year: '2009', title: 'Awal Mula', desc: 'BangunInd didirikan di Jakarta dengan fokus pada renovasi residential.' },
  { year: '2013', title: 'Ekspansi Layanan', desc: 'Mulai merambah ke proyek konstruksi sipil dan gedung bertingkat rendah.' },
  { year: '2017', title: 'Sertifikasi Nasional', desc: 'Memperoleh sertifikasi ISO untuk Manajemen Mutu dan Keselamatan Kerja.' },
  { year: '2021', title: 'Era Digital', desc: 'Mengintegrasikan teknologi BIM (Building Information Modeling) dalam setiap proyek.' },
  { year: '2024', title: 'Pemimpin Pasar', desc: 'Menjadi salah satu perusahaan konstruksi terpercaya dengan jangkauan nasional.' },
]

const team = [
  { name: 'Ir. Ahmad Sudirman', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600' },
  { name: 'Siska Pratami, M.Ars', role: 'Principal Architect', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600' },
  { name: 'Budi Santoso, ST', role: 'Head of Engineering', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600' },
]

let ctx: gsap.Context | null = null

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })

  ctx = gsap.context(() => {
    gsap.fromTo('.page-hero-content', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.2 })

    gsap.fromTo('.vm-card', { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.2, duration: 0.9,
      immediateRender: false,
      scrollTrigger: { trigger: '.vm-section', start: 'top 88%', once: true },
    })

    gsap.fromTo('.milestone-item', { x: -50, opacity: 0 }, {
      x: 0, opacity: 1, stagger: 0.15, duration: 0.7,
      immediateRender: false,
      scrollTrigger: { trigger: '.milestone-list', start: 'top 88%', once: true },
    })

    gsap.fromTo('.team-card', { y: 50, opacity: 0, scale: 0.95 }, {
      y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 0.8,
      immediateRender: false,
      scrollTrigger: { trigger: '.team-grid', start: 'top 88%', once: true },
    })

    gsap.fromTo('.area-badge', { y: 20, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.05, duration: 0.5,
      immediateRender: false,
      scrollTrigger: { trigger: '.area-grid', start: 'top 90%', once: true },
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
        <h1 class="text-4xl md:text-6xl font-bold font-jakarta text-white mb-6">Tentang Kami</h1>
        <div class="text-white/70 text-lg max-w-4xl mx-auto space-y-6">
          <p>
            Bangunind adalah penyedia layanan konstruksi dan infrastruktur yang berfokus pada pembangunan yang efisien, rapi, dan sesuai kebutuhan lapangan.
          </p>
          <p>
            Kami hadir untuk membantu berbagai kebutuhan pembangunan, mulai dari infrastruktur desa, pekerjaan jalan, hingga pembangunan dan renovasi bangunan, dengan pendekatan kerja yang praktis dan terukur.
          </p>
          <p>
            Didukung oleh pengalaman langsung di lapangan, kami memahami bahwa setiap proyek membutuhkan ketepatan, ketahanan, dan hasil yang dapat diandalkan.
          </p>
        </div>
      </div>
    </section>

    <section class="vm-section section-pad bg-white">
      <div class="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12">
        <div class="vm-card card-base p-10 bg-surface-light border-none">
          <div class="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8"><Eye class="w-8 h-8" /></div>
          <h2 class="text-3xl font-bold font-jakarta text-navy mb-6">Visi Kami</h2>
          <p class="text-gray-600 text-lg leading-relaxed">Menjadi perusahaan konstruksi dan pengembangan properti terkemuka di Indonesia yang dikenal karena inovasi, kualitas tanpa kompromi, dan kontribusi positif terhadap pembangunan bangsa.</p>
        </div>
        <div class="vm-card card-base p-10 bg-navy text-white border-none shadow-navy-glow">
          <div class="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-brand-orange mb-8"><Target class="w-8 h-8" /></div>
          <h2 class="text-3xl font-bold font-jakarta mb-6">Misi Kami</h2>
          <ul class="space-y-4">
            <li v-for="m in ['Memberikan layanan konstruksi berkualitas tinggi yang melebihi ekspektasi klien.', 'Mengimplementasikan teknologi konstruksi terbaru dan ramah lingkungan.', 'Menciptakan lingkungan kerja yang aman dan memberdayakan.', 'Membangun hubungan jangka panjang berdasarkan kepercayaan dan profesionalisme.']" :key="m" class="flex items-start gap-3">
              <div class="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0" />
              <span class="text-white/80 leading-relaxed">{{ m }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section-pad bg-surface-light">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <div class="orange-bar mx-auto" />
          <h2 class="section-title text-navy mb-4">Perjalanan Kami</h2>
          <p class="section-subtitle mx-auto">Lebih dari satu dekade berkontribusi dalam membangun infrastruktur Indonesia.</p>
        </div>
        <div class="max-w-4xl mx-auto space-y-8 milestone-list">
          <div v-for="(m, i) in milestones" :key="m.year" class="milestone-item flex gap-8 group">
            <div class="flex flex-col items-center">
              <div class="text-2xl font-bold font-jakarta text-brand-orange mb-2">{{ m.year }}</div>
              <div class="w-4 h-4 rounded-full bg-brand-orange group-hover:scale-150 transition-transform" />
              <div v-if="i !== milestones.length - 1" class="w-0.5 h-full bg-gray-200 mt-2" />
            </div>
            <div class="pb-12">
              <h3 class="text-xl font-bold font-jakarta text-navy mb-2">{{ m.title }}</h3>
              <p class="text-gray-500 leading-relaxed">{{ m.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="section-pad bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <div class="orange-bar mx-auto" />
          <h2 class="section-title text-navy mb-4">Tim Kepemimpinan</h2>
          <p class="section-subtitle mx-auto">Dibalik setiap proyek sukses ada tim ahli yang berdedikasi.</p>
        </div>
        <div class="team-grid grid md:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.name" class="team-card text-center">
            <div class="relative mb-6 group overflow-hidden rounded-3xl aspect-[4/5]">
              <img :src="member.img" :alt="member.name" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-8">
                <div class="flex gap-4">
                  <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-orange transition-colors">LI</div>
                  <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-orange transition-colors">TW</div>
                </div>
              </div>
            </div>
            <h4 class="text-xl font-bold font-jakarta text-navy mb-1">{{ member.name }}</h4>
            <p class="text-brand-orange font-medium text-sm">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section> -->
    <!-- ── Area Kerja ───────────────────────────────────────────── -->
    <section class="section-pad bg-white relative overflow-hidden">
      <div class="absolute -top-20 -right-20 w-72 h-72 bg-brand-orange/5 rounded-full blur-[80px]" />
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <!-- Left: heading + desc -->
          <div>
            <div class="orange-bar" />
            <h2 class="section-title text-navy mb-6">Area Kerja Kami</h2>
            <p class="text-gray-500 text-lg leading-relaxed mb-6">
              Kami beroperasi di wilayah <span class="font-semibold text-navy">Kabupaten & Kota Sukabumi</span>
              dan sekitarnya, siap melayani kebutuhan konstruksi Anda di lapangan secara langsung.
            </p>
            <p class="text-gray-500 leading-relaxed">
              Dengan tim yang berpengalaman di tiap kecamatan, kami memastikan respons cepat dan
              pemahaman mendalam terhadap kondisi lapangan di setiap wilayah yang kami layani.
            </p>
            <!-- Coverage stat -->
            <div class="mt-10 flex gap-8">
              <div>
                <p class="text-4xl font-bold font-jakarta text-brand-orange">20+</p>
                <p class="text-gray-500 text-sm mt-1">Kecamatan / Wilayah</p>
              </div>
              <div class="w-px bg-gray-200" />
              <div>
                <p class="text-4xl font-bold font-jakarta text-brand-orange">1</p>
                <p class="text-gray-500 text-sm mt-1">Wilayah Utama<br>Kabupaten Sukabumi</p>
              </div>
            </div>
          </div>

          <!-- Right: area badges -->
          <div>
            <div class="area-grid flex flex-wrap gap-3">
              <span
                v-for="area in [
                  'Sukabumi','Ciracap','Cicurug','Jampang Kulon','Telalbuled',
                  'Simpenan','Pelabuhan Ratu','Jampang Tengah','Ciemas','Waluran',
                  'Cibadak','Bojonggenteng','Cibitung','Cidadap','Cikakap',
                  'Cisaat','Nyalindung','Surade','dan Sekitarnya'
                ]"
                :key="area"
                class="area-badge inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-surface-light text-navy text-sm font-semibold hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300 cursor-default group"
              >
                <svg class="w-3 h-3 text-brand-orange group-hover:text-white transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {{ area }}
              </span>
            </div>

            <!-- Note card -->
            <div class="mt-8 p-6 bg-navy/5 rounded-2xl border border-navy/10">
              <p class="text-navy font-semibold text-sm mb-1">📍 Wilayah lain?</p>
              <p class="text-gray-500 text-sm leading-relaxed">
                Tidak menemukan daerah Anda di atas? Hubungi kami — kami terbuka untuk proyek
                di luar wilayah utama dengan penyesuaian koordinasi lapangan.
              </p>
              <NuxtLink to="/kontak-kami" class="inline-flex items-center gap-1 text-brand-orange font-bold text-sm mt-3 hover:underline">
                Hubungi Kami →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
