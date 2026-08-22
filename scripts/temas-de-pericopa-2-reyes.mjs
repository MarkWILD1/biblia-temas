export const TEMAS_2_REYES = [
  { slug: 'profecia', nombre: 'Profecía', orden: 1, icono: '📣' },
  { slug: 'milagro', nombre: 'Milagro', orden: 2, icono: '✨' },
  { slug: 'realeza', nombre: 'Realeza', orden: 3, icono: '👑' },
  { slug: 'idolatria', nombre: 'Idolatría', orden: 4, icono: '🗿' },
  { slug: 'juicio', nombre: 'Juicio', orden: 5, icono: '⚖️' },
  { slug: 'reforma', nombre: 'Reforma', orden: 6, icono: '🔨' },
  { slug: 'exilio', nombre: 'Exilio', orden: 7, icono: '🚶' },
  { slug: 'guerra', nombre: 'Guerra', orden: 8, icono: '⚔️' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_2_REYES = {
  'elias-y-eliseo': ['profecia', 'milagro'],
  'guerra-contra-moab': ['guerra', 'profecia'],
  'milagros-de-eliseo': ['milagro', 'profecia'],
  naaman: ['milagro', 'profecia'],
  'samaria-sitiada': ['guerra', 'milagro', 'profecia'],
  'hazael-y-los-reyes': ['realeza', 'profecia'],
  jehu: ['realeza', 'juicio', 'idolatria'],
  'atalia-y-joas': ['realeza', 'reforma'],
  'muerte-de-eliseo': ['profecia', 'milagro', 'realeza'],
  'caida-de-samaria': ['juicio', 'exilio', 'idolatria'],
  'ezequias-y-senaquerib': ['reforma', 'guerra', 'profecia', 'realeza'],
  manases: ['idolatria', 'juicio', 'realeza'],
  josias: ['reforma', 'idolatria', 'realeza'],
  'caida-de-jerusalen': ['juicio', 'exilio', 'guerra', 'realeza'],
}
