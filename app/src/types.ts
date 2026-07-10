export interface Versiculo {
  capitulo: number
  versiculo: number
  referencia: string
  texto: string
  textoNtv?: string
  textoDhh?: string
  textoTla?: string
  /** Nota de estudio (RVR1960 Esquematizada) */
  nota?: string
}

export interface ColeccionEstudio {
  nombre: string
  rango: string
}

export interface NotasEstudioMeta {
  fuente: string
  paginas: string
  colecciones?: ColeccionEstudio[]
}

export interface Tema {
  id: number
  nombre: string
  conteoOrientativo: number
  conteo: number
  versiculos: Versiculo[]
}

export interface BibliaPorTemas {
  libro: string
  idioma: string
  totalVersiculos: number
  versiones?: {
    rvr: string
    ntv: string
    dhh: string
    tla: string
  }
  notasEstudio?: NotasEstudioMeta
  statsNotas?: {
    notasDisponibles: number
    versiculosConNotaUnicos: number
    asignacionesEnTemas: number
  }
  temas: Tema[]
}
