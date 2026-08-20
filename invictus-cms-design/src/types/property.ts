export type PropertyStatus = 'Available' | 'Under Offer' | 'Sold'

export type PropertyCategory = 'Residential' | 'Commercial'

export type Property = {
  id: string
  title: string
  photo: string
  gallery: string[]
  category: PropertyCategory
  price: string
  priceUnit: 'Cr' | 'Lakh'
  status: PropertyStatus
  locality: string
  propertyType: string
  listingType: string
  bhk: string
  carpetArea: string
  furnishing: string
  description: string
  featured: boolean
  updatedBy: string
  updatedAt: string
}

export type MediaItem = {
  id: string
  fileName: string
  url: string
  size: string
  deletedAt?: string
}
