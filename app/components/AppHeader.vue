<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Menu, X, ChevronRight, ChevronDown, Waves, MapPin, Building2, Layers, Users, Package, Trash2 } from 'lucide-vue-next'
import { gsap } from 'gsap'

const route = useRoute()
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const mobileServicesOpen = ref(false)
let scrollHandler: () => void
let dropdownTimer: ReturnType<typeof setTimeout>

const isTransparent = computed(() => route.path === '/' && !isScrolled.value)

const subMenus = [
  { name: 'Konstruksi Infrastruktur & Irigasi', href: '/layanan#01', icon: Waves },
  { name: 'Pekerjaan Jalan & Lingkungan',       href: '/layanan#02', icon: MapPin },
  { name: 'Konstruksi Bangunan',                href: '/layanan#03', icon: Building2 },
  { name: 'Pematangan Lahan & Struktur',        href: '/layanan#04', icon: Layers },
  { name: 'Tenaga Kerja Konstruksi',            href: '/layanan#05', icon: Users },
  { name: 'Dukungan Alat & Material',           href: '/layanan#06', icon: Package },
  { name: 'Pembersihan & Pengangkutan Puing',   href: '/layanan#07', icon: Trash2 },
]

const navLinks = [
  { name: 'Beranda',      href: '/',            hasDropdown: false },
  { name: 'Layanan',      href: '/layanan',     hasDropdown: true  },
  { name: 'Tentang Kami', href: '/tentang-kami',hasDropdown: false },
  { name: 'Kontak Kami',  href: '/kontak-kami', hasDropdown: false },
]

const openDropdown = () => {
  clearTimeout(dropdownTimer)
  isDropdownOpen.value = true
  nextTick(() => {
    gsap.fromTo('.dropdown-panel', { y: -8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25, ease: 'power2.out' })
    gsap.fromTo('.dropdown-item', { y: -6, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.04, duration: 0.2, ease: 'power2.out' })
  })
}

const closeDropdown = (delay = 150) => {
  dropdownTimer = setTimeout(() => { isDropdownOpen.value = false }, delay)
}

onMounted(() => {
  scrollHandler = () => { isScrolled.value = window.scrollY > 20 }
  isScrolled.value = window.scrollY > 20
  window.addEventListener('scroll', scrollHandler, { passive: true })
  gsap.fromTo('.header-root', { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 })
})

onUnmounted(() => {
  if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
  clearTimeout(dropdownTimer)
  document.body.style.overflow = ''
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  mobileServicesOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <header
    class="header-root fixed top-0 left-0 w-full z-50 transition-all duration-500"
    :class="
      isTransparent
        ? 'bg-transparent py-5'
        : isScrolled
          ? 'bg-[#060f1c] py-3 shadow-lg shadow-black/30'
          : 'bg-[#060f1c] py-4'
    "
  >
    <div class="container mx-auto px-4 md:px-6 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5 group shrink-0" @click="closeMenu">
        <div class="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center shadow-orange-glow group-hover:rotate-12 transition-transform duration-300">
          <span class="text-white font-black text-lg">B</span>
        </div>
        <span class="text-xl font-black font-jakarta tracking-tight text-white">
          Bangun<span class="text-brand-orange">Ind</span>
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-1">
        <template v-for="link in navLinks" :key="link.name">
          <div
            v-if="link.hasDropdown"
            class="relative"
            @mouseenter="openDropdown"
            @mouseleave="closeDropdown()"
          >
            <NuxtLink
              :to="link.href"
              class="flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold font-jakarta transition-all duration-200 hover:text-brand-orange hover:bg-white/8 text-white/80 hover:text-white group"
              active-class="!text-brand-orange"
            >
              {{ link.name }}
              <ChevronDown class="w-3.5 h-3.5 transition-transform duration-300" :class="isDropdownOpen ? 'rotate-180 text-brand-orange' : ''" />
            </NuxtLink>

            <Transition
              enter-active-class="transition duration-200"
              leave-active-class="transition duration-150"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-2"
            >
              <div
                v-if="isDropdownOpen"
                class="dropdown-panel absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white rounded-2xl shadow-2xl border border-navy/6 overflow-hidden"
                @mouseenter="clearTimeout(dropdownTimer)"
                @mouseleave="closeDropdown()"
              >
                <div class="bg-navy px-5 py-3.5 flex items-center justify-between">
                  <p class="text-white font-bold font-jakarta text-sm">Semua Layanan</p>
                  <span class="text-[11px] text-white/50 bg-white/10 px-2.5 py-0.5 rounded-full">7 Layanan</span>
                </div>
                <ul class="py-2 grid grid-cols-2">
                  <li v-for="sub in subMenus" :key="sub.name" class="dropdown-item">
                    <NuxtLink
                      :to="sub.href"
                      class="flex items-center gap-3 px-4 py-3 hover:bg-surface-light transition-colors duration-200 group/item"
                      @click="isDropdownOpen = false"
                    >
                      <div class="w-8 h-8 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover/item:bg-brand-orange group-hover/item:text-white transition-all duration-200">
                        <component :is="sub.icon" class="w-3.5 h-3.5" />
                      </div>
                      <span class="text-xs font-semibold text-navy group-hover/item:text-brand-orange transition-colors duration-200 leading-tight">
                        {{ sub.name }}
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
                <div class="border-t border-gray-100 px-4 py-3">
                  <NuxtLink
                    to="/layanan"
                    class="flex items-center justify-center gap-2 text-sm font-bold text-brand-orange hover:text-brand-orange-dark transition-colors"
                    @click="isDropdownOpen = false"
                  >
                    Lihat Semua Layanan <ChevronRight class="w-4 h-4" />
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>

          <NuxtLink
            v-else
            :to="link.href"
            class="px-3.5 py-2 rounded-xl text-sm font-semibold font-jakarta transition-all duration-200 hover:text-brand-orange text-white/80 hover:text-white hover:bg-white/8"
            active-class="!text-brand-orange"
          >
            {{ link.name }}
          </NuxtLink>
        </template>
      </nav>

      <!-- CTA Desktop -->
      <div class="hidden lg:block shrink-0">
        <NuxtLink to="/kontak-kami" class="btn-primary !py-2.5 !px-5 !text-sm">
          Konsultasi Gratis <ChevronRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <!-- Hamburger -->
      <button
        class="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 text-white hover:bg-white/10"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <Transition
          enter-active-class="transition duration-200"
          leave-active-class="transition duration-150"
          enter-from-class="opacity-0 rotate-90 scale-75"
          enter-to-class="opacity-100 rotate-0 scale-100"
          leave-from-class="opacity-100 rotate-0 scale-100"
          leave-to-class="opacity-0 -rotate-90 scale-75"
          mode="out-in"
        >
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </Transition>
      </button>
    </div>

    <!-- ── Mobile Menu (slide-down from header) ──────────────── -->
    <Transition
      enter-active-class="transition-all duration-350 ease-out"
      leave-active-class="transition-all duration-250 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-[#060f1c] border-t border-white/6 overflow-hidden max-h-[calc(100vh-64px)] overflow-y-auto"
      >
        <!-- Gradient line at top -->
        <div class="h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />

        <div class="container mx-auto px-4 py-6 flex flex-col gap-1">
          <template v-for="link in navLinks" :key="link.name">
            <!-- Layanan with accordion -->
            <div v-if="link.hasDropdown">
              <button
                class="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-white/80 font-semibold text-base transition-all duration-200 hover:bg-white/5 hover:text-white"
                :class="mobileServicesOpen ? 'bg-white/5 text-white' : ''"
                @click="mobileServicesOpen = !mobileServicesOpen"
              >
                <span>{{ link.name }}</span>
                <ChevronDown
                  class="w-4 h-4 text-brand-orange transition-transform duration-300"
                  :class="mobileServicesOpen ? 'rotate-180' : ''"
                />
              </button>

              <!-- Sub-items accordion -->
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-200 ease-in"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[500px]"
                leave-from-class="opacity-100 max-h-[500px]"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="mobileServicesOpen" class="ml-4 mt-1 mb-2 space-y-0.5">
                  <NuxtLink
                    v-for="sub in subMenus"
                    :key="sub.name"
                    :to="sub.href"
                    class="flex items-center gap-3 px-4 py-3 rounded-xl text-white/55 text-sm font-medium hover:text-white hover:bg-white/6 transition-all duration-200 group"
                    @click="closeMenu"
                  >
                    <div class="w-7 h-7 rounded-lg bg-brand-orange/12 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
                      <component :is="sub.icon" class="w-3.5 h-3.5" />
                    </div>
                    {{ sub.name }}
                  </NuxtLink>
                </div>
              </Transition>
            </div>

            <!-- Regular link -->
            <NuxtLink
              v-else
              :to="link.href"
              class="flex items-center justify-between px-4 py-3.5 rounded-2xl text-white/80 font-semibold text-base hover:bg-white/5 hover:text-white transition-all duration-200 group"
              active-class="!text-brand-orange bg-brand-orange/8"
              @click="closeMenu"
            >
              {{ link.name }}
              <ChevronRight class="w-4 h-4 text-white/20 group-hover:text-brand-orange transition-colors" />
            </NuxtLink>
          </template>

          <!-- CTA area -->
          <div class="mt-4 pt-5 border-t border-white/8 flex flex-col gap-3">
            <NuxtLink
              to="/kontak-kami"
              class="btn-primary w-full justify-center py-4 text-base"
              @click="closeMenu"
            >
              Konsultasi Gratis
              <ChevronRight class="w-5 h-5" />
            </NuxtLink>
            <a
              href="https://wa.me/62"
              class="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl border border-white/10 text-white/60 text-sm font-semibold hover:text-white hover:border-green-400/40 hover:bg-green-400/5 transition-all duration-300"
              @click="closeMenu"
            >
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/></svg>
              Chat via WhatsApp
            </a>
          </div>

          <!-- Footer info -->
          <p class="text-center text-white/20 text-xs py-4">
            © {{ new Date().getFullYear() }} BangunInd · Sukabumi
          </p>
        </div>
      </div>
    </Transition>
  </header>
</template>
