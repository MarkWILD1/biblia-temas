export const TEMAS_1_SAMUEL = [
  { slug: 'llamado', nombre: 'Llamado', orden: 1, icono: '📣' },
  { slug: 'sacerdocio', nombre: 'Sacerdocio', orden: 2, icono: '🕯️' },
  { slug: 'realeza', nombre: 'Realeza', orden: 3, icono: '👑' },
  { slug: 'rechazo', nombre: 'Rechazo', orden: 4, icono: '🚫' },
  { slug: 'alianza', nombre: 'Alianza', orden: 5, icono: '🤝' },
  { slug: 'guerra', nombre: 'Guerra', orden: 6, icono: '⚔️' },
  { slug: 'providencia', nombre: 'Providencia', orden: 7, icono: '🌤️' },
  { slug: 'fidelidad', nombre: 'Fidelidad', orden: 8, icono: '🔥' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_1_SAMUEL = {
  'nacimiento-de-samuel': ['llamado', 'sacerdocio', 'providencia'],
  'el-llamado-de-samuel': ['llamado', 'sacerdocio', 'fidelidad'],
  'el-arca-capturada': ['sacerdocio', 'guerra'],
  'mizpa-y-el-rey': ['realeza'],
  'saul-ungido': ['llamado', 'realeza'],
  'jabes-y-reino': ['realeza', 'guerra'],
  'guerra-contra-filisteos': ['guerra', 'realeza'],
  'saul-rechazado': ['rechazo', 'realeza'],
  'david-ungido': ['llamado', 'realeza', 'providencia'],
  'david-y-goliat': ['guerra', 'providencia'],
  'celos-de-saul': ['rechazo', 'alianza', 'realeza'],
  'david-huye': ['guerra', 'sacerdocio', 'alianza'],
  'david-en-el-desierto': ['fidelidad', 'providencia'],
  'la-caida-de-saul': ['rechazo', 'guerra'],
}
