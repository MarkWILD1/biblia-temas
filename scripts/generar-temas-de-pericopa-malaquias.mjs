import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { escribirTemasDePericopa } from './lib/escribir-temas-de-pericopa.mjs'
import { PERICOPA_A_TEMAS_MALAQUIAS, TEMAS_MALAQUIAS } from './temas-de-pericopa-malaquias.mjs'
import { PERICOPAS_MALAQUIAS } from './temas-malaquias.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
escribirTemasDePericopa({
  root,
  usfm: 'MAL',
  slug: 'malaquias',
  pericopas: PERICOPAS_MALAQUIAS,
  temas: TEMAS_MALAQUIAS,
  pericopaATemas: PERICOPA_A_TEMAS_MALAQUIAS,
})
console.log(`Escrito data/temas-de-pericopa/malaquias.json (${TEMAS_MALAQUIAS.length} temas)`)
