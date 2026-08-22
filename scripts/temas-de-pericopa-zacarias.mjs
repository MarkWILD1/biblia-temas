export const TEMAS_ZACARIAS = [
  { slug: 'retorno', nombre: 'Retorno', orden: 1, icono: '↩️' },
  { slug: 'vision', nombre: 'Visión', orden: 2, icono: '👁️' },
  { slug: 'templo', nombre: 'Templo', orden: 3, icono: '🏛️' },
  { slug: 'sacerdocio', nombre: 'Sacerdocio', orden: 4, icono: '⛪' },
  { slug: 'rey', nombre: 'Rey', orden: 5, icono: '👑' },
  { slug: 'sion', nombre: 'Sion', orden: 6, icono: '🏔️' },
  { slug: 'pastores', nombre: 'Pastores', orden: 7, icono: '🐑' },
  { slug: 'naciones', nombre: 'Naciones', orden: 8, icono: '🌍' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_ZACARIAS = {
  'volved-a-mi': ['retorno', 'sion'],
  'entre-los-arrayanes': ['vision', 'sion'],
  'el-cordel-de-medir': ['sion', 'naciones'],
  'josue-el-sacerdote': ['sacerdocio', 'templo'],
  'el-candelero': ['templo', 'vision'],
  'el-rollo-y-el-efa': ['vision', 'naciones'],
  'carros-y-coronas': ['vision', 'sacerdocio'],
  'el-ayuno': ['retorno', 'sion'],
  'sion-habitada': ['sion', 'naciones'],
  'el-rey-humilde': ['rey', 'naciones'],
  'juda-y-efrain': ['pastores', 'sion'],
  'los-dos-pastores': ['pastores', 'rey'],
  'el-traspasado': ['rey', 'sion'],
  'el-senor-viene': ['naciones', 'sion'],
}
