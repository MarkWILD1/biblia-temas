export const TEMAS_JUAN = [
  { slug: 'vida', nombre: 'Vida', orden: 1, icono: '🌿' },
  { slug: 'senales', nombre: 'Señales', orden: 2, icono: '✋' },
  { slug: 'fe', nombre: 'Fe', orden: 3, icono: '🙏' },
  { slug: 'luz', nombre: 'Luz', orden: 4, icono: '🕯️' },
  { slug: 'pastor', nombre: 'Pastor', orden: 5, icono: '🐑' },
  { slug: 'oposicion', nombre: 'Oposición', orden: 6, icono: '⚔️' },
  { slug: 'cruz', nombre: 'Cruz', orden: 7, icono: '✝️' },
  { slug: 'resurreccion', nombre: 'Resurrección', orden: 8, icono: '🌅' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_JUAN = {
  'el-verbo': ['vida', 'fe'],
  'cana-y-el-templo': ['senales', 'oposicion'],
  'nicodemo-y-el-bautista': ['vida', 'fe'],
  'la-samaritana': ['vida', 'senales'],
  'el-paralitico': ['senales', 'oposicion'],
  'el-pan-de-vida': ['vida', 'fe'],
  'en-la-fiesta': ['luz', 'oposicion'],
  'el-ciego': ['luz', 'senales'],
  'el-buen-pastor': ['pastor', 'vida'],
  lazaro: ['senales', 'vida'],
  'la-hora': ['cruz', 'oposicion'],
  'el-cenaculo': ['fe', 'pastor'],
  'la-pasion': ['cruz', 'oposicion'],
  'la-resurreccion': ['resurreccion', 'fe'],
}
