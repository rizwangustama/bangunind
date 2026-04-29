<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { Heart, Zap, TrendingUp, Shield, Users, Coffee, Send, BriefcaseBusiness, Bell } from 'lucide-vue-next'
import { gsap } from 'gsap'

useHead({
  title: 'Karir – BangunInd',
  meta: [{ name: 'description', content: 'Bergabunglah dengan tim BangunInd dan bangun karir impian Anda di industri konstruksi terkemuka Indonesia.' }],
})

const values = [
  { title: 'Inovasi Tanpa Henti', desc: 'Kami mendorong setiap individu untuk berpikir kreatif dan menghadirkan solusi baru.', icon: Zap, color: 'bg-amber-50 text-amber-500' },
  { title: 'Pertumbuhan Bersama', desc: 'Investasi nyata dalam pengembangan karir dan kompetensi setiap anggota tim.', icon: TrendingUp, color: 'bg-green-50 text-green-500' },
  { title: 'Keselamatan Utama', desc: 'Budaya K3 yang kuat — setiap orang pulang ke rumah dengan selamat adalah prioritas.', icon: Shield, color: 'bg-blue-50 text-blue-500' },
  { title: 'Tim yang Solid', desc: 'Lingkungan kerja kolaboratif di mana setiap suara dihargai dan didengar.', icon: Users, color: 'bg-purple-50 text-purple-500' },
  { title: 'Work-Life Balance', desc: 'Kami percaya keseimbangan hidup yang sehat menghasilkan performa terbaik.', icon: Coffee, color: 'bg-rose-50 text-rose-500' },
  { title: 'Passion & Dedikasi', desc: 'Bergabunglah dengan orang-orang yang benar-benar mencintai dunia konstruksi.', icon: Heart, color: 'bg-orange-50 text-orange-500' },
]

const perks = [
  'BPJS Kesehatan & Ketenagakerjaan',
  'Tunjangan Transportasi',
  'Bonus Performa Tahunan',
  'Pelatihan & Sertifikasi',
  'Asuransi Jiwa',
  'Cuti Tahunan 12 Hari',
  'THR Lebaran & Natal',
  'Program Beasiswa Pendidikan',
]

let ctx: gsap.Context | null = null

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })

  ctx = gsap.context(() => {
    gsap.fromTo('.page-hero-content', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.2 })

    gsap.fromTo('.value-card', { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.1, duration: 0.8,
      immediateRender: false,
      scrollTrigger: { trigger: '.values-grid', start: 'top 88%', once: true },
    })

    gsap.fromTo('.perk-item', { x: -30, opacity: 0 }, {
      x: 0, opacity: 1, stagger: 0.07, duration: 0.6,
      immediateRender: false,
      scrollTrigger: { trigger: '.perks-list', start: 'top 88%', once: true },
    })

    gsap.fromTo('.empty-state', { scale: 0.95, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 0.9,
      immediateRender: false,
      scrollTrigger: { trigger: '.empty-state', start: 'top 88%', once: true },
    })

    gsap.fromTo('.cta-karir', { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9,
      immediateRender: false,
      scrollTrigger: { trigger: '.cta-karir', start: 'top 90%', once: true },
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
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px]" />

      <div class="container mx-auto px-4 md:px-6 relative z-10 text-center page-hero-content">
        <div class="orange-bar mx-auto" />
        <h1 class="text-4xl md:text-6xl font-bold font-jakarta text-white mb-6 leading-tight">
          Bangun Karir <span class="text-brand-orange">Bersama Kami</span>
        </h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Bergabunglah dengan tim profesional BangunInd dan jadilah bagian dari perjalanan membangun
          infrastruktur masa depan Indonesia.
        </p>
        <!-- <div class="flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-brand-orange" />
            150+ Karyawan Aktif
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-brand-orange" />
            15+ Tahun Berdiri
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-brand-orange" />
            Jangkauan Nasional
          </div>
        </div> -->
      </div>
    </section>

    <!-- ── Mengapa BangunInd ──────────────────────────────────────── -->
    <section class="section-pad bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <div class="orange-bar mx-auto" />
          <h2 class="section-title text-navy mb-4">Mengapa Bergabung dengan BangunInd?</h2>
          <p class="section-subtitle mx-auto">
            Kami bukan sekadar perusahaan konstruksi. Kami adalah komunitas profesional yang
            berkomitmen pada pertumbuhan bersama.
          </p>
        </div>

        <div class="values-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="val in values"
            :key="val.title"
            class="value-card p-8 rounded-3xl border border-gray-100 hover:border-brand-orange/20 hover:shadow-card-hover transition-all duration-300 group"
          >
            <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300', val.color]">
              <component :is="val.icon" class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold font-jakarta text-navy mb-3">{{ val.title }}</h3>
            <p class="text-gray-500 leading-relaxed text-sm">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Benefit & Fasilitas ───────────────────────────────────── -->
    <!-- <section class="section-pad bg-navy text-white relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-5" />
      <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px]" />

      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="orange-bar" />
            <h2 class="section-title mb-6">Fasilitas & Benefit</h2>
            <p class="text-white/70 text-lg leading-relaxed mb-10">
              Kami memberikan paket kompensasi yang kompetitif dan benefit lengkap untuk mendukung
              kesejahteraan seluruh anggota tim BangunInd.
            </p>
            <ul class="perks-list grid grid-cols-2 gap-3">
              <li
                v-for="perk in perks"
                :key="perk"
                class="perk-item flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                <span class="text-sm text-white/80 font-medium">{{ perk }}</span>
              </li>
            </ul>
          </div>

          <div class="relative">
            <div class="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900"
                alt="Tim BangunInd"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <p class="text-3xl font-bold font-jakarta text-brand-orange">98%</p>
              <p class="text-navy text-sm font-medium">Tingkat Retensi<br>Karyawan</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- ── Lowongan Kerja (Empty State) ──────────────────────────── -->
    <section class="section-pad bg-surface-light">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <div class="orange-bar mx-auto" />
          <h2 class="section-title text-navy mb-4">Lowongan Tersedia</h2>
          <p class="section-subtitle mx-auto">
            Posisi terbuka yang sedang kami cari untuk bergabung dalam tim BangunInd.
          </p>
        </div>

        <!-- Empty state -->
        <div class="empty-state max-w-2xl mx-auto text-center py-20 px-8 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-200">
          <div class="w-24 h-24 rounded-full bg-surface-light flex items-center justify-center mx-auto mb-8">
            <BriefcaseBusiness class="w-12 h-12 text-gray-300" />
          </div>
          <h3 class="text-2xl font-bold font-jakarta text-navy mb-4">
            Belum Ada Lowongan Saat Ini
          </h3>
          <p class="text-gray-500 leading-relaxed mb-8">
            Saat ini kami belum membuka posisi baru. Namun jangan khawatir — kirimkan CV terbaik Anda
            dan kami akan menghubungi Anda saat posisi yang sesuai tersedia.
          </p>
          <div class="flex items-center justify-center gap-2 text-sm text-gray-400 bg-surface-light rounded-xl px-5 py-3 mx-auto w-fit">
            <Bell class="w-4 h-4 text-brand-orange" />
            <span>Aktifkan notifikasi untuk info lowongan terbaru</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA Kirim Lamaran Spontan ─────────────────────────────── -->
    <section class="section-pad bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="cta-karir gradient-navy rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
          <div class="absolute inset-0 dot-pattern opacity-10" />
          <div class="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/20 rounded-full blur-[80px]" />

          <div class="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div class="orange-bar" />
              <h2 class="text-3xl md:text-4xl font-bold font-jakarta text-white mb-6 leading-tight">
                Kirim Lamaran Spontan
              </h2>
              <p class="text-white/70 text-lg leading-relaxed">
                Tidak ada posisi yang terbuka saat ini? Tidak masalah. Kirimkan CV dan portofolio Anda —
                kami selalu mencari talenta terbaik untuk bergabung di masa mendatang.
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 class="text-white font-bold font-jakarta text-xl mb-6">Kirim CV Anda</h4>
              <div class="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  class="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                />
                <input
                  type="email"
                  placeholder="Alamat Email"
                  class="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                />
                <input
                  type="text"
                  placeholder="Posisi yang Diminati"
                  class="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                />
                <button class="w-full btn-primary justify-center py-3.5 text-sm">
                  <Send class="w-4 h-4" />
                  Kirim Lamaran
                </button>
              </div>
              <p class="text-white/40 text-xs text-center mt-4">
                Kami akan merespons dalam 3–5 hari kerja
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
