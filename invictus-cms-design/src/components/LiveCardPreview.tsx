import React from 'react'
import { MapPinIcon } from 'lucide-react'
import { Property } from '../types/property'
import { StatusPill } from './StatusPill'

export function LiveCardPreview({ property }: { property: Property }) {
  return (
    <div className="overflow-hidden rounded-card border border-line bg-white shadow-card">
      <div className="aspect-[3/2] overflow-hidden bg-navy-50">
        <img
          src={property.photo}
          alt={`${property.title} preview`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-navy-800 px-2.5 py-1 text-[12px] font-semibold text-white">
            Rs {property.price || '—'} {property.priceUnit}
          </span>
          <StatusPill status={property.status} />
        </div>

        <h4 className="mt-3 text-[16px] font-semibold leading-snug text-ink">
          {property.title || 'Untitled property'}
        </h4>

        <div className="mt-1.5 flex items-center gap-1.5 text-[13px] text-ink-muted">
          <MapPinIcon className="h-3.5 w-3.5 text-ink-soft" aria-hidden="true" />
          {property.locality}
        </div>

        <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">{property.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {[property.bhk, property.carpetArea, property.furnishing].map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-canvas px-2.5 py-1 text-[11px] font-medium text-ink-muted"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
