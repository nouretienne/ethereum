# 🌐 Site Web Mastering Ethereum

Site web éducatif interactif pour le projet d'apprentissage "Mastering Ethereum".

## ✨ Fonctionnalités

- 🌍 **Multilingue** : Français, Anglais, Espagnol
- 📚 **Chapitres** : Navigation entre tous les chapitres
- 💡 **Concepts** : Pop-ups interactifs pour les explications détaillées
- 🎨 **Design moderne** : Interface responsive avec Tailwind CSS
- 🌙 **Mode sombre** : Support du dark mode
- 🔍 **Recherche** : Recherche de concepts

## 🚀 Lancement du site en développement

### Prérequis

- Node.js 18+ installé

### Installation et lancement

```bash
# Se placer dans le dossier website
cd website

# Installer les dépendances (première fois seulement)
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur : **http://localhost:3000**

## 🛠️ Technologies utilisées

- **Next.js 15** : Framework React
- **TypeScript** : Typage statique
- **Tailwind CSS** : Styling
- **React Markdown** : Rendu Markdown
- **Headless UI** : Composants accessibles (pop-ups)
- **Lucide React** : Icônes

## 📂 Structure du projet

```
website/
├── app/                      # Pages Next.js (App Router)
│   ├── [locale]/            # Routes multilingues
│   │   ├── page.tsx         # Page d'accueil
│   │   ├── chapters/        # Pages des chapitres
│   │   └── concepts/        # Page des concepts
│   └── api/                 # API Routes
├── components/              # Composants React
│   ├── Navigation.tsx       # Barre de navigation
│   ├── LanguageSwitcher.tsx # Sélecteur de langue
│   └── ConceptPopup.tsx     # Pop-up pour concepts
├── lib/                     # Utilitaires
│   ├── i18n.ts             # Configuration multilingue
│   └── markdown.ts         # Lecture des fichiers Markdown
└── public/                 # Fichiers statiques
```

## 🎨 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.ts` pour changer les couleurs du thème.

### Ajouter une langue

1. Ajoutez la langue dans `lib/i18n.ts`
2. Créez le dossier correspondant à la racine du projet (ex: `de/` pour l'allemand)
3. Le site détectera automatiquement les nouveaux fichiers

## 📝 Ajout de contenu

### Ajouter un nouveau chapitre

Les chapitres sont automatiquement détectés depuis les dossiers :
- `../fr/chapitre-XX/notes.md`
- `../en/chapter-XX/notes.md`
- `../es/capitulo-XX/notas.md`

Créez simplement un nouveau dossier avec un fichier `notes.md` ou `notas.md`.

### Ajouter un nouveau concept

Créez un nouveau fichier dans `../concepts/nom-concept.md` en utilisant le template.

Le concept apparaîtra automatiquement dans la page Concepts et sera cliquable depuis les chapitres via les liens.

## 🚀 Déploiement

### Déployer sur Vercel (Gratuit et recommandé)

1. Poussez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Importez votre repository
4. Configurez le **Root Directory** : `website`
5. Cliquez sur "Deploy"

Votre site sera en ligne en quelques minutes !

### Build de production

```bash
npm run build
npm run start
```

## 🐛 Résolution de problèmes

### Le site ne charge pas les chapitres

Vérifiez que les dossiers `fr/`, `en/`, `es/` existent bien à la racine du projet (un niveau au-dessus de `website/`).

### Erreur au démarrage

Supprimez `node_modules` et `.next` puis réinstallez :

```bash
rm -rf node_modules .next
npm install
npm run dev
```

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation React Markdown](https://github.com/remarkjs/react-markdown)

---

🎓 Happy Learning!
