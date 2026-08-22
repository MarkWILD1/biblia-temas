export const TEMAS_ESDRAS = [
  { slug: 'retorno', nombre: 'Retorno', orden: 1, icono: '🚶' },
  { slug: 'templo', nombre: 'Templo', orden: 2, icono: '🏛️' },
  { slug: 'culto', nombre: 'Culto', orden: 3, icono: '🕯️' },
  { slug: 'oposicion', nombre: 'Oposición', orden: 4, icono: '🚫' },
  { slug: 'ley', nombre: 'Ley', orden: 5, icono: '📖' },
  { slug: 'pacto', nombre: 'Pacto', orden: 6, icono: '📜' },
  { slug: 'providencia', nombre: 'Providencia', orden: 7, icono: '🌤️' },
  { slug: 'santidad', nombre: 'Santidad', orden: 8, icono: '✨' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_ESDRAS = {
  'decreto-de-ciro': ['retorno', 'providencia'],
  'los-que-volvieron': ['retorno', 'santidad'],
  'altar-y-cimiento': ['templo', 'culto'],
  'la-oposicion': ['oposicion', 'templo'],
  'el-templo-terminado': ['templo', 'culto', 'providencia'],
  'esdras-llega': ['ley', 'providencia'],
  'el-viaje': ['retorno', 'providencia'],
  'matrimonios-mixtos': ['santidad', 'pacto', 'ley'],
}
