export const TEMAS_SOFONIAS = [
  { slug: 'idolatria', nombre: 'Idolatría', orden: 1, icono: '🗿' },
  { slug: 'dia-del-senor', nombre: 'Día del Señor', orden: 2, icono: '⏳' },
  { slug: 'juicio', nombre: 'Juicio', orden: 3, icono: '⚖️' },
  { slug: 'humildad', nombre: 'Humildad', orden: 4, icono: '🕊️' },
  { slug: 'naciones', nombre: 'Naciones', orden: 5, icono: '🌍' },
  { slug: 'remanente', nombre: 'Remanente', orden: 6, icono: '🌱' },
  { slug: 'sion', nombre: 'Sion', orden: 7, icono: '🏔️' },
  { slug: 'restauracion', nombre: 'Restauración', orden: 8, icono: '🌅' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_SOFONIAS = {
  'juicio-sobre-juda': ['idolatria', 'juicio'],
  'el-dia-cercano': ['dia-del-senor', 'juicio'],
  'el-dia-grande': ['dia-del-senor', 'juicio'],
  'buscad-a-jehova': ['humildad', 'remanente'],
  'contra-las-naciones': ['naciones', 'juicio'],
  'ay-de-la-ciudad': ['juicio', 'sion'],
  'el-remanente': ['remanente', 'restauracion'],
  'canta-hija-de-sion': ['sion', 'restauracion'],
}
