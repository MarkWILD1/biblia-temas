export const TEMAS_2_TIMOTEO = [
  { slug: 'don', nombre: 'Don', orden: 1, icono: '🔥' },
  { slug: 'valor', nombre: 'Valor', orden: 2, icono: '🛡️' },
  { slug: 'discipulado', nombre: 'Discipulado', orden: 3, icono: '🤝' },
  { slug: 'escritura', nombre: 'Escritura', orden: 4, icono: '📜' },
  { slug: 'apostasia', nombre: 'Apostasía', orden: 5, icono: '🌑' },
  { slug: 'ministerio', nombre: 'Ministerio', orden: 6, icono: '📣' },
  { slug: 'corona', nombre: 'Corona', orden: 7, icono: '👑' },
  { slug: 'fidelidad', nombre: 'Fidelidad', orden: 8, icono: '🕯️' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_2_TIMOTEO = {
  'el-don-y-el-valor': ['don', 'valor'],
  'no-te-averguences': ['valor', 'fidelidad'],
  'soldado-y-atleta': ['discipulado', 'corona'],
  'obrero-aprobado': ['discipulado', 'escritura'],
  'los-ultimos-dias': ['apostasia'],
  'toda-la-escritura': ['escritura', 'discipulado'],
  'predica-la-palabra': ['ministerio', 'corona'],
  'la-ultima-hora': ['fidelidad', 'ministerio'],
}
