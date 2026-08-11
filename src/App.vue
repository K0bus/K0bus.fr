<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import StackSection from './components/StackSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="relative min-h-screen bg-[#09090b] text-[#fafafa] overflow-hidden selection:bg-purple-500/20 selection:text-purple-200">
    <!-- Subtle Background Radial Gradients -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>
    </div>

    <!-- Main Navigation Header -->
    <Navbar />

    <!-- Main Page Sections -->
    <main class="relative z-10">
      <HeroSection />
      
      <!-- Subtle Divider Glow -->
      <div class="max-w-5xl mx-auto px-6">
        <div class="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <AboutSection />

      <div class="max-w-5xl mx-auto px-6">
        <div class="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <StackSection />

      <div class="max-w-5xl mx-auto px-6">
        <div class="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <ProjectsSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
