'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import { GlossaryTerm, ComponentLink, getTermTitle } from '@/lib/glossary';
import { ZoomIn, ZoomOut, Maximize2, ExternalLink } from 'lucide-react';

interface InteractiveDiagramProps {
  term: GlossaryTerm;
  locale: Locale;
  allTerms: Record<string, GlossaryTerm>;
}

export default function InteractiveDiagram({ 
  term, 
  locale, 
  allTerms 
}: InteractiveDiagramProps) {
  const router = useRouter();
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Gérer le zoom
  const handleZoom = (delta: number) => {
    setScale(prev => Math.max(0.5, Math.min(2, prev + delta)));
  };

  // Naviguer vers un autre terme
  const handleComponentClick = (componentId: string) => {
    if (allTerms[componentId]) {
      router.push(`/${locale}/glossary/${componentId}`);
    }
  };

  // Réinitialiser le zoom
  const resetZoom = () => setScale(1);

  // Charger le SVG dynamiquement si disponible
  useEffect(() => {
    if (svgRef.current && term.diagram) {
      // Si le diagramme existe, on peut le charger ici
      // Pour l'instant, on utilise un SVG placeholder
    }
  }, [term.diagram]);

  return (
    <div className="relative w-full">
      {/* Contrôles de zoom */}
      <div className="absolute top-4 right-4 z-10 flex gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
        <button
          onClick={() => handleZoom(0.1)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
          title="Zoom in"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleZoom(-0.1)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
          title="Zoom out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={resetZoom}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
          title="Reset zoom"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
        {term.napkinUrl && (
          <a
            href={term.napkinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            title="View on Napkin.ai"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Conteneur du diagramme */}
      <div 
        ref={containerRef}
        className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-8"
        style={{ minHeight: '500px' }}
      >
        <div 
          style={{ 
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            transition: 'transform 0.2s ease-out'
          }}
          className="flex items-center justify-center"
        >
          <svg
            ref={svgRef}
            viewBox="0 0 600 500"
            className="w-full max-w-3xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cercle central */}
            <circle
              cx="300"
              cy="250"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-gray-700 dark:text-gray-300"
            />
            <text
              x="300"
              y="255"
              textAnchor="middle"
              className="text-2xl font-bold fill-gray-800 dark:fill-gray-200"
            >
              {getTermTitle(term, locale)}
            </text>

            {/* Composants liés */}
            {term.components.map((component: ComponentLink) => {
              const linkedTerm = allTerms[component.id];
              if (!linkedTerm) return null;

              const { x, y, radius } = component.position;
              const isHovered = hoveredComponent === component.id;
              const canNavigate = !!linkedTerm;

              return (
                <g key={component.id}>
                  {/* Ligne de connexion */}
                  <line
                    x1="300"
                    y1="250"
                    x2={x}
                    y2={y}
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-400 dark:text-gray-600"
                    strokeDasharray="5,5"
                  />

                  {/* Cercle du composant */}
                  <circle
                    cx={x}
                    cy={y}
                    r={radius}
                    fill={isHovered ? '#3B82F6' : 'white'}
                    stroke="currentColor"
                    strokeWidth="3"
                    className={`
                      transition-all duration-200
                      ${canNavigate ? 'cursor-pointer' : 'cursor-default'}
                      ${isHovered ? 'text-blue-500' : 'text-gray-600 dark:text-gray-400'}
                    `}
                    onMouseEnter={() => setHoveredComponent(component.id)}
                    onMouseLeave={() => setHoveredComponent(null)}
                    onClick={() => canNavigate && handleComponentClick(component.id)}
                  />

                  {/* Numéro du composant */}
                  <text
                    x={x}
                    y={y + 5}
                    textAnchor="middle"
                    className={`
                      text-xl font-bold pointer-events-none
                      ${isHovered ? 'fill-white' : 'fill-gray-800 dark:fill-gray-200'}
                    `}
                  >
                    {term.components.indexOf(component) + 1}
                  </text>

                  {/* Label du composant */}
                  <text
                    x={x}
                    y={y + radius + 25}
                    textAnchor="middle"
                    className={`
                      text-sm font-medium pointer-events-none
                      ${isHovered ? 'fill-blue-600 dark:fill-blue-400' : 'fill-gray-700 dark:fill-gray-300'}
                    `}
                  >
                    {getTermTitle(linkedTerm, locale)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Tooltip pour le composant survolé */}
      {hoveredComponent && allTerms[hoveredComponent] && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            {getTermTitle(allTerms[hoveredComponent], locale)}
          </h4>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            {allTerms[hoveredComponent].description[locale]}
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
            {locale === 'fr' ? '👆 Cliquez pour voir la définition complète' : 
             locale === 'en' ? '👆 Click to see full definition' :
             '👆 Haz clic para ver la definición completa'}
          </p>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
        {locale === 'fr' ? '🖱️ Survolez les cercles pour voir les descriptions, cliquez pour naviguer' :
         locale === 'en' ? '🖱️ Hover over circles to see descriptions, click to navigate' :
         '🖱️ Pasa el cursor sobre los círculos para ver descripciones, haz clic para navegar'}
      </div>
    </div>
  );
}
