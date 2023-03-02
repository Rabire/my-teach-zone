# Présentation

Est une application permettant à des profs gérer ses promos d'étudiants et cours. Elle a été réalisée

Accédez au projet sur [my-teach-zone.rabire.com](my-teach-zone.rabire.com)

## Déploiement

L'appli est dockerizee et hébergée sur un vps linux

## Projet

Tous les commits respectent cette [convention](https://www.conventionalcommits.org/en/v1.0.0/).

Les commits sont liés à une issue Github et visible dans un [kanban](https://github.com/users/Rabire/projects/2/views/1).

# Stack technique

## Chore, CSS et TS

L'application utilise [Tailwind css](https://tailwindcss.com/) pour styliser mes composants.

- Écriture de CSS plus rapide
- Bonnes pratiques css
- Énormément de ressources dans la documentation et de la communauté

Le projet a été créé en TypeScript et générée avec [pnpm](https://pnpm.io/fr/) via [vite](https://vitejs.dev/).

- Plus rapide
- Plus fiable
- Plus moderne

## BAAS

J'ai choisi [Supabase](https://supabase.com/) a Firebase pour les raisons suivantes :

- Peut être dockerisee et donc hébergée soi-même
- Setup plus simple
- Opensource
- Données dans une structure SQL

## Store

J'ai utilisé [nano store](https://github.com/nanostores/nanostores) pour partager des states dans toute l'application.

- Librairie a la mode en ce moment
- Gestion plus simple de states partages (comparée au contextes React)

## Gestion de formulaires

La librairie [React hook form](https://react-hook-form.com/) me permet de gérer les nombreux formulaires parfois complexes plus facilement. (Validation et soumission)

## Affichage des alertes

La librairie [React toastify](https://fkhadra.github.io/react-toastify/introduction) me permet d'afficher facilement des alertes.
