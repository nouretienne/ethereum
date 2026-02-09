# Capítulo 1: ¿Qué es Ethereum?

> 📚 **Fuente**: Mastering Ethereum  
> 📅 **Fecha**: 9 de febrero de 2026  
> 📊 **Dificultad**: ⭐⭐☆☆☆ (1-5)

---

## 📖 Resumen del libro

El libro explica que Ethereum es una plataforma de cómputo distribuido descentralizada basada en blockchain. A diferencia de Bitcoin, que es principalmente una moneda digital, Ethereum es una **computadora mundial** que puede ejecutar programas llamados "smart contracts".

Puntos clave del capítulo:
- Ethereum fue creado por Vitalik Buterin en 2013
- Es una blockchain programable
- Los smart contracts son programas auto-ejecutables
- Ethereum tiene su propia criptomoneda: Ether (ETH)
- La Máquina Virtual de Ethereum (EVM) ejecuta el código

---

## 💡 Mi comprensión

Para mí, Ethereum es como **una computadora gigante compartida por todo el mundo**. Imagina una computadora que nadie posee individualmente, pero que todos pueden usar para ejecutar programas.

**Diferencia con Bitcoin**:
- Bitcoin = un gran libro de cuentas para dinero
- Ethereum = una computadora mundial + un libro de cuentas

Los **smart contracts** son programas que se ejecutan automáticamente cuando se cumplen ciertas condiciones. Es como una máquina expendedora: pones dinero, presionas un botón y recibes automáticamente tu bebida sin necesitar un vendedor.

---

## 🔑 Conceptos clave

- **Blockchain**: Una cadena de bloques que contiene transacciones, imposible de modificar
- **Smart Contract**: Programa auto-ejecutable en la blockchain
- **EVM (Ethereum Virtual Machine)**: La computadora virtual que ejecuta los smart contracts
- **Ether (ETH)**: La criptomoneda nativa de Ethereum
- **Gas**: El "combustible" necesario para ejecutar operaciones en Ethereum
- **Descentralización**: Ninguna autoridad central controla Ethereum

---

## ❓ Preguntas / Bloqueos

- [x] ¿Cuál es la diferencia entre Ethereum y Bitcoin? ✅ ¡Comprendido!
- [ ] ¿Cómo funciona exactamente el Gas? → Por profundizar
- [ ] ¿Qué es un nodo de Ethereum?
- [ ] ¿Cómo se almacenan los smart contracts?

> 💬 **Nota**: Necesito una explicación detallada sobre el concepto de "Gas" → ¡preguntar a mi asistente!

---

## 💻 Código / Ejemplos

```solidity
// Ejemplo simple de un smart contract (del libro)
// Es un contrato que almacena un número

pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 storedData;  // Variable que almacena un número
    
    // Función para definir el valor
    function set(uint256 x) public {
        storedData = x;
    }
    
    // Función para leer el valor
    function get() public view returns (uint256) {
        return storedData;
    }
}
```

**Mi explicación**: Este contrato es como una caja que puede almacenar un número. Podemos poner un número con `set()` y leerlo con `get()`. Una vez desplegado en Ethereum, ¡este contrato existe para siempre!

---

## 🔗 Enlaces a explicaciones detalladas

- Ver [Explicación detallada: Gas](../concepts/gas.md) *(por crear)*
- Ver [Explicación detallada: Smart Contracts](../concepts/smart-contracts.md) *(por crear)*

---

## 📝 Notas personales

¡Este primer capítulo es una excelente introducción! Me encanta la idea de que Ethereum no es solo dinero digital, sino una computadora mundial. ¡Abre tantas posibilidades!

**Aplicaciones que me vienen a la mente**:
- DeFi (Finanzas Descentralizadas)
- NFT (Tokens No Fungibles)
- DAOs (Organizaciones Autónomas Descentralizadas)
- Videojuegos con economías reales

**Vínculo con mis conocimientos**: Ya conozco un poco de JavaScript. Según el libro, Solidity se parece a JavaScript, ¡así que debería ser accesible!

---

## ✅ Lo que he aprendido

1. **Ethereum = computadora mundial descentralizada**, no solo una criptomoneda
2. Los **smart contracts** son programas auto-ejecutables almacenados en la blockchain
3. La **EVM** es la máquina virtual que ejecuta todo el código
4. Ethereum tiene su propia moneda: **Ether (ETH)**
5. El **Gas** es necesario para pagar la ejecución de operaciones (concepto por profundizar)

---

## 🔄 Próximos pasos

- [x] Leer el capítulo 1
- [x] Crear mis notas
- [ ] Pedir una explicación sobre el Gas
- [ ] Traducir mis notas al inglés y francés
- [ ] Leer el capítulo 2

---

📌 **Tags**: `#ethereum` `#blockchain` `#introduccion` `#smart-contracts` `#principiante`
