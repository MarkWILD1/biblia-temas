export const TEMAS_EFESIOS = [
  { slug: 'eleccion', nombre: 'Elección', orden: 1, icono: '✨' },
  { slug: 'gracia', nombre: 'Gracia', orden: 2, icono: '💛' },
  { slug: 'unidad', nombre: 'Unidad', orden: 3, icono: '🤝' },
  { slug: 'misterio', nombre: 'Misterio', orden: 4, icono: '📜' },
  { slug: 'cuerpo', nombre: 'Cuerpo', orden: 5, icono: '🌿' },
  { slug: 'santidad', nombre: 'Santidad', orden: 6, icono: '🕊️' },
  { slug: 'casa', nombre: 'Casa', orden: 7, icono: '🏠' },
  { slug: 'guerra', nombre: 'Guerra', orden: 8, icono: '⚔️' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_EFESIOS = {
  'bendicion-espiritual': ['eleccion', 'gracia'],
  'oracion-por-sabiduria': ['eleccion', 'misterio'],
  'de-muerte-a-vida': ['gracia', 'unidad'],
  'el-misterio': ['misterio', 'gracia'],
  'un-solo-cuerpo': ['unidad', 'cuerpo'],
  'el-hombre-nuevo': ['santidad', 'cuerpo'],
  'matrimonio-y-casa': ['casa', 'santidad'],
  'la-armadura': ['guerra', 'unidad'],
}
