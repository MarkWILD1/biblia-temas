export const TEMAS_1_PEDRO = [
  { slug: 'esperanza', nombre: 'Esperanza', orden: 1, icono: '🌅' },
  { slug: 'santidad', nombre: 'Santidad', orden: 2, icono: '✨' },
  { slug: 'pueblo', nombre: 'Pueblo', orden: 3, icono: '🪨' },
  { slug: 'sufrimiento', nombre: 'Sufrimiento', orden: 4, icono: '✝️' },
  { slug: 'ejemplo', nombre: 'Ejemplo', orden: 5, icono: '🐑' },
  { slug: 'hogar', nombre: 'Hogar', orden: 6, icono: '🏠' },
  { slug: 'pastoreo', nombre: 'Pastoreo', orden: 7, icono: '🌿' },
  { slug: 'vigilancia', nombre: 'Vigilancia', orden: 8, icono: '🦁' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_1_PEDRO = {
  'esperanza-viva': ['esperanza'],
  'sed-santos': ['santidad'],
  'piedras-vivas': ['pueblo'],
  'siervos-y-ejemplo': ['ejemplo', 'sufrimiento'],
  'en-casa-y-en-mal': ['hogar', 'sufrimiento'],
  'el-fin-se-acerca': ['sufrimiento', 'santidad'],
  'pastores-y-grey': ['pastoreo'],
  'el-adversario': ['vigilancia'],
}
