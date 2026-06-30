import Link from 'next/link'
import type { Location } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface LocationCardProps {
  location: Location
}

export default function LocationCard({ location }: LocationCardProps) {
  if (!location) return null

  const name = getMetafieldValue(location.metadata?.name) || location.title
  const address = getMetafieldValue(location.metadata?.address)
  const phone = getMetafieldValue(location.metadata?.phone)
  const photo = location.metadata?.location_photo

  return (
    <article className="group bg-noir-800 border border-noir-700 rounded-lg overflow-hidden hover:border-gold/50 transition-colors">
      {photo && (
        <div className="h-56 overflow-hidden">
          <img
            src={`${photo.imgix_url}?w=800&h=560&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={280}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold text-cream mb-2">
          {name}
        </h3>
        {address && (
          <p className="text-cream/60 text-sm mb-1">{address}</p>
        )}
        {phone && <p className="text-gold text-sm mb-4">{phone}</p>}
        <Link
          href={`/locations/${location.slug}`}
          className="inline-block text-gold uppercase tracking-widest text-xs border border-gold/40 rounded px-5 py-2 hover:bg-gold hover:text-noir-900 transition-colors"
        >
          Details & Hours
        </Link>
      </div>
    </article>
  )
}