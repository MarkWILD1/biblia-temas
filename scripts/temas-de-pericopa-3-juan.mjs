export const TEMAS_3_JUAN = [
  { slug: 'verdad', nombre: 'Verdad', orden: 1, icono: '📜' },
  { slug: 'prosperidad', nombre: 'Prosperidad', orden: 2, icono: '🌾' },
  { slug: 'hospitalidad', nombre: 'Hospitalidad', orden: 3, icono: '🏠' },
  { slug: 'orgullo', nombre: 'Orgullo', orden: 4, icono: '⚠️' },
  { slug: 'testimonio', nombre: 'Testimonio', orden: 5, icono: '✨' },
  { slug: 'paz', nombre: 'Paz', orden: 6, icono: '🕊️' },
  { slug: 'comunion', nombre: 'Comunión', orden: 7, icono: '🤝' },
  { slug: 'imitacion', nombre: 'Imitación', orden: 8, icono: '🧭' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_3_JUAN = {
  'el-anciano-a-gaio': ['verdad', 'prosperidad'],
  'hospedaje-a-los-hermanos': ['hospitalidad'],
  'diotrefes': ['orgullo'],
  'no-imites-lo-malo': ['imitacion'],
  'demetrio': ['testimonio'],
  'tinta-y-pluma': ['paz', 'comunion'],
}
