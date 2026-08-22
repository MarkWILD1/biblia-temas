export const TEMAS_SANTIAGO = [
  { slug: 'pruebas', nombre: 'Pruebas', orden: 1, icono: '🌅' },
  { slug: 'palabra', nombre: 'Palabra', orden: 2, icono: '📜' },
  { slug: 'fe', nombre: 'Fe', orden: 3, icono: '🔥' },
  { slug: 'obras', nombre: 'Obras', orden: 4, icono: '🤝' },
  { slug: 'lengua', nombre: 'Lengua', orden: 5, icono: '🗣️' },
  { slug: 'sabiduria', nombre: 'Sabiduría', orden: 6, icono: '🕊️' },
  { slug: 'justicia', nombre: 'Justicia', orden: 7, icono: '⚖️' },
  { slug: 'oracion', nombre: 'Oración', orden: 8, icono: '🙏' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_SANTIAGO = {
  'gozo-en-pruebas': ['pruebas'],
  'tentacion-y-palabra': ['palabra', 'pruebas'],
  'no-acepcion-de-personas': ['justicia'],
  'fe-y-obras': ['fe', 'obras'],
  'la-lengua': ['lengua'],
  'sabiduria-de-arriba': ['sabiduria'],
  'no-os-glorieis': ['justicia', 'obras'],
  'paciencia-y-oracion': ['oracion', 'pruebas'],
}
