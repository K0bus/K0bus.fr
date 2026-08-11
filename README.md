<div align="center">

# 🚀 k0bus.fr — Portfolio Web Modern & Minimaliste

**Portfolio statique haute performance, réactif et ultra-clean conçu en Vue 3, Vite et Tailwind CSS**

[![Vue 3](https://img.shields.io/badge/Vue-3.4-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide-Vue-F59E0B?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

---

</div>

## 📌 Présentation & Vision

**k0bus.fr** est la vitrine numérique de **Tristan Toutain (k0bus)**, développeur Full-Stack **100% autodidacte et passionné par le code depuis son plus jeune âge (10+ ans d'expérience)**.

Cette application web a été pensée pour offrir une expérience utilisateur ultra-fluide, élégante et sans compromis :
- 🎨 **Design Glassmorphism Modern** : Arrière-plan sombre (`#09090b`), effets de flou translucides, typographie moderne et palettes néon apaisantes.
- ⚡ **Performance Éclair** : Bundling optimisé via **Vite 5**, score Lighthouse maximal et empreinte mémoire minimale.
- 🏗️ **Modale d'Architecture Technique Détaillée** : Présentation interactive du découpage technique complet pour chaque projet (dont *Feedcraft*, *AO Silvermind*, *kBoard*, etc.).
- 🐳 **Conteneurisé & Autohébergé** : Architecture Docker Multi-stage sur serveur web Nginx Alpine, optimisée pour un déploiement continu sur NAS via **Arcane**.

---

## ✨ Fonctionnalités Principales

- 👤 **Section Hero & Profil Autodidacte** :
  - Avatar avec anneau néon pastel dynamique.
  - Tagline & Bio mettant à l'honneur **10+ ans de passion et d'expérimentation autonome**.
  - Liens sociaux instantanés (GitHub, LinkedIn, Email).
- 💡 **Section À Propos & Piliers d'Architecture** :
  - Focus sur la sobriété numérique, les architectures homelab et le typage rigoureux TypeScript.
- 🛠️ **Stack Technique Centralisée (Cartes de Compétences)** :
  - Catégorisation claire : *Frontend Development*, *Backend, APIs & IA*, *DevOps & Infrastructure*, *Bases de Données & ORM*.
  - Badges personnalisés avec effets de surbrillance néon selon le domaine.
- 📁 **Réalisations & Projets Phares avec Modale Stack** :
  - Affichage en grille glassmorphic des projets open-source.
  - Bouton interactif **"Stack Détaillée"** ouvrant une modale complète détaillant chaque couche applicative (Frontend, Backend API, Worker / Queue, IA Gemini, Base de données, Bot Discord, Monorepo, Docker).
- 📱 **Expérience Mobile & Responsive** :
  - Navigation réactive avec menu mobile personnalisé et lissage des transitions au défilement.
- 🎬 **Directive d'Animation au Scroll (`v-reveal`)** :
  - Apparition progressive des éléments au fur et me mesure du défilement grâce à un `IntersectionObserver` léger et natif.

---

## 🏗️ Architecture du Projet

```
k0bus_fr/
├── src/
│   ├── components/
│   │   ├── Navbar.vue          # Barre de navigation fixe avec effet glassmorphism
│   │   ├── HeroSection.vue     # En-tête principal, avatar, bio & métriques
│   │   ├── AboutSection.vue    # Section philosophie & piliers techniques
│   │   ├── StackSection.vue    # Grille centralisée des compétences & badges
│   │   ├── ProjectsSection.vue # Cartes de projets & modale interactive de stack
│   │   └── Footer.vue          # Pied de page & bouton de retour en haut
│   ├── data/
│   │   └── portfolio.ts        # Source de vérité typée (Profil, Réseaux, Projets, Stack)
│   ├── directives/
│   │   └── reveal.ts           # Directive Vue 3 pour l'animation au scroll (v-reveal)
│   ├── App.vue                 # Composant racine orchestrateur
│   ├── main.ts                 # Point d'entrée de l'application Vue
│   └── style.css               # Design system Tailwind CSS & classes glassmorphism
├── public/                     # Assets statiques (Logos, images de projets)
├── Dockerfile                  # Build multi-stage Node 20 -> Nginx Alpine
├── docker-compose.yml          # Stack Docker Compose pour la production local/NAS
├── nginx.conf                  # Configuration Nginx optimisée pour Single Page Application (SPA)
├── tailwind.config.js          # Configuration des couleurs et thèmes Tailwind
├── tsconfig.json               # Configuration TypeScript
├── vite.config.ts              # Configuration du bundler Vite
└── package.json                # Dépendances du projet
```

---

## 🛠️ Stack Technique

| Domaine | Technologie | Usage |
| :--- | :--- | :--- |
| **Framework UI** | [Vue 3](https://vuejs.org/) (Composition API) | Logique réactive, composants réutilisables & directives |
| **Tooling & Build** | [Vite 5](https://vitejs.dev/) | Serveur de dév instantané & compilation optimisée |
| **Langage** | [TypeScript 5](https://www.typescriptlang.org/) | Typer les données du portfolio (`PortfolioData`, `Project`, `StackDetail`) |
| **Styling & Design** | [Tailwind CSS 3](https://tailwindcss.com/) | Design tokens, thèmes sombres & effets glassmorphism |
| **Iconographie** | [Lucide Vue Next](https://lucide.dev/) | Icônes SVG légères et vectorielles |
| **Serveur Web Prod** | [Nginx Alpine](https://hub.docker.com/_/nginx) | Servir les assets statiques compilés avec routage SPA |
| **Conteneurisation** | [Docker](https://www.docker.com/) & Docker Compose | Déploiement isolé et conteneurisé sur NAS Arcane |

---

## 🚀 Guide de Démarrage Rapide (Développement Local)

### 1. Prérequis

- **Node.js** `>= 20.0.0`
- **npm** ou **pnpm**

### 2. Installation des Dépendances

```bash
git clone https://github.com/K0bus/K0bus.fr.git
cd K0bus.fr
npm install
```

### 3. Lancer le Serveur de Développement

```bash
npm run dev
```

L'application est immédiatement disponible sur `http://localhost:5173` (ou le port indiqué par Vite).

### 4. Compiler pour la Production (Type-Check + Build)

```bash
npm run build
```

Les fichiers compilés prêts à être déployés seront générés dans le dossier `./dist`.

---

## 🐳 Déploiement Docker (Production & NAS Homelab)

Le projet intègre un `Dockerfile` multi-stage (Node 20 Alpine pour la compilation + Nginx Alpine pour le Runtime) permettant une image minimale et sécurisée.

### Lancer via Docker Compose

```bash
docker compose up -d --build
```

Par défaut, l'application sera accessible sur le port **8080** (personnalisable via la variable `PORT=8080`).

### Configuration Nginx (`nginx.conf`)
Le serveur Nginx prend en charge la gestion du cache des ressources statiques et redirige toutes les routes vers `index.html` pour garantir un bon fonctionnement du SPA.

---

## ⚙️ Personnaliser le Contenu (`portfolio.ts`)

Pour mettre à jour les informations du portfolio (ajouter un projet, modifier vos compétences ou mettre à jour la stack d'un projet), modifiez directement le fichier typé [`src/data/portfolio.ts`](file:///home/k0bus/Projects/k0bus_fr/src/data/portfolio.ts) :

```typescript
export const portfolioData: PortfolioData = {
  profile: {
    name: "k0bus",
    title: "Développeur Full-Stack & Passionné Homelab",
    tagline: "...",
    bio: "...",
  },
  metrics: [ ... ],
  skillCategories: [ ... ],
  projects: [ ... ]
}
```

---

## 👤 Auteur & Contact

**Tristan Toutain (k0bus)**
- 🌐 Portfolio : [k0bus.fr](https://k0bus.fr)
- 🐙 GitHub : [@K0bus](https://github.com/K0bus)
- 💼 LinkedIn : [Tristan Toutain](https://www.linkedin.com/in/tristan-toutain-55183523a/)
- ✉️ Email : [contact@k0bus.fr](mailto:contact@k0bus.fr)

---

<div align="center">
  <sub>Conçu et développé avec ❤️ par k0bus.</sub>
</div>
