export const TEMAS_OSEAS = [
  { slug: 'pacto', nombre: 'Pacto', orden: 1, icono: '🤝' },
  { slug: 'infidelidad', nombre: 'Infidelidad', orden: 2, icono: '💔' },
  { slug: 'idolatria', nombre: 'Idolatría', orden: 3, icono: '🗿' },
  { slug: 'juicio', nombre: 'Juicio', orden: 4, icono: '⚖️' },
  { slug: 'conocimiento', nombre: 'Conocimiento', orden: 5, icono: '📖' },
  { slug: 'misericordia', nombre: 'Misericordia', orden: 6, icono: '🤍' },
  { slug: 'retorno', nombre: 'Retorno', orden: 7, icono: '↩️' },
  { slug: 'restauracion', nombre: 'Restauración', orden: 8, icono: '🌅' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_OSEAS = {
  'gomer-y-los-hijos': ['pacto', 'infidelidad'],
  'la-esposa-infiel': ['infidelidad', 'restauracion'],
  'gomer-redimida': ['pacto', 'misericordia'],
  'pleito-contra-israel': ['conocimiento', 'idolatria'],
  'juicio-de-efrain': ['juicio'],
  'volvamos-al-senor': ['retorno', 'misericordia', 'conocimiento'],
  'el-corazon-de-efrain': ['infidelidad', 'juicio'],
  'sembraron-viento': ['idolatria', 'juicio'],
  'dias-de-castigo': ['juicio'],
  'la-vid-vacia': ['idolatria', 'juicio'],
  'cuando-israel-era-nino': ['misericordia', 'pacto'],
  'jacob-y-efrain': ['pacto', 'infidelidad'],
  'no-hay-salvador': ['juicio', 'idolatria'],
  'sanare-su-rebelion': ['retorno', 'restauracion'],
}
