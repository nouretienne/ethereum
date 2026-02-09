import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import { locales, type Locale } from '@/lib/i18n';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale} className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <Navigation locale={params.locale} />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
            <p>© 2026 Nour Etienne - Mastering Ethereum Learning Journey</p>
            <p className="mt-2 text-sm">
              Built with Next.js | <a href="https://github.com/nouretienne/ethereum" className="text-blue-600 dark:text-blue-400 hover:underline">View on GitHub</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
