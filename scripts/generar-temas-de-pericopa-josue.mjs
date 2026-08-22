import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_JOSUE, TEMAS_JOSUE } from './temas-de-pericopa-josue.mjs'
import { PERICOPAS_JOSUE } from './temas-josue.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'JOS',
  slug: 'josue',
  pericopas: PERICOPAS_JOSUE,
  temas: TEMAS_JOSUE,
  pericopaATemas: PERICOPA_A_TEMAS_JOSUE,
})
console.log(`Escrito data/temas-de-pericopa/josue.json (${TEMAS_JOSUE.length} temas)`)
