<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ArrowRight, CheckCircle2, Building2, HardHat, Users, Phone, Waves, MapPin, Layers, Package, Trash2 } from 'lucide-vue-next'
import { gsap } from 'gsap'

useHead({
  title: 'BangunInd – Konstruksi & Infrastruktur Sukabumi',
  meta: [{ name: 'description', content: 'Penyedia layanan konstruksi dan infrastruktur terpercaya di wilayah Sukabumi dan sekitarnya.' }],
})

const services = [
  { id: '01', title: 'Infrastruktur & Irigasi',   desc: 'Saluran irigasi, drainase, gorong-gorong, bendungan, dan jaringan utilitas.', icon: Waves,    href: '/layanan#01', dark: true  },
  { id: '02', title: 'Jalan & Lingkungan',         desc: 'Konstruksi jalan aspal, paving, trotoar, area parkir, dan taman kawasan.',   icon: MapPin,   href: '/layanan#02', dark: false },
  { id: '03', title: 'Konstruksi Bangunan',        desc: 'Gedung perkantoran, hunian residensial, fasilitas industri & komersial.',     icon: Building2,href: '/layanan#03', dark: true  },
  { id: '04', title: 'Pematangan Lahan',           desc: 'Cut & fill, pemadatan tanah, pondasi, retaining wall, dan struktur bawah.',  icon: Layers,   href: '/layanan#04', dark: false },
  { id: '05', title: 'Tenaga Kerja Konstruksi',    desc: 'Mandor, tukang spesialis, tenaga harian lepas, dan tim K3 lapangan.',      icon: Users,    href: '/layanan#05', dark: true  },
  { id: '06', title: 'Dukungan Alat & Material',   desc: 'Sewa alat berat, peralatan konstruksi, suplai material, dan logistik.',     icon: Package,  href: '/layanan#06', dark: false },
  { id: '07', title: 'Pembersihan & Pengangkutan', desc: 'Pembersihan lokasi, pengangkutan puing, dan pembuangan limbah secara aman.',icon: Trash2,   href: '/layanan#07', dark: true  },
]

const whys = [
  { t: 'Pengerjaan Tepat Waktu', d: 'Manajemen proyek terstruktur agar selesai sesuai jadwal.' },
  { t: 'Material Berkualitas',   d: 'Hanya menggunakan bahan bangunan berstandar SNI.' },
  { t: 'Tim Berpengalaman',      d: 'Tenaga kerja terampil yang sudah terbiasa di lapangan.' },
  { t: 'Harga Transparan',       d: 'RAB detail tanpa biaya tersembunyi sejak awal.' },
]

const cyclingWords = ['Lebih Kuat.', 'Tepat Waktu.', 'Lebih Cepat.', 'Lebih Aman.', 'Berkualitas.']
let currentWordIdx = 0

let ctx: gsap.Context | null = null

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })

  ctx = gsap.context(() => {
    // ── Hero entrance timeline ───────────────────────────────────────
    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo('.hero-eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      .fromTo('.hero-title',  { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' }, '-=0.3')
      .fromTo('.hero-line',   { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.7, ease: 'power2.out', transformOrigin: 'left' }, '-=0.6')
      .fromTo('.hero-desc',   { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero-btns',   { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero-image',  { clipPath: 'inset(0 100% 0 0)', opacity: 0 }, { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1.2, ease: 'power3.inOut' }, '-=0.8')
      .fromTo('.hero-overlay-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.4)' }, '-=0.4')

    // ── Cycling headline word ────────────────────────────────────────
    const cycleWord = () => {
      const el = document.querySelector<HTMLElement>('.hero-cycle-word')
      if (!el) return
      // Slide out
      gsap.to(el, {
        y: -40, opacity: 0, duration: 0.4, ease: 'power2.in',
        onComplete: () => {
          currentWordIdx = (currentWordIdx + 1) % cyclingWords.length
          el.textContent = cyclingWords[currentWordIdx]
          // Slide in
          gsap.fromTo(el,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
          )
        },
      })
    }
    // Start cycling after entrance (3s delay), then every 2.8s
    const cycleInterval = setInterval(cycleWord, 2800)
    setTimeout(() => {}, 3000)
    // Store for cleanup
    ;(window as any).__heroCycleInterval = cycleInterval

    // ── Looping animations ──────────────────────────────────────────
    // Floating orb 1
    gsap.to('.hero-orb-1', {
      y: -28, x: 12,
      duration: 4, ease: 'sine.inOut',
      yoyo: true, repeat: -1,
    })
    // Floating orb 2
    gsap.to('.hero-orb-2', {
      y: 22, x: -10,
      duration: 5.5, ease: 'sine.inOut',
      yoyo: true, repeat: -1, delay: 0.8,
    })
    // Floating orb 3
    gsap.to('.hero-orb-3', {
      y: -18,
      duration: 3.5, ease: 'sine.inOut',
      yoyo: true, repeat: -1, delay: 1.4,
    })
    // Pulsing ring
    gsap.to('.hero-ring', {
      scale: 1.12, opacity: 0.3,
      duration: 2.2, ease: 'sine.inOut',
      yoyo: true, repeat: -1,
    })
    // Rotating orbital dashes
    gsap.to('.hero-orbital', {
      rotation: 360,
      duration: 18, ease: 'none',
      repeat: -1,
    })
    // Counter-rotating orbital inner
    gsap.to('.hero-orbital-inner', {
      rotation: -360,
      duration: 12, ease: 'none',
      repeat: -1,
    })
    // Ticker marquee
    gsap.to('.hero-ticker-inner', {
      xPercent: -50,
      duration: 20, ease: 'none',
      repeat: -1,
    })
    // Image subtle float
    gsap.to('.hero-img-wrap', {
      y: -10,
      duration: 5, ease: 'sine.inOut',
      yoyo: true, repeat: -1, delay: 1,
    })

    // Services bento cards
    gsap.fromTo('.svc-bento', { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.08, duration: 0.75,
      immediateRender: false,
      scrollTrigger: { trigger: '.services-bento', start: 'top 88%', once: true },
    })

    // About
    gsap.fromTo('.about-image', { x: -60, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1,
      immediateRender: false,
      scrollTrigger: { trigger: '.about-section', start: 'top 88%', once: true },
    })
    gsap.fromTo('.about-content', { x: 60, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1,
      immediateRender: false,
      scrollTrigger: { trigger: '.about-section', start: 'top 88%', once: true },
    })

    // Why items
    gsap.fromTo('.why-item', { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.12, duration: 0.7,
      immediateRender: false,
      scrollTrigger: { trigger: '.why-grid', start: 'top 88%', once: true },
    })

    // CTA
    gsap.fromTo('.cta-block', { scale: 0.94, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 0.9,
      immediateRender: false,
      scrollTrigger: { trigger: '.cta-block', start: 'top 90%', once: true },
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
  clearInterval((window as any).__heroCycleInterval)
})
</script>

<template>
  <div class="overflow-x-hidden">

    <!-- ── Hero ──────────────────────────────────────────────────── -->
    <section class="relative min-h-screen flex flex-col justify-center bg-navy overflow-hidden">

      <!-- Background ambient orbs (looping float) -->
      <div class="hero-orb-1 absolute top-[15%] right-[10%] w-72 h-72 bg-brand-orange/20 rounded-full blur-[90px] pointer-events-none" />
      <div class="hero-orb-2 absolute bottom-[20%] left-[5%] w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px] pointer-events-none" />
      <div class="hero-orb-3 absolute top-[55%] right-[35%] w-48 h-48 bg-white/5 rounded-full blur-[70px] pointer-events-none" />

      <!-- Dot grid -->
      <div class="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <!-- Thin diagonal accent line top-right -->
      <div class="absolute top-0 right-0 w-px h-[55%] bg-gradient-to-b from-transparent via-white/15 to-transparent" />
      <div class="absolute top-0 right-[80px] w-px h-[35%] bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent" />

      <!-- Rotating orbital ring (decorative) -->
      <div class="hero-orbital absolute -right-40 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-dashed border-white/10 pointer-events-none" />
      <div class="hero-orbital-inner absolute -right-40 top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-dashed border-brand-orange/15 pointer-events-none" />
      <!-- Pulsing glow ring -->
      <div class="hero-ring absolute -right-40 top-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border-2 border-brand-orange/20 pointer-events-none" />

      <!-- Main content -->
      <div class="container mx-auto px-4 md:px-8 relative z-10 pt-28 pb-16">
        <div class="grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-center">

          <!-- ─ Left: Copy ─────────────────────────────────────── -->
          <div class="text-white">
            <!-- Eyebrow badge -->
            <div class="hero-eyebrow inline-flex items-center gap-3 mb-8">
              <span class="flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] uppercase text-brand-orange">
                <span class="w-6 h-px bg-brand-orange" />
                Konstruksi & Infrastruktur
              </span>
              <span class="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span class="text-xs text-white/50 tracking-wider">Sukabumi & Sekitarnya</span>
            </div>

            <!-- Headline -->
            <h1 class="hero-title font-jakarta font-black leading-[1.0] mb-6" style="font-size: clamp(3rem, 6vw, 5.5rem);">
              Bangun
              <span class="hero-cycle-word block text-gradient" style="min-height: 1.1em; display: block;">{{ cyclingWords[0] }}</span>
              <span class="block">Selesai Tepat.</span>
            </h1>

            <!-- Orange accent line -->
            <div class="hero-line w-24 h-1 bg-brand-orange rounded-full mb-8 origin-left" />

            <p class="hero-desc text-white/60 text-lg leading-relaxed max-w-md mb-10">
              Penyedia jasa konstruksi dan infrastruktur yang efisien, rapi, dan sesuai kebutuhan
              lapangan — dari infrastruktur desa hingga pekerjaan jalan.
            </p>

            <!-- CTAs -->
            <div class="hero-btns flex flex-wrap gap-4">
              <NuxtLink to="/layanan" class="btn-primary">
                Lihat Layanan Kami <ArrowRight class="w-5 h-5" />
              </NuxtLink>
              <NuxtLink to="/kontak-kami" class="btn-secondary">Konsultasi Gratis</NuxtLink>
            </div>
          </div>

          <!-- ─ Right: Visual ───────────────────────────────────────── -->
          <div class="hero-image relative hidden lg:block">
            <!-- Main image with clip-path reveal -->
            <div class="hero-img-wrap relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=900"
                alt="Proyek Konstruksi BangunInd"
                class="w-full h-full object-cover scale-105"
              />
              <!-- Dark gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

              <!-- Overlay card: bottom-left floating label -->
              <div class="hero-overlay-card absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                <p class="text-white/50 text-xs font-medium tracking-wider uppercase mb-1">Proyek Aktif</p>
                <p class="text-white font-bold font-jakarta text-lg">Konstruksi Infrastruktur</p>
                <p class="text-white/60 text-sm mt-1">Wilayah Kabupaten Sukabumi</p>
                <div class="flex items-center gap-2 mt-3">
                  <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span class="text-green-300 text-xs font-semibold">Sedang Berjalan</span>
                </div>
              </div>
            </div>

            <!-- Floating badge top-right -->
            <div class="absolute -top-5 -right-5 w-20 h-20 bg-brand-orange rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
              <div class="-rotate-12 text-center">
                <p class="text-white font-black font-jakarta text-lg leading-none">10+</p>
                <p class="text-white/70 text-[9px] leading-tight">Tahun<br>Kerja</p>
              </div>
            </div>

            <!-- Decorative corner block -->
            <div class="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-brand-orange/30 rounded-2xl" />
          </div>

        </div>
      </div>

      <!-- ─ Ticker marquee ──────────────────────────────────────────── -->
      <!-- <div class="relative z-10 overflow-hidden border-t border-white/8 py-4 mt-4">
        <div class="hero-ticker-inner flex whitespace-nowrap gap-12 w-max">
          <span
            v-for="item in [
              'Konstruksi Infrastruktur','Pekerjaan Jalan','Irigasi & Drainase',
              'Konstruksi Bangunan','Pematangan Lahan','Tenaga Kerja Konstruksi',
              'Sewa Alat Berat','Pembersihan Puing','Konstruksi Infrastruktur','Pekerjaan Jalan','Irigasi & Drainase',
              'Konstruksi Bangunan','Pematangan Lahan','Tenaga Kerja Konstruksi',
              'Sewa Alat Berat','Pembersihan Puing'
            ]"
            :key="item + Math.random()"
            class="flex items-center gap-4 text-white/25 text-sm font-semibold uppercase tracking-[0.15em]"
          >
            {{ item }}
            <span class="w-1.5 h-1.5 rounded-full bg-brand-orange/50" />
          </span>
        </div>
      </div> -->

    </section>




    <!-- ── Services ──────────────────────────────────────────── -->
    <section class="section-pad bg-surface-light">
      <div class="container mx-auto px-4 md:px-6">
        <!-- Heading -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div class="orange-bar" />
            <h2 class="section-title text-navy">Layanan Kami</h2>
            <p class="text-gray-500 mt-3 max-w-xl">Solusi konstruksi lengkap dari awal perencanaan hingga selesai di lapangan.</p>
          </div>
          <NuxtLink to="/layanan" class="inline-flex items-center gap-2 text-brand-orange font-bold hover:gap-4 transition-all duration-300 shrink-0 text-sm">
            Lihat Detail Semua Layanan <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Services grid: alternating dark/light -->
        <div class="services-bento grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <NuxtLink
            v-for="svc in services"
            :key="svc.id"
            :to="svc.href"
            class="svc-bento group relative overflow-hidden rounded-2xl p-7 min-h-[210px] flex flex-col justify-between transition-all duration-300 cursor-pointer"
            :class="svc.dark
              ? 'bg-navy hover:bg-[#162d4a]'
              : 'bg-white border border-gray-100 hover:border-brand-orange/30 hover:shadow-lg'"
          >
            <!-- Subtle number watermark -->
            <div
              class="absolute bottom-2 right-4 text-[5rem] font-black font-jakarta leading-none select-none pointer-events-none"
              :class="svc.dark ? 'text-white/5' : 'text-navy/5'"
            >
              {{ svc.id }}
            </div>

            <div class="relative z-10 flex flex-col h-full">
              <!-- Icon -->
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                :class="svc.dark
                  ? 'bg-brand-orange/20 text-brand-orange group-hover:bg-brand-orange group-hover:text-white'
                  : 'bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white'"
              >
                <component :is="svc.icon" class="w-6 h-6" />
              </div>

              <!-- Text -->
              <h3
                class="text-lg font-bold font-jakarta mb-2 leading-tight"
                :class="svc.dark ? 'text-white' : 'text-navy'"
              >
                {{ svc.title }}
              </h3>
              <p
                class="text-sm leading-relaxed flex-1"
                :class="svc.dark ? 'text-white/60' : 'text-gray-500'"
              >
                {{ svc.desc }}
              </p>

              <!-- Arrow link -->
              <div
                class="mt-5 flex items-center gap-1.5 text-xs font-semibold tracking-wide group-hover:gap-3 transition-all duration-300"
                :class="svc.dark ? 'text-brand-orange' : 'text-brand-orange'"
              >
                Selengkapnya <ArrowRight class="w-3.5 h-3.5" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── About ──────────────────────────────────────────────────── -->
    <section class="about-section section-pad bg-navy text-white relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-5" />
      <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px]" />

      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="about-image relative">
            <div class="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                alt="Lapangan Konstruksi"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl hidden md:block">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center text-white shrink-0">
                  <HardHat class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-navy font-bold text-xl font-jakarta">10+ Tahun</p>
                  <p class="text-gray-500 text-sm">Pengalaman Lapangan</p>
                </div>
              </div>
            </div>
          </div>

          <div class="about-content">
            <div class="orange-bar" />
            <h2 class="section-title mb-6">
              Membangun Dengan <span class="text-brand-orange">Ketepatan</span> & Hasil Nyata
            </h2>
            <p class="text-white/70 text-lg mb-10 leading-relaxed">
              Kami hadir untuk membantu berbagai kebutuhan pembangunan, mulai dari infrastruktur desa,
              pekerjaan jalan, hingga pembangunan dan renovasi bangunan, dengan pendekatan kerja yang
              praktis dan terukur.
            </p>

            <!-- Why choose us mini grid -->
            <div class="why-grid grid sm:grid-cols-2 gap-4 mb-10">
              <div
                v-for="w in whys"
                :key="w.t"
                class="why-item bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <div class="flex items-center gap-2 mb-2">
                  <CheckCircle2 class="w-5 h-5 text-brand-orange shrink-0" />
                  <h4 class="font-bold font-jakarta text-white text-sm">{{ w.t }}</h4>
                </div>
                <p class="text-white/50 text-xs leading-relaxed pl-7">{{ w.d }}</p>
              </div>
            </div>

            <NuxtLink to="/tentang-kami" class="btn-primary">
              Tentang BangunInd <ArrowRight class="w-5 h-5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ────────────────────────────────────────────────────── -->
    <section class="section-pad bg-surface-light">
      <div class="container mx-auto px-4 md:px-6">
        <div class="cta-block relative rounded-[3rem] overflow-hidden bg-navy p-12 md:p-20 text-center">
          <div class="absolute inset-0 dot-pattern opacity-10" />
          <div class="absolute -top-20 -left-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-[100px]" />
          <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px]" />

          <div class="relative z-10 max-w-3xl mx-auto">
            <div class="orange-bar mx-auto mb-6" />
            <h2 class="text-3xl md:text-5xl font-bold font-jakarta text-white mb-6">
              Siap Memulai Proyek Anda?
            </h2>
            <p class="text-white/65 text-lg mb-10 leading-relaxed">
              Konsultasikan kebutuhan konstruksi Anda bersama tim kami — gratis, tanpa syarat.
              Kami siap turun langsung ke lapangan di wilayah Sukabumi dan sekitarnya.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <NuxtLink to="/kontak-kami" class="btn-primary !bg-brand-orange hover:!bg-orange-600">
                Hubungi Kami Sekarang
              </NuxtLink>
              <a href="tel:+62" class="btn-secondary border-white/20">
                <Phone class="w-5 h-5" /> Telepon Langsung
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
