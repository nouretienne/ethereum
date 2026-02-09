# 🔧 Solution : Port déjà utilisé

## ❌ Le problème

```
⚠ Port 3000 is in use by process 26392
⨯ Unable to acquire lock, is another instance of next dev running?
```

Cela signifie qu'une instance de Next.js tourne déjà en arrière-plan.

## ✅ Solution (Windows PowerShell)

### Option 1 : Arrêter le processus (Recommandé)

```powershell
# Trouver et tuer le processus sur le port 3000
netstat -ano | findstr :3000

# Vous verrez une ligne comme :
# TCP    0.0.0.0:3000    0.0.0.0:0    LISTENING    26392

# Tuer ce processus (remplacez 26392 par votre numéro)
taskkill /PID 26392 /F

# Nettoyer le dossier .next
cd C:\Users\noure\Desktop\Ethereum\website
rm -r -force .next

# Redémarrer
npm run dev
```

### Option 2 : Utiliser le port 3001

Si vous voulez garder l'ancien et en démarrer un nouveau :

```powershell
# Démarrer sur le port 3001
npm run dev -- --port 3001
```

Puis ouvrez : http://localhost:3001/fr/glossary

### Option 3 : Tout nettoyer et recommencer

```powershell
cd C:\Users\noure\Desktop\Ethereum\website

# Arrêter tous les processus Node
taskkill /F /IM node.exe

# Nettoyer
rm -r -force .next

# Redémarrer
npm run dev
```

## 🎯 Solution rapide (Copier-coller)

```powershell
cd C:\Users\noure\Desktop\Ethereum\website
taskkill /F /IM node.exe
rm -r -force .next
npm run dev
```

Puis ouvrez : http://localhost:3000/fr/glossary
