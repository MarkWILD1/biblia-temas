import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_2_CORINTIOS, TEMAS_2_CORINTIOS } from './temas-de-pericopa-2-corintios.mjs'
import { PERICOPAS_2_CORINTIOS } from './temas-2-corintios.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: '2CO',
  slug: '2-corintios',
  pericopas: PERICOPAS_2_CORINTIOS,
  temas: TEMAS_2_CORINTIOS,
  pericopaATemas: PERICOPA_A_TEMAS_2_CORINTIOS,
})
console.log(`Escrito data/temas-de-pericopa/2-corintios.json (${TEMAS_2_CORINTIOS.length} temas)`)
