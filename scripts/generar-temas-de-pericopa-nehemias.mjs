import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_NEHEMIAS, TEMAS_NEHEMIAS } from './temas-de-pericopa-nehemias.mjs'
import { PERICOPAS_NEHEMIAS } from './temas-nehemias.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'NEH',
  slug: 'nehemias',
  pericopas: PERICOPAS_NEHEMIAS,
  temas: TEMAS_NEHEMIAS,
  pericopaATemas: PERICOPA_A_TEMAS_NEHEMIAS,
})
console.log(`Escrito data/temas-de-pericopa/nehemias.json (${TEMAS_NEHEMIAS.length} temas)`)
