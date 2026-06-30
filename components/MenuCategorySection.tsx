import type { MenuCategory, MenuItem } from '@/types'
import MenuItemCard from '@/components/MenuItemCard'
import { getMetafieldValue } from '@/lib/cosmic'

interface MenuCategorySectionProps {
  category: MenuCategory
  items: MenuItem[]
}

export default function MenuCategorySection({
  category,
  items,
}: MenuCategorySectionProps) {
  if (!items || items.length === 0) return null

  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const sectionImage = category.metadata?.section_image

  return (
    <section className="mb-20">
      <div className="relative mb-10 rounded-lg overflow-hidden">
        {sectionImage && (
          <div className="h-40 md:h-56">
            <img
              src={`${sectionImage.imgix_url}?w=2000&h=560&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-noir-900/60" />
          </div>
        )}
        <div
          className={`${
            sectionImage ? 'absolute inset-0' : ''
          } flex flex-col items-center justify-center text-center px-6 py-8`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold gold-text mb-2">
            {name}
          </h2>
          {description && (
            <p className="text-cream/80 max-w-xl">{description}</p>
          )}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}