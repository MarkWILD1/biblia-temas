import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_1_PEDRO, TEMAS_1_PEDRO } from './temas-de-pericopa-1-pedro.mjs'
import { PERICOPAS_1_PEDRO } from './temas-1-pedro.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '1PE',
  slug: '1-pedro',
  pericopas: PERICOPAS_1_PEDRO,
  temas: TEMAS_1_PEDRO,
  pericopaATemas: PERICOPA_A_TEMAS_1_PEDRO,
})
console.log(`Escrito data/temas-de-pericopa/1-pedro.json (${TEMAS_1_PEDRO.length} temas)`)
