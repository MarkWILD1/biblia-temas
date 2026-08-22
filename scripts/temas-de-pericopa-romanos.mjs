export const TEMAS_ROMANOS = [
  { slug: 'evangelio', nombre: 'Evangelio', orden: 1, icono: '📣' },
  { slug: 'pecado', nombre: 'Pecado', orden: 2, icono: '⛓️' },
  { slug: 'fe', nombre: 'Fe', orden: 3, icono: '⭐' },
  { slug: 'gracia', nombre: 'Gracia', orden: 4, icono: '💛' },
  { slug: 'espiritu', nombre: 'Espíritu', orden: 5, icono: '🔥' },
  { slug: 'israel', nombre: 'Israel', orden: 6, icono: '🫒' },
  { slug: 'vida', nombre: 'Vida', orden: 7, icono: '🌿' },
  { slug: 'iglesia', nombre: 'Iglesia', orden: 8, icono: '⛪' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_ROMANOS = {
  'ira-de-dios': ['pecado', 'evangelio'],
  'el-juez': ['pecado', 'evangelio'],
  'nadie-es-justo': ['pecado', 'fe'],
  'fe-de-abraham': ['fe', 'gracia'],
  'paz-con-dios': ['gracia', 'pecado'],
  'muertos-al-pecado': ['gracia', 'vida'],
  'la-ley-y-el-pecado': ['pecado', 'vida'],
  'el-espiritu': ['espiritu', 'vida'],
  'israel-y-la-eleccion': ['israel', 'evangelio'],
  'la-palabra-esta-cerca': ['fe', 'israel'],
  'el-olivo': ['israel', 'gracia'],
  'culto-racional': ['vida', 'iglesia'],
  'debiles-y-fuertes': ['vida', 'iglesia'],
  'mision-y-saludos': ['iglesia', 'evangelio'],
}
