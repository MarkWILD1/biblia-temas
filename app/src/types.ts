export interface Versiculo {
  capitulo: number
  versiculo: number
  referencia: string
  texto: string
  textoNtv?: string
  textoDhh?: string
  textoTla?: string
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
  temas: Tema[]
}
