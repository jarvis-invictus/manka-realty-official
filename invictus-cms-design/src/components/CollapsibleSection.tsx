import React, { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'

type CollapsibleSectionProps = {
  title: string
  hint?: string
  defaultOpen?: boolean
  children: React.ReactNode
}

export function CollapsibleSection({
  title,
  hint,
  defaultOpen = true,
  children,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen)
  const id = title.toLowerCase().replace(/\s+/g, '-')

  return (
    <section className="overflow-hidden rounded-card border border-line bg-white shadow-card">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors duration-150 hover:bg-canvas"
        >
          <span>
            <span className="block text-[14px] font-semibold text-ink">{title}</span>
            {hint ? <span className="mt-0.5 block text-[12px] text-ink-soft">{hint}</span> : null}
          </span>
          <ChevronDownIcon
            className={`h-4 w-4 shrink-0 text-ink-soft transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              open ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      {open ? (
        <div id={`${id}-panel`} className="border-t border-line px-5 py-5">
          {children}
        </div>
      ) : null}
    </section>
  )
}
