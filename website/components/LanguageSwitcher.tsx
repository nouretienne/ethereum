'use client';

import { useRouter, usePathname } from 'next/navigation';
import { locales, localeNames, localeFlags, type Locale } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: Locale) => {
    // Remplacer la langue dans le path
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Globe className="w-5 h-5" />
        <span className="font-medium">{localeFlags[currentLocale]} {localeNames[currentLocale]}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
    </div>
  );
}
