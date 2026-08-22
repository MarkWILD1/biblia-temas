export const TEMAS_JUDAS = [
  { slug: 'fe', nombre: 'Fe', orden: 1, icono: '⚔️' },
  { slug: 'juicio', nombre: 'Juicio', orden: 2, icono: '⚖️' },
  { slug: 'apostasia', nombre: 'Apostasía', orden: 3, icono: '🌑' },
  { slug: 'profecia', nombre: 'Profecía', orden: 4, icono: '📜' },
  { slug: 'amor', nombre: 'Amor', orden: 5, icono: '❤️' },
  { slug: 'misericordia', nombre: 'Misericordia', orden: 6, icono: '🤝' },
  { slug: 'gloria', nombre: 'Gloria', orden: 7, icono: '👑' },
  { slug: 'guardia', nombre: 'Guardia', orden: 8, icono: '🛡️' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_JUDAS = {
  'contendiendo-por-la-fe': ['fe', 'apostasia'],
  'israel-angeles-sodoma': ['juicio'],
  'como-cain': ['apostasia'],
  'manchas-en-vuestros-agapes': ['apostasia'],
  'profecia-de-enoc': ['profecia', 'juicio'],
  'en-el-amor-de-dios': ['amor', 'guardia'],
  'a-unos-salvad': ['misericordia'],
  'al-que-es-poderoso': ['gloria'],
}
