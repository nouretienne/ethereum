import { NextRequest, NextResponse } from 'next/server';
import { getConcepts } from '@/lib/markdown';
import { type Locale } from '@/lib/i18n';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const locale = (searchParams.get('locale') || 'fr') as Locale;

  const concepts = getConcepts(locale);
  return NextResponse.json(concepts);
}
