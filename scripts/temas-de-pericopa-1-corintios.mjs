export const TEMAS_1_CORINTIOS = [
  { slug: 'unidad', nombre: 'Unidad', orden: 1, icono: '🤝' },
  { slug: 'sabiduria', nombre: 'Sabiduría', orden: 2, icono: '✨' },
  { slug: 'santidad', nombre: 'Santidad', orden: 3, icono: '🕊️' },
  { slug: 'libertad', nombre: 'Libertad', orden: 4, icono: '🔓' },
  { slug: 'cuerpo', nombre: 'Cuerpo', orden: 5, icono: '⛪' },
  { slug: 'dones', nombre: 'Dones', orden: 6, icono: '🎁' },
  { slug: 'amor', nombre: 'Amor', orden: 7, icono: '❤️' },
  { slug: 'resurreccion', nombre: 'Resurrección', orden: 8, icono: '🌅' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_1_CORINTIOS = {
  divisiones: ['unidad', 'sabiduria'],
  'sabiduria-de-dios': ['sabiduria', 'unidad'],
  'apostoles-y-juicio': ['unidad', 'sabiduria'],
  inmoralidad: ['santidad', 'cuerpo'],
  matrimonio: ['santidad', 'libertad'],
  idolos: ['libertad', 'santidad'],
  'derechos-del-apostol': ['libertad', 'unidad'],
  'israel-y-la-copa': ['santidad', 'libertad'],
  'velo-y-cena': ['cuerpo', 'unidad'],
  dones: ['dones', 'cuerpo'],
  'el-amor': ['amor', 'dones'],
  'lenguas-y-profecia': ['dones', 'unidad'],
  'la-resurreccion': ['resurreccion', 'cuerpo'],
  'ofrenda-y-saludos': ['unidad', 'amor'],
}
