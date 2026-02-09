# 🌐 Guide du Site Web Éducatif

> Comment utiliser et personnaliser votre site web interactif Mastering Ethereum

---

## 🎯 Vue d'ensemble

Votre projet contient maintenant **deux parties** :

```
ethereum/
├── fr/en/es/concepts/     # 📝 Vos notes Markdown (existant)
└── website/               # 🌐 Le site web (nouveau !)
```

Le site web **lit automatiquement** vos fichiers Markdown et les affiche de manière interactive !

---

## 🚀 Lancer le site localement

### Première fois :

```bash
# 1. Aller dans le dossier website
cd website

# 2. Installer les dépendances
npm install

# 3. Lancer le site
npm run dev
```

### Les fois suivantes :

```bash
cd website
npm run dev
```

**Le site s'ouvre sur : http://localhost:3000** 🎉

---

## ✨ Fonctionnalités du site

### 1. **Navigation multilingue** 🌍

Cliquez sur le sélecteur de langue en haut à droite :
- 🇫🇷 Français
- 🇬🇧 English  
- 🇪🇸 Español

Le site change automatiquement de langue et affiche le contenu correspondant !

### 2. **Chapitres interactifs** 📚

- Liste de tous vos chapitres
- Affichage du contenu Markdown formaté
- Difficulté en étoiles ⭐
- Navigation fluide

### 3. **Pop-ups de concepts** 💡

Quand vous cliquez sur un lien vers un concept dans un chapitre, **une pop-up s'ouvre** avec l'explication détaillée !

**Exemple** :
```markdown
Le [Gas](../concepts/gas.md) est nécessaire...
                    ↓
            [Pop-up s'ouvre] 💡
```

### 4. **Recherche de concepts** 🔍

Sur la page Concepts, utilisez la barre de recherche pour trouver rapidement un concept.

### 5. **Responsive** 📱

Le site fonctionne parfaitement sur :
- 💻 Desktop
- 📱 Mobile
- 📱 Tablet

---

## 📝 Workflow d'apprentissage

### Scénario typique :

1. **Vous lisez** "Mastering Ethereum"

2. **Vous créez** vos notes dans `fr/chapitre-XX/notes.md`

3. **Vous bloquez** sur un concept (ex: le Gas)

4. **Vous me demandez** : "Explique-moi le Gas"

5. **Je crée** `concepts/gas.md` avec explications FR/EN/ES

6. **Vous lancez** le site web :
   ```bash
   cd website
   npm run dev
   ```

7. **Vous voyez** vos notes formatées et les concepts cliquables ! 🎉

8. **Vous commitez** et pushez tout :
   ```bash
   git add .
   git commit -m "Ajout chapitre X et concept Gas"
   git push origin main
   ```

---

## 🎨 Personnalisation

### Changer les couleurs

Éditez `website/tailwind.config.ts` :

```typescript
colors: {
  primary: '#3B82F6',  // Changer le bleu
  secondary: '#8B5CF6', // Changer le violet
}
```

### Modifier le logo

Changez l'emoji dans `website/components/Navigation.tsx` :

```typescript
<span className="text-blue-600">⟠</span>  // ← Changez ça
```

### Ajouter une section

Créez un nouveau fichier dans `website/app/[locale]/ma-section/page.tsx`

---

## 📦 Structure technique

### Comment ça marche ?

1. **Vos fichiers Markdown** restent dans `fr/`, `en/`, `es/`, `concepts/`
2. **Le site web** (dans `website/`) les **lit** via `lib/markdown.ts`
3. **React Markdown** convertit le Markdown en HTML stylé
4. **Tailwind CSS** rend tout beau ✨

### Les fichiers importants :

| Fichier | Rôle |
|---------|------|
| `lib/markdown.ts` | Lit vos fichiers .md |
| `lib/i18n.ts` | Gère les 3 langues |
| `components/Navigation.tsx` | Menu de navigation |
| `components/ConceptPopup.tsx` | Pop-ups interactifs |
| `app/[locale]/page.tsx` | Page d'accueil |
| `app/[locale]/chapters/` | Pages des chapitres |
| `app/[locale]/concepts/` | Page des concepts |

---

## 🚀 Mettre le site en ligne (Vercel)

### Étape 1 : Préparer

```bash
# Assurer que tout est commité
git add .
git commit -m "Site web prêt"
git push origin main
```

### Étape 2 : Déployer sur Vercel

1. Allez sur https://vercel.com
2. Connectez votre compte GitHub
3. Cliquez "New Project"
4. Sélectionnez votre repo `ethereum`
5. **Important** : Configurez le **Root Directory** → `website`
6. Cliquez "Deploy"

⏱️ **2 minutes plus tard** : Votre site est en ligne ! 🎉

Vercel vous donne une URL comme : `https://ethereum-xxx.vercel.app`

### Bonus : Domaine personnalisé

Sur Vercel, vous pouvez ajouter votre propre domaine (ex: `ethereum.monsite.com`)

---

## 🐛 Dépannage

### Le site ne trouve pas mes chapitres

**Problème** : Les chapitres n'apparaissent pas sur le site.

**Solution** :
1. Vérifiez que vos dossiers sont bien organisés :
   ```
   fr/chapitre-01/notes.md  ← Bon
   en/chapter-01/notes.md   ← Bon
   es/capitulo-01/notas.md  ← Bon
   ```
2. Relancez le serveur :
   ```bash
   # Ctrl+C pour arrêter
   npm run dev  # Relancer
   ```

### Erreur "Module not found"

**Solution** :
```bash
cd website
rm -rf node_modules .next
npm install
npm run dev
```

### Le pop-up de concept ne s'ouvre pas

**Problème** : Clic sur concept = rien ne se passe.

**Solution** : Vérifiez que le fichier existe dans `concepts/nom-concept.md`

---

## 💡 Astuces

### 1. **Hot Reload** 🔥

Pendant que `npm run dev` tourne :
- Modifiez un fichier `.md`
- Sauvegardez (Ctrl+S)
- Le site se **recharge automatiquement** ! 

### 2. **Mode sombre** 🌙

Le site détecte automatiquement les préférences système. Pour forcer :
- Windows : Paramètres > Personnalisation > Couleurs
- Mac : Préférences Système > Général > Apparence

### 3. **Emojis dans les titres** 🎨

Utilisez des emojis dans vos titres Markdown :
```markdown
# 🚀 Chapitre 5 : Déploiement de Smart Contracts
```

Ils s'afficheront sur le site !

---

## 🎓 Prochaines étapes

Une fois que votre site fonctionne :

1. ✅ **Continuez** à ajouter des chapitres et concepts
2. 🌐 **Partagez** l'URL Vercel avec vos amis
3. 📱 **Testez** sur mobile
4. 🎨 **Personnalisez** les couleurs à votre goût
5. 🚀 **Ajoutez** de nouvelles fonctionnalités (me demander !)

---

## 📞 Besoin d'aide ?

Demandez-moi :
- "Comment ajouter une nouvelle page ?"
- "Comment changer le design ?"
- "Comment ajouter [fonctionnalité] ?"
- "Le site ne marche pas, aide-moi !"

---

**🎉 Félicitations ! Vous avez un site web éducatif interactif !**

*Bon apprentissage avec Ethereum !* 🚀
