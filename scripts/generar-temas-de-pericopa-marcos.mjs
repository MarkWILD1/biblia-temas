import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_MARCOS, TEMAS_MARCOS } from './temas-de-pericopa-marcos.mjs'
import { PERICOPAS_MARCOS } from './temas-marcos.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'MRK',
  slug: 'marcos',
  pericopas: PERICOPAS_MARCOS,
  temas: TEMAS_MARCOS,
  pericopaATemas: PERICOPA_A_TEMAS_MARCOS,
})
console.log(`Escrito data/temas-de-pericopa/marcos.json (${TEMAS_MARCOS.length} temas)`)
