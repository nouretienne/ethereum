# 📖 Guide d'Installation du Glossaire Visuel - Pas à Pas

## 🎯 Objectif
Mettre en place le glossaire visuel interactif sur votre ordinateur et commencer à ajouter des termes avec des diagrammes Napkin.ai.

---

## 📋 Prérequis

Avant de commencer, vérifiez que vous avez :

- ✅ **Node.js** installé (version 18 ou supérieure)
  ```bash
  node --version
  ```
  Si pas installé : https://nodejs.org/

- ✅ **Git** installé
  ```bash
  git --version
  ```
  Si pas installé : https://git-scm.com/

- ✅ Un compte **Napkin.ai** (gratuit)
  → Créez-le sur https://napkin.ai

---

## 🚀 ÉTAPE 1 : Récupérer le code (si pas déjà fait)

Si vous n'avez pas encore le projet :

```bash
# Cloner le dépôt
git clone https://github.com/nouretienne/ethereum.git
cd ethereum
```

Si vous l'avez déjà, mettez à jour :

```bash
cd ethereum
git pull origin main
```

---

## 📦 ÉTAPE 2 : Installer les dépendances

```bash
# Aller dans le dossier du site
cd website

# Installer toutes les dépendances
npm install
```

⏱️ Cela prendra 1-2 minutes la première fois.

**Vous devriez voir :**
```
added XXX packages in XXs
```

---

## 🎨 ÉTAPE 3 : Démarrer le serveur de développement

```bash
# Toujours dans le dossier website/
npm run dev
```

**Vous devriez voir :**
```
  ▲ Next.js 16.1.6
  - Local:        http://localhost:3000
  - Ready in XXXms
```

✅ **Le site est maintenant accessible !**

---

## 🌐 ÉTAPE 4 : Tester le glossaire

Ouvrez votre navigateur et visitez :

### 📍 Glossaire en français
```
http://localhost:3000/fr/glossary
```

### 📍 Glossaire en anglais
```
http://localhost:3000/en/glossary
```

### 📍 Glossaire en espagnol
```
http://localhost:3000/es/glossary
```

**Vous devriez voir :**
- Une page avec 6 cartes de termes
- Account, Address, Balance, Nonce, Storage, Code

### 🖱️ Testez l'interactivité

1. **Cliquez** sur une carte (par exemple "Account")
2. Vous verrez le **diagramme interactif**
3. **Survolez** les cercles numérotés → Une description apparaît
4. **Cliquez** sur un cercle → Vous êtes redirigé vers ce terme
5. Testez les **boutons de zoom** en haut à droite

✅ Si tout fonctionne, passez à l'étape suivante !

---

## 🎨 ÉTAPE 5 : Créer votre premier diagramme sur Napkin.ai

### 5.1 Connexion à Napkin.ai

1. Allez sur **https://napkin.ai**
2. Connectez-vous (ou créez un compte gratuit)
3. Cliquez sur "New Napkin" ou "Create"

### 5.2 Choisir un concept à illustrer

Exemple : Créons un diagramme pour "Transaction"

### 5.3 Écrire le texte descriptif

Copiez ceci dans Napkin.ai :

```
Une TRANSACTION Ethereum contient :

1. FROM ADDRESS
L'adresse de l'émetteur
C'est le compte qui initie la transaction

2. TO ADDRESS  
L'adresse du destinataire
Le compte qui reçoit la transaction

3. VALUE
Le montant d'ETH à transférer
Exprimé en Wei (1 ETH = 10^18 Wei)

4. GAS
Les frais de transaction
Payés au mineur ou validateur

5. NONCE
Le compteur de transactions
Empêche les attaques par rejeu

6. SIGNATURE
La signature cryptographique
Prouve l'authenticité de la transaction
```

### 5.4 Générer le diagramme

1. Cliquez sur "Generate" ou attendez la génération automatique
2. Napkin.ai va créer un beau diagramme visuel
3. Si le style ne vous plaît pas, cliquez sur "Regenerate" ou modifiez

### 5.5 Exporter le diagramme

1. Cliquez sur le bouton **"Export"** ou **"Download"**
2. Choisissez le format **SVG**
3. Téléchargez le fichier (il ira dans votre dossier Downloads)
4. **Renommez le fichier** : `transaction.svg`

✅ Votre diagramme est prêt !

---

## 🤖 ÉTAPE 6 : Ajouter le terme au glossaire

### 6.1 Ouvrir un nouveau terminal

**Important :** Gardez le serveur qui tourne (`npm run dev`) !

Ouvrez un **nouveau terminal** / **nouvelle fenêtre PowerShell**

### 6.2 Aller à la racine du projet

```bash
# Depuis n'importe où
cd C:\Users\noure\Desktop\Ethereum
```

### 6.3 Lancer le script d'ajout

```bash
node scripts/add-glossary-term.js
```

### 6.4 Répondre aux questions

Le script va vous poser des questions. Voici ce qu'il faut répondre pour "Transaction" :

```
📝 Nom du terme (en anglais): Transaction

🇫🇷 Nom en français: Transaction

🇪🇸 Nom en espagnol: Transacción

📖 Descriptions

🇬🇧 Description (English): A signed data package that stores a message to be sent from one account to another

🇫🇷 Description (Français): Un paquet de données signé qui contient un message à envoyer d'un compte à un autre

🇪🇸 Description (Español): Un paquete de datos firmado que contiene un mensaje para enviar de una cuenta a otra

📊 Niveau de difficulté
1. Beginner (Débutant)
2. Intermediate (Intermédiaire)
3. Advanced (Avancé)
Choisissez le niveau (1-3): 1

🎨 Diagramme
Nom du fichier SVG: transaction.svg

🔗 URL Napkin.ai (optionnel): [Copiez l'URL de votre napkin si vous voulez]

🔗 Composants du diagramme

ID du composant (ou "done"): from-address
  Position X: 100
  Position Y: 150
  Rayon: 50

ID du composant (ou "done"): to-address
  Position X: 500
  Position Y: 150
  Rayon: 50

ID du composant (ou "done"): done

🔗 Termes liés supplémentaires
IDs des termes: account,address,gas,nonce

Voulez-vous ajouter ce terme au glossaire? (oui/non): oui
```

**Note sur les positions :**
- Pour un diagramme simple, utilisez des positions approximatives
- `x` et `y` sont les coordonnées du centre du cercle
- `radius` est la taille de la zone cliquable (généralement 50)

**Positions typiques pour un diagramme 600x500 :**
- Centre : x=300, y=250
- Haut gauche : x=100, y=150
- Haut droit : x=500, y=150
- Bas gauche : x=100, y=350
- Bas droit : x=500, y=350

✅ Le terme est ajouté au JSON !

---

## 📁 ÉTAPE 7 : Placer le diagramme SVG

### 7.1 Copier le fichier

```bash
# Depuis la racine du projet
cp ~/Downloads/transaction.svg website/public/diagrams/transaction.svg
```

Ou manuellement :
1. Ouvrez l'explorateur de fichiers
2. Allez dans `Downloads`
3. Trouvez `transaction.svg`
4. **Copiez-le** dans `C:\Users\noure\Desktop\Ethereum\website\public\diagrams\`

### 7.2 Vérifier que le fichier est là

```bash
ls website/public/diagrams/
```

Vous devriez voir :
```
account.svg
transaction.svg
README.md
```

✅ Le diagramme est en place !

---

## 🎉 ÉTAPE 8 : Tester votre nouveau terme

### 8.1 Retourner dans le navigateur

Le site devrait se **recharger automatiquement** (hot reload).

Si ce n'est pas le cas, rafraîchissez la page (F5).

### 8.2 Aller sur le glossaire

```
http://localhost:3000/fr/glossary
```

**Vous devriez maintenant voir 7 termes**, dont "Transaction" !

### 8.3 Cliquer sur "Transaction"

```
http://localhost:3000/fr/glossary/transaction
```

Vous verrez :
- ✅ Le titre et la description
- ✅ Le diagramme SVG
- ✅ Les termes liés en bas

### 8.4 Tester l'interactivité

- Survolez les cercles avec les composants
- Cliquez dessus pour naviguer

🎊 **Félicitations ! Vous avez ajouté votre premier terme !**

---

## 🔄 ÉTAPE 9 : Ajouter d'autres termes

Répétez les étapes 5 à 8 pour chaque nouveau terme :

### Termes suggérés pour commencer :

1. **Blockchain** (chaîne de blocs)
2. **Block** (bloc)
3. **Gas** (frais)
4. **Smart Contract** (contrat intelligent)
5. **Wallet** (portefeuille)
6. **Mining** (minage)
7. **Consensus** (consensus)
8. **Node** (nœud)
9. **Private Key** (clé privée)
10. **Public Key** (clé publique)

### Workflow rapide :

```bash
1. Napkin.ai → Créer diagramme → Export SVG
2. Terminal : node scripts/add-glossary-term.js
3. Copier SVG dans website/public/diagrams/
4. Tester dans navigateur
```

---

## 📊 ÉTAPE 10 : Vérifier et commiter vos changements

### 10.1 Voir les fichiers modifiés

```bash
# À la racine du projet
cd C:\Users\noure\Desktop\Ethereum
git status
```

### 10.2 Ajouter et commiter

```bash
# Ajouter tous les nouveaux fichiers
git add .

# Faire un commit
git commit -m "✨ Ajout du terme Transaction au glossaire"

# Pousser sur GitHub
git push origin main
```

✅ Vos changements sont sauvegardés sur GitHub !

---

## 🎯 Résumé des commandes essentielles

### Démarrer le site
```bash
cd C:\Users\noure\Desktop\Ethereum\website
npm run dev
```

### Ajouter un terme
```bash
cd C:\Users\noure\Desktop\Ethereum
node scripts/add-glossary-term.js
```

### Voir le glossaire
```
http://localhost:3000/fr/glossary
```

### Commiter les changements
```bash
git add .
git commit -m "✨ Description des changements"
git push origin main
```

---

## 🐛 Dépannage

### Le serveur ne démarre pas

```bash
cd website
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Le diagramme ne s'affiche pas

1. Vérifiez que le fichier SVG existe :
   ```bash
   ls website/public/diagrams/
   ```

2. Vérifiez le nom dans le JSON :
   - Ouvrez `website/lib/glossary-data.json`
   - Cherchez votre terme
   - Vérifiez que `"diagram": "/diagrams/nom-fichier.svg"` est correct

3. Testez le SVG directement :
   ```
   http://localhost:3000/diagrams/transaction.svg
   ```

### Les clics ne fonctionnent pas

Les positions (x, y, radius) ne correspondent peut-être pas au SVG.

Pour trouver les bonnes positions :
1. Ouvrez le SVG dans le navigateur
2. Ouvrez DevTools (F12)
3. Inspectez les éléments
4. Regardez les attributs `cx`, `cy` (pour les cercles) ou `x`, `y` (pour les rectangles)

### Le terme existe mais ne s'affiche pas

1. Vérifiez le JSON :
   ```bash
   cat website/lib/glossary-data.json
   ```

2. Validez le JSON :
   ```bash
   node -e "JSON.parse(require('fs').readFileSync('website/lib/glossary-data.json'))"
   ```

3. Redémarrez le serveur :
   ```bash
   # Ctrl+C pour arrêter
   npm run dev
   ```

---

## 📚 Ressources

### Documentation
- **Guide complet** : `GLOSSAIRE-VISUEL.md`
- **Démarrage rapide** : `QUICKSTART-GLOSSAIRE.md`
- **Scripts** : `scripts/README.md`
- **Site** : `website/README-GLOSSARY.md`

### Outils externes
- **Napkin.ai** : https://napkin.ai
- **Next.js Docs** : https://nextjs.org/docs
- **React** : https://react.dev

### Exemples de diagrammes
- Regardez `website/public/diagrams/account.svg` pour voir un exemple

---

## 🎊 Vous êtes prêt !

Vous pouvez maintenant :
- ✅ Créer des diagrammes sur Napkin.ai
- ✅ Ajouter des termes au glossaire
- ✅ Tester l'interactivité
- ✅ Sauvegarder sur GitHub

**Objectif suggéré :** Ajoutez 10-15 termes essentiels d'Ethereum pour créer un glossaire complet ! 🚀

---

## 💡 Conseils pour la suite

### Court terme (cette semaine)
- Ajoutez les termes de base : Transaction, Block, Blockchain, Gas, Wallet
- Testez tous les liens entre termes
- Créez un réseau dense de navigation

### Moyen terme (ce mois)
- Ajoutez 20-30 termes au total
- Créez des diagrammes cohérents visuellement
- Documentez chaque concept en détail

### Long terme
- Ajoutez tous les termes importants d'Ethereum
- Créez des parcours d'apprentissage
- Ajoutez des quiz interactifs

---

**Besoin d'aide ?** Consultez les fichiers de documentation ou ouvrez une issue sur GitHub !

Happy learning! 💙⟠
