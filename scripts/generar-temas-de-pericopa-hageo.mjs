import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_HAGEO, TEMAS_HAGEO } from './temas-de-pericopa-hageo.mjs'
import { PERICOPAS_HAGEO } from './temas-hageo.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'HAG',
  slug: 'hageo',
  pericopas: PERICOPAS_HAGEO,
  temas: TEMAS_HAGEO,
  pericopaATemas: PERICOPA_A_TEMAS_HAGEO,
})
console.log(`Escrito data/temas-de-pericopa/hageo.json (${TEMAS_HAGEO.length} temas)`)
