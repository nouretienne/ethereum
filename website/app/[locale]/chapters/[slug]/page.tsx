'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { type Locale, getTranslation } from '@/lib/i18n';
import ConceptPopup from '@/components/ConceptPopup';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import Link from 'next/link';

// Simuler le chargement de données (dans une vraie app, utiliser des Server Components)
export default function ChapterPage() {
  const params = useParams();
  const locale = params.locale as Locale;
  const slug = params.slug as string;
  const t = getTranslation(locale);

  const [chapter, setChapter] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [conceptPopup, setConceptPopup] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: ''
  });

  useEffect(() => {
    // Charger le chapitre via une API route
    fetch(`/api/chapters/${locale}/${slug}`)
      .then(res => res.json())
      .then(data => {
        setChapter(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [locale, slug]);

  const handleConceptClick = (conceptSlug: string) => {
    // Charger le concept
    fetch(`/api/concepts/${conceptSlug}`)
      .then(res => res.json())
      .then(data => {
        setConceptPopup({
          isOpen: true,
          title: data.title,
          content: data.content
        });
      });
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {locale === 'fr' && 'Chapitre non trouvé'}
          {locale === 'en' && 'Chapter not found'}
          {locale === 'es' && 'Capítulo no encontrado'}
        </p>
        <Link href={`/${locale}/chapters`} className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block">
          ← {t.chapters}
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href={`/${locale}/chapters`}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.chapters}
        </Link>

        <article className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
          {chapter.metadata.difficulty && (
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span>{t.difficulty}:</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < chapter.metadata.difficulty ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-700'}>
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-code:text-blue-600 dark:prose-code:text-blue-400">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                // Transformer les liens vers concepts en boutons cliquables
                a: ({ node, href, children, ...props }) => {
                  if (href?.includes('../concepts/')) {
                    const conceptSlug = href.replace('../concepts/', '').replace('.md', '');
                    return (
                      <button
                        onClick={() => handleConceptClick(conceptSlug)}
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium cursor-pointer"
                        {...props}
                      >
                        <Lightbulb className="w-4 h-4" />
                        {children}
                      </button>
                    );
                  }
                  return <a href={href} {...props}>{children}</a>;
                }
              }}
            >
              {chapter.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>

      <ConceptPopup
        isOpen={conceptPopup.isOpen}
        onClose={() => setConceptPopup({ ...conceptPopup, isOpen: false })}
        title={conceptPopup.title}
        content={conceptPopup.content}
        locale={locale}
      />
    </>
  );
}
