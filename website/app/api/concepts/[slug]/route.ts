import { NextRequest, NextResponse } from 'next/server';
import { getConcept } from '@/lib/markdown';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const concept = getConcept(params.slug);

  if (!concept) {
    return NextResponse.json({ error: 'Concept not found' }, { status: 404 });
  }

  return NextResponse.json(concept);
}
