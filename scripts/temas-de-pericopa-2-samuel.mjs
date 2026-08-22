export const TEMAS_2_SAMUEL = [
  { slug: 'realeza', nombre: 'Realeza', orden: 1, icono: '👑' },
  { slug: 'pacto', nombre: 'Pacto', orden: 2, icono: '📜' },
  { slug: 'presencia', nombre: 'Presencia', orden: 3, icono: '🔥' },
  { slug: 'pecado', nombre: 'Pecado', orden: 4, icono: '🚫' },
  { slug: 'juicio', nombre: 'Juicio', orden: 5, icono: '⚖️' },
  { slug: 'familia', nombre: 'Familia', orden: 6, icono: '🏠' },
  { slug: 'guerra', nombre: 'Guerra', orden: 7, icono: '⚔️' },
  { slug: 'misericordia', nombre: 'Misericordia', orden: 8, icono: '💛' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_2_SAMUEL = {
  'lamento-por-saul': ['familia'],
  'rey-en-hebron': ['realeza', 'guerra'],
  'rey-en-jerusalen': ['realeza', 'guerra'],
  'el-arca-a-sion': ['presencia'],
  'pacto-con-david': ['pacto', 'realeza'],
  'victorias-y-mefiboset': ['guerra', 'misericordia'],
  'guerra-contra-amon': ['guerra'],
  'betseba-y-urias': ['pecado', 'juicio', 'familia'],
  'amnon-y-tamar': ['pecado', 'familia', 'juicio'],
  'absalon-vuelve': ['familia', 'misericordia'],
  'rebelion-de-absalon': ['realeza', 'guerra', 'juicio'],
  'regreso-y-seba': ['realeza', 'guerra', 'misericordia'],
  'hambre-y-gigantes': ['juicio', 'guerra'],
  'cantico-y-censo': ['pacto', 'presencia', 'pecado', 'juicio'],
}
