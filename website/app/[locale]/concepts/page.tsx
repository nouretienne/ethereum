'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { type Locale, getTranslation } from '@/lib/i18n';
import ConceptPopup from '@/components/ConceptPopup';
import { Lightbulb, Search } from 'lucide-react';

export default function ConceptsPage() {
  const params = useParams();
  const locale = params.locale as Locale;
  const t = getTranslation(locale);

  const [concepts, setConcepts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConcept, setSelectedConcept] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: ''
  });

  useEffect(() => {
    fetch(`/api/concepts?locale=${locale}`)
      .then(res => res.json())
      .then(data => {
        setConcepts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [locale]);

  const filteredConcepts = concepts.filter(concept =>
    concept.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConceptClick = (conceptSlug: string) => {
    fetch(`/api/concepts/${conceptSlug}`)
      .then(res => res.json())
      .then(data => {
        setSelectedConcept({
          isOpen: true,
          title: data.title,
          content: data.content
        });
      });
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Lightbulb className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            {t.concepts}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            {locale === 'fr' && 'Explications détaillées des concepts Ethereum'}
            {locale === 'en' && 'Detailed explanations of Ethereum concepts'}
            {locale === 'es' && 'Explicaciones detalladas de conceptos de Ethereum'}
          </p>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-xl h-32"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredConcepts.map((concept) => (
              <button
                key={concept.slug}
                onClick={() => handleConceptClick(concept.slug)}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all hover:shadow-lg text-left group"
              >
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {concept.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        )}

        {!loading && filteredConcepts.length === 0 && (
          <div className="text-center py-12 bg-gray-100 dark:bg-gray-900 rounded-xl">
            <Lightbulb className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              {locale === 'fr' && (searchTerm ? 'Aucun concept trouvé' : 'Aucun concept disponible pour le moment')}
              {locale === 'en' && (searchTerm ? 'No concepts found' : 'No concepts available yet')}
              {locale === 'es' && (searchTerm ? 'Ningún concepto encontrado' : 'Ningún concepto disponible por ahora')}
            </p>
          </div>
        )}
      </div>

      <ConceptPopup
        isOpen={selectedConcept.isOpen}
        onClose={() => setSelectedConcept({ ...selectedConcept, isOpen: false })}
        title={selectedConcept.title}
        content={selectedConcept.content}
        locale={locale}
      />
    </>
  );
}
