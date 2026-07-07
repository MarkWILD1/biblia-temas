import { useEffect, useMemo, useState } from 'react'
import type { BibliaPorTemas } from './types'
import { Sidebar } from './components/Sidebar'
import { VerseList } from './components/VerseList'

export default function App() {
  const [data, setData] = useState<BibliaPorTemas | null>(null)
  const [selectedId, setSelectedId] = useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/proverbios-por-temas.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar los datos')
        return res.json()
      })
      .then((json: BibliaPorTemas) => {
        setData(json)
        setSelectedId(json.temas[0]?.id ?? 1)
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const selectedTema = useMemo(
    () => data?.temas.find((t) => t.id === selectedId) ?? null,
    [data, selectedId],
  )

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-[var(--color-text-soft)]">Cargando temas…</p>
      </div>
    )
  }

  if (error || !data || !selectedTema) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-red-600">{error ?? 'Datos no disponibles'}</p>
      </div>
    )
  }

  return (
    <div className="flex h-full items-center justify-center p-4 md:p-6">
      <div className="flex h-[min(920px,calc(100vh-2rem))] w-full max-w-7xl overflow-hidden rounded-3xl border border-slate-200/80 bg-[var(--color-surface)] shadow-xl shadow-slate-200/60">
        <Sidebar
          temas={data.temas}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="flex shrink-0 items-center gap-3 border-b border-slate-200/80 bg-white/50 px-5 py-3">
            <div className="flex gap-2">
              {['Temas', 'Proverbios', 'RVR1960 + NTV + DHH + TLA'].map((pill, i) => (
                <span
                  key={pill}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    i === 0
                      ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
                      : 'bg-slate-100 text-[var(--color-text-soft)]'
                  }`}
                >
                  {pill}
                </span>
              ))}
            </div>
            <div className="ml-auto flex-1 max-w-xs">
              <input
                type="search"
                placeholder="Buscar versículo…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)]"
              />
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-5">
            <VerseList tema={selectedTema} search={search} />
          </div>

          <div className="grid shrink-0 grid-cols-2 gap-4 border-t border-slate-200/80 bg-white/40 px-5 py-4">
            <div className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs text-[var(--color-muted)]">Total versículos</p>
              <p className="text-lg font-semibold text-[var(--color-text)]">
                {data.totalVersiculos}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs text-[var(--color-muted)]">Temas disponibles</p>
              <p className="text-lg font-semibold text-[var(--color-text)]">
                {data.temas.length}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
