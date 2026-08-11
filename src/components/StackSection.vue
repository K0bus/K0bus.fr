<script setup lang="ts">
import { portfolioData } from '../data/portfolio'
import { Cpu, Check } from 'lucide-vue-next'

const getBadgeStyle = (color: string) => {
  switch (color) {
    case 'lavender':
      return {
        dot: 'bg-purple-300 shadow-[0_0_10px_#e9d5ff]',
        cardBg: 'hover:border-purple-300/30 hover:shadow-purple-950/20',
        badge: 'bg-purple-500/10 text-purple-200 border-purple-500/20'
      }
    case 'mint':
      return {
        dot: 'bg-emerald-300 shadow-[0_0_10px_#a7f3d0]',
        cardBg: 'hover:border-emerald-300/30 hover:shadow-emerald-950/20',
        badge: 'bg-emerald-500/10 text-emerald-200 border-emerald-500/20'
      }
    case 'cyan':
      return {
        dot: 'bg-cyan-300 shadow-[0_0_10px_#cffafe]',
        cardBg: 'hover:border-cyan-300/30 hover:shadow-cyan-950/20',
        badge: 'bg-cyan-500/10 text-cyan-200 border-cyan-500/20'
      }
    case 'rose':
      return {
        dot: 'bg-rose-300 shadow-[0_0_10px_#fbcfe8]',
        cardBg: 'hover:border-rose-300/30 hover:shadow-rose-950/20',
        badge: 'bg-rose-500/10 text-rose-200 border-rose-500/20'
      }
    default:
      return {
        dot: 'bg-zinc-300',
        cardBg: 'hover:border-white/20',
        badge: 'bg-white/10 text-white border-white/20'
      }
  }
}
</script>

<template>
  <section id="stack" class="py-24 relative z-10 max-w-5xl mx-auto px-6">
    <div v-reveal class="flex flex-col items-center text-center mb-14">
      <h2 class="text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-3 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        Compétences & Outils
      </h2>
      <h3 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        Stack Technique Centralisée
      </h3>
    </div>

    <!-- Grid of Skill Categories -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="(category, idx) in portfolioData.skillCategories" 
        :key="category.title"
        v-reveal="idx * 120"
        class="glass-card p-7 rounded-2xl border border-white/10 transition-all duration-300"
        :class="getBadgeStyle(category.badgeColor).cardBg"
      >
        <!-- Category Header -->
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
          <div class="flex items-center gap-3">
            <span class="w-2.5 h-2.5 rounded-full" :class="getBadgeStyle(category.badgeColor).dot"></span>
            <h4 class="text-lg font-bold text-white tracking-wide">
              {{ category.title }}
            </h4>
          </div>
          <Cpu class="w-4 h-4 text-zinc-500" />
        </div>

        <p class="text-xs text-zinc-400 mb-6 font-light">
          {{ category.description }}
        </p>

        <!-- Skill Badges -->
        <div class="flex flex-wrap gap-2.5">
          <span 
            v-for="skill in category.skills" 
            :key="skill.name"
            class="px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 flex items-center gap-1.5"
            :class="[
              skill.featured 
                ? getBadgeStyle(category.badgeColor).badge 
                : 'bg-white/[0.03] text-zinc-300 border-white/5 hover:border-white/20 hover:bg-white/[0.06]'
            ]"
          >
            <Check v-if="skill.featured" class="w-3 h-3 opacity-80" />
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
