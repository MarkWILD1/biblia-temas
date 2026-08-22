export const TEMAS_ISAIAS = [
  { slug: 'juicio', nombre: 'Juicio', orden: 1, icono: '⚖️' },
  { slug: 'llamado', nombre: 'Llamado', orden: 2, icono: '🔥' },
  { slug: 'esperanza', nombre: 'Esperanza', orden: 3, icono: '🌅' },
  { slug: 'naciones', nombre: 'Naciones', orden: 4, icono: '🌍' },
  { slug: 'rey', nombre: 'Rey', orden: 5, icono: '👑' },
  { slug: 'siervo', nombre: 'Siervo', orden: 6, icono: '🕊️' },
  { slug: 'consuelo', nombre: 'Consuelo', orden: 7, icono: '🤲' },
  { slug: 'sion', nombre: 'Sion', orden: 8, icono: '🏔️' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_ISAIAS = {
  'juicio-de-juda': ['juicio'],
  'llamado-y-emmanuel': ['llamado', 'rey', 'esperanza'],
  'caida-de-babilonia': ['naciones', 'juicio'],
  'oraculos-a-las-naciones': ['naciones', 'juicio'],
  'la-tierra-desolada': ['juicio', 'esperanza'],
  'ayes-sobre-efraim': ['juicio'],
  'edom-y-el-desierto': ['juicio', 'esperanza'],
  'ezequias-y-senaquerib': ['rey', 'sion'],
  'consuelen-a-mi-pueblo': ['consuelo', 'sion'],
  'ciros': ['naciones', 'consuelo'],
  'el-siervo': ['siervo', 'consuelo'],
  'venid-a-las-aguas': ['consuelo', 'esperanza'],
  'justicia-y-ayuno': ['juicio', 'sion'],
  'sion-y-cielos-nuevos': ['sion', 'esperanza'],
}
