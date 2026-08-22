import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import type {
  Canon,
  GrupoConLibros,
  LibroCanon,
  LibroPage,
  TemaPage,
  TemaTaxonomia,
  Traduccion,
  UnidadTaxonomia,
  VersoUnido,
} from './types'

function resolveDataDir() {
  const candidates = [join(process.cwd(), 'data'), join(process.cwd(), '..', 'data')]
  for (const dir of candidates) {
    if (existsSync(join(dir, 'canon.json'))) return dir
  }
  throw new Error(`No se encontró data/canon.json (cwd=${process.cwd()})`)
}

export const dataDir = resolveDataDir()

function readJson<T>(rel: string): T {
  return JSON.parse(readFileSync(join(dataDir, rel), 'utf8')) as T
}

let canonCache: Canon | undefined

interface AsignacionesDoc {
  libro: string
  taxonomia: string
  asignaciones: Record<string, string>
}

interface TaxonomiaDoc {
  libro: string
  id: string
  unidad?: UnidadTaxonomia
  temas: Omit<TemaTaxonomia, 'conteo'>[]
}

interface VersionDoc {
  version: string
  libro: string
  versiculos: Record<string, string>
}

interface NotasDoc {
  fuente: string
  libro: string
  notas: Record<string, string>
}

interface TemasDePericopaDoc {
  libro: string
  temas: Omit<TemaTaxonomia, 'conteo' | 'conteoOrientativo'>[]
  pericopaATemas: Record<string, string[]>
}

export function getCanon(): Canon {
  canonCache ??= readJson<Canon>('canon.json')
  return canonCache
}

export function getLibro(slug: string): LibroCanon | undefined {
  return getCanon().libros.find((libro) => libro.slug === slug)
}

export function getLibrosPublicados(): LibroCanon[] {
  return getCanon().libros.filter((libro) => libro.estado === 'publicado')
}

export function getGruposConLibros(): GrupoConLibros[] {
  const canon = getCanon()
  return canon.grupos.map((grupo) => ({
    ...grupo,
    libros: canon.libros.filter((libro) => libro.grupo === grupo.id),
  }))
}

function loadAsignaciones(usfm: string): AsignacionesDoc {
  return readJson<AsignacionesDoc>(`asignaciones/${usfm}.json`)
}

function loadNotas(usfm: string): Record<string, string> {
  const rel = `notas/rvr-esquematizada/${usfm}.json`
  if (!existsSync(join(dataDir, rel))) return {}
  return readJson<NotasDoc>(rel).notas
}

function loadTaxonomia(libroSlug: string): TaxonomiaDoc {
  return readJson<TaxonomiaDoc>(`taxonomias/${libroSlug}.json`)
}

function unidadDe(taxonomia: TaxonomiaDoc): UnidadTaxonomia {
  return taxonomia.unidad ?? 'tema'
}

function loadTemasDePericopa(libroSlug: string): TemasDePericopaDoc | null {
  const rel = `temas-de-pericopa/${libroSlug}.json`
  if (!existsSync(join(dataDir, rel))) return null
  return readJson<TemasDePericopaDoc>(rel)
}

function loadVersionMaps(usfm: string) {
  const versiones = getCanon().versiones
  return {
    versiones,
    maps: Object.fromEntries(
      versiones.map((version) => [
        version.id,
        readJson<VersionDoc>(`versiones/${version.id}/${usfm}.json`).versiculos,
      ]),
    ),
  }
}

function unirVersos(
  usfm: string,
  keys: string[],
  maps: Record<string, Record<string, string>>,
  notas: Record<string, string>,
): VersoUnido[] {
  const versiones = getCanon().versiones
  const versiculos: VersoUnido[] = []

  for (const key of keys) {
    const [capitulo, versiculo] = key.split(':').map(Number)
    const textos: Record<string, string> = {}
    const traducciones: Traduccion[] = []

    for (const [index, version] of versiones.entries()) {
      const texto = maps[version.id]?.[key]
      if (!texto) {
        throw new Error(`Falta ${version.id} en ${usfm} ${key}`)
      }
      textos[version.id] = texto
      traducciones.push({
        id: version.id,
        etiqueta: version.etiqueta,
        texto,
        primary: index === 0,
      })
    }

    const nota = notas[key]
    versiculos.push({
      capitulo,
      versiculo,
      referencia: key,
      textos,
      traducciones,
      nota,
      searchText: [key, ...traducciones.map((item) => item.texto), nota ?? '']
        .join(' ')
        .toLowerCase(),
    })
  }

  return versiculos.sort((a, b) => a.capitulo - b.capitulo || a.versiculo - b.versiculo)
}

export function getEjes(libroSlug: string): TemaTaxonomia[] {
  const libro = getLibro(libroSlug)
  if (!libro || libro.estado !== 'publicado') return []

  const doc = loadTemasDePericopa(libro.slug)
  if (!doc) return []

  const { asignaciones } = loadAsignaciones(libro.usfm)
  const counts = new Map<string, number>()

  for (const peri of Object.values(asignaciones)) {
    for (const tema of doc.pericopaATemas[peri] ?? []) {
      counts.set(tema, (counts.get(tema) ?? 0) + 1)
    }
  }

  return doc.temas
    .map((tema) => ({
      ...tema,
      conteoOrientativo: counts.get(tema.slug) ?? 0,
      conteo: counts.get(tema.slug) ?? 0,
    }))
    .sort((a, b) => a.orden - b.orden)
}

export function getTemas(libroSlug: string): TemaTaxonomia[] {
  const libro = getLibro(libroSlug)
  if (!libro || libro.estado !== 'publicado') return []

  const taxonomia = loadTaxonomia(libro.slug)
  const { asignaciones } = loadAsignaciones(libro.usfm)
  const counts = new Map<string, number>()

  for (const slug of Object.values(asignaciones)) {
    counts.set(slug, (counts.get(slug) ?? 0) + 1)
  }

  return taxonomia.temas
    .map((tema) => ({ ...tema, conteo: counts.get(tema.slug) ?? 0 }))
    .sort((a, b) => a.orden - b.orden)
}

export function getLibroPage(libroSlug: string): LibroPage {
  const libro = getLibro(libroSlug)
  if (!libro || libro.estado !== 'publicado') {
    throw new Error(`Libro no publicado: ${libroSlug}`)
  }

  const temas = getTemas(libroSlug)
  const { asignaciones } = loadAsignaciones(libro.usfm)
  const notas = loadNotas(libro.usfm)
  const keys = Object.keys(asignaciones)

  return {
    libro,
    temas,
    ejes: getEjes(libro.slug),
    unidad: unidadDe(loadTaxonomia(libro.slug)),
    totalVersiculos: keys.length,
    notasUnicas: keys.filter((key) => notas[key]).length,
  }
}

export function getTemaPage(libroSlug: string, temaSlug: string): TemaPage {
  const libro = getLibro(libroSlug)
  if (!libro || libro.estado !== 'publicado') {
    throw new Error(`Libro no publicado: ${libroSlug}`)
  }

  const temas = getTemas(libroSlug)
  const tema = temas.find((item) => item.slug === temaSlug)
  if (!tema) {
    throw new Error(`Tema no encontrado: ${libroSlug}/${temaSlug}`)
  }

  const { asignaciones } = loadAsignaciones(libro.usfm)
  const { maps } = loadVersionMaps(libro.usfm)
  const notas = loadNotas(libro.usfm)
  const verseKeys = Object.entries(asignaciones)
    .filter(([, slug]) => slug === temaSlug)
    .map(([key]) => key)
  const versiculos = unirVersos(libro.usfm, verseKeys, maps, notas)
  const keys = Object.keys(asignaciones)

  return {
    libro,
    tema,
    temas,
    unidad: unidadDe(loadTaxonomia(libro.slug)),
    seccion: 'temas',
    versiculos,
    totalVersiculos: keys.length,
    notasUnicas: keys.filter((key) => notas[key]).length,
  }
}

export function getEjePage(libroSlug: string, ejeSlug: string): TemaPage {
  const libro = getLibro(libroSlug)
  if (!libro || libro.estado !== 'publicado') {
    throw new Error(`Libro no publicado: ${libroSlug}`)
  }

  const ejes = getEjes(libroSlug)
  const tema = ejes.find((item) => item.slug === ejeSlug)
  if (!tema) {
    throw new Error(`Eje no encontrado: ${libroSlug}/${ejeSlug}`)
  }

  const doc = loadTemasDePericopa(libro.slug)
  if (!doc) throw new Error(`Sin capa de temas para ${libroSlug}`)

  const periMeta = new Map(getTemas(libro.slug).map((item) => [item.slug, item]))
  const relatosFuente = Object.entries(doc.pericopaATemas)
    .filter(([, temas]) => temas.includes(ejeSlug))
    .map(([peri]) => ({
      slug: peri,
      nombre: periMeta.get(peri)?.nombre ?? peri,
    }))
    .sort((a, b) => (periMeta.get(a.slug)?.orden ?? 0) - (periMeta.get(b.slug)?.orden ?? 0))

  const { asignaciones } = loadAsignaciones(libro.usfm)
  const { maps } = loadVersionMaps(libro.usfm)
  const notas = loadNotas(libro.usfm)
  const periSlugs = new Set(relatosFuente.map((item) => item.slug))
  const verseKeys = Object.entries(asignaciones)
    .filter(([, peri]) => periSlugs.has(peri))
    .map(([key]) => key)
  const versiculos = unirVersos(libro.usfm, verseKeys, maps, notas)
  const keys = Object.keys(asignaciones)

  return {
    libro,
    tema,
    temas: ejes,
    unidad: 'tema',
    seccion: 'ejes',
    relatosFuente,
    versiculos,
    totalVersiculos: keys.length,
    notasUnicas: keys.filter((key) => notas[key]).length,
  }
}

export function getStaticLibroPaths() {
  return getLibrosPublicados().map((libro) => ({
    params: { libro: libro.slug },
  }))
}

export function getStaticTemaPaths() {
  return getLibrosPublicados().flatMap((libro) =>
    getTemas(libro.slug).map((tema) => ({
      params: { libro: libro.slug, tema: tema.slug },
    })),
  )
}

export function getStaticEjePaths() {
  return getLibrosPublicados().flatMap((libro) =>
    getEjes(libro.slug).map((eje) => ({
      params: { libro: libro.slug, eje: eje.slug },
    })),
  )
}
