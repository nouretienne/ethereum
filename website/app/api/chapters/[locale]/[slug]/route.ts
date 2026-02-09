import { NextRequest, NextResponse } from 'next/server';
import { getChapter } from '@/lib/markdown';
import { type Locale } from '@/lib/i18n';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ locale: Locale; slug: string }> }
) {
  const { locale, slug } = await params;
  const chapter = getChapter(locale, slug);

  if (!chapter) {
    return NextResponse.json({ error: 'Chapter not found' }, { status: 404 });
  }

  return NextResponse.json(chapter);
}
