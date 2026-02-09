# 📚 Glossaire Visuel Interactif Ethereum

Un système de glossaire moderne et interactif utilisant des diagrammes visuels de Napkin.ai pour faciliter l'apprentissage des concepts Ethereum.

## 🎯 Fonctionnalités

### ✨ Ce qui est disponible

- **Diagrammes interactifs** : Visualisez les concepts avec des schémas clairs
- **Navigation intuitive** : Cliquez sur les composants pour naviguer entre les termes
- **Multilingue** : Support complet FR/EN/ES
- **Responsive** : Fonctionne sur mobile, tablette et desktop
- **Zoom & Pan** : Contrôlez l'affichage des diagrammes
- **Termes liés** : Découvrez les concepts connexes
- **Niveaux de difficulté** : Débutant, Intermédiaire, Avancé
- **Recherche** : Trouvez rapidement un terme (à venir)

## 🚀 Démarrage rapide

### Voir le glossaire

1. **Démarrer le serveur de développement**
   ```bash
   cd website
   npm install
   npm run dev
   ```

2. **Ouvrir dans le navigateur**
   - Français : http://localhost:3000/fr/glossary
   - English : http://localhost:3000/en/glossary
   - Español : http://localhost:3000/es/glossary

### Ajouter un nouveau terme

```bash
node scripts/add-glossary-term.js
```

Suivez les instructions interactives !

## 📖 Guide d'utilisation

### 1. Créer un diagramme sur Napkin.ai

1. Allez sur **https://napkin.ai**
2. Écrivez votre définition/explication du concept
3. Laissez l'IA générer le diagramme
4. Personnalisez si nécessaire
5. Exportez en **SVG**

### 2. Ajouter le terme au glossaire

```bash
node scripts/add-glossary-term.js
```

Le script vous demandera :
- **Nom du terme** (dans les 3 langues)
- **Descriptions** (courtes mais complètes)
- **Niveau de difficulté**
- **Nom du fichier SVG**
- **URL Napkin.ai** (optionnel)
- **Composants cliquables** avec leurs positions
- **Termes liés**

### 3. Ajouter le diagramme SVG

Placez votre fichier SVG dans :
```
website/public/diagrams/[nom-du-terme].svg
```

### 4. Tester

```bash
cd website
npm run dev
```

Visitez : `http://localhost:3000/[locale]/glossary/[term-id]`

## 🎨 Workflow complet avec Napkin.ai

```
┌─────────────────────┐
│   1. Napkin.ai      │
│   Créer diagramme   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   2. Export SVG     │
│   Télécharger       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   3. Script         │
│   add-glossary-term │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   4. Placer SVG     │
│   public/diagrams/  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   5. Test & Deploy  │
│   npm run dev       │
└─────────────────────┘
```

## 📁 Structure des fichiers

```
Ethereum/
├── website/
│   ├── app/
│   │   └── [locale]/
│   │       └── glossary/
│   │           ├── page.tsx              # Liste des termes
│   │           └── [term]/
│   │               └── page.tsx          # Page de détail
│   ├── components/
│   │   └── InteractiveDiagram.tsx        # Composant de diagramme
│   ├── lib/
│   │   ├── glossary.ts                   # Fonctions utilitaires
│   │   └── glossary-data.json            # Données des termes
│   ├── public/
│   │   └── diagrams/                     # Diagrammes SVG
│   └── types/
│       └── glossary.d.ts                 # Types TypeScript
├── scripts/
│   ├── add-glossary-term.js              # Script d'ajout
│   └── README.md                         # Documentation scripts
└── GLOSSAIRE-VISUEL.md                   # Ce fichier
```

## 🔧 Architecture technique

### Stack

- **Framework** : Next.js 16 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Icons** : Lucide React
- **Diagrammes** : SVG (de Napkin.ai)

### Composants principaux

#### `InteractiveDiagram.tsx`

Affiche le diagramme avec :
- Zoom in/out
- Reset du zoom
- Survol pour voir les descriptions
- Clic pour naviguer vers les termes liés
- Lien vers Napkin.ai

#### `glossary.ts`

Fonctions utilitaires :
- `getAllTerms()` : Récupère tous les termes
- `getTerm(id)` : Récupère un terme spécifique
- `getTermTitle(term, locale)` : Titre localisé
- `getTermDescription(term, locale)` : Description localisée
- `getRelatedTerms(termId)` : Termes liés
- `searchTerms(query, locale)` : Recherche (à implémenter)

### Format des données

```typescript
interface GlossaryTerm {
  id: string;
  title: { fr: string; en: string; es: string };
  description: { fr: string; en: string; es: string };
  diagram: string;
  napkinUrl?: string;
  components: ComponentLink[];
  relatedTerms: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface ComponentLink {
  id: string;
  position: { x: number; y: number; radius: number };
}
```

## 🎯 Rendre un diagramme interactif

### Méthode 1 : Modifier le SVG

Éditez votre SVG pour ajouter des IDs :

```xml
<svg viewBox="0 0 600 500">
  <!-- Ajoutez un id aux éléments cliquables -->
  <g id="address">
    <circle cx="100" cy="350" r="50" />
    <text x="100" y="355">Address</text>
  </g>
  
  <g id="balance">
    <circle cx="100" cy="250" r="50" />
    <text x="100" y="255">Balance</text>
  </g>
</svg>
```

### Méthode 2 : Coordonnées dans le JSON

Ajoutez les positions dans `glossary-data.json` :

```json
{
  "account": {
    "components": [
      {
        "id": "address",
        "position": { "x": 100, "y": 350, "radius": 50 }
      },
      {
        "id": "balance",
        "position": { "x": 100, "y": 250, "radius": 50 }
      }
    ]
  }
}
```

Le composant `InteractiveDiagram` créera automatiquement les zones cliquables !

## 📊 Exemple complet

### 1. Créer "Transaction" sur Napkin.ai

Texte à utiliser :
```
Une transaction Ethereum contient :
1. From Address - L'adresse de l'émetteur
2. To Address - L'adresse du destinataire
3. Value - Le montant à transférer
4. Gas - Les frais de transaction
5. Nonce - Le compteur de transactions
6. Signature - La signature cryptographique
```

### 2. Ajouter avec le script

```bash
$ node scripts/add-glossary-term.js

📝 Nom du terme (en anglais): Transaction
🇫🇷 Nom en français: Transaction
🇪🇸 Nom en espagnol: Transacción

# ... suite des questions ...
```

### 3. Sauvegarder le SVG

```
website/public/diagrams/transaction.svg
```

### 4. Résultat

- Page : `/fr/glossary/transaction`
- Diagramme interactif avec 6 composants cliquables
- Navigation fluide vers les termes liés

## 🌟 Bonnes pratiques

### Création de contenu

✅ **À faire**
- Descriptions courtes (1-2 phrases max)
- Titres clairs et concis
- Diagrammes simples et lisibles
- Liens vers termes connexes
- Exemples visuels

❌ **À éviter**
- Descriptions trop longues
- Trop de composants (max 7-8)
- Diagrammes surchargés
- Termes orphelins (sans liens)

### Technique

✅ **À faire**
- Optimiser les SVG
- Tester sur mobile
- Vérifier tous les liens
- Commit les fichiers SVG

❌ **À éviter**
- SVG trop lourds (>200KB)
- IDs en double
- Liens cassés
- Positions incorrectes

## 🚀 Fonctionnalités futures

### Phase 2
- [ ] Recherche en temps réel
- [ ] Filtrage par niveau
- [ ] Export PDF des diagrammes
- [ ] Mode sombre complet

### Phase 3
- [ ] Animations entre les transitions
- [ ] Graphe de relations entre termes
- [ ] Mode comparaison (2 termes côte à côte)
- [ ] Favoris et historique

### Phase 4
- [ ] Quiz interactifs
- [ ] Parcours d'apprentissage
- [ ] Progression utilisateur
- [ ] Badges et accomplissements

## 🐛 Dépannage

### Le terme ne s'affiche pas

1. Vérifiez le JSON : `website/lib/glossary-data.json`
2. Validez la syntaxe JSON
3. Redémarrez le serveur

### Le diagramme est cassé

1. Vérifiez le chemin : `/diagrams/[nom].svg`
2. Vérifiez que le fichier existe
3. Testez le SVG dans le navigateur

### Les clics ne fonctionnent pas

1. Vérifiez les IDs des composants
2. Vérifiez les positions (x, y, radius)
3. Inspectez le SVG dans DevTools

## 📚 Ressources

- [Napkin.ai](https://napkin.ai) - Créateur de diagrammes
- [Next.js Docs](https://nextjs.org/docs) - Framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG) - Format SVG

## 🤝 Contribution

Pour ajouter des termes au glossaire :

1. Forkez le projet
2. Créez le diagramme sur Napkin.ai
3. Ajoutez le terme avec le script
4. Commitez (JSON + SVG)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

Made with ❤️ and 🎨 by the Ethereum Learning Community
