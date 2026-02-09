import glossaryData from './glossary-data.json';
import { Locale } from './i18n';

export interface Position {
  x: number;
  y: number;
  radius: number;
}

export interface ComponentLink {
  id: string;
  position: Position;
}

export interface GlossaryTerm {
  id: string;
  title: {
    fr: string;
    en: string;
    es: string;
  };
  description: {
    fr: string;
    en: string;
    es: string;
  };
  diagram: string;
  napkinUrl?: string;
  components: ComponentLink[];
  relatedTerms: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
}

export type GlossaryData = Record<string, GlossaryTerm>;

export function getAllTerms(): GlossaryData {
  return glossaryData as GlossaryData;
}

export function getTerm(id: string): GlossaryTerm | null {
  const data = glossaryData as GlossaryData;
  return data[id] || null;
}

export function getTermTitle(term: GlossaryTerm, locale: Locale): string {
  return term.title[locale];
}

export function getTermDescription(term: GlossaryTerm, locale: Locale): string {
  return term.description[locale];
}

export function getRelatedTerms(termId: string): GlossaryTerm[] {
  const term = getTerm(termId);
  if (!term) return [];
  
  const data = glossaryData as GlossaryData;
  return term.relatedTerms
    .map(id => data[id])
    .filter(Boolean);
}

export function searchTerms(query: string, locale: Locale): GlossaryTerm[] {
  const data = glossaryData as GlossaryData;
  const lowerQuery = query.toLowerCase();
  
  return Object.values(data).filter(term => 
    term.title[locale].toLowerCase().includes(lowerQuery) ||
    term.description[locale].toLowerCase().includes(lowerQuery)
  );
}
