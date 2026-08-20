import React from 'react'

type TopBarProps = {
  activeTab: 'contents' | 'media'
  onTabChange: (tab: 'contents' | 'media') => void
  userName: string
}

const tabs: { id: 'contents' | 'media'; label: string }[] = [
  { id: 'contents', label: 'Contents' },
  { id: 'media', label: 'Media' },
]

export function TopBar({ activeTab, onTabChange, userName }: TopBarProps) {
  const initials = userName
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-line bg-white px-6">
      <nav className="flex items-center gap-1" aria-label="Workspace sections">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`relative h-16 px-3 text-sm font-medium transition-colors duration-150 ${
                isActive ? 'text-navy-800' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {tab.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-2 bottom-0 h-0.5 rounded-full transition-colors duration-150 ${
                  isActive ? 'bg-navy-800' : 'bg-transparent'
                }`}
              />
            </button>
          )
        })}
      </nav>

      <div className="flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <div className="text-[13px] font-medium leading-tight text-ink">{userName}</div>
          <div className="text-[11px] leading-tight text-ink-soft">Editing as</div>
        </div>
        <div
          className="grid h-9 w-9 place-items-center rounded-full bg-navy-50 text-[12px] font-semibold text-navy-800"
          aria-hidden="true"
        >
          {initials || 'ED'}
        </div>
      </div>
    </header>
  )
}
