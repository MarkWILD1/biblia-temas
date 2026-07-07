import type { Tema, Versiculo } from '../types'

interface Traduccion {
  label: string
  texto: string
  primary?: boolean
}

function getTraducciones(versiculo: Versiculo): Traduccion[] {
  const traducciones: Traduccion[] = [
    { label: 'Reina-Valera 1960', texto: versiculo.texto, primary: true },
  ]

  if (versiculo.textoNtv) {
    traducciones.push({ label: 'NTV', texto: versiculo.textoNtv })
  }

  if (versiculo.textoDhh) {
    traducciones.push({ label: 'DHH', texto: versiculo.textoDhh })
  }

  if (versiculo.textoTla) {
    traducciones.push({ label: 'TLA', texto: versiculo.textoTla })
  }

  return traducciones
}

interface VerseCardProps {
  versiculo: Versiculo
}

function VerseCard({ versiculo }: VerseCardProps) {
  const traducciones = getTraducciones(versiculo)

  return (
    <article className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-md bg-[var(--color-accent-soft)] px-2 py-0.5 text-xs font-semibold text-[var(--color-accent)]">
          {versiculo.referencia}
        </span>
        <span className="text-xs text-[var(--color-muted)]">
          Cap. {versiculo.capitulo}
        </span>
      </div>
      <div className="space-y-3">
        {traducciones.map((traduccion, index) => (
          <div
            key={traduccion.label}
            className={index > 0 ? 'border-t border-slate-100 pt-3' : undefined}
          >
            <p
              className={`mb-1 text-[10px] font-semibold uppercase tracking-wide ${
                traduccion.primary
                  ? 'text-[var(--color-muted)]'
                  : 'text-[var(--color-accent)]'
              }`}
            >
              {traduccion.label}
            </p>
            <p
              className={`text-sm leading-relaxed ${
                traduccion.primary
                  ? 'text-[var(--color-text)]'
                  : 'text-[var(--color-text-soft)]'
              }`}
            >
              {traduccion.texto}
            </p>
          </div>
        ))}
      </div>
    </article>
  )
}

interface VerseListProps {
  tema: Tema
  search: string
}

export function VerseList({ tema, search }: VerseListProps) {
  const query = search.trim().toLowerCase()
  const versiculos = query
    ? tema.versiculos.filter(
        (v) =>
          v.texto.toLowerCase().includes(query) ||
          (v.textoNtv?.toLowerCase().includes(query) ?? false) ||
          (v.textoDhh?.toLowerCase().includes(query) ?? false) ||
          (v.textoTla?.toLowerCase().includes(query) ?? false) ||
          v.referencia.includes(query),
      )
    : tema.versiculos

  const featured = versiculos.slice(0, 2)
  const rest = versiculos.slice(2)

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden">
      <header className="shrink-0 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Tema seleccionado
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-[var(--color-text)]">
              {tema.nombre}
            </h2>
          </div>
          <div className="flex gap-2">
            <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
              {versiculos.length} versículos
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-[var(--color-text-soft)]">
              Libro de Proverbios
            </span>
          </div>
        </div>
      </header>

      {versiculos.length === 0 ? (
        <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 text-center">
          <p className="text-sm text-[var(--color-text-soft)]">
            No hay versículos que coincidan con tu búsqueda.
          </p>
        </div>
      ) : (
        <div className="grid min-h-0 flex-1 gap-4 overflow-hidden lg:grid-cols-[280px_1fr]">
          <div className="flex min-h-0 flex-col gap-3 overflow-y-auto pr-1">
            {featured.map((v) => (
              <div
                key={`${v.capitulo}-${v.versiculo}`}
                className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm"
              >
                <div className="h-1.5 bg-[var(--color-accent)]" />
                <div className="p-4">
                  <span className="text-xs font-semibold text-[var(--color-accent)]">
                    {v.referencia}
                  </span>
                  {getTraducciones(v).map((traduccion, index) => (
                    <div key={traduccion.label} className={index === 0 ? 'mt-2' : 'mt-3'}>
                      <p
                        className={`text-[10px] font-semibold uppercase tracking-wide ${
                          traduccion.primary
                            ? 'text-[var(--color-muted)]'
                            : 'text-[var(--color-accent)]'
                        }`}
                      >
                        {traduccion.label}
                      </p>
                      <p
                        className={`mt-1 text-sm leading-relaxed ${
                          traduccion.primary
                            ? 'text-[var(--color-text)]'
                            : 'text-[var(--color-text-soft)]'
                        }`}
                      >
                        {traduccion.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="min-h-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h3 className="text-sm font-semibold text-[var(--color-text)]">
                Todos los versículos
              </h3>
              <div className="flex gap-2">
                <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-medium text-white">
                  Lista
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-[var(--color-text-soft)]">
                  {tema.conteo} total
                </span>
              </div>
            </div>
            <div className="grid max-h-full gap-3 overflow-y-auto p-4 sm:grid-cols-2 xl:grid-cols-2">
              {rest.map((v) => (
                <VerseCard key={`${v.capitulo}-${v.versiculo}`} versiculo={v} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
