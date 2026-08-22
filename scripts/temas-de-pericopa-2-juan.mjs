export const TEMAS_2_JUAN = [
  { slug: 'verdad', nombre: 'Verdad', orden: 1, icono: '📜' },
  { slug: 'amor', nombre: 'Amor', orden: 2, icono: '❤️' },
  { slug: 'mandamiento', nombre: 'Mandamiento', orden: 3, icono: '🧭' },
  { slug: 'engano', nombre: 'Engaño', orden: 4, icono: '⚠️' },
  { slug: 'doctrina', nombre: 'Doctrina', orden: 5, icono: '📖' },
  { slug: 'hospitalidad', nombre: 'Hospitalidad', orden: 6, icono: '🚪' },
  { slug: 'gozo', nombre: 'Gozo', orden: 7, icono: '😊' },
  { slug: 'comunion', nombre: 'Comunión', orden: 8, icono: '🤝' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_2_JUAN = {
  'el-anciano-a-la-senora': ['comunion', 'amor'],
  'andando-en-verdad': ['verdad', 'mandamiento'],
  'muchos-enganadores': ['engano'],
  'permanece-en-la-doctrina': ['doctrina', 'hospitalidad'],
  'tinta-y-papel': ['gozo'],
  'saludo-de-los-hijos': ['comunion'],
}
