<template>
  <footer class="relative bg-[#060f1c] overflow-hidden">

    <!-- ── Ambient glow decorations ───────────────────────────── -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
      <div class="absolute top-0 left-[15%] w-[600px] h-[600px] bg-brand-orange/6 rounded-full blur-[160px]" />
      <div class="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px]" />
      <!-- Giant watermark text -->
      <div class="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden select-none">
        <span class="text-[14vw] font-black font-jakarta text-white/[0.025] leading-none pb-2 whitespace-nowrap">BANGUNIND</span>
      </div>
    </div>

    <!-- ── Headline statement ─────────────────────────────────── -->
    <div class="relative z-10">
      <div class="container mx-auto px-4 md:px-10 pt-20 pb-14">
        <div class="flex flex-col xl:flex-row xl:items-end justify-between gap-12">
          <!-- Big display text -->
          <div class="max-w-2xl">
            <p class="inline-flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-6">
              <span class="w-8 h-px bg-brand-orange" /> Siap Berkolaborasi
            </p>
            <h2 class="font-black font-jakarta text-white leading-[1.0]" style="font-size:clamp(2.5rem, 5vw, 4.5rem)">
              Wujudkan Proyek<br />
              <span class="text-gradient">Impian Anda</span><br />
              Bersama Kami.
            </h2>
          </div>

          <!-- CTA cluster -->
          <div class="flex flex-col sm:flex-row xl:flex-col gap-4 xl:items-end shrink-0">
            <NuxtLink to="/kontak-kami" class="btn-primary !px-8 !py-4 !text-base">
              Mulai Konsultasi
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </NuxtLink>
            <a
              href="https://wa.me/62"
              class="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold border border-white/10 text-white/70 hover:text-white hover:border-green-400/50 hover:bg-green-400/5 transition-all duration-300"
            >
              <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/></svg>
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>

    <!-- ── Links + Brand ──────────────────────────────────────── -->
    <div class="relative z-10">
      <div class="container mx-auto px-4 md:px-10 py-16">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10">

          <!-- Brand -->
          <div class="col-span-2 sm:col-span-4 lg:col-span-2 mb-4 lg:mb-0">
            <NuxtLink to="/" class="inline-flex items-center gap-3 mb-6 group">
              <div class="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <span class="text-white font-black text-xl">B</span>
              </div>
              <span class="text-2xl font-black font-jakarta text-white tracking-tight">
                Bangun<span class="text-brand-orange">Ind</span>
              </span>
            </NuxtLink>
            <p class="text-white/35 text-sm leading-relaxed max-w-[280px] mb-8">
              <strong class="text-white/70 block mb-1">PT Satset Karya Nusantara</strong>
              Konstruksi & infrastruktur terpercaya sejak lebih dari 10 tahun di wilayah Sukabumi dan sekitarnya.
            </p>
            <!-- Contact quick access -->
            <div class="flex flex-col gap-3">
              <a href="tel:+62266123456" class="group flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                  <Phone class="w-3.5 h-3.5 text-brand-orange" />
                </div>
                <span class="text-white/40 text-sm group-hover:text-white transition-colors">(0266) 1234 567</span>
              </a>
              <a href="mailto:info@bangunind.id" class="group flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                  <Mail class="w-3.5 h-3.5 text-brand-orange" />
                </div>
                <span class="text-white/40 text-sm group-hover:text-white transition-colors">info@bangunind.id</span>
              </a>
            </div>
          </div>

          <!-- Perusahaan -->
          <div>
            <p class="text-white/30 text-[10px] font-bold uppercase tracking-[0.22em] mb-6">Perusahaan</p>
            <ul class="space-y-3.5">
              <li v-for="l in company" :key="l.href">
                <NuxtLink :to="l.href" class="group flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors duration-200">
                  <span class="w-0 group-hover:w-2.5 h-px bg-brand-orange transition-all duration-300 shrink-0" />
                  {{ l.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Layanan -->
          <div>
            <p class="text-white/30 text-[10px] font-bold uppercase tracking-[0.22em] mb-6">Layanan</p>
            <ul class="space-y-3.5">
              <li v-for="l in services" :key="l.href">
                <NuxtLink :to="l.href" class="group flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors duration-200">
                  <span class="w-0 group-hover:w-2.5 h-px bg-brand-orange transition-all duration-300 shrink-0" />
                  {{ l.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Dukungan -->
          <div>
            <p class="text-white/30 text-[10px] font-bold uppercase tracking-[0.22em] mb-6">Dukungan</p>
            <ul class="space-y-3.5">
              <li v-for="l in support" :key="l.href">
                <NuxtLink :to="l.href" class="group flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors duration-200">
                  <span class="w-0 group-hover:w-2.5 h-px bg-brand-orange transition-all duration-300 shrink-0" />
                  {{ l.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>



    <!-- ── Bottom Bar ─────────────────────────────────────────── -->
    <div class="relative z-10">
      <div class="container mx-auto px-4 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-5 h-5 bg-brand-orange rounded-md flex items-center justify-center">
            <span class="text-white font-black text-[10px]">B</span>
          </div>
          <p class="text-white/20 text-xs">
            © {{ new Date().getFullYear() }} <span class="text-white/35 font-semibold">PT Satset Karya Nusantara</span>. Semua hak dilindungi.
          </p>
        </div>
        <div class="flex items-center gap-6 text-white/20 text-xs">
          <NuxtLink to="/privasi" class="hover:text-white/50 transition-colors">Kebijakan Privasi</NuxtLink>
          <span class="w-px h-3 bg-white/10" />
          <NuxtLink to="/ketentuan" class="hover:text-white/50 transition-colors">Syarat & Ketentuan</NuxtLink>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
import { Phone, Mail } from 'lucide-vue-next'



const company = [
  { name: 'Tentang Kami',      href: '/tentang-kami' },
  { name: 'Kenapa Pilih Kami', href: '/kenapa-pilih-kami' },
  { name: 'Kemitraan',         href: '/kemitraan' },
  { name: 'Karir',             href: '/karir' },
]

const services = [
  { name: 'Infrastruktur & Irigasi', href: '/layanan#01' },
  { name: 'Jalan & Lingkungan',      href: '/layanan#02' },
  { name: 'Konstruksi Bangunan',     href: '/layanan#03' },
  { name: 'Pematangan Lahan',        href: '/layanan#04' },
  { name: 'Tenaga Kerja',            href: '/layanan#05' },
  { name: 'Alat & Material',         href: '/layanan#06' },
  { name: 'Pembersihan Puing',       href: '/layanan#07' },
]

const support = [
  { name: 'Kontak Kami',  href: '/kontak-kami' },
  { name: 'Pengaduan',    href: '/pengaduan' },
  { name: 'FAQ',          href: '/faq' },
  { name: 'Area Layanan', href: '/tentang-kami' },
]
</script>
