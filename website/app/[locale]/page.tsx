import Link from 'next/link';
import { type Locale, getTranslation } from '@/lib/i18n';
import { getChapters, getConcepts } from '@/lib/markdown';
import { BookOpen, Lightbulb, Github, ArrowRight } from 'lucide-react';

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getTranslation(locale);
  const chapters = getChapters(locale);
  const concepts = getConcepts(locale);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Mastering Ethereum
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          {locale === 'fr' && 'Mon voyage d\'apprentissage de la blockchain Ethereum, documenté en trois langues'}
          {locale === 'en' && 'My journey learning Ethereum blockchain, documented in three languages'}
          {locale === 'es' && 'Mi viaje de aprendizaje de la blockchain Ethereum, documentado en tres idiomas'}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link 
            href={`/${locale}/chapters`}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            {t.chapters}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href={`/${locale}/concepts`}
            className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            <Lightbulb className="w-5 h-5" />
            {t.concepts}
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {chapters.length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">{t.chapters}</div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
          <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            {concepts.length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">{t.concepts}</div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
          <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">3</div>
          <div className="text-gray-600 dark:text-gray-400">
            {locale === 'fr' && 'Langues'}
            {locale === 'en' && 'Languages'}
            {locale === 'es' && 'Idiomas'}
          </div>
        </div>
      </div>

      {/* Recent Chapters */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">{t.chapters}</h2>
          <Link 
            href={`/${locale}/chapters`}
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            {locale === 'fr' && 'Voir tous'}
            {locale === 'en' && 'View all'}
            {locale === 'es' && 'Ver todos'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chapters.slice(0, 4).map((chapter) => (
            <Link
              key={chapter.slug}
              href={`/${locale}/chapters/${chapter.slug}`}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {chapter.title}
              </h3>
              {chapter.metadata.difficulty && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>{t.difficulty}:</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < chapter.metadata.difficulty! ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-700'}>
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
        <h2 className="text-2xl font-bold mb-4">{t.about}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {locale === 'fr' && 'Ce projet documente mon apprentissage du livre "Mastering Ethereum" d\'Andreas M. Antonopoulos et Gavin Wood. Chaque chapitre est réécrit avec mes propres mots et traduit en français, anglais et espagnol.'}
          {locale === 'en' && 'This project documents my journey through the book "Mastering Ethereum" by Andreas M. Antonopoulos and Gavin Wood. Each chapter is rewritten in my own words and translated into French, English, and Spanish.'}
          {locale === 'es' && 'Este proyecto documenta mi viaje a través del libro "Mastering Ethereum" de Andreas M. Antonopoulos y Gavin Wood. Cada capítulo está reescrito con mis propias palabras y traducido al francés, inglés y español.'}
        </p>
        <a
          href="https://github.com/nouretienne/ethereum"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          <Github className="w-5 h-5" />
          {locale === 'fr' && 'Voir le code source'}
          {locale === 'en' && 'View source code'}
          {locale === 'es' && 'Ver código fuente'}
        </a>
      </div>
    </div>
  );
}
