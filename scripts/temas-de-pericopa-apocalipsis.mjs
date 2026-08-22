export const TEMAS_APOCALIPSIS = [
  { slug: 'vision', nombre: 'Visión', orden: 1, icono: '👁️' },
  { slug: 'iglesias', nombre: 'Iglesias', orden: 2, icono: '🕯️' },
  { slug: 'trono', nombre: 'Trono', orden: 3, icono: '👑' },
  { slug: 'juicio', nombre: 'Juicio', orden: 4, icono: '⚖️' },
  { slug: 'testimonio', nombre: 'Testimonio', orden: 5, icono: '📖' },
  { slug: 'bestia', nombre: 'Bestia', orden: 6, icono: '🐉' },
  { slug: 'babilonia', nombre: 'Babilonia', orden: 7, icono: '🏚️' },
  { slug: 'esperanza', nombre: 'Esperanza', orden: 8, icono: '🌅' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_APOCALIPSIS = {
  'el-que-vive': ['vision'],
  'efeso-a-pergamo': ['iglesias'],
  'tiatira-a-laodicea': ['iglesias'],
  'el-trono-y-el-cordero': ['trono'],
  'los-sellos': ['juicio'],
  'las-trompetas': ['juicio'],
  'el-librito-y-los-testigos': ['testimonio'],
  'la-mujer-y-el-dragon': ['bestia'],
  'la-cosecha': ['juicio'],
  'las-siete-copas': ['juicio'],
  'babilonia': ['babilonia'],
  'las-bodas-y-el-jinete': ['esperanza', 'juicio'],
  'el-milenio': ['juicio', 'esperanza'],
  'cielos-nuevos': ['esperanza'],
}
