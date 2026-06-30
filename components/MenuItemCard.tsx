import type { MenuItem } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface MenuItemCardProps {
  item: MenuItem
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  if (!item) return null

  const name = getMetafieldValue(item.metadata?.name) || item.title
  const description = getMetafieldValue(item.metadata?.description)
  const price = getMetafieldValue(item.metadata?.price)
  const image = item.metadata?.featured_image
  const dietary = item.metadata?.dietary_info || []
  const isSignature = item.metadata?.chefs_signature === true

  return (
    <article className="group bg-noir-800 border border-noir-700 rounded-lg overflow-hidden hover:border-gold/50 transition-colors">
      {image && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=560&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={280}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {isSignature && (
            <span className="absolute top-3 left-3 bg-gold-gradient text-noir-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
              Chef's Signature
            </span>
          )}
        </div>
      )}

      <div className="p-6">
        <div className="flex items-baseline justify-between gap-3 mb-3">
          <h3 className="font-serif text-xl font-semibold text-cream">{name}</h3>
          {price && (
            <span className="text-gold font-serif text-lg whitespace-nowrap">
              {price}
            </span>
          )}
        </div>
        {description && (
          <p className="text-cream/60 text-sm leading-relaxed mb-4">
            {description}
          </p>
        )}
        {dietary.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {dietary.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] uppercase tracking-widest text-gold/80 border border-gold/30 rounded-full px-3 py-1"
              >
                {getMetafieldValue(tag)}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}