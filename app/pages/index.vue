<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ArrowRight, CheckCircle2, Building2, HardHat, Users, Phone, Waves, MapPin, Layers, Package, Trash2 } from 'lucide-vue-next'
import { gsap } from 'gsap'

useHead({
  title: 'Beranda',
  meta: [{ name: 'description', content: 'Penyedia layanan konstruksi dan infrastruktur terpercaya di wilayah Sukabumi dan sekitarnya. Melayani jalan, irigasi, dan gedung.' }],
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
    tl.fromTo('.hero-title',  { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: 'power4.out' })
      .fromTo('.hero-line',   { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.6, ease: 'power2.out', transformOrigin: 'center' }, '-=0.5')
      .fromTo('.hero-desc',   { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .fromTo('.hero-btns',   { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .fromTo('.hero-image',  { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .fromTo('.hero-scroll-cue', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.2')

    // ── Number counters ──────────────────────────────────────────────
    gsap.utils.toArray('.stat-num').forEach((el: any) => {
      const target = parseInt(el.getAttribute('data-target') || '0', 10)
      gsap.to({ val: 0 }, {
        val: target,
        duration: 2.5,
        delay: 0.6, // Start slightly after the stats box appears
        ease: 'power3.out',
        onUpdate: function() {
          el.innerText = Math.floor(this.targets()[0].val)
        }
      })
    })

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
    // Scroll wheel bouncing animation
    gsap.to('.scroll-wheel', {
      y: 12,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.in',
      repeat: -1,
    })

    // Ticker marquee
    gsap.to('.hero-ticker-inner', {
      xPercent: -50,
      duration: 20, ease: 'none',
      repeat: -1,
    })

    // ── Mouse Parallax & Custom Cursor ──────────────────────────────
    gsap.set('.hero-orb-1', { xPercent: -50 })
    gsap.set('.hero-orbital, .hero-ring', { xPercent: -50, yPercent: -50 })
    gsap.set('.custom-cursor', { xPercent: -50, yPercent: -50 })

    const cursorX = gsap.quickTo('.custom-cursor', 'x', { duration: 0.3, ease: 'power3' })
    const cursorY = gsap.quickTo('.custom-cursor', 'y', { duration: 0.3, ease: 'power3' })

    const handleMouseMove = (e: MouseEvent) => {
      // Custom cursor
      cursorX(e.clientX)
      cursorY(e.clientY)

      // Parallax
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2

      gsap.to('.hero-orb-1', { x: x * 50, y: y * 50, duration: 1.5, ease: 'power2.out' })
      gsap.to('.hero-orb-2', { x: x * -40, y: y * -40, duration: 1.5, ease: 'power2.out' })
      gsap.to('.hero-orb-3', { x: x * 30, y: y * -30, duration: 1.5, ease: 'power2.out' })
      gsap.to('.hero-orbital, .hero-ring', { x: x * 15, y: y * 15, duration: 1.5, ease: 'power2.out' })
    }

    // Cursor hover effects
    const interactiveEls = document.querySelectorAll('a, button, .svc-bento')
    const onHover = () => gsap.to('.custom-cursor', { scale: 1.8, backgroundColor: 'rgba(249, 115, 22, 0.1)', borderColor: 'rgba(249, 115, 22, 0.8)', duration: 0.3 })
    const onLeave = () => gsap.to('.custom-cursor', { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(249, 115, 22, 0.4)', duration: 0.3 })

    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onHover)
      el.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('mousemove', handleMouseMove)

    // Store for cleanup
    ctx?.add(() => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onHover)
        el.removeEventListener('mouseleave', onLeave)
      })
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
  <div class="overflow-x-hidden" style="cursor: none;">

    <!-- Custom Cursor -->
    <div class="custom-cursor fixed top-0 left-0 w-8 h-8 border border-brand-orange/40 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center">
      <div class="w-1.5 h-1.5 bg-brand-orange rounded-full" />
    </div>

    <!-- ── Hero ──────────────────────────────────────────────────── -->
    <section class="relative min-h-screen flex flex-col justify-center bg-navy overflow-hidden">

      <!-- BG: Glow blobs -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="hero-orb-1 absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-orange/10 rounded-full blur-[120px]" />
        <div class="hero-orb-2 absolute bottom-[-10%] left-[15%] w-[400px] h-[400px] bg-brand-orange/8 rounded-full blur-[100px]" />
        <div class="hero-orb-3 absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-blue-500/8 rounded-full blur-[90px]" />
      </div>

      <!-- BG: Subtle grid lines -->
      <div class="absolute inset-0 pointer-events-none"
        style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 80px 80px;" />

      <!-- BG: Rotating large orbital ring -->
      <div class="hero-orbital absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-dashed border-white/5 pointer-events-none" />
      <div class="hero-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-brand-orange/10 pointer-events-none" />

      <!-- Main content: centered -->
      <div class="container mx-auto px-4 md:px-8 relative z-10 pt-28 pb-12 flex flex-col items-center text-center">


        <!-- Headline -->
        <h1 class="hero-title font-jakarta font-black text-white leading-[1.05] mb-4 max-w-4xl" style="font-size: clamp(2.6rem, 5.5vw, 5rem);">
          Bangun Lebih Kuat,
          <span class="block text-white">Selesai Tepat Waktu.</span>
          <span class="hero-cycle-word block text-gradient mt-1" style="font-size: clamp(2.2rem, 4.5vw, 4rem); min-height: 1.1em;">{{ cyclingWords[0] }}</span>
        </h1>

        <!-- Accent line -->
        <div class="hero-line w-16 h-1 bg-brand-orange rounded-full mb-5 origin-center" />

        <!-- Sub text -->
        <p class="hero-desc text-white/50 text-base leading-relaxed max-w-lg mb-8">
          Penyedia jasa konstruksi & infrastruktur profesional di Sukabumi —
          irigasi, jalan, bangunan, hingga tenaga kerja terampil.
        </p>

        <!-- CTAs -->
        <div class="hero-btns flex flex-wrap items-center justify-center gap-4 mb-12">
          <NuxtLink to="/layanan" class="btn-primary">
            Lihat Layanan Kami <ArrowRight class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink to="/kontak-kami" class="btn-secondary">Konsultasi Gratis</NuxtLink>
        </div>

        <!-- Stats row -->
        <div class="hero-image w-full max-w-3xl mx-auto grid grid-cols-3 divide-x divide-white/10 border border-white/10 rounded-3xl bg-white/3 backdrop-blur-sm overflow-hidden">
          <div class="flex flex-col items-center py-6 px-4">
            <p class="text-4xl font-black font-jakarta text-white leading-none"><span class="stat-num" data-target="10">0</span><span class="text-brand-orange">+</span></p>
            <p class="text-white/40 text-xs mt-2 tracking-widest uppercase">Tahun Pengalaman</p>
          </div>
          <div class="flex flex-col items-center py-6 px-4">
            <p class="text-4xl font-black font-jakarta text-white leading-none"><span class="stat-num" data-target="250">0</span><span class="text-brand-orange">+</span></p>
            <p class="text-white/40 text-xs mt-2 tracking-widest uppercase">Proyek Selesai</p>
          </div>
          <div class="flex flex-col items-center py-6 px-4">
            <p class="text-4xl font-black font-jakarta text-white leading-none"><span class="stat-num" data-target="7">0</span></p>
            <p class="text-white/40 text-xs mt-2 tracking-widest uppercase">Jenis Layanan</p>
          </div>
        </div>

      </div>

      <!-- Animated Scroll cue -->
      <!-- <div class="hero-scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span class="text-white/40 text-[9px] font-bold tracking-[0.25em] uppercase">Scroll</span>
        <div class="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5 relative overflow-hidden">
          <div class="scroll-wheel w-1 h-2 bg-brand-orange rounded-full" />
        </div>
      </div> -->

    </section>

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
            class="svc-bento group relative overflow-hidden rounded-2xl p-7 min-h-[210px] flex flex-col justify-between transition-all duration-300 cursor-pointer hover:-translate-y-1.5"
            :class="svc.dark
              ? 'bg-navy border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]'
              : 'bg-white border border-gray-100 hover:border-brand-orange/30 hover:shadow-xl'"
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
                class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                :class="svc.dark
                  ? 'bg-brand-orange/20 text-brand-orange'
                  : 'bg-brand-orange/10 text-brand-orange'"
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
              <a href="tel:+6285523951105" class="btn-secondary border-white/20">
                <Phone class="w-5 h-5" /> Telepon Langsung
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
