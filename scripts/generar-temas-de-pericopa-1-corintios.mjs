import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_1_CORINTIOS, TEMAS_1_CORINTIOS } from './temas-de-pericopa-1-corintios.mjs'
import { PERICOPAS_1_CORINTIOS } from './temas-1-corintios.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '1CO',
  slug: '1-corintios',
  pericopas: PERICOPAS_1_CORINTIOS,
  temas: TEMAS_1_CORINTIOS,
  pericopaATemas: PERICOPA_A_TEMAS_1_CORINTIOS,
})
console.log(`Escrito data/temas-de-pericopa/1-corintios.json (${TEMAS_1_CORINTIOS.length} temas)`)
