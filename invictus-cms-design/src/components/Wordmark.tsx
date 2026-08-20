import React from 'react'

type WordmarkProps = {
  size?: 'sm' | 'lg'
  tone?: 'navy' | 'light'
}

export function Wordmark({ size = 'sm', tone = 'navy' }: WordmarkProps) {
  const isLarge = size === 'lg'
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`grid place-items-center rounded-[10px] bg-navy-800 font-semibold text-white ${
          isLarge ? 'h-10 w-10 text-base' : 'h-8 w-8 text-sm'
        }`}
        aria-hidden="true"
      >
        I
      </div>
      <div className="leading-none">
        <div
          className={`wordmark font-semibold ${isLarge ? 'text-lg' : 'text-[13px]'} ${
            tone === 'light' ? 'text-white' : 'text-navy-900'
          }`}
        >
          INVICTUS
        </div>
        <div
          className={`mt-1 text-[10px] font-medium tracking-wide ${
            tone === 'light' ? 'text-white/60' : 'text-ink-soft'
          }`}
        >
          Manka Realty CMS
        </div>
      </div>
    </div>
  )
}
