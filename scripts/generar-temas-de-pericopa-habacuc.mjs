import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_HABACUC, TEMAS_HABACUC } from './temas-de-pericopa-habacuc.mjs'
import { PERICOPAS_HABACUC } from './temas-habacuc.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'HAB',
  slug: 'habacuc',
  pericopas: PERICOPAS_HABACUC,
  temas: TEMAS_HABACUC,
  pericopaATemas: PERICOPA_A_TEMAS_HABACUC,
})
console.log(`Escrito data/temas-de-pericopa/habacuc.json (${TEMAS_HABACUC.length} temas)`)
