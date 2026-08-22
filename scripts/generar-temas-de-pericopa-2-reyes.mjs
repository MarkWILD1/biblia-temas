import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_2_REYES, TEMAS_2_REYES } from './temas-de-pericopa-2-reyes.mjs'
import { PERICOPAS_2_REYES } from './temas-2-reyes.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '2KI',
  slug: '2-reyes',
  pericopas: PERICOPAS_2_REYES,
  temas: TEMAS_2_REYES,
  pericopaATemas: PERICOPA_A_TEMAS_2_REYES,
})
console.log(`Escrito data/temas-de-pericopa/2-reyes.json (${TEMAS_2_REYES.length} temas)`)
