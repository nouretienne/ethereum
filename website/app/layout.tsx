import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mastering Ethereum - Learning Journey',
  description: 'Mon voyage d\'apprentissage de la blockchain Ethereum, documenté en trois langues',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
