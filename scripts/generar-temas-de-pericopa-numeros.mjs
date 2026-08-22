import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_NUMEROS, TEMAS_NUMEROS } from './temas-de-pericopa-numeros.mjs'
import { PERICOPAS_NUMEROS } from './temas-numeros.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'NUM',
  slug: 'numeros',
  pericopas: PERICOPAS_NUMEROS,
  temas: TEMAS_NUMEROS,
  pericopaATemas: PERICOPA_A_TEMAS_NUMEROS,
})
console.log(`Escrito data/temas-de-pericopa/numeros.json (${TEMAS_NUMEROS.length} temas)`)
