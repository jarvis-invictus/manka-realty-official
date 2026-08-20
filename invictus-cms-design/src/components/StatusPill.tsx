import React from 'react'
import { PropertyStatus } from '../types/property'

const styles: Record<PropertyStatus, string> = {
  Available: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  'Under Offer': 'bg-amber-50 text-amber-700 ring-amber-600/20',
  Sold: 'bg-slate-100 text-slate-600 ring-slate-500/20',
}

const dots: Record<PropertyStatus, string> = {
  Available: 'bg-emerald-500',
  'Under Offer': 'bg-amber-500',
  Sold: 'bg-slate-400',
}

export function StatusPill({ status }: { status: PropertyStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${styles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[status]}`} aria-hidden="true" />
      {status}
    </span>
  )
}
