import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_DEUTERONOMIO, TEMAS_DEUTERONOMIO } from './temas-de-pericopa-deuteronomio.mjs'
import { PERICOPAS_DEUTERONOMIO } from './temas-deuteronomio.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'DEU',
  slug: 'deuteronomio',
  pericopas: PERICOPAS_DEUTERONOMIO,
  temas: TEMAS_DEUTERONOMIO,
  pericopaATemas: PERICOPA_A_TEMAS_DEUTERONOMIO,
})
console.log(`Escrito data/temas-de-pericopa/deuteronomio.json (${TEMAS_DEUTERONOMIO.length} temas)`)
