import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_2_TIMOTEO, TEMAS_2_TIMOTEO } from './temas-de-pericopa-2-timoteo.mjs'
import { PERICOPAS_2_TIMOTEO } from './temas-2-timoteo.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '2TI',
  slug: '2-timoteo',
  pericopas: PERICOPAS_2_TIMOTEO,
  temas: TEMAS_2_TIMOTEO,
  pericopaATemas: PERICOPA_A_TEMAS_2_TIMOTEO,
})
console.log(`Escrito data/temas-de-pericopa/2-timoteo.json (${TEMAS_2_TIMOTEO.length} temas)`)
