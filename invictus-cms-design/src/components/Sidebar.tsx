import React from 'react'
import { SearchIcon, Building2Icon, SettingsIcon } from 'lucide-react'
import { Wordmark } from './Wordmark'

type SidebarProps = {
  query: string
  onQueryChange: (value: string) => void
  count: number
}

const collections = [{ label: 'Properties', icon: Building2Icon, count: 6, active: true }]

export function Sidebar({ query, onQueryChange, count }: SidebarProps) {
  return (
    <aside className="hidden w-[248px] shrink-0 flex-col border-r border-line bg-white lg:flex">
      <div className="flex h-16 items-center border-b border-line px-5">
        <Wordmark />
      </div>

      <div className="p-4">
        <label htmlFor="collection-search" className="sr-only">
          Search collections
        </label>
        <div className="relative">
          <SearchIcon
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
            aria-hidden="true"
          />
          <input
            id="collection-search"
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search properties"
            className="h-9 w-full rounded-[10px] border border-line bg-canvas pl-9 pr-3 text-[13px] text-ink outline-none transition-colors duration-150 placeholder:text-ink-soft focus:border-navy-800 focus:bg-white focus:ring-2 focus:ring-navy-100"
          />
        </div>
      </div>

      <nav className="px-3" aria-label="Collections">
        <h2 className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
          Collections
        </h2>
        <ul className="space-y-0.5">
          {collections.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.label}>
                <a
                  href="#"
                  aria-current={item.active ? 'page' : undefined}
                  className={`flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-[13px] font-medium transition-colors duration-150 ${
                    item.active
                      ? 'bg-navy-800 text-white'
                      : 'text-ink-muted hover:bg-canvas hover:text-ink'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="flex-1">{item.label}</span>
                  <span
                    className={`text-[11px] tabular-nums ${
                      item.active ? 'text-white/70' : 'text-ink-soft'
                    }`}
                  >
                    {item.active ? count : item.count}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-auto border-t border-line p-3">
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-[13px] font-medium text-ink-muted transition-colors duration-150 hover:bg-canvas hover:text-ink"
        >
          <SettingsIcon className="h-4 w-4" aria-hidden="true" />
          Workspace settings
        </a>
      </div>
    </aside>
  )
}
