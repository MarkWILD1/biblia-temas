import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_DANIEL, TEMAS_DANIEL } from './temas-de-pericopa-daniel.mjs'
import { PERICOPAS_DANIEL } from './temas-daniel.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'DAN',
  slug: 'daniel',
  pericopas: PERICOPAS_DANIEL,
  temas: TEMAS_DANIEL,
  pericopaATemas: PERICOPA_A_TEMAS_DANIEL,
})
console.log(`Escrito data/temas-de-pericopa/daniel.json (${TEMAS_DANIEL.length} temas)`)
