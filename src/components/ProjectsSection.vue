<script setup lang="ts">
import { ref } from 'vue'
import { portfolioData, type Project } from '../data/portfolio'
import { ExternalLink, Github, Folder, Layers, X, Cpu, CheckCircle2 } from 'lucide-vue-next'

const selectedProject = ref<Project | null>(null)

const openModal = (project: Project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}

const getTagColorClass = (color?: string) => {
  switch (color) {
    case 'lavender':
      return 'bg-purple-500/10 text-purple-200 border-purple-500/20'
    case 'mint':
      return 'bg-emerald-500/10 text-emerald-200 border-emerald-500/20'
    case 'cyan':
      return 'bg-cyan-500/10 text-cyan-200 border-cyan-500/20'
    case 'rose':
      return 'bg-rose-500/10 text-rose-200 border-rose-500/20'
    default:
      return 'bg-white/5 text-zinc-300 border-white/10'
  }
}
</script>

<template>
  <section id="projects" class="py-24 relative z-10 max-w-5xl mx-auto px-6">
    <div v-reveal class="flex flex-col items-center text-center mb-14">
      <h2 class="text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
        Réalisations
      </h2>
      <h3 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        Projets Phares & Lab
      </h3>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article 
        v-for="(project, idx) in portfolioData.projects" 
        :key="project.id"
        v-reveal="idx * 90"
        class="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col group hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
      >
        <!-- Project Thumbnail Image -->
        <div class="relative h-48 overflow-hidden bg-zinc-900 border-b border-white/5">
          <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80"></div>
          
          <!-- Status Badge -->
          <div class="absolute top-3 right-3">
            <span 
              class="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium backdrop-blur-md border shadow-lg"
              :class="project.status === 'Terminé' 
                ? 'bg-emerald-500/20 text-emerald-200 border-emerald-500/30' 
                : 'bg-amber-500/20 text-amber-200 border-amber-500/30'"
            >
              {{ project.status }}
            </span>
          </div>
        </div>

        <!-- Project Content -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h4 class="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors flex items-center gap-2">
              <Folder class="w-4 h-4 text-purple-300" />
              {{ project.title }}
            </h4>
            <p class="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
              {{ project.description }}
            </p>
          </div>

          <div>
            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-2.5 py-1 rounded-lg text-[11px] font-medium border"
                :class="getTagColorClass(project.pastelTagColor)"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Action Links -->
            <div class="flex items-center justify-between pt-4 border-t border-white/5">
              <button 
                v-if="project.stackDetails" 
                @click="openModal(project)"
                class="text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-1.5 rounded-lg border border-emerald-500/20"
              >
                <Layers class="w-3.5 h-3.5" />
                <span>Stack Détaillée</span>
              </button>

              <a 
                v-else-if="project.githubUrl" 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Github class="w-4 h-4" />
                <span>Code source</span>
              </a>

              <div class="flex items-center gap-2">
                <a 
                  v-if="project.stackDetails && project.githubUrl" 
                  :href="project.githubUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1 transition-colors p-1"
                  title="Code source GitHub"
                >
                  <Github class="w-4 h-4" />
                </a>

                <a 
                  v-if="project.demoUrl" 
                  :href="project.demoUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-xs font-semibold text-white hover:text-purple-200 flex items-center gap-1 transition-colors group/link"
                >
                  <span>Aperçu</span>
                  <ExternalLink class="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <!-- Detailed Project Modal -->
    <Teleport to="body">
      <div 
        v-if="selectedProject" 
        class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        @click.self="closeModal"
      >
        <div class="glass-card border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl bg-[#09090b]/95 text-white">
          <!-- Close Button -->
          <button 
            @click="closeModal" 
            class="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
          >
            <X class="w-5 h-5" />
          </button>

          <!-- Modal Header -->
          <div class="flex items-center gap-3 mb-3">
            <span 
              class="px-3 py-1 rounded-full text-xs font-mono font-medium border"
              :class="selectedProject.status === 'Terminé' 
                ? 'bg-emerald-500/20 text-emerald-200 border-emerald-500/30' 
                : 'bg-amber-500/20 text-amber-200 border-amber-500/30'"
            >
              {{ selectedProject.status }}
            </span>
            <h3 class="text-2xl font-bold text-white flex items-center gap-2">
              <Folder class="w-6 h-6 text-purple-300" />
              {{ selectedProject.title }}
            </h3>
          </div>

          <p class="text-sm text-zinc-300 mb-6 font-light leading-relaxed">
            {{ selectedProject.longDescription || selectedProject.description }}
          </p>

          <!-- Stack Details Table / Grid -->
          <div v-if="selectedProject.stackDetails" class="mb-6">
            <h4 class="text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Cpu class="w-4 h-4 text-cyan-400" />
              Architecture & Stack Technique Détaillée
            </h4>

            <div class="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
              <div 
                v-for="(detail, idx) in selectedProject.stackDetails" 
                :key="detail.domain" 
                class="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 sm:px-4 border-b border-white/5 last:border-0 hover:bg-white/[0.04] transition-colors"
                :class="idx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'"
              >
                <div class="font-semibold text-xs sm:text-sm text-purple-300 sm:w-1/3 mb-1 sm:mb-0 flex items-center gap-1.5">
                  <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {{ detail.domain }}
                </div>
                <div class="text-xs sm:text-sm text-zinc-200 font-mono sm:w-2/3">
                  {{ detail.technologies }}
                </div>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span 
              v-for="tag in selectedProject.tags" 
              :key="tag"
              class="px-3 py-1 rounded-lg text-xs font-medium border"
              :class="getTagColorClass(selectedProject.pastelTagColor)"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Modal Footer Links -->
          <div class="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <a 
              v-if="selectedProject.githubUrl" 
              :href="selectedProject.githubUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-4 py-2 rounded-xl text-xs font-medium bg-white/10 hover:bg-white/20 text-white flex items-center gap-2 transition-colors border border-white/10"
            >
              <Github class="w-4 h-4" />
              <span>Voir le Code Source</span>
            </a>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
