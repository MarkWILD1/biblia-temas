export const TEMAS_MALAQUIAS = [
  { slug: 'amor', nombre: 'Amor', orden: 1, icono: '❤️' },
  { slug: 'culto', nombre: 'Culto', orden: 2, icono: '🪔' },
  { slug: 'sacerdocio', nombre: 'Sacerdocio', orden: 3, icono: '⛪' },
  { slug: 'pacto', nombre: 'Pacto', orden: 4, icono: '📜' },
  { slug: 'mensajero', nombre: 'Mensajero', orden: 5, icono: '📯' },
  { slug: 'diezmo', nombre: 'Diezmo', orden: 6, icono: '🌾' },
  { slug: 'temor', nombre: 'Temor', orden: 7, icono: '🙏' },
  { slug: 'dia-del-senor', nombre: 'Día del Señor', orden: 8, icono: '🔥' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_MALAQUIAS = {
  'os-he-amado': ['amor', 'pacto'],
  'ofrendas-contaminadas': ['culto', 'sacerdocio'],
  'contra-los-sacerdotes': ['sacerdocio', 'pacto'],
  'infidelidad-y-repudio': ['pacto', 'culto'],
  'el-mensajero': ['mensajero', 'dia-del-senor'],
  'el-diezmo': ['diezmo', 'culto'],
  'los-que-temen': ['temor', 'pacto'],
  'el-dia-y-elias': ['dia-del-senor', 'mensajero'],
}
