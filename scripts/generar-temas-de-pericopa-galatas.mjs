import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_GALATAS, TEMAS_GALATAS } from './temas-de-pericopa-galatas.mjs'
import { PERICOPAS_GALATAS } from './temas-galatas.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'GAL',
  slug: 'galatas',
  pericopas: PERICOPAS_GALATAS,
  temas: TEMAS_GALATAS,
  pericopaATemas: PERICOPA_A_TEMAS_GALATAS,
})
console.log(`Escrito data/temas-de-pericopa/galatas.json (${TEMAS_GALATAS.length} temas)`)
