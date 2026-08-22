import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_SANTIAGO, TEMAS_SANTIAGO } from './temas-de-pericopa-santiago.mjs'
import { PERICOPAS_SANTIAGO } from './temas-santiago.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'JAS',
  slug: 'santiago',
  pericopas: PERICOPAS_SANTIAGO,
  temas: TEMAS_SANTIAGO,
  pericopaATemas: PERICOPA_A_TEMAS_SANTIAGO,
})
console.log(`Escrito data/temas-de-pericopa/santiago.json (${TEMAS_SANTIAGO.length} temas)`)
