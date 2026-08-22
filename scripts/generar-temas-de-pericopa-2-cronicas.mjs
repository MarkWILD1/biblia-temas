import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_2_CRONICAS, TEMAS_2_CRONICAS } from './temas-de-pericopa-2-cronicas.mjs'
import { PERICOPAS_2_CRONICAS } from './temas-2-cronicas.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '2CH',
  slug: '2-cronicas',
  pericopas: PERICOPAS_2_CRONICAS,
  temas: TEMAS_2_CRONICAS,
  pericopaATemas: PERICOPA_A_TEMAS_2_CRONICAS,
})
console.log(`Escrito data/temas-de-pericopa/2-cronicas.json (${TEMAS_2_CRONICAS.length} temas)`)
