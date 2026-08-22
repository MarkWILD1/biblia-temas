import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_LEVITICO, TEMAS_LEVITICO } from './temas-de-pericopa-levitico.mjs'
import { PERICOPAS_LEVITICO } from './temas-levitico.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'LEV',
  slug: 'levitico',
  pericopas: PERICOPAS_LEVITICO,
  temas: TEMAS_LEVITICO,
  pericopaATemas: PERICOPA_A_TEMAS_LEVITICO,
})
console.log(`Escrito data/temas-de-pericopa/levitico.json (${TEMAS_LEVITICO.length} temas)`)
