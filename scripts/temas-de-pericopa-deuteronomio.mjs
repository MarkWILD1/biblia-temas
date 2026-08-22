export const TEMAS_DEUTERONOMIO = [
  { slug: 'memoria', nombre: 'Memoria', orden: 1, icono: '🧠' },
  { slug: 'ley', nombre: 'Ley', orden: 2, icono: '📜' },
  { slug: 'pacto', nombre: 'Pacto', orden: 3, icono: '⭐' },
  { slug: 'fidelidad', nombre: 'Fidelidad', orden: 4, icono: '❤️' },
  { slug: 'tierra', nombre: 'Tierra', orden: 5, icono: '🗺️' },
  { slug: 'justicia', nombre: 'Justicia', orden: 6, icono: '⚖️' },
  { slug: 'fiestas', nombre: 'Fiestas', orden: 7, icono: '🗓️' },
  { slug: 'sucesion', nombre: 'Sucesión', orden: 8, icono: '🌄' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_DEUTERONOMIO = {
  'desde-horeb-hasta-moab': ['memoria', 'tierra'],
  'llamado-a-obedecer': ['pacto', 'fidelidad'],
  'decalogo-y-shema': ['ley', 'pacto'],
  'pueblo-apartado': ['fidelidad', 'memoria'],
  'becerro-y-nuevas-tablas': ['memoria', 'fidelidad'],
  'un-santuario': ['fidelidad', 'tierra'],
  'fidelidad-y-diezmos': ['fidelidad', 'fiestas'],
  'ano-sabatico-y-fiestas': ['justicia', 'fiestas'],
  autoridades: ['ley', 'justicia'],
  'justicia-y-guerra': ['justicia'],
  'leyes-sociales': ['ley', 'justicia'],
  'primicias-y-pacto': ['pacto', 'tierra'],
  'bendiciones-y-maldiciones': ['pacto'],
  'josue-y-muerte-de-moises': ['sucesion', 'tierra'],
}
