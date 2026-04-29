<script setup lang="ts">
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Clock } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

useHead({ title: 'Kontak Kami – BangunInd' })

const form = ref({ name: '', email: '', subject: '', message: '' })
const isSubmitting = ref(false)
const isSuccess = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
    form.value = { name: '', email: '', subject: '', message: '' }
    setTimeout(() => (isSuccess.value = false), 5000)
  }, 1500)
}

let ctx: gsap.Context | null = null

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })

  ctx = gsap.context(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo('.page-hero-content', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' })

    gsap.fromTo('.contact-info', { x: -60, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: { trigger: '.contact-grid', start: 'top 88%', once: true },
    })
    gsap.fromTo('.contact-form', { x: 60, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: { trigger: '.contact-grid', start: 'top 88%', once: true },
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <div class="pt-[72px]">
    <!-- Header Section -->
    <section class="bg-navy py-24 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10" />
      <div class="container mx-auto px-4 md:px-6 relative z-10 text-center page-hero-content">
        <div class="orange-bar mx-auto" />
        <h1 class="text-4xl md:text-6xl font-bold font-jakarta text-white mb-6">Hubungi Kami</h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">
          Punya pertanyaan atau ingin berkonsultasi mengenai proyek Anda? Tim kami siap mendengarkan dan memberikan solusi terbaik.
        </p>
      </div>
    </section>

    <section class="section-pad bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="contact-grid grid lg:grid-cols-12 gap-16">
          <!-- Info Column -->
          <div class="contact-info lg:col-span-5">
            <h2 class="text-3xl font-bold font-jakarta text-navy mb-8">Informasi Kontak</h2>
            <div class="space-y-8 mb-12">
              <div class="flex gap-6 group">
                <div class="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  <MapPin class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="text-lg font-bold font-jakarta text-navy mb-1">Alamat Kantor</h4>
                  <p class="text-gray-500 leading-relaxed">Jl. Thamrin No. 88, Menara Indah Lt. 12, Jakarta Pusat, DKI Jakarta 10310</p>
                </div>
              </div>
              
              <div class="flex gap-6 group">
                <div class="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  <Phone class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="text-lg font-bold font-jakarta text-navy mb-1">Telepon & WhatsApp</h4>
                  <p class="text-gray-500 leading-relaxed">+62 21 5555 1234<br>+62 812 3456 7890 (WA Only)</p>
                </div>
              </div>

              <div class="flex gap-6 group">
                <div class="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  <Mail class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="text-lg font-bold font-jakarta text-navy mb-1">Email Resmi</h4>
                  <p class="text-gray-500 leading-relaxed">hello@bangunind.co.id<br>support@bangunind.co.id</p>
                </div>
              </div>

              <div class="flex gap-6 group">
                <div class="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  <Clock class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="text-lg font-bold font-jakarta text-navy mb-1">Jam Operasional</h4>
                  <p class="text-gray-500 leading-relaxed">Senin - Jumat: 08:00 - 17:00 WIB<br>Sabtu: 08:00 - 12:00 WIB</p>
                </div>
              </div>
            </div>

            <h4 class="text-lg font-bold font-jakarta text-navy mb-4">Media Sosial</h4>
            <div class="flex gap-4">
              <a href="#" class="w-12 h-12 rounded-xl bg-surface-light flex items-center justify-center text-navy hover:bg-brand-orange hover:text-white transition-all duration-300">
                <Instagram class="w-6 h-6" />
              </a>
              <a href="#" class="w-12 h-12 rounded-xl bg-surface-light flex items-center justify-center text-navy hover:bg-brand-orange hover:text-white transition-all duration-300">
                <Facebook class="w-6 h-6" />
              </a>
              <a href="#" class="w-12 h-12 rounded-xl bg-surface-light flex items-center justify-center text-navy hover:bg-brand-orange hover:text-white transition-all duration-300">
                <Linkedin class="w-6 h-6" />
              </a>
            </div>
          </div>

          <!-- Form Column -->
          <div class="contact-form lg:col-span-7">
            <div class="bg-surface-light rounded-[2.5rem] p-8 md:p-12">
              <h2 class="text-3xl font-bold font-jakarta text-navy mb-8">Kirim Pesan</h2>
              
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-navy ml-1">Nama Lengkap</label>
                    <input 
                      v-model="form.name"
                      type="text" 
                      required
                      placeholder="Contoh: Budi Santoso" 
                      class="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/5 transition-all"
                    >
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-navy ml-1">Alamat Email</label>
                    <input 
                      v-model="form.email"
                      type="email" 
                      required
                      placeholder="budi@email.com" 
                      class="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/5 transition-all"
                    >
                  </div>
                </div>
                
                <div class="space-y-2">
                  <label class="text-sm font-bold text-navy ml-1">Subjek</label>
                  <select 
                    v-model="form.subject"
                    required
                    class="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-orange transition-all"
                  >
                    <option value="" disabled selected>Pilih Subjek Pesan</option>
                    <option value="konsultasi">Konsultasi Proyek</option>
                    <option value="kemitraan">Kerjasama Kemitraan</option>
                    <option value="karir">Informasi Karir</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-navy ml-1">Pesan Anda</label>
                  <textarea 
                    v-model="form.message"
                    required
                    rows="5" 
                    placeholder="Tuliskan detail kebutuhan atau pertanyaan Anda di sini..." 
                    class="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/5 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  class="w-full btn-primary justify-center py-5 text-lg relative overflow-hidden"
                >
                  <span v-if="!isSubmitting" class="flex items-center gap-2">
                    Kirim Pesan
                    <Send class="w-5 h-5" />
                  </span>
                  <span v-else class="flex items-center gap-2">
                    <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Mengirim...
                  </span>
                </button>

                <div v-if="isSuccess" class="bg-green-100 text-green-700 p-4 rounded-2xl text-center font-medium animate-bounce mt-4">
                  Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section (Simulated) -->
    <section class="h-[400px] bg-gray-200 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
      <div class="absolute inset-0 bg-navy/20 flex items-center justify-center pointer-events-none">
        <div class="bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3">
          <div class="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white">
            <MapPin class="w-6 h-6" />
          </div>
          <span class="font-bold text-navy">Lokasi Kantor Kami</span>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1500" alt="Map Placeholder" class="w-full h-full object-cover" />
    </section>
  </div>
</template>
