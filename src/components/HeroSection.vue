<script setup lang="ts">
import { portfolioData } from '../data/portfolio'
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Server } from 'lucide-vue-next'
</script>

<template>
  <section class="relative min-h-screen pt-36 pb-20 flex flex-col items-center justify-center overflow-hidden">
    <!-- Ambient Background Glow Effects -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none"></div>

    <div class="relative max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
      <!-- Status Badge -->
      <div v-if="portfolioData.profile.status" v-reveal="50" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-8 text-xs font-medium text-purple-200 border border-purple-500/20 shadow-lg shadow-purple-950/20 animate-float">
        <Sparkles class="w-3.5 h-3.5 text-purple-300 animate-pulse" />
        <span>{{ portfolioData.profile.status }}</span>
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
      </div>

      <!-- Avatar with Neon Pastel Ring -->
      <div v-reveal="150" class="relative mb-8 group">
        <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-400/40 via-emerald-400/40 to-cyan-400/40 opacity-75 blur-md group-hover:opacity-100 transition duration-500"></div>
        <div class="relative w-28 h-28 rounded-full p-1 bg-[#09090b] border border-white/20 overflow-hidden shadow-2xl">
          <img 
            :src="portfolioData.profile.avatarUrl" 
            :alt="portfolioData.profile.name"
            class="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition duration-500 scale-105 group-hover:scale-110"
            style="object-position: center 25%;"
          />
        </div>
      </div>

      <!-- Main Headline -->
      <h1 v-reveal="250" class="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-[1.15]">
        Concepteur Web & <br class="hidden sm:inline" />
        <span class="text-gradient-pastel">Architecte Docker NAS</span>
      </h1>

      <!-- Subtitle & Bio -->
      <p v-reveal="350" class="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed mb-10">
        {{ portfolioData.profile.tagline }}
      </p>

      <!-- Action CTAs & Social Links -->
      <div v-reveal="450" class="flex flex-wrap items-center justify-center gap-4 mb-16">
        <a 
          href="#projects"
          class="px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-purple-100 transition-all duration-300 shadow-xl shadow-white/10 hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          Découvrir mes projets
          <ArrowDown class="w-4 h-4" />
        </a>

        <div class="flex items-center gap-2">
          <a 
            v-for="social in portfolioData.socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 rounded-full glass-card hover:border-purple-300/30 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
            :title="social.name"
          >
            <Github v-if="social.icon === 'Github'" class="w-5 h-5" />
            <Linkedin v-else-if="social.icon === 'Linkedin'" class="w-5 h-5" />
            <Mail v-else-if="social.icon === 'Mail'" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Quick Infrastructure Specs -->
      <div v-reveal="550" class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl">
        <div 
          v-for="(metric, idx) in portfolioData.metrics" 
          :key="metric.label"
          v-reveal="idx * 100"
          class="glass-card p-4 text-center rounded-2xl border border-white/5 hover:border-white/10"
        >
          <div class="text-xl sm:text-2xl font-bold text-white mb-0.5 tracking-tight font-mono">
            {{ metric.value }}
          </div>
          <div class="text-xs font-medium text-purple-200/80 mb-1">
            {{ metric.label }}
          </div>
          <div class="text-[10px] text-zinc-500">
            {{ metric.subtext }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
