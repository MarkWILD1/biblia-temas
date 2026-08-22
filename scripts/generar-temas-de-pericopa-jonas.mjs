import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_JONAS, TEMAS_JONAS } from './temas-de-pericopa-jonas.mjs'
import { PERICOPAS_JONAS } from './temas-jonas.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'JON',
  slug: 'jonas',
  pericopas: PERICOPAS_JONAS,
  temas: TEMAS_JONAS,
  pericopaATemas: PERICOPA_A_TEMAS_JONAS,
})
console.log(`Escrito data/temas-de-pericopa/jonas.json (${TEMAS_JONAS.length} temas)`)
