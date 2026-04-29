<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { FileText, Scale, Gavel, AlertCircle } from 'lucide-vue-next'
import { gsap } from 'gsap'

useHead({
  title: 'Syarat & Ketentuan – BangunInd',
  meta: [{ name: 'description', content: 'Pelajari aturan dan ketentuan penggunaan jasa layanan konstruksi di BangunInd.' }],
})

let ctx: gsap.Context | null = null

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  ctx = gsap.context(() => {
    gsap.fromTo('.terms-hero', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
    gsap.fromTo('.terms-content', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div class="pt-[72px] min-h-screen bg-surface-light text-navy">
    <!-- Hero -->
    <section class="bg-navy py-20 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10" />
      <div class="container mx-auto px-4 md:px-6 relative z-10 text-center terms-hero">
        <div class="orange-bar mx-auto" />
        <h1 class="text-4xl md:text-5xl font-bold font-jakarta text-white mb-6 text-gradient">Syarat & Ketentuan</h1>
        <p class="text-white/60 text-lg max-w-2xl mx-auto">
          Aturan main dan kesepakatan penggunaan layanan BangunInd untuk menjamin kelancaran kerja sama.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-20">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-navy/5 border border-gray-100 p-8 md:p-16 terms-content">
          
          <div class="prose prose-slate max-w-none">
            <div class="flex items-center gap-4 mb-8 text-brand-orange">
              <Scale class="w-8 h-8" />
              <h2 class="text-2xl font-bold text-navy font-jakarta m-0">Ketentuan Layanan</h2>
            </div>
            
            <p class="text-gray-500 leading-relaxed mb-10">
              Terakhir diperbarui: {{ new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </p>

            <div class="space-y-12 text-gray-600">
              <section>
                <h3 class="text-xl font-bold text-navy flex items-center gap-3 mb-4">
                  <span class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-brand-orange text-sm">01</span>
                  Layanan Konstruksi
                </h3>
                <p>BangunInd menyediakan jasa konstruksi dan infrastruktur berdasarkan kesepakatan tertulis (Kontrak Kerja) yang mencakup:</p>
                <ul class="list-disc pl-6 mt-3 space-y-2 text-sm">
                  <li>Survei lokasi dan konsultasi teknis.</li>
                  <li>Penyusunan Rencana Anggaran Biaya (RAB).</li>
                  <li>Penyediaan tenaga kerja dan alat berat (sesuai kesepakatan).</li>
                  <li>Pelaksanaan pengerjaan sesuai standar teknis yang berlaku.</li>
                </ul>
              </section>

              <section>
                <h3 class="text-xl font-bold text-navy flex items-center gap-3 mb-4">
                  <span class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-brand-orange text-sm">02</span>
                  Pembayaran & Biaya
                </h3>
                <p>Seluruh biaya proyek didasarkan pada RAB yang telah disetujui. Syarat pembayaran meliputi:</p>
                <ul class="list-disc pl-6 mt-3 space-y-2 text-sm">
                  <li>Uang muka (DP) dibayarkan sebelum mobilisasi tim ke lokasi.</li>
                  <li>Pembayaran termin dilakukan berdasarkan progres fisik pengerjaan.</li>
                  <li>Pelunasan dilakukan segera setelah serah terima pekerjaan (STP).</li>
                </ul>
              </section>

              <section>
                <h3 class="text-xl font-bold text-navy flex items-center gap-3 mb-4">
                  <span class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-brand-orange text-sm">03</span>
                  Keadaan Memaksa (Force Majeure)
                </h3>
                <p>BangunInd tidak bertanggung jawab atas keterlambatan atau kegagalan pengerjaan yang disebabkan oleh keadaan di luar kendali kami, seperti bencana alam, kerusuhan, atau perubahan regulasi pemerintah secara mendadak.</p>
              </section>

              <section>
                <h3 class="text-xl font-bold text-navy flex items-center gap-3 mb-4">
                  <span class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-brand-orange text-sm">04</span>
                  Perubahan Pekerjaan
                </h3>
                <p>Setiap perubahan atau penambahan pekerjaan di luar RAB awal harus dibicarakan dan disepakati melalui addendum kontrak atau surat perintah kerja tambah/kurang.</p>
              </section>

              <div class="bg-navy rounded-2xl p-8 text-white relative overflow-hidden mt-16">
                <div class="absolute inset-0 dot-pattern opacity-10" />
                <div class="relative z-10 flex items-start gap-4">
                  <AlertCircle class="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                  <div>
                    <h4 class="text-lg font-bold font-jakarta mb-2">Penyelesaian Perselisihan</h4>
                    <p class="text-white/60 text-sm leading-relaxed">
                      Segala perselisihan yang timbul akan diutamakan untuk diselesaikan secara musyawarah mufakat. Apabila tidak tercapai kesepakatan, maka akan diselesaikan melalui prosedur hukum yang berlaku di wilayah hukum Kabupaten Sukabumi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
