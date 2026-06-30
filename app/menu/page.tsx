import SectionTitle from '@/components/SectionTitle'
import MenuCategorySection from '@/components/MenuCategorySection'
import MenuItemCard from '@/components/MenuItemCard'
import { getMenuCategories, getMenuItems } from '@/lib/cosmic'
import type { MenuItem } from '@/types'

export const revalidate = 60

export const metadata = {
  title: 'Menu — My Restaurant',
  description: 'Prime cuts, classic sides, and timeless cocktails.',
}

export default async function MenuPage() {
  const [categories, items] = await Promise.all([
    getMenuCategories(),
    getMenuItems(),
  ])

  // Group items by category id
  const itemsByCategory: Record<string, MenuItem[]> = {}
  const uncategorized: MenuItem[] = []

  for (const item of items) {
    const categoryId = item.metadata?.category?.id
    if (categoryId) {
      const existing = itemsByCategory[categoryId]
      if (existing) {
        existing.push(item)
      } else {
        itemsByCategory[categoryId] = [item]
      }
    } else {
      uncategorized.push(item)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle
        overline="Bill of Fare"
        title="Our Menu"
        subtitle="A curated selection of prime cuts and classic accompaniments, served the way they did it in the golden age."
      />

      {categories.length === 0 && items.length === 0 ? (
        <p className="text-center text-cream/50">Menu coming soon.</p>
      ) : (
        <div className="mt-8">
          {categories.map((category) => {
            const categoryItems = itemsByCategory[category.id]
            if (!categoryItems || categoryItems.length === 0) return null
            return (
              <MenuCategorySection
                key={category.id}
                category={category}
                items={categoryItems}
              />
            )
          })}

          {uncategorized.length > 0 && (
            <section className="mb-20">
              <h2 className="font-serif text-3xl md:text-4xl font-bold gold-text mb-8 text-center">
                More Dishes
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {uncategorized.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  )
}