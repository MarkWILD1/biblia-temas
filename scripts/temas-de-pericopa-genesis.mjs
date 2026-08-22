export const TEMAS_GENESIS = [
  { slug: 'creacion', nombre: 'Creación', orden: 1, icono: '🌅' },
  { slug: 'caida-y-pecado', nombre: 'Caída y pecado', orden: 2, icono: '🌳' },
  { slug: 'juicio', nombre: 'Juicio', orden: 3, icono: '⚖️' },
  { slug: 'pacto', nombre: 'Pacto', orden: 4, icono: '⭐' },
  { slug: 'promesa-y-llamado', nombre: 'Promesa y llamado', orden: 5, icono: '🚶' },
  { slug: 'familia', nombre: 'Familia y linaje', orden: 6, icono: '👨‍👩‍👧' },
  { slug: 'naciones', nombre: 'Naciones', orden: 7, icono: '🗼' },
  { slug: 'providencia', nombre: 'Providencia', orden: 8, icono: '🌾' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS = {
  creacion: ['creacion'],
  'eden-y-caida': ['caida-y-pecado'],
  'cain-abel-y-set': ['caida-y-pecado', 'familia'],
  diluvio: ['juicio', 'pacto'],
  'naciones-y-babel': ['naciones', 'juicio'],
  'llamado-de-abram': ['promesa-y-llamado'],
  'pacto-con-abraham': ['pacto', 'promesa-y-llamado'],
  'sodoma-e-isaac': ['juicio', 'promesa-y-llamado'],
  'isaac-e-rebeca': ['familia', 'promesa-y-llamado'],
  'jacob-y-esau': ['familia'],
  'jacob-en-aran': ['familia', 'providencia'],
  'retorno-de-jacob': ['familia', 'pacto'],
  'jose-en-egipto': ['providencia'],
  'reconciliacion-y-bendicion': ['providencia', 'familia'],
}
