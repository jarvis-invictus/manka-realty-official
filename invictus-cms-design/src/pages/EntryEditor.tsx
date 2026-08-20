import React, { useState } from 'react'
import { ArrowLeftIcon, Trash2Icon, PlusIcon, CheckIcon } from 'lucide-react'
import { CollapsibleSection } from '../components/CollapsibleSection'
import { TextField, SelectField, TextAreaField, ToggleField } from '../components/Field'
import { LiveCardPreview } from '../components/LiveCardPreview'
import { MediaLibrary } from '../components/MediaLibrary'
import { properties } from '../data/properties'
import { Property, PropertyStatus } from '../types/property'

type EntryEditorProps = {
  entryId: string
  userName: string
  onBack: () => void
}

export function EntryEditor({ entryId, userName, onBack }: EntryEditorProps) {
  const initial = properties.find((p) => p.id === entryId) ?? properties[0]
  const [draft, setDraft] = useState<Property>(initial)
  const [mediaOpen, setMediaOpen] = useState(false)
  const [published, setPublished] = useState(false)

  function update<K extends keyof Property>(key: K, value: Property[K]) {
    setDraft((prev) => ({ ...prev, [key]: value }))
    setPublished(false)
  }

  function handlePublish() {
    setPublished(true)
    window.setTimeout(() => setPublished(false), 2200)
  }

  return (
    <div className="flex h-full w-full flex-col bg-canvas">
      <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-line bg-white px-5">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            aria-label="Back to properties"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] border border-line text-ink-muted transition-colors duration-150 hover:bg-canvas hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-300"
          >
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          </button>
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-soft">
              Properties / Entry {draft.id}
            </p>
            <h1 className="truncate text-[15px] font-semibold text-ink">{draft.title}</h1>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden text-[12px] text-ink-soft md:inline">
            Editing as {userName}
          </span>
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-[10px] border border-red-200 px-3 text-[13px] font-semibold text-red-600 transition-colors duration-150 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
          >
            <Trash2Icon className="h-4 w-4" aria-hidden="true" />
            Delete entry
          </button>
          <button
            type="button"
            onClick={handlePublish}
            className="inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-[10px] bg-navy-800 px-4 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-300 focus-visible:ring-offset-2"
          >
            {published ? <CheckIcon className="h-4 w-4" aria-hidden="true" /> : null}
            {published ? 'Published' : 'Publish'}
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 px-6 py-7 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-5">
            <CollapsibleSection title="Basic Info" hint="How the listing is identified">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <TextField
                    id="title"
                    label="Title"
                    value={draft.title}
                    onChange={(v) => update('title', v)}
                  />
                </div>
                <SelectField
                  id="property-type"
                  label="Property type"
                  value={draft.propertyType}
                  options={['Apartment', 'Villa', 'Plot', 'Commercial']}
                  onChange={(v) => update('propertyType', v)}
                />
                <SelectField
                  id="listing-type"
                  label="Listing type"
                  value={draft.listingType}
                  options={['Resale', 'New Launch', 'Rental']}
                  onChange={(v) => update('listingType', v)}
                />
                <SelectField
                  id="status"
                  label="Status"
                  value={draft.status}
                  options={['Available', 'Under Offer', 'Sold']}
                  onChange={(v) => update('status', v as PropertyStatus)}
                />
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Pricing" hint="Shown as the price badge on the live card">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <TextField
                  id="price"
                  label="Price"
                  value={draft.price}
                  onChange={(v) => update('price', v)}
                  placeholder="1.35"
                />
                <SelectField
                  id="price-unit"
                  label="Price unit"
                  value={draft.priceUnit}
                  options={['Cr', 'Lakh']}
                  onChange={(v) => update('priceUnit', v as Property['priceUnit'])}
                />
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Location and Specs" hint="Used for search and filters">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <TextField
                    id="locality"
                    label="Locality"
                    value={draft.locality}
                    onChange={(v) => update('locality', v)}
                  />
                </div>
                <SelectField
                  id="bhk"
                  label="BHK"
                  value={draft.bhk}
                  options={['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK']}
                  onChange={(v) => update('bhk', v)}
                />
                <TextField
                  id="carpet-area"
                  label="Carpet area"
                  value={draft.carpetArea}
                  onChange={(v) => update('carpetArea', v)}
                />
                <SelectField
                  id="furnishing"
                  label="Furnishing status"
                  value={draft.furnishing}
                  options={['Unfurnished', 'Semi-furnished', 'Furnished']}
                  onChange={(v) => update('furnishing', v)}
                />
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Media and Description" hint="What buyers see first">
              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-[12px] font-medium text-ink-muted">Photo gallery</p>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {draft.gallery.map((src, index) => (
                      <button
                        key={`${src}-${index}`}
                        type="button"
                        onClick={() => update('photo', src)}
                        className={`aspect-[4/3] overflow-hidden rounded-[10px] border-2 transition-colors duration-150 ${
                          draft.photo === src ? 'border-navy-800' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={src}
                          alt={`Gallery image ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setMediaOpen(true)}
                      className="flex aspect-[4/3] flex-col items-center justify-center gap-1 rounded-[10px] border border-dashed border-line bg-canvas text-[11px] font-medium text-ink-muted transition-colors duration-150 hover:border-navy-300 hover:bg-navy-50 hover:text-navy-800"
                    >
                      <PlusIcon className="h-4 w-4" aria-hidden="true" />
                      Add photo
                    </button>
                  </div>
                  <p className="mt-2 text-[11px] text-ink-soft">
                    Click a photo to set it as the cover image.
                  </p>
                </div>

                <ToggleField
                  label="Featured listing"
                  description="Pins this property to the top of the website."
                  checked={draft.featured}
                  onChange={(v) => update('featured', v)}
                />

                <TextAreaField
                  id="description"
                  label="Description"
                  value={draft.description}
                  onChange={(v) => update('description', v)}
                />
              </div>
            </CollapsibleSection>
          </div>

          <aside className="lg:sticky lg:top-0 lg:self-start">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[13px] font-semibold text-ink">Live Card Preview</h2>
              <span className="text-[11px] text-ink-soft">As shown on mankarealty.com</span>
            </div>
            <LiveCardPreview property={draft} />
            <p className="mt-3 text-[11px] leading-relaxed text-ink-soft">
              Last saved by {draft.updatedBy} · {draft.updatedAt}
            </p>
          </aside>
        </div>
      </div>

      {mediaOpen ? <MediaLibrary onClose={() => setMediaOpen(false)} /> : null}
    </div>
  )
}
