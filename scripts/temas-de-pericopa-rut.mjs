export const TEMAS_RUT = [
  { slug: 'fidelidad', nombre: 'Fidelidad', orden: 1, icono: '❤️' },
  { slug: 'providencia', nombre: 'Providencia', orden: 2, icono: '🌤️' },
  { slug: 'redencion', nombre: 'Redención', orden: 3, icono: '👡' },
  { slug: 'familia', nombre: 'Familia', orden: 4, icono: '👨‍👩‍👧' },
  { slug: 'extranjeria', nombre: 'Extranjería', orden: 5, icono: '🧳' },
  { slug: 'bondad', nombre: 'Bondad', orden: 6, icono: '🤲' },
  { slug: 'cosecha', nombre: 'Cosecha', orden: 7, icono: '🌾' },
  { slug: 'linaje', nombre: 'Linaje', orden: 8, icono: '👑' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_RUT = {
  'hambre-en-moab': ['familia', 'providencia'],
  'rut-se-queda': ['fidelidad', 'extranjeria', 'bondad'],
  'regreso-a-belen': ['familia'],
  'rut-espiga': ['cosecha', 'bondad', 'extranjeria', 'providencia'],
  'noemi-y-el-pariente': ['redencion', 'cosecha'],
  'la-era': ['redencion', 'fidelidad', 'bondad', 'cosecha'],
  'la-puerta': ['redencion', 'providencia'],
  'matrimonio-y-linaje': ['familia', 'redencion', 'linaje'],
}
