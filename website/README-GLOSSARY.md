# 📚 Glossaire Visuel Interactif

## 🚀 Démarrage rapide

### Installation et lancement

```bash
cd website
npm install
npm run dev
```

Ouvrez http://localhost:3000/fr/glossary

## 📁 Structure des fichiers

```
website/
├── app/[locale]/glossary/
│   ├── page.tsx                    # Liste tous les termes
│   └── [term]/page.tsx             # Page détail d'un terme
├── components/
│   └── InteractiveDiagram.tsx      # Composant de diagramme
├── lib/
│   ├── glossary.ts                 # Fonctions utilitaires
│   └── glossary-data.json          # Données des termes
├── public/diagrams/                # Diagrammes SVG
├── types/
│   └── glossary.d.ts              # Types TypeScript
└── README-GLOSSARY.md              # Ce fichier
```

## ➕ Ajouter un nouveau terme

### Méthode rapide (recommandée)

```bash
node scripts/add-glossary-term.js
```

### Méthode manuelle

1. **Éditez `lib/glossary-data.json`**

```json
{
  "mon-terme": {
    "id": "mon-terme",
    "title": {
      "fr": "Mon Terme",
      "en": "My Term",
      "es": "Mi Término"
    },
    "description": {
      "fr": "Description en français",
      "en": "English description",
      "es": "Descripción en español"
    },
    "diagram": "/diagrams/mon-terme.svg",
    "napkinUrl": "https://napkin.ai/...",
    "components": [
      {
        "id": "composant-1",
        "position": { "x": 100, "y": 200, "radius": 50 }
      }
    ],
    "relatedTerms": ["autre-terme"],
    "level": "beginner"
  }
}
```

2. **Ajoutez le diagramme SVG**

Placez votre fichier dans `public/diagrams/mon-terme.svg`

3. **Testez**

```bash
npm run dev
```

Visitez `/fr/glossary/mon-terme`

## 🎨 Workflow avec Napkin.ai

### Étape 1 : Créer le diagramme

1. Allez sur https://napkin.ai
2. Entrez votre texte de définition
3. Générez le diagramme
4. Personnalisez si nécessaire

### Étape 2 : Exporter

1. Cliquez sur "Export"
2. Choisissez format SVG
3. Téléchargez

### Étape 3 : Intégrer

```bash
# Sauvegardez le SVG
cp ~/Downloads/diagram.svg public/diagrams/mon-terme.svg

# Ajoutez le terme
node scripts/add-glossary-term.js
```

### Étape 4 : Rendre interactif

#### Option A : Modifier le SVG

Éditez le SVG pour ajouter des IDs aux éléments cliquables :

```xml
<svg viewBox="0 0 600 500">
  <g id="composant-1">
    <circle cx="100" cy="200" r="50"/>
    <text>Composant 1</text>
  </g>
</svg>
```

#### Option B : Utiliser les positions

Le composant `InteractiveDiagram` crée automatiquement les zones cliquables selon les positions définies dans le JSON.

## 🛠️ API du composant

### InteractiveDiagram

```typescript
import InteractiveDiagram from '@/components/InteractiveDiagram';

<InteractiveDiagram 
  term={term}           // GlossaryTerm object
  locale={locale}       // 'fr' | 'en' | 'es'
  allTerms={allTerms}   // Record<string, GlossaryTerm>
/>
```

**Fonctionnalités :**
- ✅ Zoom in/out
- ✅ Reset zoom
- ✅ Hover pour descriptions
- ✅ Clic pour navigation
- ✅ Lien vers Napkin.ai

### Fonctions utilitaires

```typescript
import { 
  getAllTerms,         // Récupère tous les termes
  getTerm,            // Récupère un terme par ID
  getTermTitle,       // Titre localisé
  getTermDescription, // Description localisée
  getRelatedTerms,    // Termes liés
  searchTerms        // Recherche (à implémenter)
} from '@/lib/glossary';

// Exemple
const terms = getAllTerms();
const account = getTerm('account');
const title = getTermTitle(account, 'fr'); // "Compte"
```

## 📊 Format des données

### GlossaryTerm

```typescript
interface GlossaryTerm {
  id: string;                    // Identifiant unique (kebab-case)
  title: {                       // Titre multilingue
    fr: string;
    en: string;
    es: string;
  };
  description: {                 // Description courte
    fr: string;
    en: string;
    es: string;
  };
  diagram: string;               // Chemin vers SVG
  napkinUrl?: string;            // URL optionnelle vers Napkin.ai
  components: ComponentLink[];   // Composants cliquables
  relatedTerms: string[];        // IDs des termes liés
  level: 'beginner' | 'intermediate' | 'advanced';
}
```

### ComponentLink

```typescript
interface ComponentLink {
  id: string;                    // ID du terme lié
  position: {                    // Position dans le SVG
    x: number;                   // Coordonnée X
    y: number;                   // Coordonnée Y
    radius: number;              // Rayon de la zone cliquable
  };
}
```

## 🎯 Bonnes pratiques

### Descriptions

✅ **Bon** : "Identifiant unique de 42 caractères qui représente un compte Ethereum"

❌ **Mauvais** : "C'est une adresse. Elle commence par 0x. Elle est très importante..."

### Diagrammes

✅ **Bon** :
- Simple et clair
- 5-7 composants max
- Bien organisé
- Cohérent avec les autres

❌ **Mauvais** :
- Trop chargé
- Plus de 10 composants
- Désorganisé
- Style différent

### Termes liés

Créez un réseau dense de liens :

```json
{
  "account": {
    "relatedTerms": ["address", "balance", "nonce", "storage", "code"]
  },
  "address": {
    "relatedTerms": ["account", "private-key", "public-key"]
  }
}
```

## 🐛 Dépannage

### Le terme n'apparaît pas

```bash
# Vérifiez le JSON
cat lib/glossary-data.json | jq .

# Redémarrez le serveur
npm run dev
```

### Le diagramme ne se charge pas

1. Vérifiez le chemin : `/diagrams/mon-terme.svg`
2. Vérifiez que le fichier existe
3. Testez le SVG directement : http://localhost:3000/diagrams/mon-terme.svg

### Les clics ne fonctionnent pas

1. Vérifiez les IDs dans le JSON
2. Vérifiez les positions (x, y, radius)
3. Inspectez avec DevTools
4. Vérifiez que les termes liés existent

## 📈 Statistiques

Pour voir combien de termes vous avez :

```bash
node -e "console.log(Object.keys(require('./lib/glossary-data.json')).length + ' termes')"
```

Pour lister tous les termes :

```bash
node -e "console.log(Object.keys(require('./lib/glossary-data.json')).join('\n'))"
```

## 🔄 Migration

Si vous avez déjà des concepts dans `concepts/*.md`, vous pouvez les migrer :

1. Créez le diagramme sur Napkin.ai
2. Utilisez le script d'ajout
3. Conservez le fichier .md pour la documentation complète
4. Liez les deux (optionnel)

## 🚀 Déploiement

### Build de production

```bash
npm run build
npm start
```

### Vérification

1. Tous les SVG sont présents
2. Tous les termes liés existent
3. Pas d'erreurs TypeScript
4. Pas d'erreurs de linting

```bash
npm run lint
npm run type-check  # Si configuré
```

## 📚 Ressources

- [Guide complet](../../GLOSSAIRE-VISUEL.md)
- [Documentation des scripts](../../scripts/README.md)
- [Types TypeScript](./types/glossary.d.ts)
- [Napkin.ai](https://napkin.ai)

## 🤝 Contribution

Pour contribuer :

1. Ajoutez un terme utile
2. Créez un beau diagramme
3. Testez la navigation
4. Ouvrez une PR

---

Made with ❤️ for the Ethereum Learning Community
