import Link from 'next/link';
import { type Locale, getTranslation } from '@/lib/i18n';
import { getChapters } from '@/lib/markdown';
import { BookOpen, ArrowRight } from 'lucide-react';

export default async function ChaptersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params as { locale: Locale };
  const t = getTranslation(locale);
  const chapters = getChapters(locale);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <BookOpen className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          {t.chapters}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {locale === 'fr' && `${chapters.length} chapitre${chapters.length > 1 ? 's' : ''} disponible${chapters.length > 1 ? 's' : ''}`}
          {locale === 'en' && `${chapters.length} chapter${chapters.length > 1 ? 's' : ''} available`}
          {locale === 'es' && `${chapters.length} capítulo${chapters.length > 1 ? 's' : ''} disponible${chapters.length > 1 ? 's' : ''}`}
        </p>
      </div>

      <div className="space-y-4">
        {chapters.map((chapter, index) => (
          <Link
            key={chapter.slug}
            href={`/${locale}/chapters/${chapter.slug}`}
            className="block bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-bold text-gray-300 dark:text-gray-700">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {chapter.title}
                  </h2>
                </div>
                
                {chapter.metadata.difficulty && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
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

                {chapter.metadata.date && (
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    📅 {chapter.metadata.date}
                  </p>
                )}
              </div>

              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>

      {chapters.length === 0 && (
        <div className="text-center py-12 bg-gray-100 dark:bg-gray-900 rounded-xl">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            {locale === 'fr' && 'Aucun chapitre disponible pour le moment'}
            {locale === 'en' && 'No chapters available yet'}
            {locale === 'es' && 'Ningún capítulo disponible por ahora'}
          </p>
        </div>
      )}
    </div>
  );
}
