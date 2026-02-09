import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Locale } from './i18n';

const rootDirectory = path.join(process.cwd(), '..');

// Mapping des langues vers les dossiers
const localeFolderMap: Record<Locale, string> = {
  fr: 'fr',
  en: 'en',
  es: 'es'
};

export interface Chapter {
  slug: string;
  title: string;
  content: string;
  metadata: {
    date?: string;
    difficulty?: number;
    [key: string]: any;
  };
}

export interface Concept {
  slug: string;
  title: string;
  content: string;
  metadata: {
    [key: string]: any;
  };
}

// Lire tous les chapitres pour une langue donnée
export function getChapters(locale: Locale): Chapter[] {
  const chaptersDir = path.join(rootDirectory, localeFolderMap[locale]);
  
  if (!fs.existsSync(chaptersDir)) {
    return [];
  }

  const chapters: Chapter[] = [];
  const folders = fs.readdirSync(chaptersDir);

  for (const folder of folders) {
    // Ignorer les fichiers (comme template-chapitre.md)
    const folderPath = path.join(chaptersDir, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;
    
    // Chercher notes.md ou notas.md
    const notesFile = locale === 'es' ? 'notas.md' : 'notes.md';
    const filePath = path.join(folderPath, notesFile);
    
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      // Extraire le titre depuis le contenu Markdown (première ligne #)
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1] : folder;
      
      chapters.push({
        slug: folder,
        title,
        content,
        metadata: data
      });
    }
  }

  return chapters.sort((a, b) => a.slug.localeCompare(b.slug));
}

// Lire un chapitre spécifique
export function getChapter(locale: Locale, slug: string): Chapter | null {
  const chaptersDir = path.join(rootDirectory, localeFolderMap[locale]);
  const notesFile = locale === 'es' ? 'notas.md' : 'notes.md';
  const filePath = path.join(chaptersDir, slug, notesFile);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : slug;

  return {
    slug,
    title,
    content,
    metadata: data
  };
}

// Lire tous les concepts
export function getConcepts(locale: Locale): Concept[] {
  const conceptsDir = path.join(rootDirectory, 'concepts');
  
  if (!fs.existsSync(conceptsDir)) {
    return [];
  }

  const concepts: Concept[] = [];
  const files = fs.readdirSync(conceptsDir);

  for (const file of files) {
    if (file.startsWith('template-') || !file.endsWith('.md')) continue;
    
    const filePath = path.join(conceptsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    // Extraire le titre
    const titleMatch = content.match(/^#\s+🧩\s+Concept\s*:\s*(.+)$/m);
    const title = titleMatch ? titleMatch[1] : file.replace('.md', '');
    
    concepts.push({
      slug: file.replace('.md', ''),
      title,
      content,
      metadata: data
    });
  }

  return concepts;
}

// Lire un concept spécifique
export function getConcept(slug: string): Concept | null {
  const conceptsDir = path.join(rootDirectory, 'concepts');
  const filePath = path.join(conceptsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  const titleMatch = content.match(/^#\s+🧩\s+Concept\s*:\s*(.+)$/m);
  const title = titleMatch ? titleMatch[1] : slug;

  return {
    slug,
    title,
    content,
    metadata: data
  };
}
