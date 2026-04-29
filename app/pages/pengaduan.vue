<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { MessageSquare, Send, AlertCircle, CheckCircle2 } from 'lucide-vue-next'
import { gsap } from 'gsap'

useHead({
  title: 'Pengaduan Layanan – BangunInd',
  meta: [{ name: 'description', content: 'Sampaikan keluhan atau masukan Anda terkait layanan konstruksi BangunInd.' }],
})

let ctx: gsap.Context | null = null
const isSubmitted = ref(false)

const handleSubmit = () => {
  isSubmitted.value = true
  setTimeout(() => {
    isSubmitted.value = false
  }, 5000)
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  ctx = gsap.context(() => {
    gsap.fromTo('.complaint-hero', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
    gsap.fromTo('.complaint-card', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div class="pt-[72px] min-h-screen bg-surface-light">
    <!-- Hero -->
    <section class="bg-navy py-20 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10" />
      <div class="container mx-auto px-4 md:px-6 relative z-10 text-center complaint-hero">
        <div class="orange-bar mx-auto" />
        <h1 class="text-4xl md:text-5xl font-bold font-jakarta text-white mb-6 text-gradient">Pengaduan Layanan</h1>
        <p class="text-white/60 text-lg max-w-2xl mx-auto">
          Kepuasan Anda adalah prioritas kami. Jika Anda menemukan kendala atau memiliki keluhan terkait pengerjaan kami di lapangan, sampaikan di sini.
        </p>
      </div>
    </section>

    <!-- Form Section -->
    <section class="py-16 -mt-10">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-3xl mx-auto">
          <div class="complaint-card bg-white rounded-3xl shadow-xl shadow-navy/5 border border-gray-100 p-8 md:p-12">
            
            <div v-if="!isSubmitted">
              <div class="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
                <div class="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <MessageSquare class="w-6 h-6" />
                </div>
                <div>
                  <h2 class="text-xl font-bold text-navy font-jakarta">Formulir Pengaduan Resmi</h2>
                  <p class="text-gray-500 text-sm">Tim kami akan merespon dalam 1x24 jam kerja.</p>
                </div>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-navy ml-1">Nama Lengkap</label>
                    <input type="text" required placeholder="Contoh: Budi Santoso" class="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-orange focus:bg-white outline-none transition-all text-navy" />
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-navy ml-1">Nomor WhatsApp</label>
                    <input type="tel" required placeholder="0812xxxx" class="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-orange focus:bg-white outline-none transition-all text-navy" />
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-navy ml-1">ID Proyek / Lokasi Pengerjaan</label>
                  <input type="text" placeholder="Misal: Perbaikan Jalan Ciracap" class="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-orange focus:bg-white outline-none transition-all text-navy" />
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-navy ml-1">Jenis Pengaduan</label>
                  <select class="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-orange focus:bg-white outline-none transition-all text-navy appearance-none">
                    <option>Kualitas Pengerjaan</option>
                    <option>Ketepatan Waktu</option>
                    <option>Perilaku Tenaga Kerja</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-navy ml-1">Detail Pengaduan</label>
                  <textarea rows="5" required placeholder="Jelaskan detail masalah yang Anda alami..." class="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-orange focus:bg-white outline-none transition-all text-navy resize-none"></textarea>
                </div>

                <div class="bg-amber-50 rounded-xl p-4 flex gap-3 border border-amber-100">
                  <AlertCircle class="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p class="text-xs text-amber-800 leading-relaxed">
                    Mohon pastikan data yang Anda isi benar. Pengaduan palsu dapat menghambat proses penanganan keluhan pelanggan lainnya.
                  </p>
                </div>

                <button type="submit" class="btn-primary w-full justify-center py-4 text-lg">
                  Kirim Pengaduan
                  <Send class="w-5 h-5" />
                </button>
              </form>
            </div>

            <div v-else class="py-12 text-center">
              <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 class="w-10 h-10" />
              </div>
              <h2 class="text-3xl font-bold font-jakarta text-navy mb-4">Pengaduan Terkirim</h2>
              <p class="text-gray-500 max-w-sm mx-auto mb-8">
                Terima kasih atas masukan Anda. Tim manajemen BangunInd telah menerima pengaduan ini dan akan segera melakukan investigasi lapangan.
              </p>
              <NuxtLink to="/" class="text-brand-orange font-bold hover:underline">Kembali ke Beranda</NuxtLink>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>
