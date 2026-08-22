export const TEMAS_COLOSENSES = [
  { slug: 'cristo', nombre: 'Cristo', orden: 1, icono: '✨' },
  { slug: 'plenitud', nombre: 'Plenitud', orden: 2, icono: '💎' },
  { slug: 'sabiduria', nombre: 'Sabiduría', orden: 3, icono: '📜' },
  { slug: 'libertad', nombre: 'Libertad', orden: 4, icono: '🔓' },
  { slug: 'vida', nombre: 'Vida', orden: 5, icono: '🌿' },
  { slug: 'casa', nombre: 'Casa', orden: 6, icono: '🏠' },
  { slug: 'oracion', nombre: 'Oración', orden: 7, icono: '🙏' },
  { slug: 'misterio', nombre: 'Misterio', orden: 8, icono: '🕊️' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_COLOSENSES = {
  'oracion-y-gracias': ['oracion', 'sabiduria'],
  'el-primogenito': ['cristo', 'misterio'],
  'plenitud-en-cristo': ['plenitud', 'cristo'],
  'no-seais-juzgados': ['libertad', 'plenitud'],
  'buscad-lo-de-arriba': ['vida', 'cristo'],
  'la-casa': ['casa', 'vida'],
  'oracion-y-sabiduria': ['oracion', 'sabiduria'],
  saludos: ['misterio', 'oracion'],
}
