<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-vue-next'
import { gsap } from 'gsap'

useHead({
  title: 'Kebijakan Privasi – BangunInd',
  meta: [{ name: 'description', content: 'Pelajari bagaimana BangunInd melindungi dan mengelola data pribadi Anda.' }],
})

let ctx: gsap.Context | null = null

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  ctx = gsap.context(() => {
    gsap.fromTo('.policy-hero', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
    gsap.fromTo('.policy-content', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div class="pt-[72px] min-h-screen bg-surface-light text-navy">
    <!-- Hero -->
    <section class="bg-navy py-20 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10" />
      <div class="container mx-auto px-4 md:px-6 relative z-10 text-center policy-hero">
        <div class="orange-bar mx-auto" />
        <h1 class="text-4xl md:text-5xl font-bold font-jakarta text-white mb-6 text-gradient">Kebijakan Privasi</h1>
        <p class="text-white/60 text-lg max-w-2xl mx-auto">
          BangunInd berkomitmen untuk melindungi privasi dan informasi pribadi Anda dengan standar keamanan yang tinggi.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-20">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-navy/5 border border-gray-100 p-8 md:p-16 policy-content">
          
          <div class="prose prose-slate max-w-none">
            <div class="flex items-center gap-4 mb-8 text-brand-orange">
              <ShieldCheck class="w-8 h-8" />
              <h2 class="text-2xl font-bold text-navy font-jakarta m-0">Komitmen Kami</h2>
            </div>
            
            <p class="text-gray-500 leading-relaxed mb-10">
              Terakhir diperbarui: {{ new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </p>

            <div class="space-y-12 text-gray-600">
              <section>
                <h3 class="text-xl font-bold text-navy flex items-center gap-3 mb-4">
                  <span class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-brand-orange text-sm">01</span>
                  Informasi yang Kami Kumpulkan
                </h3>
                <p>Kami mengumpulkan informasi yang Anda berikan langsung kepada kami saat Anda menggunakan layanan kami, termasuk namun tidak terbatas pada:</p>
                <ul class="list-disc pl-6 mt-3 space-y-2">
                  <li>Informasi Identitas (Nama, alamat, nomor telepon).</li>
                  <li>Informasi Komunikasi (Email, isi pesan dalam formulir kontak).</li>
                  <li>Informasi Proyek (Lokasi survei, detail kebutuhan konstruksi).</li>
                </ul>
              </section>

              <section>
                <h3 class="text-xl font-bold text-navy flex items-center gap-3 mb-4">
                  <span class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-brand-orange text-sm">02</span>
                  Penggunaan Informasi
                </h3>
                <p>Informasi yang kami kumpulkan digunakan untuk:</p>
                <ul class="list-disc pl-6 mt-3 space-y-2">
                  <li>Menyediakan dan mengelola layanan konstruksi yang Anda minta.</li>
                  <li>Melakukan survei lokasi dan pembuatan draf RAB.</li>
                  <li>Menghubungi Anda terkait progres pengerjaan atau tindak lanjut layanan.</li>
                  <li>Tujuan administrasi internal dan peningkatan kualitas layanan.</li>
                </ul>
              </section>

              <section>
                <h3 class="text-xl font-bold text-navy flex items-center gap-3 mb-4">
                  <span class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-brand-orange text-sm">03</span>
                  Keamanan Data
                </h3>
                <p>Kami menerapkan langkah-langkah teknis dan organisasional yang wajar untuk melindungi informasi pribadi Anda dari kehilangan, pencurian, penyalahgunaan, serta akses, pengungkapan, perubahan, dan pemusnahan yang tidak sah.</p>
              </section>

              <section>
                <h3 class="text-xl font-bold text-navy flex items-center gap-3 mb-4">
                  <span class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-brand-orange text-sm">04</span>
                  Berbagi Informasi
                </h3>
                <p>Kami tidak akan menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya akan membagikan informasi Anda kepada mitra atau vendor kami jika diperlukan untuk pelaksanaan proyek konstruksi yang Anda setujui.</p>
              </section>

              <section class="p-8 bg-surface-light rounded-2xl border border-gray-100">
                <h3 class="text-lg font-bold text-navy mb-4">Hubungi Kami Terkait Privasi</h3>
                <p class="text-sm">Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau pengelolaan data Anda, silakan hubungi kami di:</p>
                <div class="mt-4 text-brand-orange font-bold text-sm">
                  Email: info@bangunind.id
                </div>
              </section>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
