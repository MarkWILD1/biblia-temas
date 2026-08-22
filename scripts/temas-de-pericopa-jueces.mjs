export const TEMAS_JUECES = [
  { slug: 'ciclo', nombre: 'Ciclo', orden: 1, icono: '🔄' },
  { slug: 'liberacion', nombre: 'Liberación', orden: 2, icono: '🚪' },
  { slug: 'idolatria', nombre: 'Idolatría', orden: 3, icono: '🗿' },
  { slug: 'juicio', nombre: 'Juicio', orden: 4, icono: '⚖️' },
  { slug: 'liderazgo', nombre: 'Liderazgo', orden: 5, icono: '🛡️' },
  { slug: 'violencia', nombre: 'Violencia', orden: 6, icono: '⚔️' },
  { slug: 'fe', nombre: 'Fe', orden: 7, icono: '🔥' },
  { slug: 'anarquia', nombre: 'Anarquía', orden: 8, icono: '🚫' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_JUECES = {
  'conquista-incompleta': ['juicio'],
  'el-ciclo': ['ciclo', 'idolatria'],
  'otniel-ehud-y-samgar': ['liberacion', 'liderazgo', 'ciclo'],
  'debora-y-barac': ['liberacion', 'fe', 'liderazgo'],
  'llamado-de-gedeon': ['liberacion', 'fe', 'liderazgo'],
  'gedeon-y-el-efod': ['idolatria', 'liderazgo'],
  abimelec: ['juicio', 'violencia'],
  jefte: ['liberacion', 'liderazgo'],
  'nacimiento-de-sanson': ['liderazgo'],
  'sanson-y-timnat': ['liberacion', 'violencia'],
  'sanson-y-dalila': ['liberacion', 'violencia'],
  'micas-y-dan': ['idolatria', 'anarquia'],
  'el-levita-en-guibea': ['violencia', 'anarquia', 'juicio'],
  'guerra-contra-benjamin': ['violencia', 'anarquia', 'juicio'],
}
