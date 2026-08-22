import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_RUT, TEMAS_RUT } from './temas-de-pericopa-rut.mjs'
import { PERICOPAS_RUT } from './temas-rut.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'RUT',
  slug: 'rut',
  pericopas: PERICOPAS_RUT,
  temas: TEMAS_RUT,
  pericopaATemas: PERICOPA_A_TEMAS_RUT,
})
console.log(`Escrito data/temas-de-pericopa/rut.json (${TEMAS_RUT.length} temas)`)
