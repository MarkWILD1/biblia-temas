export const TEMAS_FILEMON = [
  { slug: 'prision', nombre: 'Prisión', orden: 1, icono: '⛓️' },
  { slug: 'amor', nombre: 'Amor', orden: 2, icono: '❤️' },
  { slug: 'intercesion', nombre: 'Intercesión', orden: 3, icono: '🙏' },
  { slug: 'reconciliacion', nombre: 'Reconciliación', orden: 4, icono: '♾️' },
  { slug: 'fraternidad', nombre: 'Fraternidad', orden: 5, icono: '🤝' },
  { slug: 'deuda', nombre: 'Deuda', orden: 6, icono: '📜' },
  { slug: 'hospitalidad', nombre: 'Hospitalidad', orden: 7, icono: '🏠' },
  { slug: 'comunion', nombre: 'Comunión', orden: 8, icono: '🕊️' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_FILEMON = {
  'pablo-prisionero': ['prision', 'comunion'],
  'tu-amor-y-fe': ['amor', 'fraternidad'],
  'por-amor-te-ruego': ['intercesion', 'amor'],
  'onesimo-mi-hijo': ['intercesion', 'fraternidad'],
  'para-siempre': ['reconciliacion', 'fraternidad'],
  'cargalo-a-mi-cuenta': ['deuda', 'intercesion'],
  'refresca-mi-corazon': ['hospitalidad', 'amor'],
  'los-companeros': ['comunion', 'prision'],
}
