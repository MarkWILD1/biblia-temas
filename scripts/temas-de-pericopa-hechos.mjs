export const TEMAS_HECHOS = [
  { slug: 'espiritu', nombre: 'Espíritu', orden: 1, icono: '🕊️' },
  { slug: 'testimonio', nombre: 'Testimonio', orden: 2, icono: '📣' },
  { slug: 'iglesia', nombre: 'Iglesia', orden: 3, icono: '⛪' },
  { slug: 'conversion', nombre: 'Conversión', orden: 4, icono: '⚡' },
  { slug: 'gentiles', nombre: 'Gentiles', orden: 5, icono: '🌍' },
  { slug: 'mision', nombre: 'Misión', orden: 6, icono: '⛵' },
  { slug: 'persecucion', nombre: 'Persecución', orden: 7, icono: '⛓️' },
  { slug: 'roma', nombre: 'Roma', orden: 8, icono: '⚓' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_HECHOS = {
  pentecostes: ['espiritu', 'iglesia'],
  'el-cojo-y-el-sanedrin': ['testimonio', 'persecucion'],
  'ananias-y-los-apostoles': ['iglesia', 'testimonio'],
  esteban: ['testimonio', 'persecucion'],
  felipe: ['mision', 'conversion'],
  'conversion-de-saulo': ['conversion', 'mision'],
  cornelio: ['gentiles', 'espiritu'],
  'herodes-y-la-mision': ['mision', 'persecucion'],
  'el-concilio': ['gentiles', 'iglesia'],
  'filipos-y-atenas': ['mision', 'testimonio'],
  'corinto-y-efeso': ['mision', 'espiritu'],
  'camino-a-jerusalen': ['mision', 'iglesia'],
  'defensa-de-pablo': ['testimonio', 'roma'],
  roma: ['roma', 'mision'],
}
