<script setup lang="ts">
import { portfolioData } from '../data/portfolio'
import { ArrowUp, Terminal, Heart } from 'lucide-vue-next'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative z-10 border-t border-white/5 bg-[#09090b]/80 backdrop-blur-md py-12 mt-20">
    <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      
      <!-- Left: Copyright & NAS status -->
      <div class="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <div class="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-purple-300">
          <Terminal class="w-4 h-4" />
        </div>
        <div>
          <p class="text-xs font-medium text-zinc-300">
            © {{ currentYear }} {{ portfolioData.profile.name }} — Tous droits réservés.
          </p>
          <p class="text-[10px] text-zinc-500 font-mono flex items-center justify-center sm:justify-start gap-1 mt-0.5">
            <span>Propulsé par Vue 3, Vite & Docker Arcane sur NAS</span>
          </p>
        </div>
      </div>

      <!-- Right: Scroll to top -->
      <button 
        @click="scrollToTop"
        class="glass-card p-3 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-purple-300/30 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Retour en haut"
        title="Retour en haut"
      >
        <ArrowUp class="w-4 h-4" />
      </button>

    </div>
  </footer>
</template>
