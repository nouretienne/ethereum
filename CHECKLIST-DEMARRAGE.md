# ✅ Checklist de Démarrage - Glossaire Visuel

## 📋 Prérequis (à vérifier maintenant)

```bash
# Vérifiez Node.js
node --version
# Doit afficher v18.x.x ou supérieur

# Vérifiez Git
git --version
# Doit afficher git version x.x.x
```

- [ ] Node.js installé ✅
- [ ] Git installé ✅
- [ ] Compte Napkin.ai créé → https://napkin.ai

---

## 🚀 Installation (5 minutes)

### Terminal 1 - Démarrer le site

```bash
# 1. Aller dans le dossier website
cd C:\Users\noure\Desktop\Ethereum\website

# 2. Installer les dépendances (première fois seulement)
npm install

# 3. Démarrer le serveur
npm run dev
```

**Laissez ce terminal ouvert ! Ne le fermez pas.**

- [ ] Serveur démarré sur http://localhost:3000 ✅

---

## 🌐 Test Initial (2 minutes)

### Dans votre navigateur

1. Ouvrez : **http://localhost:3000/fr/glossary**
2. Vous devez voir 6 termes : Account, Address, Balance, Nonce, Storage, Code

- [ ] Page du glossaire s'affiche ✅
- [ ] 6 cartes de termes visibles ✅

### Test d'interactivité

1. Cliquez sur **"Account"**
2. Vous voyez le diagramme
3. Survolez les cercles numérotés
4. Cliquez sur un cercle (ex: "Address")
5. Vous êtes redirigé vers la page "Address"

- [ ] Diagramme s'affiche ✅
- [ ] Survol fonctionne ✅
- [ ] Clics fonctionnent ✅
- [ ] Navigation entre termes OK ✅

---

## 🎨 Premier Terme (15 minutes)

### Sur Napkin.ai

1. Allez sur **https://napkin.ai**
2. Créez un compte ou connectez-vous
3. Cliquez sur "New Napkin"
4. Copiez ce texte :

```
Une TRANSACTION Ethereum contient :

1. FROM ADDRESS - L'adresse de l'émetteur
2. TO ADDRESS - L'adresse du destinataire  
3. VALUE - Le montant d'ETH à transférer
4. GAS - Les frais de transaction
5. NONCE - Le compteur de transactions
6. SIGNATURE - La signature cryptographique
```

5. Laissez générer le diagramme
6. Exportez en **SVG**
7. Renommez le fichier : **transaction.svg**

- [ ] Diagramme créé sur Napkin.ai ✅
- [ ] SVG téléchargé et renommé ✅

### Terminal 2 - Ajouter le terme

**Ouvrez un nouveau terminal** (gardez le premier ouvert !)

```bash
# Aller à la racine du projet
cd C:\Users\noure\Desktop\Ethereum

# Lancer le script
node scripts/add-glossary-term.js
```

**Répondez aux questions :**

```
Nom du terme (en anglais): Transaction
Nom en français: Transaction
Nom en espagnol: Transacción

Description (English): A signed data package sent from one account to another
Description (Français): Un paquet de données signé envoyé d'un compte à un autre
Description (Español): Un paquete de datos firmado enviado de una cuenta a otra

Niveau (1-3): 1

Nom du fichier SVG: transaction.svg
URL Napkin.ai: [Entrée pour passer]

Composants:
ID: from-address, X: 100, Y: 150, Rayon: 50
ID: to-address, X: 500, Y: 150, Rayon: 50
ID: done

Termes liés: account,address

Ajouter? oui
```

- [ ] Script exécuté sans erreur ✅
- [ ] Terme ajouté au JSON ✅

### Copier le SVG

```bash
# Copier depuis Downloads vers le projet
cp ~/Downloads/transaction.svg website/public/diagrams/
```

Ou manuellement :
- Ouvrez `Downloads`
- Copiez `transaction.svg`
- Collez dans `C:\Users\noure\Desktop\Ethereum\website\public\diagrams\`

- [ ] SVG copié dans le bon dossier ✅

### Tester

1. Retournez au navigateur
2. Allez sur **http://localhost:3000/fr/glossary**
3. Vous devez voir 7 termes maintenant
4. Cliquez sur "Transaction"

- [ ] Transaction apparaît dans la liste ✅
- [ ] Page détail s'affiche ✅
- [ ] Diagramme visible ✅

---

## 🎉 Félicitations !

Vous avez :
- ✅ Installé et démarré le glossaire
- ✅ Testé l'interactivité
- ✅ Créé votre premier diagramme sur Napkin.ai
- ✅ Ajouté votre premier terme

---

## 🔄 Pour ajouter d'autres termes

**Répétez ces 4 étapes :**

1. **Napkin.ai** → Créer diagramme → Export SVG
2. **Terminal** → `node scripts/add-glossary-term.js`
3. **Copier SVG** → `website/public/diagrams/`
4. **Tester** → Navigateur

---

## 📊 Termes suggérés

Créez ces termes dans cet ordre :

### Priorité 1 (Basique)
- [ ] Transaction ✅ (fait !)
- [ ] Block
- [ ] Blockchain
- [ ] Gas
- [ ] Wallet

### Priorité 2 (Important)
- [ ] Smart Contract
- [ ] Mining
- [ ] Node
- [ ] Consensus
- [ ] Network

### Priorité 3 (Avancé)
- [ ] Private Key
- [ ] Public Key
- [ ] Hash
- [ ] Merkle Tree
- [ ] EVM (Ethereum Virtual Machine)

---

## 💾 Sauvegarder sur GitHub

Après avoir ajouté plusieurs termes :

```bash
# À la racine du projet
cd C:\Users\noure\Desktop\Ethereum

# Voir les changements
git status

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "✨ Ajout de nouveaux termes au glossaire"

# Push
git push origin main
```

- [ ] Changements sauvegardés sur GitHub ✅

---

## 🆘 Aide rapide

### Le serveur ne démarre pas
```bash
cd website
rm -rf node_modules
npm install
npm run dev
```

### Le diagramme ne s'affiche pas
1. Vérifiez que le SVG est dans `website/public/diagrams/`
2. Vérifiez le nom du fichier dans le JSON
3. Testez : `http://localhost:3000/diagrams/nom-fichier.svg`

### Le script ne fonctionne pas
```bash
# Vérifiez que vous êtes à la racine
cd C:\Users\noure\Desktop\Ethereum
pwd
# Doit afficher : C:\Users\noure\Desktop\Ethereum

# Relancez
node scripts/add-glossary-term.js
```

---

## 📚 Documentation complète

- **Guide pas à pas** → `GUIDE-INSTALLATION-GLOSSAIRE.md`
- **Guide complet** → `GLOSSAIRE-VISUEL.md`
- **Démarrage rapide** → `QUICKSTART-GLOSSAIRE.md`
- **Scripts** → `scripts/README.md`

---

## 🎯 Votre objectif

**Cette semaine :** Ajoutez 5-10 termes essentiels

**Ce mois :** Créez un glossaire complet avec 20-30 termes

**À long terme :** Couvrez tous les concepts importants d'Ethereum

---

## ✨ Conseils

1. **Cohérence visuelle** : Utilisez un style similaire pour tous les diagrammes
2. **Liens denses** : Liez chaque terme à 3-5 autres termes
3. **Descriptions courtes** : 1-2 phrases maximum
4. **Testez tout** : Cliquez sur chaque lien pour vérifier

---

**Bon courage ! Vous allez créer un glossaire exceptionnel ! 🚀💙**

Pour toute question, consultez `GUIDE-INSTALLATION-GLOSSAIRE.md`
