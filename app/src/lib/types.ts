export type LibroEstado = 'publicado' | 'proximo'
export type UnidadTaxonomia = 'tema' | 'pericopa'

export interface VersionMeta {
  id: string
  nombre: string
  etiqueta: string
}

export interface GrupoCanon {
  id: string
  nombre: string
  testamento: 'at' | 'nt'
}

export interface LibroCanon {
  usfm: string
  slug: string
  nombre: string
  testamento: 'at' | 'nt'
  grupo: string
  estado: LibroEstado
}

export interface Canon {
  idioma: string
  canon: string
  versiones: VersionMeta[]
  grupos: GrupoCanon[]
  libros: LibroCanon[]
}

export interface TemaTaxonomia {
  slug: string
  nombre: string
  orden: number
  icono: string
  conteoOrientativo: number
  conteo: number
}

export interface ParteReferencia {
  desde: number
  hasta: number
  slug: string
  nombre: string
}

export interface CapituloReferencia {
  capitulo: number
  ultimo: number
  partes: ParteReferencia[]
}

export interface Traduccion {
  id: string
  etiqueta: string
  texto: string
  primary: boolean
}

export interface VersoUnido {
  capitulo: number
  versiculo: number
  referencia: string
  textos: Record<string, string>
  traducciones: Traduccion[]
  nota?: string
  searchText: string
}

export interface GrupoConLibros extends GrupoCanon {
  libros: LibroCanon[]
}

export interface LibroPage {
  libro: LibroCanon
  temas: TemaTaxonomia[]
  ejes: TemaTaxonomia[]
  unidad: UnidadTaxonomia
  totalVersiculos: number
  notasUnicas: number
}

export interface TemaPage {
  libro: LibroCanon
  tema: TemaTaxonomia
  temas: TemaTaxonomia[]
  unidad: UnidadTaxonomia
  seccion: 'temas' | 'ejes'
  relatosFuente?: { slug: string; nombre: string }[]
  versiculos: VersoUnido[]
  totalVersiculos: number
  notasUnicas: number
}
