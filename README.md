# madebygass.github.io

Frontend Developer | React.js • UI • Performance

## Stack

- **Monorepo** : pnpm workspaces
- **App** : Vite, React 19, TypeScript, Tailwind CSS v4
- **Qualité** : ESLint, Prettier, TypeScript strict

## Monorepo

- **apps/web** — Site portfolio (Vite + React + TypeScript)
- **packages/tsconfig** — Configurations TypeScript partagées

### Prérequis

- Node.js ≥ 20
- [pnpm](https://pnpm.io/) (`npm i -g pnpm`)

### Commandes (à la racine)

```bash
pnpm install
pnpm dev          # Lance l’app web en dev
pnpm build        # Build de l’app web
pnpm preview      # Prévisualise le build
pnpm lint         # Lint tous les packages
pnpm format       # Formate le code (Prettier)
pnpm format:check # Vérifie le format sans modifier
```

### Développement

```bash
cd apps/web && pnpm dev
```

Ou depuis la racine : `pnpm --filter web dev` (alias `pnpm dev`).

### Déploiement (GitHub Pages)

Le build est dans `apps/web/dist/`. Pour GitHub Pages :

1. Build : `pnpm build`
2. Déployer le contenu de `apps/web/dist/` (Actions ou branche `gh-pages`).
