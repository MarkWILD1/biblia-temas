import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_SALMOS, TEMAS_SALMOS } from './temas-de-pericopa-salmos.mjs'
import { PERICOPAS_SALMOS } from './temas-salmos.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'PSA',
  slug: 'salmos',
  pericopas: PERICOPAS_SALMOS,
  temas: TEMAS_SALMOS,
  pericopaATemas: PERICOPA_A_TEMAS_SALMOS,
})
console.log(`Escrito data/temas-de-pericopa/salmos.json (${TEMAS_SALMOS.length} temas)`)
