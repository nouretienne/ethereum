#!/usr/bin/env node

/**
 * Script pour ajouter facilement un nouveau terme au glossaire visuel Ethereum
 * 
 * Usage:
 *   node scripts/add-glossary-term.js
 *   
 * Le script vous guidera de manière interactive pour créer un nouveau terme.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const GLOSSARY_PATH = path.join(__dirname, '../website/lib/glossary-data.json');

// Couleurs pour le terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

function ask(question) {
  return new Promise(resolve => {
    rl.question(`${colors.cyan}${question}${colors.reset}`, answer => {
      resolve(answer.trim());
    });
  });
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function getTermData() {
  log('\n🚀 Ajout d\'un nouveau terme au glossaire Ethereum\n', 'bright');
  
  const termData = {
    id: '',
    title: { fr: '', en: '', es: '' },
    description: { fr: '', en: '', es: '' },
    diagram: '',
    napkinUrl: '',
    components: [],
    relatedTerms: [],
    level: 'beginner'
  };

  // ID du terme
  const nameEn = await ask('📝 Nom du terme (en anglais): ');
  termData.id = slugify(nameEn);
  termData.title.en = nameEn;

  // Titres multilingues
  termData.title.fr = await ask('🇫🇷 Nom en français: ');
  termData.title.es = await ask('🇪🇸 Nom en espagnol: ');

  log('\n📖 Descriptions\n', 'yellow');

  // Descriptions
  termData.description.en = await ask('🇬🇧 Description (English): ');
  termData.description.fr = await ask('🇫🇷 Description (Français): ');
  termData.description.es = await ask('🇪🇸 Description (Español): ');

  // Niveau
  log('\n📊 Niveau de difficulté\n', 'yellow');
  log('1. Beginner (Débutant)');
  log('2. Intermediate (Intermédiaire)');
  log('3. Advanced (Avancé)');
  const levelChoice = await ask('Choisissez le niveau (1-3): ');
  termData.level = ['beginner', 'intermediate', 'advanced'][parseInt(levelChoice) - 1] || 'beginner';

  // Diagramme
  log('\n🎨 Diagramme\n', 'yellow');
  const diagramName = await ask('Nom du fichier SVG (ex: account.svg): ');
  termData.diagram = `/diagrams/${diagramName || termData.id + '.svg'}`;

  // URL Napkin (optionnel)
  termData.napkinUrl = await ask('🔗 URL Napkin.ai (optionnel, Entrée pour passer): ');

  // Composants liés
  log('\n🔗 Composants du diagramme\n', 'yellow');
  log('Ajoutez les composants qui apparaissent dans le diagramme.');
  log('Pour chaque composant, vous devrez fournir son ID et sa position (x, y, radius)');
  log('Tapez "done" quand vous avez fini.\n');

  while (true) {
    const componentId = await ask('ID du composant (ou "done"): ');
    if (componentId.toLowerCase() === 'done') break;

    const x = await ask('  Position X: ');
    const y = await ask('  Position Y: ');
    const radius = await ask('  Rayon: ');

    termData.components.push({
      id: componentId,
      position: {
        x: parseInt(x) || 0,
        y: parseInt(y) || 0,
        radius: parseInt(radius) || 50
      }
    });

    if (!termData.relatedTerms.includes(componentId)) {
      termData.relatedTerms.push(componentId);
    }

    log(`  ✅ Composant "${componentId}" ajouté\n`, 'green');
  }

  // Termes liés supplémentaires
  log('\n🔗 Termes liés supplémentaires\n', 'yellow');
  log('Ajoutez d\'autres termes liés (séparés par des virgules):');
  const additionalTerms = await ask('IDs des termes (ex: blockchain,transaction): ');
  if (additionalTerms) {
    const terms = additionalTerms.split(',').map(t => t.trim()).filter(Boolean);
    termData.relatedTerms = [...new Set([...termData.relatedTerms, ...terms])];
  }

  return termData;
}

async function addTermToGlossary(termData) {
  try {
    // Lire le fichier actuel
    const glossaryContent = fs.readFileSync(GLOSSARY_PATH, 'utf8');
    const glossary = JSON.parse(glossaryContent);

    // Vérifier si le terme existe déjà
    if (glossary[termData.id]) {
      log(`\n⚠️  Le terme "${termData.id}" existe déjà dans le glossaire!`, 'yellow');
      const overwrite = await ask('Voulez-vous l\'écraser? (oui/non): ');
      if (overwrite.toLowerCase() !== 'oui' && overwrite.toLowerCase() !== 'yes') {
        log('❌ Opération annulée.', 'red');
        return false;
      }
    }

    // Ajouter le nouveau terme
    glossary[termData.id] = termData;

    // Sauvegarder avec un formatage propre
    fs.writeFileSync(
      GLOSSARY_PATH,
      JSON.stringify(glossary, null, 2) + '\n',
      'utf8'
    );

    return true;
  } catch (error) {
    log(`\n❌ Erreur lors de l'ajout du terme: ${error.message}`, 'red');
    return false;
  }
}

function displaySummary(termData) {
  log('\n' + '='.repeat(60), 'blue');
  log('📋 RÉSUMÉ DU NOUVEAU TERME', 'bright');
  log('='.repeat(60), 'blue');
  log(`\n🆔 ID: ${termData.id}`);
  log(`📝 Titre (EN): ${termData.title.en}`);
  log(`📝 Titre (FR): ${termData.title.fr}`);
  log(`📝 Titre (ES): ${termData.title.es}`);
  log(`\n📖 Description (EN): ${termData.description.en}`);
  log(`📊 Niveau: ${termData.level}`);
  log(`🎨 Diagramme: ${termData.diagram}`);
  
  if (termData.napkinUrl) {
    log(`🔗 Napkin URL: ${termData.napkinUrl}`);
  }
  
  if (termData.components.length > 0) {
    log(`\n🔗 Composants (${termData.components.length}):`);
    termData.components.forEach(comp => {
      log(`   - ${comp.id} [x:${comp.position.x}, y:${comp.position.y}, r:${comp.position.radius}]`);
    });
  }
  
  if (termData.relatedTerms.length > 0) {
    log(`\n🔗 Termes liés: ${termData.relatedTerms.join(', ')}`);
  }
  
  log('\n' + '='.repeat(60) + '\n', 'blue');
}

function displayNextSteps(termData) {
  log('\n✅ Terme ajouté avec succès!', 'green');
  log('\n📝 PROCHAINES ÉTAPES:\n', 'bright');
  log('1. 🎨 Créez ou exportez le diagramme depuis Napkin.ai');
  log(`   → Sauvegardez-le dans: website/public${termData.diagram}`);
  log('\n2. 🔧 Si le diagramme contient des zones cliquables:');
  log('   → Assurez-vous que les IDs dans le SVG correspondent aux composants');
  log('\n3. 🌐 Testez le terme dans votre navigateur:');
  log(`   → http://localhost:3000/fr/glossary/${termData.id}`);
  log(`   → http://localhost:3000/en/glossary/${termData.id}`);
  log(`   → http://localhost:3000/es/glossary/${termData.id}`);
  log('\n4. 📚 Créez la documentation complète du concept (optionnel):');
  log(`   → Créez: concepts/${termData.id}.md`);
  log('   → Utilisez le template: concepts/template-concept.md');
  log('\n🚀 Pour démarrer le serveur de développement:');
  log('   cd website && npm run dev\n');
}

async function main() {
  try {
    // Récupérer les données du terme
    const termData = await getTermData();

    // Afficher le résumé
    displaySummary(termData);

    // Demander confirmation
    const confirm = await ask('Voulez-vous ajouter ce terme au glossaire? (oui/non): ');
    
    if (confirm.toLowerCase() === 'oui' || confirm.toLowerCase() === 'yes') {
      const success = await addTermToGlossary(termData);
      
      if (success) {
        displayNextSteps(termData);
      }
    } else {
      log('\n❌ Opération annulée.', 'red');
    }

  } catch (error) {
    log(`\n❌ Erreur: ${error.message}`, 'red');
    console.error(error);
  } finally {
    rl.close();
  }
}

// Lancer le script
main();
