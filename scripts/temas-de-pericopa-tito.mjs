export const TEMAS_TITO = [
  { slug: 'encargo', nombre: 'Encargo', orden: 1, icono: '✉️' },
  { slug: 'liderazgo', nombre: 'Liderazgo', orden: 2, icono: '⚖️' },
  { slug: 'doctrina', nombre: 'Doctrina', orden: 3, icono: '📜' },
  { slug: 'conducta', nombre: 'Conducta', orden: 4, icono: '🏠' },
  { slug: 'gracia', nombre: 'Gracia', orden: 5, icono: '✨' },
  { slug: 'obras', nombre: 'Obras', orden: 6, icono: '🌾' },
  { slug: 'herejia', nombre: 'Herejía', orden: 7, icono: '⚠️' },
  { slug: 'esperanza', nombre: 'Esperanza', orden: 8, icono: '🌅' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_TITO = {
  'pablo-a-tito': ['encargo', 'esperanza'],
  'ancianos-en-creta': ['liderazgo', 'doctrina'],
  'los-de-la-circuncision': ['herejia', 'doctrina'],
  'conducta-en-casa': ['conducta', 'obras'],
  'la-gracia-aparecio': ['gracia', 'esperanza'],
  'las-buenas-obras': ['obras', 'gracia'],
  'herejias-y-division': ['herejia'],
  'despedida-en-creta': ['encargo', 'obras'],
}
