/**
 * Types TypeScript pour le système de glossaire visuel interactif
 */

import { Locale } from '@/lib/i18n';

/**
 * Position d'un composant cliquable dans le diagramme SVG
 */
export interface Position {
  /** Coordonnée X du centre (basée sur le viewBox du SVG) */
  x: number;
  /** Coordonnée Y du centre (basée sur le viewBox du SVG) */
  y: number;
  /** Rayon de la zone cliquable en pixels */
  radius: number;
}

/**
 * Lien vers un composant dans le diagramme
 */
export interface ComponentLink {
  /** ID du terme lié (doit exister dans le glossaire) */
  id: string;
  /** Position de la zone cliquable dans le SVG */
  position: Position;
}

/**
 * Traduction multilingue d'un texte
 */
export interface LocalizedText {
  fr: string;
  en: string;
  es: string;
}

/**
 * Niveau de difficulté d'un terme
 */
export type TermLevel = 'beginner' | 'intermediate' | 'advanced';

/**
 * Terme du glossaire avec toutes ses métadonnées
 */
export interface GlossaryTerm {
  /** Identifiant unique du terme (kebab-case) */
  id: string;
  
  /** Titre du terme dans les 3 langues */
  title: LocalizedText;
  
  /** Description courte dans les 3 langues */
  description: LocalizedText;
  
  /** Chemin vers le diagramme SVG (relatif à /public) */
  diagram: string;
  
  /** URL optionnelle vers le diagramme sur Napkin.ai */
  napkinUrl?: string;
  
  /** Liste des composants cliquables dans le diagramme */
  components: ComponentLink[];
  
  /** IDs des termes liés pour la navigation */
  relatedTerms: string[];
  
  /** Niveau de difficulté du concept */
  level: TermLevel;
}

/**
 * Collection de tous les termes du glossaire
 * Clé : ID du terme
 * Valeur : Données du terme
 */
export type GlossaryData = Record<string, GlossaryTerm>;

/**
 * Props pour le composant InteractiveDiagram
 */
export interface InteractiveDiagramProps {
  /** Terme à afficher */
  term: GlossaryTerm;
  
  /** Langue de l'interface */
  locale: Locale;
  
  /** Tous les termes du glossaire (pour les liens) */
  allTerms: GlossaryData;
}

/**
 * Résultat d'une recherche de termes
 */
export interface SearchResult {
  /** Terme trouvé */
  term: GlossaryTerm;
  
  /** Score de pertinence (0-1) */
  relevance: number;
  
  /** Extrait de texte correspondant */
  excerpt?: string;
}

/**
 * Options de filtrage pour la liste des termes
 */
export interface FilterOptions {
  /** Filtrer par niveau */
  level?: TermLevel | TermLevel[];
  
  /** Filtrer par termes liés */
  relatedTo?: string;
  
  /** Recherche textuelle */
  query?: string;
  
  /** Langue pour la recherche */
  locale?: Locale;
}

/**
 * Métadonnées pour l'export/import du glossaire
 */
export interface GlossaryMetadata {
  /** Version du format de données */
  version: string;
  
  /** Date de dernière modification */
  lastUpdated: string;
  
  /** Nombre total de termes */
  termCount: number;
  
  /** Langues supportées */
  languages: Locale[];
}
