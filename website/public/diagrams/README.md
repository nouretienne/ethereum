# 🎨 Diagrammes du Glossaire

Ce dossier contient tous les diagrammes SVG exportés depuis Napkin.ai pour le glossaire visuel Ethereum.

## 📝 Comment ajouter un diagramme

1. **Créer le diagramme sur Napkin.ai**
   - Allez sur https://napkin.ai
   - Entrez votre définition/explication
   - Laissez l'IA générer le diagramme visuel

2. **Exporter en SVG**
   - Cliquez sur "Export" ou "Download"
   - Choisissez le format SVG
   - Téléchargez le fichier

3. **Ajouter au projet**
   - Nommez le fichier selon l'ID du terme (ex: `account.svg`, `transaction.svg`)
   - Placez-le dans ce dossier
   - Le chemin sera `/diagrams/[nom-du-fichier].svg`

4. **Rendre interactif (optionnel)**
   - Ouvrez le SVG dans un éditeur de texte
   - Ajoutez des attributs `id` aux éléments cliquables
   - Les IDs doivent correspondre aux IDs des composants dans `glossary-data.json`

## 🔧 Exemple de SVG interactif

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500">
  <!-- Élément cliquable avec un ID -->
  <circle id="address" cx="100" cy="350" r="50" />
  <text x="100" y="355" text-anchor="middle">Address</text>
  
  <!-- Autre élément cliquable -->
  <circle id="balance" cx="100" cy="250" r="50" />
  <text x="100" y="255" text-anchor="middle">Balance</text>
</svg>
```

## ✅ Bonnes pratiques

- **Nommage** : Utilisez des noms en minuscules avec des tirets (kebab-case)
- **Optimisation** : Optimisez les SVG avec SVGO avant de les commiter
- **Taille** : Gardez une taille raisonnable (< 200 KB si possible)
- **Accessibilité** : Ajoutez des `title` et `desc` dans les SVG
- **Cohérence** : Utilisez un style visuel cohérent pour tous les diagrammes

## 📐 Dimensions recommandées

- **ViewBox** : `0 0 600 500` (ratio 6:5)
- **Taille d'exportation** : 1200x1000px minimum
- **Format** : SVG optimisé

## 🎯 Positionnement des composants

Quand vous ajoutez un terme avec `add-glossary-term.js`, vous devez fournir les positions des composants cliquables :

- **x, y** : Coordonnées du centre du cercle (basées sur le viewBox du SVG)
- **radius** : Rayon de la zone cliquable

Exemple pour un diagramme avec viewBox="0 0 600 500" :
- Centre : x=300, y=250
- Haut gauche : x=100, y=150
- Haut droit : x=500, y=150
- Bas gauche : x=100, y=350
- Bas droit : x=500, y=350

## 🔗 Diagrammes disponibles

<!-- Liste générée automatiquement -->
- `account.svg` - Composants d'un compte Ethereum
- `address.svg` - Structure d'une adresse
- `balance.svg` - Gestion du solde
- `nonce.svg` - Compteur de transactions
- `storage.svg` - Stockage des contrats
- `code.svg` - Code des smart contracts

---

💡 **Astuce** : Pour trouver les coordonnées exactes des éléments dans un SVG, ouvrez-le dans un navigateur et utilisez l'inspecteur d'éléments.
