import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_FILEMON, TEMAS_FILEMON } from './temas-de-pericopa-filemon.mjs'
import { PERICOPAS_FILEMON } from './temas-filemon.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'PHM',
  slug: 'filemon',
  pericopas: PERICOPAS_FILEMON,
  temas: TEMAS_FILEMON,
  pericopaATemas: PERICOPA_A_TEMAS_FILEMON,
})
console.log(`Escrito data/temas-de-pericopa/filemon.json (${TEMAS_FILEMON.length} temas)`)
