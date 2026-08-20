import { MediaItem } from '../types/property'
import { photos } from './properties'

export const mediaLibrary: MediaItem[] = [
  { id: 'm-1', fileName: 'ganga-residency-exterior.jpg', url: photos.tower, size: '1.4 MB' },
  { id: 'm-2', fileName: 'orchid-living-room.jpg', url: photos.living, size: '980 KB' },
  { id: 'm-3', fileName: 'palm-court-villa.jpg', url: photos.villa, size: '2.1 MB' },
  { id: 'm-4', fileName: 'maple-grove-kitchen.jpg', url: photos.kitchen, size: '1.2 MB' },
  { id: 'm-5', fileName: 'skyline-heights-dusk.jpg', url: photos.highrise, size: '1.8 MB' },
  { id: 'm-6', fileName: 'riverstone-podium.jpg', url: photos.tower, size: '1.1 MB' },
]

export const trashedMedia: MediaItem[] = [
  { id: 't-1', fileName: 'aundh-kitchen-old.jpg', url: photos.kitchen, size: '1.2 MB', deletedAt: 'Deleted 2 days ago' },
  { id: 't-2', fileName: 'wakad-tower-draft.jpg', url: photos.highrise, size: '1.6 MB', deletedAt: 'Deleted 4 days ago' },
  { id: 't-3', fileName: 'villa-garden-unused.jpg', url: photos.villa, size: '2.0 MB', deletedAt: 'Deleted 6 days ago' },
]
