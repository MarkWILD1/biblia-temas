import type { Tema } from '../types'

const themeIcons: Record<number, string> = {
  1: '📖',
  2: '💬',
  3: '💰',
  4: '⚡',
  5: '👨‍👩‍👧',
  6: '💍',
  7: '⚖️',
  8: '🙏',
  9: '🔥',
  10: '🤝',
  11: '🏛️',
  12: '🍷',
}

interface SidebarProps {
  temas: Tema[]
  selectedId: number
  onSelect: (id: number) => void
}

export function Sidebar({ temas, selectedId, onSelect }: SidebarProps) {
  return (
    <aside className="flex w-72 shrink-0 flex-col border-r border-slate-200/80 bg-[var(--color-sidebar)]">
      <div className="border-b border-slate-200/80 px-5 py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
          Proverbios
        </p>
        <h1 className="mt-1 text-lg font-semibold text-[var(--color-text)]">
          Por temas
        </h1>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {temas.map((tema) => {
            const active = tema.id === selectedId
            return (
              <li key={tema.id}>
                <button
                  type="button"
                  onClick={() => onSelect(tema.id)}
                  className={`flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                    active
                      ? 'bg-white shadow-sm ring-1 ring-slate-200/80'
                      : 'hover:bg-white/70'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base ${
                      active ? 'bg-[var(--color-accent-soft)]' : 'bg-white/80'
                    }`}
                  >
                    {themeIcons[tema.id] ?? '📌'}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-sm leading-snug ${
                        active ? 'font-semibold text-[var(--color-text)]' : 'font-medium text-[var(--color-text-soft)]'
                      }`}
                    >
                      {tema.nombre}
                    </span>
                    <span className="mt-0.5 block text-xs text-[var(--color-muted)]">
                      {tema.conteo} versículos
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
