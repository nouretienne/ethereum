# Chapter 1: What is Ethereum?

> 📚 **Source**: Mastering Ethereum  
> 📅 **Date**: February 9, 2026  
> 📊 **Difficulty**: ⭐⭐☆☆☆ (1-5)

---

## 📖 Book Summary

The book explains that Ethereum is a decentralized distributed computing platform based on blockchain. Unlike Bitcoin which is primarily a digital currency, Ethereum is a **world computer** that can execute programs called "smart contracts".

Key points from the chapter:
- Ethereum was created by Vitalik Buterin in 2013
- It's a programmable blockchain
- Smart contracts are self-executing programs
- Ethereum has its own cryptocurrency: Ether (ETH)
- The Ethereum Virtual Machine (EVM) executes the code

---

## 💡 My Understanding

For me, Ethereum is like **a giant computer shared by the whole world**. Imagine a computer that no one owns individually, but that everyone can use to run programs.

**Difference with Bitcoin**:
- Bitcoin = a big ledger for money
- Ethereum = a world computer + a ledger

**Smart contracts** are programs that execute automatically when certain conditions are met. It's like a vending machine: you put in money, press a button, and you automatically get your drink without needing a salesperson.

---

## 🔑 Key Concepts

- **Blockchain**: A chain of blocks containing transactions, impossible to modify
- **Smart Contract**: Self-executing program on the blockchain
- **EVM (Ethereum Virtual Machine)**: The virtual computer that executes smart contracts
- **Ether (ETH)**: Ethereum's native cryptocurrency
- **Gas**: The "fuel" needed to execute operations on Ethereum
- **Decentralization**: No central authority controls Ethereum

---

## ❓ Questions / Blockers

- [x] What's the difference between Ethereum and Bitcoin? ✅ Understood!
- [ ] How exactly does Gas work? → Need to deepen
- [ ] What is an Ethereum node?
- [ ] How are smart contracts stored?

> 💬 **Note**: I need a detailed explanation about the "Gas" concept → ask my assistant!

---

## 💻 Code / Examples

```solidity
// Simple smart contract example (from the book)
// This is a contract that stores a number

pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 storedData;  // Variable that stores a number
    
    // Function to set the value
    function set(uint256 x) public {
        storedData = x;
    }
    
    // Function to read the value
    function get() public view returns (uint256) {
        return storedData;
    }
}
```

**My explanation**: This contract is like a box that can store a number. We can put a number in it with `set()` and read it with `get()`. Once deployed on Ethereum, this contract exists forever!

---

## 🔗 Links to detailed explanations

- See [Detailed explanation: Gas](../concepts/gas.md) *(to create)*
- See [Detailed explanation: Smart Contracts](../concepts/smart-contracts.md) *(to create)*

---

## 📝 Personal Notes

This first chapter is an excellent introduction! I love the idea that Ethereum isn't just digital money, but a world computer. It opens up so many possibilities!

**Applications that come to mind**:
- DeFi (Decentralized Finance)
- NFT (Non-Fungible Tokens)
- DAOs (Decentralized Autonomous Organizations)
- Video games with real economies

**Link with my knowledge**: I already know some JavaScript. According to the book, Solidity is similar to JavaScript, so it should be accessible!

---

## ✅ What I Learned

1. **Ethereum = decentralized world computer**, not just a cryptocurrency
2. **Smart contracts** are self-executing programs stored on the blockchain
3. The **EVM** is the virtual machine that executes all the code
4. Ethereum has its own currency: **Ether (ETH)**
5. **Gas** is needed to pay for operation execution (concept to deepen)

---

## 🔄 Next Steps

- [x] Read chapter 1
- [x] Create my notes
- [ ] Ask for an explanation about Gas
- [ ] Translate my notes to French and Spanish
- [ ] Read chapter 2

---

📌 **Tags**: `#ethereum` `#blockchain` `#introduction` `#smart-contracts` `#beginner`
