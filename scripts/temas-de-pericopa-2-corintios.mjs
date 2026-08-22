export const TEMAS_2_CORINTIOS = [
  { slug: 'consuelo', nombre: 'Consuelo', orden: 1, icono: '🕊️' },
  { slug: 'ministerio', nombre: 'Ministerio', orden: 2, icono: '👣' },
  { slug: 'reconciliacion', nombre: 'Reconciliación', orden: 3, icono: '🤝' },
  { slug: 'ofrenda', nombre: 'Ofrenda', orden: 4, icono: '🌾' },
  { slug: 'autoridad', nombre: 'Autoridad', orden: 5, icono: '📜' },
  { slug: 'debilidad', nombre: 'Debilidad', orden: 6, icono: '💔' },
  { slug: 'gloria', nombre: 'Gloria', orden: 7, icono: '✨' },
  { slug: 'integridad', nombre: 'Integridad', orden: 8, icono: '⚖️' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_2_CORINTIOS = {
  'consuelo-en-afliccion': ['consuelo', 'ministerio'],
  'el-ministerio-nuevo': ['ministerio', 'gloria'],
  reconciliacion: ['reconciliacion', 'ministerio'],
  'gozo-y-arrepentimiento': ['consuelo', 'integridad'],
  'la-ofrenda': ['ofrenda', 'integridad'],
  'armas-espirituales': ['autoridad', 'ministerio'],
  'el-necio': ['debilidad', 'autoridad'],
  pruebaos: ['integridad', 'debilidad'],
}
