import { NextRequest, NextResponse } from 'next/server';
import { getConcept } from '@/lib/markdown';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const concept = getConcept(slug);

  if (!concept) {
    return NextResponse.json({ error: 'Concept not found' }, { status: 404 });
  }

  return NextResponse.json(concept);
}
