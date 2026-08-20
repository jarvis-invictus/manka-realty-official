import React, { useMemo, useState } from 'react'
import { PlusIcon, SearchXIcon } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'
import { TopBar } from '../components/TopBar'
import { PropertyCard } from '../components/PropertyCard'
import { MediaLibrary } from '../components/MediaLibrary'
import { properties } from '../data/properties'
import { PropertyCategory } from '../types/property'

type PropertiesProps = {
  userName: string
  onOpenEntry: (id: string) => void
}

type CategoryFilter = 'All' | PropertyCategory

const categoryFilters: CategoryFilter[] = ['All', 'Residential', 'Commercial']

export function Properties({ userName, onOpenEntry }: PropertiesProps) {
  const [query, setQuery] = useState('')
  const [tab, setTab] = useState<'contents' | 'media'>('contents')
  const [category, setCategory] = useState<CategoryFilter>('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return properties.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const matchesQuery =
        !q || p.title.toLowerCase().includes(q) || p.locality.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  function countFor(filter: CategoryFilter) {
    return filter === 'All'
      ? properties.length
      : properties.filter((p) => p.category === filter).length
  }

  return (
    <div className="flex h-full w-full bg-canvas">
      <Sidebar query={query} onQueryChange={setQuery} count={properties.length} />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar activeTab={tab} onTabChange={setTab} userName={userName} />

        <main className="flex-1 overflow-y-auto px-6 py-7 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h1 className="text-[24px] font-semibold tracking-tight text-ink">Properties</h1>
                <p className="mt-1 text-sm text-ink-muted">
                  {filtered.length} {filtered.length === 1 ? 'entry' : 'entries'} · last published 2 hours ago
                </p>
              </div>
              <button
                type="button"
                className="inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-[10px] bg-navy-800 px-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-300 focus-visible:ring-offset-2"
              >
                <PlusIcon className="h-4 w-4" aria-hidden="true" />
                Add Property
              </button>
            </div>

            <div
              role="tablist"
              aria-label="Filter properties by section"
              className="mt-5 inline-flex items-center gap-1 rounded-[10px] border border-line bg-white p-1 shadow-card"
            >
              {categoryFilters.map((filter) => {
                const isActive = category === filter
                return (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setCategory(filter)}
                    className={`inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-[7px] px-3 text-[13px] font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-300 ${
                      isActive
                        ? 'bg-navy-800 text-white'
                        : 'text-ink-muted hover:bg-canvas hover:text-ink'
                    }`}
                  >
                    {filter}
                    <span
                      className={`text-[11px] tabular-nums ${
                        isActive ? 'text-white/70' : 'text-ink-soft'
                      }`}
                    >
                      {countFor(filter)}
                    </span>
                  </button>
                )
              })}
            </div>

            {filtered.length === 0 ? (
              <div className="mt-8 grid place-items-center rounded-card border border-dashed border-line bg-white px-6 py-20 text-center">
                <SearchXIcon className="h-6 w-6 text-ink-soft" aria-hidden="true" />
                <p className="mt-3 text-sm font-medium text-ink">
                  No {category === 'All' ? '' : `${category.toLowerCase()} `}properties found
                </p>
                <p className="mt-1 text-[13px] text-ink-muted">
                  Try another section, a different locality, or clear the search.
                </p>
              </div>
            ) : (
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((property) => (
                  <PropertyCard key={property.id} property={property} onOpen={onOpenEntry} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      {tab === 'media' ? <MediaLibrary onClose={() => setTab('contents')} /> : null}
    </div>
  )
}
