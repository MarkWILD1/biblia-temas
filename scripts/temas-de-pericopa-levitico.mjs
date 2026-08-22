export const TEMAS_LEVITICO = [
  { slug: 'sacrificio', nombre: 'Sacrificio', orden: 1, icono: '🔥' },
  { slug: 'sacerdocio', nombre: 'Sacerdocio', orden: 2, icono: '🛢️' },
  { slug: 'pureza', nombre: 'Pureza', orden: 3, icono: '🧼' },
  { slug: 'expiacion', nombre: 'Expiación', orden: 4, icono: '🐐' },
  { slug: 'santidad', nombre: 'Santidad', orden: 5, icono: '✨' },
  { slug: 'fiestas', nombre: 'Fiestas', orden: 6, icono: '🗓️' },
  { slug: 'tierra-y-pacto', nombre: 'Tierra y pacto', orden: 7, icono: '🌾' },
  { slug: 'votos', nombre: 'Votos', orden: 8, icono: '🤝' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_LEVITICO = {
  'holocaustos-y-ofrendas': ['sacrificio'],
  'pecado-y-culpa': ['sacrificio', 'expiacion'],
  'leyes-de-las-ofrendas': ['sacrificio', 'sacerdocio'],
  'consagracion-sacerdotal': ['sacerdocio'],
  'alimentos-limpios': ['pureza'],
  'parto-y-lepra': ['pureza'],
  flujos: ['pureza'],
  'dia-de-la-expiacion': ['expiacion', 'fiestas'],
  'sangre-y-relaciones': ['santidad'],
  'sed-santos': ['santidad'],
  'sacerdotes-santos': ['sacerdocio', 'santidad'],
  fiestas: ['fiestas'],
  'sabatico-y-jubileo': ['tierra-y-pacto'],
  votos: ['votos'],
}
