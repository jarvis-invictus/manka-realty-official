import React from 'react'
import { MapPinIcon, StarIcon, PencilIcon } from 'lucide-react'
import { Property } from '../types/property'
import { StatusPill } from './StatusPill'

type PropertyCardProps = {
  property: Property
  onOpen: (id: string) => void
}

export function PropertyCard({ property, onOpen }: PropertyCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition-shadow duration-200 hover:shadow-raised">
      <div className="relative aspect-[3/2] overflow-hidden bg-navy-50">
        <img
          src={property.photo}
          alt={`${property.title} in ${property.locality}`}
          className="h-full w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy-900/90 px-2.5 py-1 text-[12px] font-semibold text-white backdrop-blur-sm">
          Rs {property.price} {property.priceUnit}
        </span>
        {property.featured ? (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[11px] font-semibold text-navy-800">
            <StarIcon className="h-3 w-3 fill-navy-800" aria-hidden="true" />
            Featured
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[15px] font-semibold leading-snug text-ink">{property.title}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-[13px] text-ink-muted">
          <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-ink-soft" aria-hidden="true" />
          <span className="truncate">{property.locality}</span>
        </div>
        <p className="mt-1 text-[12px] text-ink-soft">
          {property.bhk} · {property.carpetArea}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <StatusPill status={property.status} />
          <button
            type="button"
            onClick={() => onOpen(property.id)}
            className="inline-flex items-center gap-1.5 rounded-[10px] border border-line px-2.5 py-1.5 text-[12px] font-semibold text-ink-muted transition-colors duration-150 hover:border-navy-200 hover:bg-navy-50 hover:text-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-300"
          >
            <PencilIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Edit
          </button>
        </div>
      </div>
    </article>
  )
}
