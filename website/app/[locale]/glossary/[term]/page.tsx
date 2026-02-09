import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import { getAllTerms, getTerm, getTermTitle, getTermDescription, getRelatedTerms } from '@/lib/glossary';
import InteractiveDiagram from '@/components/InteractiveDiagram';
import { ArrowLeft, BookOpen, Network } from 'lucide-react';

interface TermPageProps {
  params: Promise<{ locale: Locale; term: string }>;
}

export async function generateStaticParams() {
  const terms = getAllTerms();
  const locales: Locale[] = ['fr', 'en', 'es'];
  
  return locales.flatMap(locale =>
    Object.keys(terms).map(term => ({
      locale,
      term
    }))
  );
}

export async function generateMetadata({ params }: TermPageProps): Promise<Metadata> {
  const { locale, term: termId } = await params;
  const term = getTerm(termId);
  
  if (!term) {
    return {
      title: 'Terme non trouvé'
    };
  }

  return {
    title: `${getTermTitle(term, locale)} - Glossaire Ethereum`,
    description: getTermDescription(term, locale)
  };
}

export default async function TermPage({ params }: TermPageProps) {
  const { locale, term: termId } = await params;
  const term = getTerm(termId);
  
  if (!term) {
    notFound();
  }

  const allTerms = getAllTerms();
  const relatedTerms = getRelatedTerms(termId);

  const labels = {
    fr: {
      backToGlossary: 'Retour au glossaire',
      description: 'Description',
      interactiveDiagram: 'Diagramme Interactif',
      relatedTerms: 'Termes liés',
      level: 'Niveau',
      beginner: 'Débutant',
      intermediate: 'Intermédiaire',
      advanced: 'Avancé'
    },
    en: {
      backToGlossary: 'Back to glossary',
      description: 'Description',
      interactiveDiagram: 'Interactive Diagram',
      relatedTerms: 'Related terms',
      level: 'Level',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced'
    },
    es: {
      backToGlossary: 'Volver al glosario',
      description: 'Descripción',
      interactiveDiagram: 'Diagrama Interactivo',
      relatedTerms: 'Términos relacionados',
      level: 'Nivel',
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado'
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
      <div className="max-w-6xl mx-auto">
        {/* Bouton retour */}
        <Link
          href={`/${locale}/glossary`}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.backToGlossary}
        </Link>

        {/* En-tête du terme */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border-2 border-gray-200 dark:border-gray-700">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {getTermTitle(term, locale)}
              </h1>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColors[term.level]}`}>
                  {t.level}: {t[term.level]}
                </span>
              </div>
            </div>
            <BookOpen className="w-12 h-12 text-blue-500" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              {t.description}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {getTermDescription(term, locale)}
            </p>
          </div>
        </div>

        {/* Diagramme interactif */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border-2 border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Network className="w-6 h-6 text-blue-500" />
            {t.interactiveDiagram}
          </h2>
          <InteractiveDiagram term={term} locale={locale} allTerms={allTerms} />
        </div>

        {/* Termes liés */}
        {relatedTerms.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.relatedTerms}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTerms.map(relatedTerm => (
                <Link
                  key={relatedTerm.id}
                  href={`/${locale}/glossary/${relatedTerm.id}`}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {getTermTitle(relatedTerm, locale)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {getTermDescription(relatedTerm, locale)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
