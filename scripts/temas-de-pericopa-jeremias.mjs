export const TEMAS_JEREMIAS = [
  { slug: 'juicio', nombre: 'Juicio', orden: 1, icono: '⚖️' },
  { slug: 'llamado', nombre: 'Llamado', orden: 2, icono: '🔥' },
  { slug: 'pacto', nombre: 'Pacto', orden: 3, icono: '📜' },
  { slug: 'templo', nombre: 'Templo', orden: 4, icono: '🏛️' },
  { slug: 'lamento', nombre: 'Lamento', orden: 5, icono: '💧' },
  { slug: 'esperanza', nombre: 'Esperanza', orden: 6, icono: '🌅' },
  { slug: 'naciones', nombre: 'Naciones', orden: 7, icono: '🌍' },
  { slug: 'exilio', nombre: 'Exilio', orden: 8, icono: '⛓️' },
]

/** Cada relato entra en uno o más temas. No se tocan versos. */
export const PERICOPA_A_TEMAS_JEREMIAS = {
  'el-llamado': ['llamado'],
  'apostasia-de-juda': ['juicio', 'pacto'],
  'el-sermon-del-templo': ['templo', 'juicio'],
  'el-pacto-roto': ['pacto', 'juicio'],
  'sequia-y-lamento': ['lamento', 'juicio'],
  'el-alfarero': ['juicio', 'llamado'],
  'contra-los-reyes': ['juicio'],
  'setenta-anos': ['exilio', 'naciones'],
  'libro-de-consuelo': ['esperanza', 'pacto'],
  'el-rollo-y-los-recabitas': ['pacto'],
  'el-sitio': ['exilio', 'juicio'],
  'gedalias-y-egipto': ['exilio'],
  'oraculos-a-las-naciones': ['naciones', 'juicio'],
  'caida-de-jerusalen': ['exilio', 'juicio'],
}
