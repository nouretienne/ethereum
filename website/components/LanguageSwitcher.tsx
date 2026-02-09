'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { locales, localeNames, localeFlags, type Locale } from '@/lib/i18n';
import { Globe, ChevronDown } from 'lucide-react';

// Mapping des slugs de chapitres entre les langues
const chapterSlugMap: Record<string, Record<Locale, string>> = {
  '01': {
    fr: 'chapitre-01',
    en: 'chapter-01',
    es: 'capitulo-01'
  },
  '02': {
    fr: 'chapitre-02',
    en: 'chapter-02',
    es: 'capitulo-02'
  },
  '03': {
    fr: 'chapitre-03',
    en: 'chapter-03',
    es: 'capitulo-03'
  },
  '04': {
    fr: 'chapitre-04',
    en: 'chapter-04',
    es: 'capitulo-04'
  },
  '05': {
    fr: 'chapitre-05',
    en: 'chapter-05',
    es: 'capitulo-05'
  }
};

// Extraire le numéro de chapitre d'un slug
function getChapterNumber(slug: string): string | null {
  const match = slug.match(/\d+$/);
  return match ? match[0] : null;
}

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    
    // Si on est sur une page de chapitre, traduire le slug
    if (segments[1] === 'chapters' && segments[2]) {
      const chapterNumber = getChapterNumber(segments[2]);
      if (chapterNumber && chapterSlugMap[chapterNumber]) {
        segments[0] = newLocale;
        segments[2] = chapterSlugMap[chapterNumber][newLocale];
        const newPath = '/' + segments.join('/');
        setIsOpen(false);
        router.push(newPath);
        return;
      }
    }
    
    // Sinon, juste changer la locale
    segments[0] = newLocale;
    const newPath = '/' + segments.join('/');
    setIsOpen(false);
    router.push(newPath);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Globe className="w-5 h-5" />
        <span className="font-medium hidden sm:inline">{localeFlags[currentLocale]} {localeNames[currentLocale]}</span>
        <span className="font-medium sm:hidden">{localeFlags[currentLocale]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop pour fermer le menu en cliquant ailleurs */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLanguage(locale)}
                className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  locale === currentLocale ? 'bg-blue-50 dark:bg-blue-900/20 font-semibold' : ''
                }`}
              >
                {localeFlags[locale]} {localeNames[locale]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
