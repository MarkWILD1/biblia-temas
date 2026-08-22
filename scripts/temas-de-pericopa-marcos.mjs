export const TEMAS_MARCOS = [
  { slug: 'reino', nombre: 'Reino', orden: 1, icono: '👑' },
  { slug: 'discipulado', nombre: 'Discipulado', orden: 2, icono: '👣' },
  { slug: 'milagro', nombre: 'Milagro', orden: 3, icono: '✋' },
  { slug: 'oposicion', nombre: 'Oposición', orden: 4, icono: '⚔️' },
  { slug: 'parabolas', nombre: 'Parábolas', orden: 5, icono: '🌱' },
  { slug: 'templo', nombre: 'Templo', orden: 6, icono: '🏛️' },
  { slug: 'cruz', nombre: 'Cruz', orden: 7, icono: '✝️' },
  { slug: 'resurreccion', nombre: 'Resurrección', orden: 8, icono: '🌅' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_MARCOS = {
  'el-principio': ['reino', 'milagro'],
  'controversias-en-galilea': ['oposicion', 'discipulado'],
  'las-parabolas': ['parabolas', 'reino'],
  'poder-sobre-el-caos': ['milagro', 'discipulado'],
  'rechazo-y-los-doce': ['discipulado', 'oposicion'],
  'lo-puro-y-lo-impuro': ['oposicion', 'milagro'],
  'panes-y-el-cristo': ['discipulado', 'cruz'],
  'transfiguracion-y-servicio': ['discipulado', 'milagro'],
  'camino-a-jerusalen': ['discipulado', 'cruz'],
  'entrada-y-templo': ['templo', 'reino'],
  'controversias-en-el-templo': ['templo', 'oposicion'],
  'el-discurso-del-olivo': ['reino', 'templo'],
  'la-pasion': ['cruz', 'oposicion'],
  'la-resurreccion': ['resurreccion', 'discipulado'],
}
