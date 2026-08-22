import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_EXODO, TEMAS_EXODO } from './temas-de-pericopa-exodo.mjs'
import { PERICOPAS_EXODO } from './temas-exodo.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'EXO',
  slug: 'exodo',
  pericopas: PERICOPAS_EXODO,
  temas: TEMAS_EXODO,
  pericopaATemas: PERICOPA_A_TEMAS_EXODO,
})
console.log(`Escrito data/temas-de-pericopa/exodo.json (${TEMAS_EXODO.length} temas)`)
