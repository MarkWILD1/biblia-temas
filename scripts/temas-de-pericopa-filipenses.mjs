export const TEMAS_FILIPENSES = [
  { slug: 'gozo', nombre: 'Gozo', orden: 1, icono: '💛' },
  { slug: 'cristo', nombre: 'Cristo', orden: 2, icono: '✝️' },
  { slug: 'humildad', nombre: 'Humildad', orden: 3, icono: '🙏' },
  { slug: 'unidad', nombre: 'Unidad', orden: 4, icono: '🤝' },
  { slug: 'carrera', nombre: 'Carrera', orden: 5, icono: '🏁' },
  { slug: 'paz', nombre: 'Paz', orden: 6, icono: '🕊️' },
  { slug: 'contentamiento', nombre: 'Contentamiento', orden: 7, icono: '🌾' },
  { slug: 'comunion', nombre: 'Comunión', orden: 8, icono: '🍞' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_FILIPENSES = {
  'cautiverio-y-gozo': ['gozo', 'comunion'],
  'vivir-es-cristo': ['cristo', 'gozo'],
  'la-humillacion': ['humildad', 'cristo'],
  'timoteo-y-epafrodito': ['comunion', 'unidad'],
  'perdida-y-ganancia': ['cristo', 'carrera'],
  'la-meta': ['carrera', 'humildad'],
  'gozo-y-paz': ['gozo', 'paz'],
  contentamiento: ['contentamiento', 'comunion'],
}
