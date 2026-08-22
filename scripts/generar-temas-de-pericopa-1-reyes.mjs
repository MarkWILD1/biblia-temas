import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_1_REYES, TEMAS_1_REYES } from './temas-de-pericopa-1-reyes.mjs'
import { PERICOPAS_1_REYES } from './temas-1-reyes.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '1KI',
  slug: '1-reyes',
  pericopas: PERICOPAS_1_REYES,
  temas: TEMAS_1_REYES,
  pericopaATemas: PERICOPA_A_TEMAS_1_REYES,
})
console.log(`Escrito data/temas-de-pericopa/1-reyes.json (${TEMAS_1_REYES.length} temas)`)
