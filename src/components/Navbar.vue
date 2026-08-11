<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from '../data/portfolio'
import { Terminal, Menu, X, Github, Linkedin, Mail } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#stack' },
  { name: 'Projets', href: '#projects' },
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header 
    class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl transition-all duration-300"
  >
    <div 
      class="glass-navbar rounded-full px-5 py-3 flex items-center justify-between shadow-2xl transition-all duration-300"
      :class="{ 'bg-[#09090b]/85 shadow-purple-950/10 border-white/15': isScrolled }"
    >
      <!-- Logo & Status -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-purple-200 group-hover:border-purple-300/40 group-hover:scale-105 transition-all">
          <Terminal class="w-4 h-4 text-purple-300" />
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-sm text-white tracking-wide group-hover:text-purple-200 transition-colors">
            {{ portfolioData.profile.name }}
          </span>
          <span class="text-[10px] text-zinc-400 font-mono flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            NAS Arcane Active
          </span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full px-3 py-1">
        <a 
          v-for="link in navLinks" 
          :key="link.href" 
          :href="link.href"
          class="text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] px-4 py-1.5 rounded-full transition-all duration-200"
        >
          {{ link.name }}
        </a>
      </nav>

      <!-- Desktop Social & Contact CTA -->
      <div class="hidden md:flex items-center gap-2">
        <a 
          v-for="social in portfolioData.socials.filter(s => s.name !== 'Email')"
          :key="social.name"
          :href="social.url"
          target="_blank" 
          rel="noopener noreferrer"
          class="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          :title="social.name"
        >
          <Github v-if="social.icon === 'Github'" class="w-4 h-4" />
          <Linkedin v-else-if="social.icon === 'Linkedin'" class="w-4 h-4" />
        </a>
        <a 
          href="mailto:contact@k0bus.fr"
          class="text-xs font-medium text-zinc-900 bg-white hover:bg-purple-100 px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-white/5 font-semibold hover:scale-105 active:scale-95"
        >
          Me contacter
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Toggle Menu"
      >
        <Menu v-if="!mobileMenuOpen" class="w-5 h-5" />
        <X v-else class="w-5 h-5" />
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-2 scale-95"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden mt-2 p-4 glass-card border border-white/10 rounded-2xl flex flex-col gap-3 shadow-2xl bg-[#09090b]/95"
      >
        <a 
          v-for="link in navLinks" 
          :key="link.href" 
          :href="link.href" 
          @click="mobileMenuOpen = false"
          class="text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
        >
          {{ link.name }}
        </a>
        <div class="h-px bg-white/10 my-1"></div>
        <div class="flex items-center justify-between px-2 pt-1">
          <div class="flex items-center gap-3">
            <a 
              v-for="social in portfolioData.socials.filter(s => s.name !== 'Email')"
              :key="social.name"
              :href="social.url" 
              target="_blank" 
              class="text-zinc-400 hover:text-white"
            >
              <Github v-if="social.icon === 'Github'" class="w-5 h-5"/>
              <Linkedin v-else-if="social.icon === 'Linkedin'" class="w-5 h-5"/>
            </a>
          </div>
          <a 
            href="mailto:contact@k0bus.fr" 
            class="text-xs font-semibold text-zinc-900 bg-white px-4 py-2 rounded-full"
          >
            Me contacter
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>
