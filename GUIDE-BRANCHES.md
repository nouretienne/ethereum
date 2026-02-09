# 🌿 Guide d'utilisation des branches Git

> 📚 Comment organiser mon apprentissage avec Git et les branches

---

## 🎯 Philosophie

Chaque **chapitre** et chaque **concept** a sa propre branche de travail. Cela me permet de :
- Travailler sur plusieurs chapitres en parallèle
- Garder un historique propre de mon apprentissage
- Pratiquer Git de manière concrète

---

## 📖 Workflow pour un nouveau chapitre

### Étape 1 : Créer une branche pour le chapitre en français

```bash
# Depuis la branche main
git checkout main
git pull

# Créer une nouvelle branche pour le chapitre 2 en français
git checkout -b chapitre-02-fr
```

### Étape 2 : Créer mes notes

```bash
# Créer le dossier
mkdir fr/chapitre-02

# Copier le template
cp fr/template-chapitre.md fr/chapitre-02/notes.md

# Éditer le fichier avec mes notes
# (Utiliser Cursor ou votre éditeur préféré)
```

### Étape 3 : Committer mes changements

```bash
git add fr/chapitre-02/
git commit -m "✍️ Chapitre 2 - Notes en français"
```

### Étape 4 : Traduire en anglais et espagnol

```bash
# Créer branche pour la version anglaise
git checkout -b chapitre-02-en

# Créer le dossier et traduire
mkdir en/chapter-02
cp en/chapter-template.md en/chapter-02/notes.md
# Éditer et traduire...

git add en/chapter-02/
git commit -m "📝 Chapter 2 - English notes"

# Faire pareil pour l'espagnol
git checkout chapitre-02-fr
git checkout -b chapitre-02-es

mkdir es/capitulo-02
cp es/plantilla-capitulo.md es/capitulo-02/notas.md
# Éditer et traduire...

git add es/capitulo-02/
git commit -m "📝 Capítulo 2 - Notas en español"
```

### Étape 5 : Merger tout dans main

```bash
# Merger le français
git checkout main
git merge chapitre-02-fr

# Merger l'anglais
git merge chapitre-02-en

# Merger l'espagnol
git merge chapitre-02-es

# Pousser vers GitHub
git push origin main

# Optionnel : supprimer les branches terminées
git branch -d chapitre-02-fr chapitre-02-en chapitre-02-es
```

---

## 🧩 Workflow pour un concept difficile

Quand je bloque sur un concept et que je demande une explication :

### Étape 1 : Créer une branche pour le concept

```bash
git checkout main
git checkout -b concept-gas
```

### Étape 2 : Créer l'explication

```bash
# Copier le template
cp concepts/template-concept.md concepts/gas.md

# Mon assistant Cursor va remplir ce fichier avec une explication détaillée
# en 3 langues (FR/EN/ES)
```

### Étape 3 : Lier le concept au chapitre

```bash
# Éditer le fichier du chapitre pour ajouter un lien vers l'explication
# Par exemple dans fr/chapitre-03/notes.md :
# "Voir [Explication détaillée : Gas](../concepts/gas.md)"
```

### Étape 4 : Committer et merger

```bash
git add concepts/gas.md
git commit -m "🧩 Explication détaillée du concept Gas (FR/EN/ES)"

git checkout main
git merge concept-gas
git push origin main

# Optionnel : supprimer la branche
git branch -d concept-gas
```

---

## 📊 Vue d'ensemble des branches

```
main (stable, version validée)
  |
  ├── chapitre-01-fr (notes chapitre 1 français) → merged ✅
  ├── chapitre-01-en (notes chapitre 1 anglais) → merged ✅
  ├── chapitre-01-es (notes chapitre 1 espagnol) → merged ✅
  |
  ├── chapitre-02-fr (en cours...)
  ├── chapitre-02-en (en attente)
  ├── chapitre-02-es (en attente)
  |
  ├── concept-gas (explication détaillée) → merged ✅
  └── concept-smart-contracts (en cours...)
```

---

## 🚀 Commandes Git essentielles

| Commande | Usage |
|----------|-------|
| `git checkout main` | Retourner à la branche principale |
| `git checkout -b nom-branche` | Créer et changer vers une nouvelle branche |
| `git branch` | Voir toutes les branches locales |
| `git branch -a` | Voir toutes les branches (locales + distantes) |
| `git merge nom-branche` | Fusionner une branche dans la branche actuelle |
| `git branch -d nom-branche` | Supprimer une branche locale (après merge) |
| `git status` | Voir l'état des fichiers |
| `git add .` | Ajouter tous les fichiers modifiés |
| `git commit -m "message"` | Créer un commit avec un message |
| `git push origin main` | Pousser la branche main vers GitHub |
| `git pull` | Récupérer les derniers changements de GitHub |

---

## 💡 Bonnes pratiques

### Messages de commit clairs

```bash
✅ Bon : "✍️ Chapitre 3 - Notes sur les smart contracts (FR)"
❌ Mauvais : "update"

✅ Bon : "🧩 Ajout explication détaillée du Gas (FR/EN/ES)"
❌ Mauvais : "added file"

✅ Bon : "🐛 Correction typo dans chapitre 2"
❌ Mauvais : "fix"
```

### Émojis pour les commits (optionnel)

- ✍️ `:writing_hand:` - Nouvelles notes de chapitre
- 🧩 `:puzzle_piece:` - Explication de concept
- 🌍 `:globe_with_meridians:` - Traduction
- 🐛 `:bug:` - Correction d'erreur
- 📝 `:memo:` - Mise à jour documentation
- 🚀 `:rocket:` - Nouvelle fonctionnalité

### Garder main propre

- Ne jamais travailler directement sur `main`
- Toujours créer une branche pour chaque tâche
- Merger dans `main` seulement quand c'est terminé et relu

---

## ❓ Que faire si...

### Je veux voir mes branches

```bash
git branch
```

### Je suis perdu, je ne sais plus sur quelle branche je suis

```bash
git status
# Affiche la branche actuelle et l'état des fichiers
```

### Je veux abandonner une branche

```bash
git checkout main
git branch -D nom-branche-a-supprimer
```

### J'ai modifié des fichiers mais je veux changer de branche

```bash
# Option 1 : Committer d'abord
git add .
git commit -m "Work in progress"
git checkout autre-branche

# Option 2 : Sauvegarder temporairement (stash)
git stash
git checkout autre-branche
# Plus tard, pour récupérer :
git stash pop
```

---

## 🎓 En résumé

1. **Une branche = une tâche** (un chapitre, un concept)
2. **Main = version stable** (seulement du contenu validé)
3. **Committer souvent** avec des messages clairs
4. **Merger quand c'est fini** et relu
5. **Pousser régulièrement** vers GitHub

---

*🌿 Git n'est pas compliqué, c'est juste de la pratique !*
