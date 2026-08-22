export const TEMAS_1_TESALONICENSES = [
  { slug: 'fe', nombre: 'Fe', orden: 1, icono: '✨' },
  { slug: 'ministerio', nombre: 'Ministerio', orden: 2, icono: '👣' },
  { slug: 'santidad', nombre: 'Santidad', orden: 3, icono: '🕊️' },
  { slug: 'esperanza', nombre: 'Esperanza', orden: 4, icono: '🌅' },
  { slug: 'venida', nombre: 'Venida', orden: 5, icono: '🎺' },
  { slug: 'amor', nombre: 'Amor', orden: 6, icono: '💛' },
  { slug: 'exhortacion', nombre: 'Exhortación', orden: 7, icono: '📜' },
  { slug: 'consuelo', nombre: 'Consuelo', orden: 8, icono: '🤝' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_1_TESALONICENSES = {
  'fe-amor-esperanza': ['fe', 'esperanza'],
  'el-ministerio': ['ministerio', 'amor'],
  'el-deseo-de-veros': ['amor', 'fe'],
  santidad: ['santidad', 'amor'],
  'los-que-durmieron': ['esperanza', 'consuelo'],
  'el-dia-del-senor': ['venida', 'esperanza'],
  exhortaciones: ['exhortacion', 'santidad'],
  'salutacion-final': ['consuelo', 'exhortacion'],
}
