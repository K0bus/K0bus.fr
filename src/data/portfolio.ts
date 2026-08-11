export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Lucide icon name identifier
  username?: string;
}

export interface Skill {
  name: string;
  level?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  badgeColor: 'lavender' | 'mint' | 'cyan' | 'rose' | 'amber';
  skills: Skill[];
}

export interface StackDetail {
  domain: string;
  technologies: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  featured: boolean;
  status: 'Terminé' | 'En développement' | 'Maintenance';
  pastelTagColor?: 'lavender' | 'mint' | 'cyan' | 'rose';
  stackDetails?: StackDetail[];
}

export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    handle: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    status: string;
    availableForWork: boolean;
    avatarUrl: string;
    logoUrl?: string;
  };
  socials: SocialLink[];
  metrics: Metric[];
  skillCategories: SkillCategory[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "k0bus",
    handle: "@k0bus",
    title: "Développeur Full-Stack & Passionné Homelab",
    tagline: "Développeur full-stack 100% autodidacte et passionné par le code depuis mon plus jeune âge, je conçois des applications web fluides, des bots automatisés (IA) et des architectures self-hosted sur NAS.",
    bio: "Développeur full-stack 100% autodidacte et passionné par l'informatique depuis mon plus jeune âge, j'explore et façonne le web avec une curiosité insatiable. Au fil de plus de 10 ans d'expérimentations autonomes et d'apprentissage continu, je développe des architectures complètes allant des bots d'IA/Discord jusqu'aux outils d'analyse économique et plugins de serveurs, avec une infrastructure Docker maîtrisée sur NAS via Arcane.",
    location: "France",
    status: "",
    availableForWork: true,
    avatarUrl: "/personnal.jpg",
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/K0bus",
      icon: "Github",
      username: "github.com/K0bus"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tristan-toutain-55183523a/",
      icon: "Linkedin",
      username: "Tristan Toutain"
    },
    {
      name: "Email",
      url: "mailto:contact@k0bus.fr",
      icon: "Mail",
      username: "contact@k0bus.fr"
    }
  ],
  metrics: [
    {
      label: "Années d'expérience",
      value: "10+",
      subtext: "Conception Web & Architectures"
    },
    {
      label: "Conteneurs Docker",
      value: "20+",
      subtext: "Déployés sur NAS Arcane"
    },
    {
      label: "Projets Open-Source",
      value: "7+",
      subtext: "Repositories GitHub"
    }
  ],
  skillCategories: [
    {
      title: "Frontend Development",
      description: "Interfaces réactives, dynamiques et architectures Nuxt/Vue",
      badgeColor: "lavender",
      skills: [
        { name: "Nuxt 3 & SSR", featured: true },
        { name: "Vue 3 (Composition API)", featured: true },
        { name: "Pinia (State Management)", featured: true },
        { name: "TypeScript", featured: true },
        { name: "Tailwind CSS", featured: true },
        { name: "@vueuse/nuxt & Lucide", featured: true },
        { name: "Vite", featured: true },
        { name: "HTML5 / CSS3 (Glassmorphism)" }
      ]
    },
    {
      title: "Backend, APIs & IA",
      description: "Services serveur, microservices, files de messages et intégrations IA",
      badgeColor: "mint",
      skills: [
        { name: "Fastify (TypeScript)", featured: true },
        { name: "Gemini 2.5 Flash (@google/genai)", featured: true },
        { name: "BullMQ & Redis 7 (Queues)", featured: true },
        { name: "Discord.js v14 & Webhooks", featured: true },
        { name: "Zod & JWT / Cookie Auth", featured: true },
        { name: "Node-cron & Flux RSS", featured: true },
        { name: "Node.js / Express" },
        { name: "Nitro (Nuxt Server Engine)" },
        { name: "Java (SpigotMC / Paper API)" }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      description: "Conteneurisation, monorepos, gestion de cache et hosting NAS",
      badgeColor: "cyan",
      skills: [
        { name: "Docker & Docker Compose", featured: true },
        { name: "pnpm 9 Workspaces", featured: true },
        { name: "Redis 7 (In-Memory Cache)", featured: true },
        { name: "Nginx & PGBouncer", featured: true },
        { name: "Plateforme Arcane (NAS)", featured: true },
        { name: "Linux / Administration Shell" },
        { name: "Media Center & Torrents" }
      ]
    },
    {
      title: "Bases de Données & ORM",
      description: "Modélisation de données, ORM et algorithmes",
      badgeColor: "rose",
      skills: [
        { name: "PostgreSQL 16", featured: true },
        { name: "Prisma ORM 5", featured: true },
        { name: "SQLite / MongoDB" },
        { name: "Algorithmes de calcul & Graph", featured: true },
        { name: "Git & GitHub Workflow" },
        { name: "Postman & Prototypage" }
      ]
    }
  ],
  projects: [
    {
      id: "feedcraft",
      title: "Feedcraft",
      description: "Écosystème automatisé & intelligent de diffusion d'actualités et patch notes gaming vers Discord. Monorepo pnpm avec Dashboard Nuxt 3, API Fastify, Worker BullMQ/Redis, Bot Discord.js v14 et résumés/traductions IA par Google Gemini 2.5 Flash.",
      longDescription: "FeedCraft collecte automatiquement les news et patch notes de jeux vidéo (Steam, Epic Games, flux RSS), les traduit et les résume grâce à Google Gemini 2.5 Flash, puis les distribue sous forme d'embeds Discord personnalisés avec système de cache PostgreSQL/Prisma.",
      tags: ["Nuxt 3", "Fastify", "BullMQ", "Gemini 2.5 Flash", "PostgreSQL 16", "Prisma 5", "Discord.js v14", "Docker"],
      githubUrl: "https://github.com/K0bus/feedcraft",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      featured: true,
      status: "Terminé",
      pastelTagColor: "mint",
      stackDetails: [
        { domain: "Frontend", technologies: "Nuxt 3 (Vue 3), Tailwind CSS, Pinia, Lucide Vue, @vueuse/nuxt" },
        { domain: "Backend API", technologies: "Fastify (TypeScript), @fastify/jwt, @fastify/cors, @fastify/cookie, Zod" },
        { domain: "Worker / Queue", technologies: "BullMQ, Redis 7, Node-cron, rss-parser, node-fetch" },
        { domain: "Intelligence Artificielle", technologies: "Google Gemini 2.5 Flash (@google/genai), Prompts optimisés gaming" },
        { domain: "Base de Données", technologies: "PostgreSQL 16, Prisma ORM 5" },
        { domain: "Bot Discord", technologies: "Discord.js v14" },
        { domain: "Gestionnaire de Paquets", technologies: "pnpm 9 (Workspaces)" },
        { domain: "Conteneurisation", technologies: "Docker & Docker Compose" }
      ]
    },
    {
      id: "ao-silvermind",
      title: "AO Silvermind",
      description: "Plateforme d'analyse économique complète du marché d'Albion Online (calculateur d'arbres de craft, routes marchandes et optimisation de profit en temps réel).",
      tags: ["Nuxt 3", "Nitro", "Pinia", "PostgreSQL", "Prisma v7", "Redis", "BullMQ"],
      githubUrl: "https://github.com/K0bus/ao-silvermind",
      image: "/silvermind-logo.png",
      featured: true,
      status: "Terminé",
      pastelTagColor: "lavender"
    },
    {
      id: "kboard",
      title: "kBoard",
      description: "Dashboard complet pour NAS intégrant un Media Center ainsi que la détection et le nettoyage automatique de fichiers et torrents orphelins.",
      tags: ["Vue 3", "Node.js", "Docker API", "NAS Arcane"],
      githubUrl: "https://github.com/K0bus/kBoard",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      featured: true,
      status: "En développement",
      pastelTagColor: "cyan"
    },
    {
      id: "mybreakify",
      title: "MyBreakify",
      description: "Outil de gestion de production permettant la régulation et la transmission paramétrable des demandes de pauses au sein d'un call center.",
      tags: ["Vue.js", "Node.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/K0bus/MyBreakify",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
      featured: true,
      status: "Terminé",
      pastelTagColor: "rose"
    },
    {
      id: "k0bus-fr",
      title: "K0bus.fr",
      description: "Portfolio statique ultra-clean en Vue 3, Vite et Tailwind CSS conteneurisé avec Nginx pour un déploiement fluide sur NAS via Docker Arcane.",
      tags: ["Vue 3", "TypeScript", "Tailwind CSS", "Docker Arcane"],
      githubUrl: "https://github.com/K0bus/K0bus.fr",
      demoUrl: "https://k0bus.fr",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      featured: true,
      status: "Terminé",
      pastelTagColor: "lavender"
    },
    {
      id: "creative-manager",
      title: "CreativeManager",
      description: "Plugin Java haute performance pour serveurs SpigotMC / Paper sécurisant et encadrant l'utilisation du mode Créatif sur Minecraft.",
      tags: ["Java", "SpigotMC API", "Paper", "Security"],
      githubUrl: "https://github.com/K0bus/CreativeManager",
      image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800",
      featured: true,
      status: "Terminé",
      pastelTagColor: "mint"
    },
    {
      id: "koby",
      title: "Koby",
      description: "Bot Discord complet assurant l'administration, la modération, la gestion des membres, les rôles automatisés et un système de tickets.",
      tags: ["Node.js", "Discord.js", "TypeScript", "MongoDB"],
      githubUrl: "https://github.com/K0bus/Koby",
      image: "https://images.unsplash.com/photo-1614680376593-902f749f7b6d?auto=format&fit=crop&q=80&w=800",
      featured: true,
      status: "Terminé",
      pastelTagColor: "cyan"
    }
  ]
};
