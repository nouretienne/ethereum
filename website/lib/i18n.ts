// Configuration multilingue
export const locales = ['fr', 'en', 'es'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'fr';

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español'
};

export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸'
};

// Traductions de l'interface
export const translations = {
  fr: {
    home: 'Accueil',
    chapters: 'Chapitres',
    concepts: 'Concepts',
    about: 'À propos',
    searchPlaceholder: 'Rechercher...',
    readingTime: 'min de lecture',
    difficulty: 'Difficulté',
    tableOfContents: 'Table des matières',
    nextChapter: 'Chapitre suivant',
    previousChapter: 'Chapitre précédent',
    learnMore: 'En savoir plus',
    close: 'Fermer'
  },
  en: {
    home: 'Home',
    chapters: 'Chapters',
    concepts: 'Concepts',
    about: 'About',
    searchPlaceholder: 'Search...',
    readingTime: 'min read',
    difficulty: 'Difficulty',
    tableOfContents: 'Table of Contents',
    nextChapter: 'Next Chapter',
    previousChapter: 'Previous Chapter',
    learnMore: 'Learn more',
    close: 'Close'
  },
  es: {
    home: 'Inicio',
    chapters: 'Capítulos',
    concepts: 'Conceptos',
    about: 'Acerca de',
    searchPlaceholder: 'Buscar...',
    readingTime: 'min de lectura',
    difficulty: 'Dificultad',
    tableOfContents: 'Tabla de contenidos',
    nextChapter: 'Siguiente capítulo',
    previousChapter: 'Capítulo anterior',
    learnMore: 'Saber más',
    close: 'Cerrar'
  }
};

export function getTranslation(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}
