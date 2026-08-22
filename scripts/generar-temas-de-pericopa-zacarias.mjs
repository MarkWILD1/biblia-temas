import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_ZACARIAS, TEMAS_ZACARIAS } from './temas-de-pericopa-zacarias.mjs'
import { PERICOPAS_ZACARIAS } from './temas-zacarias.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'ZEC',
  slug: 'zacarias',
  pericopas: PERICOPAS_ZACARIAS,
  temas: TEMAS_ZACARIAS,
  pericopaATemas: PERICOPA_A_TEMAS_ZACARIAS,
})
console.log(`Escrito data/temas-de-pericopa/zacarias.json (${TEMAS_ZACARIAS.length} temas)`)
