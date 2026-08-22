import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_NAHUM, TEMAS_NAHUM } from './temas-de-pericopa-nahum.mjs'
import { PERICOPAS_NAHUM } from './temas-nahum.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'NAM',
  slug: 'nahum',
  pericopas: PERICOPAS_NAHUM,
  temas: TEMAS_NAHUM,
  pericopaATemas: PERICOPA_A_TEMAS_NAHUM,
})
console.log(`Escrito data/temas-de-pericopa/nahum.json (${TEMAS_NAHUM.length} temas)`)
