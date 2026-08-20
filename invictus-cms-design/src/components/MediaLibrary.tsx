import React, { useState } from 'react'
import { UploadIcon, XIcon, RotateCcwIcon, ImageIcon, Trash2Icon } from 'lucide-react'
import { mediaLibrary, trashedMedia } from '../data/media'

type MediaLibraryProps = {
  onClose: () => void
}

export function MediaLibrary({ onClose }: MediaLibraryProps) {
  const [tab, setTab] = useState<'library' | 'trash'>('library')
  const [restored, setRestored] = useState<string[]>([])

  const trashItems = trashedMedia.filter((item) => !restored.includes(item.id))

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <div
        className="absolute inset-0 bg-navy-950/40 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Media library"
        className="relative flex h-full max-h-[680px] w-full max-w-[900px] flex-col overflow-hidden rounded-card bg-white shadow-overlay"
      >
        <div className="flex items-start justify-between gap-6 border-b border-line px-6 py-4">
          <div className="min-w-0">
            <h2 className="text-[17px] font-semibold tracking-tight text-ink">Media Library</h2>
            <p className="mt-1 max-w-[520px] text-[13px] leading-relaxed text-ink-muted">
              This is where every photo used across your property listings lives. Upload new photos
              here, then attach them to a listing from that property's Photos field. If you delete
              something by accident, it's not gone —{' '}
              <button
                type="button"
                onClick={() => setTab('trash')}
                className="font-semibold text-navy-800 underline underline-offset-2 transition-colors duration-150 hover:text-navy-900"
              >
                check the Trash tab
              </button>{' '}
              to recover it within 30 days.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-9 items-center gap-1.5 rounded-[10px] bg-navy-800 px-3.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-300 focus-visible:ring-offset-2"
            >
              <UploadIcon className="h-4 w-4" aria-hidden="true" />
              Upload
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close media library"
              className="grid h-9 w-9 place-items-center rounded-[10px] text-ink-soft transition-colors duration-150 hover:bg-canvas hover:text-ink"
            >
              <XIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1 border-b border-line px-6">
          <button
            type="button"
            onClick={() => setTab('library')}
            aria-current={tab === 'library' ? 'true' : undefined}
            className={`relative flex items-center gap-2 px-3 py-3 text-[13px] font-medium transition-colors duration-150 ${
              tab === 'library' ? 'text-navy-800' : 'text-ink-muted hover:text-ink'
            }`}
          >
            <ImageIcon className="h-4 w-4" aria-hidden="true" />
            All media
            <span className="rounded-full bg-canvas px-1.5 py-0.5 text-[11px] tabular-nums text-ink-muted">
              {mediaLibrary.length}
            </span>
            <span
              aria-hidden="true"
              className={`absolute inset-x-2 bottom-0 h-0.5 rounded-full ${
                tab === 'library' ? 'bg-navy-800' : 'bg-transparent'
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => setTab('trash')}
            aria-current={tab === 'trash' ? 'true' : undefined}
            className={`relative flex items-center gap-2 py-3 pl-2 pr-3 text-[13px] font-medium transition-colors duration-150 ${
              tab === 'trash' ? 'text-navy-800' : 'text-ink-muted hover:text-ink'
            }`}
          >
            <span
              className={`grid h-6 w-6 place-items-center rounded-md transition-colors duration-150 ${
                tab === 'trash' ? 'bg-navy-50 text-navy-800' : 'bg-amber-50 text-amber-600'
              }`}
              aria-hidden="true"
            >
              <Trash2Icon className="h-3.5 w-3.5" />
            </span>
            Trash
            <span className="text-[12px] font-normal text-ink-soft">recover deleted photos</span>
            {trashItems.length > 0 ? (
              <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[11px] font-semibold tabular-nums text-amber-700">
                {trashItems.length}
              </span>
            ) : null}
            <span
              aria-hidden="true"
              className={`absolute inset-x-2 bottom-0 h-0.5 rounded-full ${
                tab === 'trash' ? 'bg-navy-800' : 'bg-transparent'
              }`}
            />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-canvas p-6">
          {tab === 'library' ? (
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {mediaLibrary.map((item) => (
                <li
                  key={item.id}
                  className="overflow-hidden rounded-card border border-line bg-white shadow-card"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-navy-50">
                    <img
                      src={item.url}
                      alt={item.fileName}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-3 py-2.5">
                    <p className="truncate text-[12px] font-medium text-ink">{item.fileName}</p>
                    <p className="mt-0.5 text-[11px] text-ink-soft">{item.size}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : trashItems.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <Trash2Icon className="mx-auto h-6 w-6 text-ink-soft" aria-hidden="true" />
                <p className="mt-3 text-sm font-medium text-ink">Trash is empty</p>
                <p className="mt-1 text-[13px] text-ink-muted">
                  Deleted images stay here for 30 days.
                </p>
              </div>
            </div>
          ) : (
            <>
              <p className="mb-4 text-[13px] text-ink-muted">
                Recently deleted images are kept for 30 days and can be restored to the library.
              </p>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {trashItems.map((item) => (
                  <li
                    key={item.id}
                    className="overflow-hidden rounded-card border border-line bg-white shadow-card"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-navy-50">
                      <img
                        src={item.url}
                        alt={item.fileName}
                        className="h-full w-full object-cover opacity-70"
                        loading="lazy"
                      />
                    </div>
                    <div className="px-3 py-2.5">
                      <p className="truncate text-[12px] font-medium text-ink">{item.fileName}</p>
                      <p className="mt-0.5 text-[11px] text-ink-soft">{item.deletedAt}</p>
                      <button
                        type="button"
                        onClick={() => setRestored((prev) => [...prev, item.id])}
                        className="mt-2.5 inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-[10px] border border-line text-[12px] font-semibold text-ink-muted transition-colors duration-150 hover:border-navy-200 hover:bg-navy-50 hover:text-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-300"
                      >
                        <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        Restore
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
