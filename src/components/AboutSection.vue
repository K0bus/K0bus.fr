<script setup lang="ts">
import { portfolioData } from '../data/portfolio'
import { Server, ShieldCheck, Zap, Code2 } from 'lucide-vue-next'

const highlights = [
  {
    icon: Zap,
    title: "Performance & Sobriété",
    description: "Des applications ultra-légères construites sans surplus, optimisées pour des temps de chargement instantanés.",
    color: "lavender"
  },
  {
    icon: Server,
    title: "Infrastructures Homelab",
    description: "Déploiement conteneurisé sur NAS (Arcane/Docker), garantissant une souveraineté totale et une haute disponibilité.",
    color: "mint"
  },
  {
    icon: ShieldCheck,
    title: "Architecture Propre",
    description: "Code typé avec TypeScript, composants réutilisables et modularité stricte pour une maintenabilité à long terme.",
    color: "cyan"
  }
]
</script>

<template>
  <section id="about" class="py-24 relative z-10 max-w-5xl mx-auto px-6">
    <div v-reveal class="flex flex-col items-center text-center mb-14">
      <h2 class="text-xs font-semibold text-purple-300 uppercase tracking-widest mb-3 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-purple-400"></span>
        À Propos
      </h2>
      <h3 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        Philosophie & Vision
      </h3>
    </div>

    <!-- Main About Glass Card -->
    <div v-reveal class="glass-card p-8 sm:p-12 mb-12 border border-white/10 rounded-3xl relative overflow-hidden">
      <!-- Background Ambient Soft Light -->
      <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-3xl mx-auto text-center sm:text-left space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
        <p class="font-normal">
          {{ portfolioData.profile.bio }}
        </p>
        <p class="text-sm sm:text-base text-zinc-400 font-light">
          Chaque projet est conçu avec un soin particulier porté à la typographie, au design d'interaction et à l'efficience énergétique des infrastructures sous-jacentes. Du composant Vue jusqu'au script d'orchestration Docker, l'objectif est d'allier élégance et robustesse.
        </p>
      </div>
    </div>

    <!-- Highlights Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div 
        v-for="(item, idx) in highlights" 
        :key="item.title"
        v-reveal="idx * 120"
        class="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/15 transition-all duration-300 group"
      >
        <div 
          class="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
          :class="{
            'text-purple-300 border-purple-500/20': item.color === 'lavender',
            'text-emerald-300 border-emerald-500/20': item.color === 'mint',
            'text-cyan-300 border-cyan-500/20': item.color === 'cyan'
          }"
        >
          <component :is="item.icon" class="w-6 h-6" />
        </div>
        <h4 class="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
          {{ item.title }}
        </h4>
        <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>
