'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Locale, getTranslation } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { BookOpen, Lightbulb, Home, Github, BookMarked } from 'lucide-react';

interface NavigationProps {
  locale: Locale;
}

export default function Navigation({ locale }: NavigationProps) {
  const pathname = usePathname();
  const t = getTranslation(locale);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-xl">
            <span className="text-blue-600 dark:text-blue-400">⟠</span>
            <span className="hidden sm:inline">Mastering Ethereum</span>
            <span className="sm:hidden">ME</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href={`/${locale}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                pathname === `/${locale}` 
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">{t.home}</span>
            </Link>

            <Link
              href={`/${locale}/chapters`}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isActive(`/${locale}/chapters`)
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span className="hidden sm:inline">{t.chapters}</span>
            </Link>

            <Link
              href={`/${locale}/concepts`}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isActive(`/${locale}/concepts`)
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Lightbulb className="w-5 h-5" />
              <span className="hidden sm:inline">{t.concepts}</span>
            </Link>

            <Link
              href={`/${locale}/glossary`}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isActive(`/${locale}/glossary`)
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <BookMarked className="w-5 h-5" />
              <span className="hidden sm:inline">{t.glossary}</span>
            </Link>

            {/* GitHub Link */}
            <a
              href="https://github.com/nouretienne/ethereum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Language Switcher */}
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </div>
    </nav>
  );
}
