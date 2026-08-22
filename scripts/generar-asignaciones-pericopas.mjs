import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirCapasPericopas } from './lib/escribir-capas-pericopas.mjs'
import { PERICOPAS_EXODO } from './temas-exodo.mjs'
import { PERICOPAS_GENESIS } from './temas-genesis.mjs'
import { PERICOPAS_LEVITICO } from './temas-levitico.mjs'
import { PERICOPAS_DEUTERONOMIO } from './temas-deuteronomio.mjs'
import { PERICOPAS_JOSUE } from './temas-josue.mjs'
import { PERICOPAS_JUECES } from './temas-jueces.mjs'
import { PERICOPAS_NUMEROS } from './temas-numeros.mjs'
import { PERICOPAS_RUT } from './temas-rut.mjs'
import { PERICOPAS_1_SAMUEL } from './temas-1-samuel.mjs'
import { PERICOPAS_2_SAMUEL } from './temas-2-samuel.mjs'
import { PERICOPAS_1_REYES } from './temas-1-reyes.mjs'
import { PERICOPAS_2_REYES } from './temas-2-reyes.mjs'
import { PERICOPAS_1_CRONICAS } from './temas-1-cronicas.mjs'
import { PERICOPAS_2_CRONICAS } from './temas-2-cronicas.mjs'
import { PERICOPAS_ESDRAS } from './temas-esdras.mjs'
import { PERICOPAS_NEHEMIAS } from './temas-nehemias.mjs'
import { PERICOPAS_ESTER } from './temas-ester.mjs'
import { PERICOPAS_JOB } from './temas-job.mjs'
import { PERICOPAS_SALMOS } from './temas-salmos.mjs'
import { PERICOPAS_ECLESIASTES } from './temas-eclesiastes.mjs'
import { PERICOPAS_CANTARES } from './temas-cantares.mjs'
import { PERICOPAS_ISAIAS } from './temas-isaias.mjs'
import { PERICOPAS_JEREMIAS } from './temas-jeremias.mjs'
import { PERICOPAS_LAMENTACIONES } from './temas-lamentaciones.mjs'
import { PERICOPAS_EZEQUIEL } from './temas-ezequiel.mjs'
import { PERICOPAS_DANIEL } from './temas-daniel.mjs'
import { PERICOPAS_OSEAS } from './temas-oseas.mjs'
import { PERICOPAS_JOEL } from './temas-joel.mjs'
import { PERICOPAS_AMOS } from './temas-amos.mjs'
import { PERICOPAS_ABDIAS } from './temas-abdias.mjs'
import { PERICOPAS_JONAS } from './temas-jonas.mjs'
import { PERICOPAS_MIQUEAS } from './temas-miqueas.mjs'
import { PERICOPAS_NAHUM } from './temas-nahum.mjs'
import { PERICOPAS_HABACUC } from './temas-habacuc.mjs'
import { PERICOPAS_SOFONIAS } from './temas-sofonias.mjs'
import { PERICOPAS_HAGEO } from './temas-hageo.mjs'
import { PERICOPAS_ZACARIAS } from './temas-zacarias.mjs'
import { PERICOPAS_MALAQUIAS } from './temas-malaquias.mjs'
import { PERICOPAS_MATEO } from './temas-mateo.mjs'
import { PERICOPAS_MARCOS } from './temas-marcos.mjs'
import { PERICOPAS_LUCAS } from './temas-lucas.mjs'
import { PERICOPAS_JUAN } from './temas-juan.mjs'
import { PERICOPAS_HECHOS } from './temas-hechos.mjs'
import { PERICOPAS_ROMANOS } from './temas-romanos.mjs'
import { PERICOPAS_1_CORINTIOS } from './temas-1-corintios.mjs'
import { PERICOPAS_2_CORINTIOS } from './temas-2-corintios.mjs'
import { PERICOPAS_GALATAS } from './temas-galatas.mjs'
import { PERICOPAS_EFESIOS } from './temas-efesios.mjs'
import { PERICOPAS_FILIPENSES } from './temas-filipenses.mjs'
import { PERICOPAS_COLOSENSES } from './temas-colosenses.mjs'
import { PERICOPAS_1_TESALONICENSES } from './temas-1-tesalonicenses.mjs'
import { PERICOPAS_2_TESALONICENSES } from './temas-2-tesalonicenses.mjs'
import { PERICOPAS_1_TIMOTEO } from './temas-1-timoteo.mjs'
import { PERICOPAS_2_TIMOTEO } from './temas-2-timoteo.mjs'
import { PERICOPAS_TITO } from './temas-tito.mjs'
import { PERICOPAS_FILEMON } from './temas-filemon.mjs'
import { PERICOPAS_HEBREOS } from './temas-hebreos.mjs'
import { PERICOPAS_SANTIAGO } from './temas-santiago.mjs'
import { PERICOPAS_1_PEDRO } from './temas-1-pedro.mjs'
import { PERICOPAS_2_PEDRO } from './temas-2-pedro.mjs'
import { PERICOPAS_1_JUAN } from './temas-1-juan.mjs'
import { PERICOPAS_2_JUAN } from './temas-2-juan.mjs'
import { PERICOPAS_3_JUAN } from './temas-3-juan.mjs'
import { PERICOPAS_JUDAS } from './temas-judas.mjs'
import { PERICOPAS_APOCALIPSIS } from './temas-apocalipsis.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const LIBROS = {
  genesis: { usfm: 'GEN', slug: 'genesis', pericopas: PERICOPAS_GENESIS },
  exodo: { usfm: 'EXO', slug: 'exodo', pericopas: PERICOPAS_EXODO },
  levitico: { usfm: 'LEV', slug: 'levitico', pericopas: PERICOPAS_LEVITICO },
  numeros: { usfm: 'NUM', slug: 'numeros', pericopas: PERICOPAS_NUMEROS },
  deuteronomio: { usfm: 'DEU', slug: 'deuteronomio', pericopas: PERICOPAS_DEUTERONOMIO },
  josue: { usfm: 'JOS', slug: 'josue', pericopas: PERICOPAS_JOSUE },
  jueces: { usfm: 'JDG', slug: 'jueces', pericopas: PERICOPAS_JUECES },
  rut: { usfm: 'RUT', slug: 'rut', pericopas: PERICOPAS_RUT },
  '1-samuel': { usfm: '1SA', slug: '1-samuel', pericopas: PERICOPAS_1_SAMUEL },
  '2-samuel': { usfm: '2SA', slug: '2-samuel', pericopas: PERICOPAS_2_SAMUEL },
  '1-reyes': { usfm: '1KI', slug: '1-reyes', pericopas: PERICOPAS_1_REYES },
  '2-reyes': { usfm: '2KI', slug: '2-reyes', pericopas: PERICOPAS_2_REYES },
  '1-cronicas': { usfm: '1CH', slug: '1-cronicas', pericopas: PERICOPAS_1_CRONICAS },
  '2-cronicas': { usfm: '2CH', slug: '2-cronicas', pericopas: PERICOPAS_2_CRONICAS },
  esdras: { usfm: 'EZR', slug: 'esdras', pericopas: PERICOPAS_ESDRAS },
  nehemias: { usfm: 'NEH', slug: 'nehemias', pericopas: PERICOPAS_NEHEMIAS },
  ester: { usfm: 'EST', slug: 'ester', pericopas: PERICOPAS_ESTER },
  job: { usfm: 'JOB', slug: 'job', pericopas: PERICOPAS_JOB },
  salmos: { usfm: 'PSA', slug: 'salmos', pericopas: PERICOPAS_SALMOS },
  eclesiastes: { usfm: 'ECC', slug: 'eclesiastes', pericopas: PERICOPAS_ECLESIASTES },
  cantares: { usfm: 'SNG', slug: 'cantares', pericopas: PERICOPAS_CANTARES },
  isaias: { usfm: 'ISA', slug: 'isaias', pericopas: PERICOPAS_ISAIAS },
  jeremias: { usfm: 'JER', slug: 'jeremias', pericopas: PERICOPAS_JEREMIAS },
  lamentaciones: { usfm: 'LAM', slug: 'lamentaciones', pericopas: PERICOPAS_LAMENTACIONES },
  ezequiel: { usfm: 'EZK', slug: 'ezequiel', pericopas: PERICOPAS_EZEQUIEL },
  daniel: { usfm: 'DAN', slug: 'daniel', pericopas: PERICOPAS_DANIEL },
  oseas: { usfm: 'HOS', slug: 'oseas', pericopas: PERICOPAS_OSEAS },
  joel: { usfm: 'JOL', slug: 'joel', pericopas: PERICOPAS_JOEL },
  amos: { usfm: 'AMO', slug: 'amos', pericopas: PERICOPAS_AMOS },
  abdias: { usfm: 'OBA', slug: 'abdias', pericopas: PERICOPAS_ABDIAS },
  jonas: { usfm: 'JON', slug: 'jonas', pericopas: PERICOPAS_JONAS },
  miqueas: { usfm: 'MIC', slug: 'miqueas', pericopas: PERICOPAS_MIQUEAS },
  nahum: { usfm: 'NAM', slug: 'nahum', pericopas: PERICOPAS_NAHUM },
  habacuc: { usfm: 'HAB', slug: 'habacuc', pericopas: PERICOPAS_HABACUC },
  sofonias: { usfm: 'ZEP', slug: 'sofonias', pericopas: PERICOPAS_SOFONIAS },
  hageo: { usfm: 'HAG', slug: 'hageo', pericopas: PERICOPAS_HAGEO },
  zacarias: { usfm: 'ZEC', slug: 'zacarias', pericopas: PERICOPAS_ZACARIAS },
  malaquias: { usfm: 'MAL', slug: 'malaquias', pericopas: PERICOPAS_MALAQUIAS },
  mateo: { usfm: 'MAT', slug: 'mateo', pericopas: PERICOPAS_MATEO },
  marcos: { usfm: 'MRK', slug: 'marcos', pericopas: PERICOPAS_MARCOS },
  lucas: { usfm: 'LUK', slug: 'lucas', pericopas: PERICOPAS_LUCAS },
  juan: { usfm: 'JHN', slug: 'juan', pericopas: PERICOPAS_JUAN },
  hechos: { usfm: 'ACT', slug: 'hechos', pericopas: PERICOPAS_HECHOS },
  romanos: { usfm: 'ROM', slug: 'romanos', pericopas: PERICOPAS_ROMANOS },
  '1-corintios': { usfm: '1CO', slug: '1-corintios', pericopas: PERICOPAS_1_CORINTIOS },
  '2-corintios': { usfm: '2CO', slug: '2-corintios', pericopas: PERICOPAS_2_CORINTIOS },
  galatas: { usfm: 'GAL', slug: 'galatas', pericopas: PERICOPAS_GALATAS },
  efesios: { usfm: 'EPH', slug: 'efesios', pericopas: PERICOPAS_EFESIOS },
  filipenses: { usfm: 'PHP', slug: 'filipenses', pericopas: PERICOPAS_FILIPENSES },
  colosenses: { usfm: 'COL', slug: 'colosenses', pericopas: PERICOPAS_COLOSENSES },
  '1-tesalonicenses': { usfm: '1TH', slug: '1-tesalonicenses', pericopas: PERICOPAS_1_TESALONICENSES },
  '2-tesalonicenses': { usfm: '2TH', slug: '2-tesalonicenses', pericopas: PERICOPAS_2_TESALONICENSES },
  '1-timoteo': { usfm: '1TI', slug: '1-timoteo', pericopas: PERICOPAS_1_TIMOTEO },
  '2-timoteo': { usfm: '2TI', slug: '2-timoteo', pericopas: PERICOPAS_2_TIMOTEO },
  tito: { usfm: 'TIT', slug: 'tito', pericopas: PERICOPAS_TITO },
  filemon: { usfm: 'PHM', slug: 'filemon', pericopas: PERICOPAS_FILEMON },
  hebreos: { usfm: 'HEB', slug: 'hebreos', pericopas: PERICOPAS_HEBREOS },
  santiago: { usfm: 'JAS', slug: 'santiago', pericopas: PERICOPAS_SANTIAGO },
  '1-pedro': { usfm: '1PE', slug: '1-pedro', pericopas: PERICOPAS_1_PEDRO },
  '2-pedro': { usfm: '2PE', slug: '2-pedro', pericopas: PERICOPAS_2_PEDRO },
  '1-juan': { usfm: '1JN', slug: '1-juan', pericopas: PERICOPAS_1_JUAN },
  '2-juan': { usfm: '2JN', slug: '2-juan', pericopas: PERICOPAS_2_JUAN },
  '3-juan': { usfm: '3JN', slug: '3-juan', pericopas: PERICOPAS_3_JUAN },
  judas: { usfm: 'JUD', slug: 'judas', pericopas: PERICOPAS_JUDAS },
  apocalipsis: { usfm: 'REV', slug: 'apocalipsis', pericopas: PERICOPAS_APOCALIPSIS },
}

const requested = process.argv[2]
const targets = requested ? [requested] : Object.keys(LIBROS)

for (const id of targets) {
  const book = LIBROS[id]
  if (!book) throw new Error(`Libro no soportado: ${id}`)
  const { keys, counts } = escribirCapasPericopas({ root, ...book })
  console.log(`Asignaciones ${book.usfm}: ${keys}`)
  for (const item of book.pericopas) {
    console.log(`  ${String(counts[item.slug]).padStart(4)}  ${item.slug}`)
  }
}
