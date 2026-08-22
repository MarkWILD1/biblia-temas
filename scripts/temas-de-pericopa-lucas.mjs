export const TEMAS_LUCAS = [
  { slug: 'reino', nombre: 'Reino', orden: 1, icono: '👑' },
  { slug: 'discipulado', nombre: 'Discipulado', orden: 2, icono: '👣' },
  { slug: 'milagro', nombre: 'Milagro', orden: 3, icono: '✋' },
  { slug: 'misericordia', nombre: 'Misericordia', orden: 4, icono: '❤️' },
  { slug: 'parabolas', nombre: 'Parábolas', orden: 5, icono: '🌱' },
  { slug: 'templo', nombre: 'Templo', orden: 6, icono: '🏛️' },
  { slug: 'cruz', nombre: 'Cruz', orden: 7, icono: '✝️' },
  { slug: 'resurreccion', nombre: 'Resurrección', orden: 8, icono: '🌅' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_LUCAS = {
  'anuncios-y-nacimiento': ['reino', 'misericordia'],
  'bautista-y-desierto': ['reino', 'discipulado'],
  'llamado-y-sermon': ['discipulado', 'reino'],
  'fe-y-perdon': ['milagro', 'misericordia'],
  'los-doce-y-la-cruz': ['discipulado', 'cruz'],
  'el-buen-samaritano': ['misericordia', 'parabolas'],
  'oracion-y-controversia': ['discipulado', 'reino'],
  'arrepentimiento-y-banquete': ['parabolas', 'reino'],
  'los-perdidos': ['parabolas', 'misericordia'],
  'fe-y-el-reino': ['reino', 'milagro'],
  'jerico-y-jerusalen': ['misericordia', 'templo'],
  'templo-y-el-olivo': ['templo', 'reino'],
  'la-pasion': ['cruz', 'templo'],
  'la-resurreccion': ['resurreccion', 'discipulado'],
}
