import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_1_CRONICAS, TEMAS_1_CRONICAS } from './temas-de-pericopa-1-cronicas.mjs'
import { PERICOPAS_1_CRONICAS } from './temas-1-cronicas.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '1CH',
  slug: '1-cronicas',
  pericopas: PERICOPAS_1_CRONICAS,
  temas: TEMAS_1_CRONICAS,
  pericopaATemas: PERICOPA_A_TEMAS_1_CRONICAS,
})
console.log(`Escrito data/temas-de-pericopa/1-cronicas.json (${TEMAS_1_CRONICAS.length} temas)`)
