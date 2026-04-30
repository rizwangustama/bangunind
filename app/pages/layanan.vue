<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { Waves, MapPin, Building2, Layers, Users, Package, Trash2, ArrowRight } from 'lucide-vue-next'
import { gsap } from 'gsap'

useHead({ 
  title: 'Layanan Konstruksi & Infrastruktur',
  meta: [{ name: 'description', content: 'Solusi konstruksi lengkap: jalan, irigasi, gedung, pematangan lahan, tenaga kerja, dan penyewaan alat berat di Sukabumi.' }]
})

const services = [
  {
    id: '01',
    title: 'Konstruksi Infrastruktur & Irigasi',
    desc: 'Pembangunan infrastruktur primer seperti saluran irigasi, bendungan kecil, drainase, dan jaringan utilitas yang mendukung keberlangsungan kawasan secara jangka panjang.',
    icon: Waves,
    tags: ['Saluran Irigasi', 'Drainase & Gorong-gorong', 'Bendungan & Tanggul', 'Jaringan Utilitas'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=900',
    accent: '#1E3A5F',
  },
  {
    id: '02',
    title: 'Pekerjaan Jalan & Lingkungan',
    desc: 'Konstruksi dan perbaikan jalan kawasan, trotoar, area parkir, dan infrastruktur lingkungan untuk perumahan maupun kawasan komersial yang fungsional dan estetis.',
    icon: MapPin,
    tags: ['Jalan Aspal & Paving', 'Trotoar & Median', 'Area Parkir', 'Taman & Landscape'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=900',
    accent: '#F97316',
  },
  {
    id: '03',
    title: 'Konstruksi Bangunan',
    desc: 'Pembangunan gedung komersial, hunian residensial, dan fasilitas industri dengan standar mutu tinggi, pengawasan ketat, serta ketepatan waktu yang terjamin.',
    icon: Building2,
    tags: ['Gedung Perkantoran', 'Hunian Residensial', 'Fasilitas Industri', 'Bangunan Komersial'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=900',
    accent: '#1E3A5F',
  },
  {
    id: '04',
    title: 'Pematangan Lahan & Struktur',
    desc: 'Persiapan lahan menyeluruh mulai dari cut & fill, pemadatan tanah, pekerjaan pondasi, hingga struktur bawah yang kuat sebagai fondasi bangunan masa depan.',
    icon: Layers,
    tags: ['Cut & Fill Lahan', 'Pemadatan Tanah', 'Pondasi & Struktur', 'Retaining Wall'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=900',
    accent: '#F97316',
  },
  {
    id: '05',
    title: 'Tenaga Kerja Konstruksi',
    desc: 'Penyediaan tenaga kerja konstruksi terampil dan bersertifikat — dari mandor, tukang spesialis, hingga tim K3 lapangan yang siap mendukung kelancaran proyek Anda.',
    icon: Users,
    tags: ['Mandor & Supervisor', 'Tukang Spesialis', 'Tenaga Harian Lepas', 'Tim K3 Lapangan'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=900',
    accent: '#1E3A5F',
  },
  {
    id: '06',
    title: 'Dukungan Alat & Material',
    desc: 'Penyediaan alat berat, peralatan konstruksi, dan material bangunan berkualitas untuk mendukung kelancaran, efisiensi, dan ketepatan waktu setiap proyek.',
    icon: Package,
    tags: ['Sewa Alat Berat', 'Peralatan Konstruksi', 'Suplai Material', 'Logistik Proyek'],
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=900',
    accent: '#F97316',
  },
  {
    id: '07',
    title: 'Pembersihan & Pengangkutan Puing',
    desc: 'Layanan pembersihan lokasi proyek secara profesional — pengangkutan dan pembuangan puing bangunan dengan aman, cepat, dan sesuai regulasi lingkungan hidup.',
    icon: Trash2,
    tags: ['Pembersihan Lokasi', 'Pengangkutan Puing', 'Pembuangan Limbah', 'Finishing Site'],
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=900',
    accent: '#1E3A5F',
  },
]

const steps = [
  { title: 'Konsultasi', desc: 'Diskusi awal mengenai visi, kebutuhan, dan anggaran proyek.' },
  { title: 'Perencanaan', desc: 'Pembuatan desain, gambar teknis, dan estimasi biaya detail.' },
  { title: 'Pembangunan', desc: 'Eksekusi konstruksi dengan pengawasan ketat dan standar K3.' },
  { title: 'Serah Terima', desc: 'Final inspeksi dan penyerahan hasil proyek kepada klien.' },
]

let ctx: gsap.Context | null = null

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })

  ctx = gsap.context(() => {
    // Hero
    gsap.fromTo('.page-hero-content', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.2 })

    // Animate each service section
    document.querySelectorAll<HTMLElement>('.service-section').forEach((section) => {
      const isEven = section.dataset.even === 'true'

      gsap.fromTo(
        section.querySelector('.svc-number'),
        { x: isEven ? 60 : -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: section, start: 'top 85%', once: true },
        }
      )
      gsap.fromTo(
        section.querySelector('.svc-content'),
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: section, start: 'top 85%', once: true },
        }
      )
      gsap.fromTo(
        section.querySelector('.svc-image'),
        { scale: 1.05, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.1, ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: { trigger: section, start: 'top 85%', once: true },
        }
      )
    })

    // Process steps
    gsap.fromTo('.process-step', { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.15, duration: 0.7,
      immediateRender: false,
      scrollTrigger: { trigger: '.process-section', start: 'top 88%', once: true },
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div class="pt-[72px]">
    <!-- ── Hero ──────────────────────────────────────────────────── -->
    <section class="bg-navy py-28 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10" />
      <div class="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-[100px]" />
      <div class="container mx-auto px-4 md:px-6 relative z-10 text-center page-hero-content">
        <div class="orange-bar mx-auto" />
        <h1 class="text-4xl md:text-6xl font-bold font-jakarta text-white mb-6">Layanan Kami</h1>
        <p class="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
          Kami menghadirkan layanan konstruksi menyeluruh — dari infrastruktur irigasi, jalan, dan bangunan,
          hingga pematangan lahan, tenaga kerja, dukungan alat &amp; material, serta pembersihan proyek.
        </p>
        <!-- Service count pills -->
        <div class="flex flex-wrap justify-center gap-3 mt-10">
          <span
            v-for="s in services"
            :key="s.id"
            class="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium"
          >
            {{ s.id }}. {{ s.title }}
          </span>
        </div>
      </div>
    </section>

    <!-- ── Service Sections ──────────────────────────────────────── -->
    <div>
      <section
        v-for="(service, index) in services"
        :key="service.id"
        :id="service.id"
        class="service-section relative overflow-hidden"
        :data-even="index % 2 === 1"
        :class="index % 2 === 0 ? 'bg-white' : 'bg-surface-light'"
      >
        <!-- Giant background number -->
        <div
          class="svc-number absolute select-none pointer-events-none font-jakarta font-bold leading-none"
          :class="index % 2 === 0 ? 'right-0 top-0 text-navy/5' : 'left-0 top-0 text-navy/5'"
          style="font-size: clamp(8rem, 20vw, 16rem); line-height: 0.9;"
        >
          {{ service.id }}
        </div>

        <div class="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <div
            class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            :class="index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''"
          >
            <!-- Content -->
            <div class="svc-content">
              <!-- Number + icon row -->
              <div class="flex items-center gap-4 mb-6">
                <span class="text-5xl font-bold font-jakarta text-brand-orange/30 leading-none">
                  {{ service.id }}
                </span>
                <div class="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <component :is="service.icon" class="w-7 h-7" />
                </div>
              </div>

              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta text-navy mb-6 leading-tight">
                {{ service.title }}
              </h2>

              <p class="text-gray-500 text-lg leading-relaxed mb-10">
                {{ service.desc }}
              </p>

              <!-- Feature tags -->
              <div class="flex flex-wrap gap-3 mb-10">
                <span
                  v-for="tag in service.tags"
                  :key="tag"
                  class="inline-flex items-center gap-1.5 px-4 py-2 bg-navy/5 text-navy rounded-full text-sm font-semibold border border-navy/10 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300 cursor-default"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  {{ tag }}
                </span>
              </div>

              <NuxtLink
                to="/kontak-kami"
                class="inline-flex items-center gap-2 text-brand-orange font-bold text-lg group hover:gap-4 transition-all duration-300"
              >
                Konsultasikan Kebutuhan Anda
                <ArrowRight class="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </NuxtLink>
            </div>

            <!-- Image -->
            <div class="svc-image relative">
              <div
                class="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] bg-[#060f1c] group"
                :class="index % 2 === 0 ? 'rotate-1' : '-rotate-1'"
              >
                <!-- Photo with Lazy Loading -->
                <img
                  :src="service.image"
                  :alt="service.title"
                  loading="lazy"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <!-- Dark Overlay -->
                <div class="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-700" />
                
                <!-- Animated Icon Overlay -->
                <div class="absolute bottom-6 right-6 w-16 h-16 bg-brand-orange/90 rounded-2xl flex items-center justify-center text-white backdrop-blur-md shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <component :is="service.icon" class="w-8 h-8" />
                </div>
              </div>

              <!-- Floating accent badge -->
              <div
                class="absolute -bottom-6 flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-xl"
                :class="index % 2 === 0 ? '-left-6' : '-right-6'"
              >
                <div class="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <component :is="service.icon" class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-xs text-gray-400 font-medium">Layanan</p>
                  <p class="text-navy font-bold text-sm leading-tight">{{ service.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section divider line -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gray-200" />
      </section>
    </div>

    <!-- ── Process Section ──────────────────────────────────────── -->
    <section class="process-section py-24 md:py-32 bg-navy text-white relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10" />
      <div class="absolute -top-20 -right-20 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full" />

      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="text-center mb-16">
          <div class="orange-bar mx-auto" />
          <h2 class="section-title mb-4">Alur Kerja Kami</h2>
          <p class="text-white/60 text-lg max-w-2xl mx-auto">
            Empat tahap terstruktur yang memastikan setiap proyek berjalan sempurna dari konsultasi hingga serah terima.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8 relative">
          <!-- Connector -->
          <div class="hidden md:block absolute top-10 left-[12.5%] w-3/4 h-px bg-white/10" />

          <div v-for="(step, i) in steps" :key="step.title" class="process-step relative z-10 text-center">
            <div class="w-20 h-20 rounded-full border-2 border-brand-orange/40 flex items-center justify-center mx-auto mb-6 bg-white/5 relative">
              <span class="text-2xl font-bold font-jakarta text-brand-orange">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <h4 class="text-xl font-bold font-jakarta mb-3">{{ step.title }}</h4>
            <p class="text-white/60 text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-16">
          <NuxtLink to="/kontak-kami" class="btn-primary">
            Mulai Konsultasi Gratis
            <ArrowRight class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
