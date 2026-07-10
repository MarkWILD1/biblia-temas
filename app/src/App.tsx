import { useEffect, useMemo, useRef, useState } from 'react'
import type { BibliaPorTemas } from './types'
import { Sidebar } from './components/Sidebar'
import { VerseList } from './components/VerseList'

export default function App() {
  const [data, setData] = useState<BibliaPorTemas | null>(null)
  const [selectedId, setSelectedId] = useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const sidebarRef = useRef<HTMLElement>(null)
  const wasOpenRef = useRef(false)

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

  useEffect(() => {
    if (!sidebarOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSidebarOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [sidebarOpen])

  useEffect(() => {
    if (sidebarOpen) {
      sidebarRef.current?.focus()
      wasOpenRef.current = true
      return
    }

    if (wasOpenRef.current) {
      menuButtonRef.current?.focus()
      wasOpenRef.current = false
    }
  }, [sidebarOpen])

  const selectedTema = useMemo(
    () => data?.temas.find((t) => t.id === selectedId) ?? null,
    [data, selectedId],
  )

  const handleSelectTema = (id: number) => {
    setSelectedId(id)
    setSidebarOpen(false)
  }

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
    <div className="flex h-full items-stretch justify-center p-0 lg:items-center lg:p-4 xl:p-6">
      <div className="relative flex h-dvh w-full max-w-7xl overflow-hidden rounded-none border-0 border-slate-200/80 bg-[var(--color-surface)] shadow-none lg:h-[min(920px,calc(100dvh-2rem))] lg:rounded-3xl lg:border lg:shadow-xl lg:shadow-slate-200/60">
        {sidebarOpen ? (
          <button
            type="button"
            aria-label="Cerrar menú de temas"
            className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        ) : null}

        <Sidebar
          ref={sidebarRef}
          id="temas-drawer"
          temas={data.temas}
          selectedId={selectedId}
          onSelect={handleSelectTema}
          onClose={() => setSidebarOpen(false)}
          className={`fixed inset-y-0 left-0 z-50 shadow-xl transition-transform duration-200 ease-out lg:static lg:z-auto lg:translate-x-0 lg:shadow-none ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        />

        <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="flex shrink-0 flex-col gap-3 border-b border-slate-200/80 bg-white/50 px-4 py-3 sm:px-5 lg:flex-row lg:items-center lg:gap-3">
            <div className="flex items-start gap-3">
              <button
                ref={menuButtonRef}
                type="button"
                aria-label="Abrir temas"
                aria-expanded={sidebarOpen}
                aria-controls="temas-drawer"
                onClick={() => setSidebarOpen(true)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[var(--color-text)] shadow-sm transition-colors hover:bg-slate-50 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              </button>
              <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
                <span className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-accent)]">
                  Temas
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-text-soft)]">
                  Proverbios
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-text-soft)]">
                  RVR + NTV + DHH + TLA
                </span>
                <span className="rounded-full border border-slate-200/80 bg-white px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-text-soft)]">
                  <span className="font-semibold text-[var(--color-text)]">
                    {data.totalVersiculos}
                  </span>{' '}
                  vers.
                </span>
                <span className="rounded-full border border-slate-200/80 bg-white px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-text-soft)]">
                  <span className="font-semibold text-[var(--color-text)]">
                    {data.temas.length}
                  </span>{' '}
                  temas
                </span>
                <span className="rounded-full border border-amber-200/80 bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-800/80">
                  <span className="font-semibold text-amber-950">
                    {data.statsNotas?.versiculosConNotaUnicos ?? '—'}
                  </span>{' '}
                  notas
                </span>
              </div>
            </div>
            <div className="w-full lg:ml-auto lg:max-w-xs lg:flex-1">
              <input
                type="search"
                placeholder="Buscar versículo o nota…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)]"
              />
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-3 sm:p-5">
            <VerseList tema={selectedTema} search={search} />
          </div>
        </main>
      </div>
    </div>
  )
}
