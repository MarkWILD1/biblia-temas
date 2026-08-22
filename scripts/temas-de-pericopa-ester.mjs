export const TEMAS_ESTER = [
  { slug: 'realeza', nombre: 'Realeza', orden: 1, icono: '👑' },
  { slug: 'providencia', nombre: 'Providencia', orden: 2, icono: '🌤️' },
  { slug: 'amenaza', nombre: 'Amenaza', orden: 3, icono: '🚫' },
  { slug: 'valor', nombre: 'Valor', orden: 4, icono: '🦁' },
  { slug: 'inversion', nombre: 'Inversión', orden: 5, icono: '🔄' },
  { slug: 'fiesta', nombre: 'Fiesta', orden: 6, icono: '🎉' },
  { slug: 'identidad', nombre: 'Identidad', orden: 7, icono: '✨' },
  { slug: 'salvacion', nombre: 'Salvación', orden: 8, icono: '🛡️' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_ESTER = {
  'vasti-depuesta': ['realeza', 'fiesta'],
  'ester-reina': ['realeza', 'providencia', 'identidad'],
  'el-decreto-de-aman': ['amenaza'],
  'el-ayuno-de-ester': ['valor', 'amenaza', 'identidad'],
  'el-primer-banquete': ['valor', 'fiesta'],
  'mardoqueo-honrado': ['providencia', 'inversion'],
  'la-caida-de-aman': ['inversion', 'salvacion'],
  'purim': ['salvacion', 'fiesta', 'realeza', 'providencia'],
}
