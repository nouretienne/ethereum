import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { getAllTerms, getTermTitle, getTermDescription } from '@/lib/glossary';
import { BookOpen, Search } from 'lucide-react';

interface GlossaryPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: GlossaryPageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    fr: 'Glossaire Visuel Ethereum',
    en: 'Ethereum Visual Glossary',
    es: 'Glosario Visual de Ethereum'
  };

  return {
    title: titles[locale],
    description: 'Explorez les concepts clés d\'Ethereum avec des diagrammes interactifs'
  };
}

export default async function GlossaryPage({ params }: GlossaryPageProps) {
  const { locale } = await params;
  const terms = getAllTerms();
  const termsList = Object.values(terms);

  const labels = {
    fr: {
      title: '📚 Glossaire Visuel Ethereum',
      subtitle: 'Explorez les concepts clés avec des diagrammes interactifs',
      search: 'Rechercher un terme...',
      beginner: 'Débutant',
      intermediate: 'Intermédiaire',
      advanced: 'Avancé',
      viewDiagram: 'Voir le diagramme',
      allTerms: 'Tous les termes'
    },
    en: {
      title: '📚 Ethereum Visual Glossary',
      subtitle: 'Explore key concepts with interactive diagrams',
      search: 'Search for a term...',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      viewDiagram: 'View diagram',
      allTerms: 'All terms'
    },
    es: {
      title: '📚 Glosario Visual de Ethereum',
      subtitle: 'Explora conceptos clave con diagramas interactivos',
      search: 'Buscar un término...',
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado',
      viewDiagram: 'Ver diagrama',
      allTerms: 'Todos los términos'
    }
  };

  const t = labels[locale];

  const levelColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.subtitle}
          </p>
        </div>

        {/* Barre de recherche (fonctionnalité future) */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t.search}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none"
              disabled
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            {locale === 'fr' ? '(Recherche bientôt disponible)' :
             locale === 'en' ? '(Search coming soon)' :
             '(Búsqueda próximamente)'}
          </p>
        </div>

        {/* Grille des termes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {termsList.map(term => (
            <Link
              key={term.id}
              href={`/${locale}/glossary/${term.id}`}
              className="group"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Badge de niveau */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[term.level]}`}>
                      {t[term.level]}
                    </span>
                    <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {getTermTitle(term, locale)}
                  </h3>
                </div>

                {/* Description */}
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                    {getTermDescription(term, locale)}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      {t.viewDiagram} →
                    </span>
                    {term.components.length > 0 && (
                      <span className="text-gray-500 dark:text-gray-400">
                        {term.components.length} {locale === 'fr' ? 'composants' :
                         locale === 'en' ? 'components' :
                         'componentes'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Compteur de termes */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="text-lg">
            {t.allTerms}: <span className="font-bold text-blue-600 dark:text-blue-400">{termsList.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
