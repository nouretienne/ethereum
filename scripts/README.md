# 🛠️ Scripts du Glossaire Ethereum

Ce dossier contient des scripts utilitaires pour gérer le glossaire visuel interactif.

## 📜 Scripts disponibles

### `add-glossary-term.js`

Script interactif pour ajouter facilement un nouveau terme au glossaire.

#### 🚀 Utilisation

```bash
node scripts/add-glossary-term.js
```

Le script vous guidera à travers les étapes suivantes :

1. **Informations de base**
   - ID du terme (généré automatiquement depuis le nom anglais)
   - Titres en 3 langues (FR, EN, ES)

2. **Descriptions**
   - Description complète en 3 langues

3. **Niveau de difficulté**
   - Beginner (Débutant)
   - Intermediate (Intermédiaire)
   - Advanced (Avancé)

4. **Diagramme**
   - Nom du fichier SVG
   - URL Napkin.ai (optionnel)

5. **Composants interactifs**
   - ID des composants
   - Positions (x, y, radius) pour les zones cliquables

6. **Termes liés**
   - Liste des autres termes connexes

#### 📝 Exemple d'utilisation

```bash
$ node scripts/add-glossary-term.js

🚀 Ajout d'un nouveau terme au glossaire Ethereum

📝 Nom du terme (en anglais): Transaction
🇫🇷 Nom en français: Transaction
🇪🇸 Nom en espagnol: Transacción

📖 Descriptions

🇬🇧 Description (English): A signed data package that stores a message to be sent from an EOA to another account
🇫🇷 Description (Français): Un paquet de données signé qui stocke un message à envoyer d'un EOA vers un autre compte
🇪🇸 Description (Español): Un paquete de datos firmado que almacena un mensaje para enviar desde una EOA a otra cuenta

📊 Niveau de difficulté
1. Beginner (Débutant)
2. Intermediate (Intermédiaire)  
3. Advanced (Avancé)
Choisissez le niveau (1-3): 1

🎨 Diagramme
Nom du fichier SVG: transaction.svg
🔗 URL Napkin.ai (optionnel): https://napkin.ai/d/xxx

🔗 Composants du diagramme
ID du composant (ou "done"): from-address
  Position X: 100
  Position Y: 150
  Rayon: 50
  ✅ Composant "from-address" ajouté

ID du composant (ou "done"): to-address
  Position X: 500
  Position Y: 150
  Rayon: 50
  ✅ Composant "to-address" ajouté

ID du composant (ou "done"): done

🔗 Termes liés supplémentaires
IDs des termes: gas,nonce,signature

✅ Terme ajouté avec succès!
```

#### 🔧 Après l'ajout d'un terme

1. **Créer le diagramme SVG**
   - Exportez votre diagramme depuis Napkin.ai au format SVG
   - Sauvegardez-le dans `website/public/diagrams/[nom-du-terme].svg`

2. **Rendre le diagramme interactif (optionnel)**
   - Ouvrez le SVG dans un éditeur
   - Ajoutez des attributs `id` aux éléments cliquables
   - Les IDs doivent correspondre aux IDs des composants

3. **Créer la documentation complète (optionnel)**
   - Créez un fichier `concepts/[nom-du-terme].md`
   - Utilisez le template `concepts/template-concept.md`

4. **Tester**
   ```bash
   cd website
   npm run dev
   ```
   - Visitez `http://localhost:3000/fr/glossary/[term-id]`

## 📁 Structure des données

Le glossaire est stocké dans `website/lib/glossary-data.json` avec la structure suivante :

```json
{
  "term-id": {
    "id": "term-id",
    "title": {
      "fr": "Titre français",
      "en": "English title",
      "es": "Título español"
    },
    "description": {
      "fr": "Description française",
      "en": "English description",
      "es": "Descripción española"
    },
    "diagram": "/diagrams/term-id.svg",
    "napkinUrl": "https://napkin.ai/...",
    "components": [
      {
        "id": "component-id",
        "position": { "x": 100, "y": 200, "radius": 50 }
      }
    ],
    "relatedTerms": ["other-term-1", "other-term-2"],
    "level": "beginner"
  }
}
```

## 🎨 Workflow complet avec Napkin.ai

1. **Créer le diagramme**
   - Allez sur [napkin.ai](https://napkin.ai)
   - Collez votre texte de définition
   - Générez le diagramme visuel

2. **Exporter le diagramme**
   - Exportez en SVG
   - Sauvegardez dans `website/public/diagrams/`

3. **Ajouter le terme**
   ```bash
   node scripts/add-glossary-term.js
   ```

4. **Rendre interactif**
   - Éditez le SVG pour ajouter des IDs
   - Les zones cliquables permettront la navigation

5. **Publier**
   - Commitez les changements
   - Déployez votre site

## 💡 Conseils

- **Cohérence** : Utilisez des conventions de nommage cohérentes pour les IDs
- **Qualité** : Fournissez des descriptions claires et concises
- **Liens** : Créez un réseau dense de termes liés pour une meilleure navigation
- **SVG** : Optimisez les SVG avec SVGO avant de les ajouter
- **Accessibilité** : Ajoutez des attributs `alt` et `aria-label` aux SVG

## 🐛 Dépannage

**Le terme n'apparaît pas ?**
- Vérifiez que le JSON est valide
- Redémarrez le serveur de développement

**Le diagramme ne s'affiche pas ?**
- Vérifiez le chemin du fichier SVG
- Assurez-vous que le fichier existe dans `public/diagrams/`

**Les zones cliquables ne fonctionnent pas ?**
- Vérifiez que les IDs dans le SVG correspondent aux composants
- Inspectez le SVG dans le navigateur pour déboguer

## 🤝 Contribution

Pour améliorer ces scripts :

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/amélioration`)
3. Committez vos changements
4. Pushez vers la branche
5. Ouvrez une Pull Request
