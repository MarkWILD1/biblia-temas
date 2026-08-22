export const TEMAS_CANTARES = [
  { slug: 'amor', nombre: 'Amor', orden: 1, icono: '❤️' },
  { slug: 'deseo', nombre: 'Deseo', orden: 2, icono: '🔥' },
  { slug: 'busqueda', nombre: 'Búsqueda', orden: 3, icono: '🌙' },
  { slug: 'belleza', nombre: 'Belleza', orden: 4, icono: '✨' },
  { slug: 'jardin', nombre: 'Jardín', orden: 5, icono: '🌺' },
  { slug: 'union', nombre: 'Unión', orden: 6, icono: '🤝' },
  { slug: 'exclusividad', nombre: 'Exclusividad', orden: 7, icono: '🕊️' },
  { slug: 'sello', nombre: 'Sello', orden: 8, icono: '💍' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_CANTARES = {
  'invitacion-al-amor': ['amor', 'deseo'],
  'la-primavera': ['jardin', 'amor'],
  'busqueda-y-cortejo': ['busqueda', 'union'],
  'huerto-cerrado': ['belleza', 'jardin'],
  'abre-a-mi-amada': ['busqueda', 'deseo'],
  'unica-es-mi-paloma': ['belleza', 'exclusividad'],
  'danza-de-sulamita': ['belleza', 'deseo'],
  'el-sello-del-amor': ['sello', 'amor'],
}
