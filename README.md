# 📚 Mastering Ethereum - Mon Carnet d'Apprentissage Multilingue

> 🎓 **Projet** : Suivre et réinterpréter le livre "Mastering Ethereum"  
> 🌍 **Langues** : Français 🇫🇷 | English 🇬🇧 | Español 🇪🇸  
> 👤 **Auteur** : [Nour Etienne](https://github.com/nouretienne)  
> 📅 **Démarré le** : Février 2026

---

## 🎯 Objectif du projet

Ce repository est mon **carnet d'apprentissage personnel** du livre [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook) par Andreas M. Antonopoulos et Gavin Wood.

**Ce que je fais ici :**
- ✍️ Réécrire chaque chapitre avec mes propres mots
- 🌍 Traduire et organiser le contenu en 3 langues (FR/EN/ES)
- 🧩 Créer des explications détaillées pour les concepts difficiles
- 🌿 Pratiquer Git et les branches pour organiser mon apprentissage
- 💡 Documenter mes questions et mes découvertes

---

## 📂 Structure du projet

```
ethereum/
├── fr/                         # 🇫🇷 Version française
│   ├── template-chapitre.md    # Modèle pour nouveau chapitre
│   ├── chapitre-01/
│   ├── chapitre-02/
│   └── ...
│
├── en/                         # 🇬🇧 English version
│   ├── chapter-template.md     # Template for new chapter
│   ├── chapter-01/
│   ├── chapter-02/
│   └── ...
│
├── es/                         # 🇪🇸 Versión española
│   ├── plantilla-capitulo.md   # Plantilla para nuevo capítulo
│   ├── capitulo-01/
│   ├── capitulo-02/
│   └── ...
│
└── concepts/                   # 🧩 Explications détaillées de concepts
    ├── template-concept.md     # Modèle pour nouveau concept
    ├── gas.md                  # Explication du Gas (FR/EN/ES)
    ├── smart-contracts.md
    └── ...
```

---

## 🚀 Comment j'utilise ce repo

### 1. **Lecture d'un chapitre**
Je lis un chapitre du livre "Mastering Ethereum"

### 2. **Création d'une branche**
```bash
git checkout -b chapitre-05-fr
```

### 3. **Utilisation du template**
Je copie le template et je remplis mes notes :
```bash
mkdir fr/chapitre-05
cp fr/template-chapitre.md fr/chapitre-05/notes.md
```

### 4. **Si je bloque sur un concept**
Je demande une explication détaillée → création d'un fichier dans `/concepts/`

### 5. **Traduction dans les autres langues**
Je crée des branches pour EN et ES :
```bash
git checkout -b chapitre-05-en
git checkout -b chapitre-05-es
```

### 6. **Merge dans main**
Une fois terminé et relu, je merge tout dans `main`

---

## 🌿 Stratégie de branches

| Branche | Usage |
|---------|-------|
| `main` | Version stable, contenu validé ✅ |
| `chapitre-X-fr` | Travail sur chapitre X en français |
| `chapitre-X-en` | Traduction anglaise |
| `chapitre-X-es` | Traduction espagnole |
| `concept-Y` | Explication détaillée d'un concept |

---

## 📖 Chapitres complétés

### 🇫🇷 Français
- [x] [Chapitre 1 : Qu'est-ce qu'Ethereum ?](fr/chapitre-01/notes.md)
- [ ] Chapitre 2 : À venir...

### 🇬🇧 English
- [x] [Chapter 1: What is Ethereum?](en/chapter-01/notes.md)
- [ ] Chapter 2: Coming soon...

### 🇪🇸 Español
- [x] [Capítulo 1: ¿Qué es Ethereum?](es/capitulo-01/notas.md)
- [ ] Capítulo 2: Próximamente...

---

## 🧩 Concepts expliqués

Liste des concepts pour lesquels j'ai créé des explications détaillées :

- [ ] Gas et frais de transaction
- [ ] Smart Contracts
- [ ] EVM (Ethereum Virtual Machine)
- [ ] ABI (Application Binary Interface)
- [ ] Wallets et clés privées

---

## 🛠️ Technologies et outils

- **Blockchain** : Ethereum
- **Langage** : Solidity
- **Bibliothèques** : Web3.js, Ethers.js
- **Dev Tools** : Hardhat, Truffle, Remix
- **Wallet** : MetaMask
- **Version Control** : Git & GitHub

---

## 📚 Ressources

- 📖 [Mastering Ethereum (Livre original)](https://github.com/ethereumbook/ethereumbook)
- 🌐 [Documentation Ethereum](https://ethereum.org/fr/developers/docs/)
- 🎓 [Solidity Documentation](https://docs.soliditylang.org/)

---

## 📝 License

MIT License - voir le fichier [LICENSE](LICENSE)

---

## 💬 Contact

**Nour Etienne**
- GitHub: [@nouretienne](https://github.com/nouretienne)

---

## 📅 Journal d'apprentissage

- **9 février 2026** : Projet initialisé, structure créée ✅
- **9 février 2026** : GitHub CLI configuré avec succès 🔐
- **9 février 2026** : Site web éducatif interactif créé 🌐

---

## 🌐 Site Web Interactif

Ce projet inclut maintenant un **site web éducatif** avec :

- 🌍 Navigation multilingue (FR/EN/ES)
- 📚 Affichage interactif des chapitres
- 💡 Pop-ups pour les concepts
- 🎨 Design moderne et responsive
- 🔍 Recherche de concepts

### 🚀 Lancer le site :

```bash
cd website
npm install   # Première fois seulement
npm run dev
```

Ouvrez **http://localhost:3000** 🎉

**Guide complet** : Voir [GUIDE-SITE-WEB.md](GUIDE-SITE-WEB.md) | **Démarrage rapide** : [DEMARRAGE-RAPIDE.md](DEMARRAGE-RAPIDE.md)

---

*🚀 Apprentissage en cours... Un chapitre à la fois !*
