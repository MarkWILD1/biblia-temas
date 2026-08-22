import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_2_PEDRO, TEMAS_2_PEDRO } from './temas-de-pericopa-2-pedro.mjs'
import { PERICOPAS_2_PEDRO } from './temas-2-pedro.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '2PE',
  slug: '2-pedro',
  pericopas: PERICOPAS_2_PEDRO,
  temas: TEMAS_2_PEDRO,
  pericopaATemas: PERICOPA_A_TEMAS_2_PEDRO,
})
console.log(`Escrito data/temas-de-pericopa/2-pedro.json (${TEMAS_2_PEDRO.length} temas)`)
