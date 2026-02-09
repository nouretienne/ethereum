'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getTranslation, type Locale } from '@/lib/i18n';

interface ConceptPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  locale: Locale;
}

export default function ConceptPopup({ isOpen, onClose, title, content, locale }: ConceptPopupProps) {
  const t = getTranslation(locale);

  // Extraire la section correspondant à la langue
  const extractLanguageSection = (markdown: string, locale: Locale) => {
    const flagMap = {
      fr: '🇫🇷',
      en: '🇬🇧',
      es: '🇪🇸'
    };
    
    const flag = flagMap[locale];
    const regex = new RegExp(`## ${flag}[^#]*([\\s\\S]*?)(?=##|$)`, 'i');
    const match = markdown.match(regex);
    
    return match ? match[1].trim() : markdown;
  };

  const localizedContent = extractLanguageSection(content, locale);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2"
                  >
                    <span className="text-3xl">🧩</span>
                    {title}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-4 prose prose-lg dark:prose-invert max-w-none prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-code:text-blue-600 dark:prose-code:text-blue-400">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {localizedContent}
                  </ReactMarkdown>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    {t.close}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
