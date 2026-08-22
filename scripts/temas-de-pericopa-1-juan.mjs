export const TEMAS_1_JUAN = [
  { slug: 'vida', nombre: 'Vida', orden: 1, icono: '💡' },
  { slug: 'luz', nombre: 'Luz', orden: 2, icono: '✨' },
  { slug: 'amor', nombre: 'Amor', orden: 3, icono: '❤️' },
  { slug: 'mundo', nombre: 'Mundo', orden: 4, icono: '🌍' },
  { slug: 'hijos', nombre: 'Hijos', orden: 5, icono: '👶' },
  { slug: 'espiritus', nombre: 'Espíritus', orden: 6, icono: '🛡️' },
  { slug: 'testimonio', nombre: 'Testimonio', orden: 7, icono: '📜' },
  { slug: 'confianza', nombre: 'Confianza', orden: 8, icono: '🙏' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_1_JUAN = {
  'el-verbo-de-vida': ['vida', 'luz'],
  'abogado-y-mandamiento': ['confianza', 'amor'],
  'no-ameis-al-mundo': ['mundo'],
  'hijos-de-dios': ['hijos'],
  'amarnos-unos-a-otros': ['amor'],
  'probad-los-espiritus': ['espiritus'],
  'dios-es-amor': ['amor', 'confianza'],
  'el-testimonio': ['testimonio', 'vida'],
}
