import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_EFESIOS, TEMAS_EFESIOS } from './temas-de-pericopa-efesios.mjs'
import { PERICOPAS_EFESIOS } from './temas-efesios.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'EPH',
  slug: 'efesios',
  pericopas: PERICOPAS_EFESIOS,
  temas: TEMAS_EFESIOS,
  pericopaATemas: PERICOPA_A_TEMAS_EFESIOS,
})
console.log(`Escrito data/temas-de-pericopa/efesios.json (${TEMAS_EFESIOS.length} temas)`)
