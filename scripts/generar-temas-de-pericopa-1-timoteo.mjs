import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_1_TIMOTEO, TEMAS_1_TIMOTEO } from './temas-de-pericopa-1-timoteo.mjs'
import { PERICOPAS_1_TIMOTEO } from './temas-1-timoteo.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '1TI',
  slug: '1-timoteo',
  pericopas: PERICOPAS_1_TIMOTEO,
  temas: TEMAS_1_TIMOTEO,
  pericopaATemas: PERICOPA_A_TEMAS_1_TIMOTEO,
})
console.log(`Escrito data/temas-de-pericopa/1-timoteo.json (${TEMAS_1_TIMOTEO.length} temas)`)
