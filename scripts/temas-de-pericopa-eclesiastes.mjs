export const TEMAS_ECLESIASTES = [
  { slug: 'vanidad', nombre: 'Vanidad', orden: 1, icono: '💨' },
  { slug: 'sabiduria', nombre: 'Sabiduría', orden: 2, icono: '💎' },
  { slug: 'tiempo', nombre: 'Tiempo', orden: 3, icono: '⏳' },
  { slug: 'trabajo', nombre: 'Trabajo', orden: 4, icono: '🔨' },
  { slug: 'placer', nombre: 'Placer', orden: 5, icono: '🍷' },
  { slug: 'temor', nombre: 'Temor', orden: 6, icono: '🙏' },
  { slug: 'muerte', nombre: 'Muerte', orden: 7, icono: '⚰️' },
  { slug: 'juicio', nombre: 'Juicio', orden: 8, icono: '⚖️' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_ECLESIASTES = {
  'todo-es-vanidad': ['vanidad', 'sabiduria'],
  'el-experimento': ['placer', 'vanidad'],
  'tiempo-para-todo': ['tiempo', 'juicio'],
  'opresion-y-compania': ['trabajo', 'vanidad'],
  'votos-y-riqueza': ['temor', 'trabajo'],
  'mejor-que': ['sabiduria', 'vanidad'],
  'muerte-y-necedad': ['muerte', 'sabiduria'],
  'el-epilogo': ['temor', 'juicio'],
}
