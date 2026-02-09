# Chapitre 1 : Qu'est-ce qu'Ethereum ?

> 📚 **Source** : Mastering Ethereum  
> 📅 **Date** : 9 février 2026  
> 📊 **Difficulté** : ⭐⭐☆☆☆ (1-5)

---

## 📖 Résumé du livre

Le livre explique qu'Ethereum est une plateforme de calcul distribuée décentralisée, basée sur la blockchain. Contrairement à Bitcoin qui est principalement une monnaie numérique, Ethereum est un **ordinateur mondial** qui peut exécuter des programmes appelés "smart contracts".

Les points clés du chapitre :
- Ethereum a été créé par Vitalik Buterin en 2013
- C'est une blockchain programmable
- Les smart contracts sont des programmes auto-exécutables
- Ethereum dispose de sa propre cryptomonnaie : l'Ether (ETH)
- La machine virtuelle Ethereum (EVM) exécute le code

---

## 💡 Ma compréhension

Pour moi, Ethereum c'est comme **un ordinateur géant partagé par le monde entier**. Imaginez un ordinateur que personne ne possède individuellement, mais que tout le monde peut utiliser pour exécuter des programmes.

**Différence avec Bitcoin** : 
- Bitcoin = un grand livre de comptes pour l'argent
- Ethereum = un ordinateur mondial + un grand livre de comptes

Les **smart contracts** sont des programmes qui s'exécutent automatiquement quand certaines conditions sont remplies. C'est comme un distributeur automatique : vous mettez de l'argent, appuyez sur un bouton, et vous recevez automatiquement votre boisson sans avoir besoin d'un vendeur.

---

## 🔑 Concepts clés

- **Blockchain** : Une chaîne de blocs contenant des transactions, impossible à modifier
- **Smart Contract** : Programme auto-exécutable sur la blockchain
- **EVM (Ethereum Virtual Machine)** : L'ordinateur virtuel qui exécute les smart contracts
- **Ether (ETH)** : La cryptomonnaie native d'Ethereum
- **Gas** : Le "carburant" nécessaire pour exécuter des opérations sur Ethereum
- **Décentralisation** : Aucune autorité centrale ne contrôle Ethereum

---

## ❓ Questions / Blocages

- [x] Quelle est la différence entre Ethereum et Bitcoin ? ✅ Compris !
- [ ] Comment fonctionne exactement le Gas ? → À approfondir
- [ ] Qu'est-ce qu'un nœud Ethereum ?
- [ ] Comment les smart contracts sont-ils stockés ?

> 💬 **Note** : J'ai besoin d'une explication détaillée sur le concept de "Gas" → demander à mon assistant !

---

## 💻 Code / Exemples

```solidity
// Exemple simple d'un smart contract (donné dans le livre)
// C'est un contrat qui stocke un nombre

pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 storedData;  // Variable qui stocke un nombre
    
    // Fonction pour définir la valeur
    function set(uint256 x) public {
        storedData = x;
    }
    
    // Fonction pour lire la valeur
    function get() public view returns (uint256) {
        return storedData;
    }
}
```

**Mon explication** : Ce contrat est comme une boîte qui peut stocker un nombre. On peut mettre un nombre dedans avec `set()` et le lire avec `get()`. Une fois déployé sur Ethereum, ce contrat existe pour toujours !

---

## 🔗 Liens vers explications détaillées

- Voir [Explication détaillée : Gas](../concepts/gas.md) *(à créer)*
- Voir [Explication détaillée : Smart Contracts](../concepts/smart-contracts.md) *(à créer)*

---

## 📝 Notes personnelles

Ce premier chapitre est une excellente introduction ! J'aime l'idée qu'Ethereum n'est pas juste de l'argent numérique, mais un ordinateur mondial. Ça ouvre tellement de possibilités !

**Applications qui me viennent en tête** :
- DeFi (Finance décentralisée)
- NFT (Tokens non fongibles)
- DAOs (Organisations autonomes décentralisées)
- Jeux vidéo avec économies réelles

**Lien avec mes connaissances** : Je connais déjà un peu JavaScript. D'après le livre, Solidity ressemble à JavaScript, donc ça devrait être accessible !

---

## ✅ Ce que j'ai appris

1. **Ethereum = ordinateur mondial décentralisé**, pas juste une cryptomonnaie
2. Les **smart contracts** sont des programmes auto-exécutables stockés sur la blockchain
3. L'**EVM** est la machine virtuelle qui exécute tout le code
4. Ethereum a sa propre monnaie : **l'Ether (ETH)**
5. Le **Gas** est nécessaire pour payer l'exécution des opérations (concept à approfondir)

---

## 🔄 Prochaines étapes

- [x] Lire le chapitre 1
- [x] Créer mes notes
- [ ] Demander une explication sur le Gas
- [ ] Traduire mes notes en anglais et espagnol
- [ ] Lire le chapitre 2

---

📌 **Tags** : `#ethereum` `#blockchain` `#introduction` `#smart-contracts` `#debutant`
