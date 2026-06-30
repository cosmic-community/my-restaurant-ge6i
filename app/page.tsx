import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import MenuItemCard from '@/components/MenuItemCard'
import ReviewCard from '@/components/ReviewCard'
import LocationCard from '@/components/LocationCard'
import { getMenuItems, getReviews, getLocations } from '@/lib/cosmic'

export const revalidate = 60

export default async function HomePage() {
  const [items, reviews, locations] = await Promise.all([
    getMenuItems(),
    getReviews(),
    getLocations(),
  ])

  const signatureItems = items
    .filter((item) => item.metadata?.chefs_signature === true)
    .slice(0, 3)
  const featuredItems =
    signatureItems.length > 0 ? signatureItems : items.slice(0, 3)
  const featuredReviews = reviews.slice(0, 3)
  const featuredLocations = locations.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Featured Menu */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionTitle
          overline="From the Grill"
          title="Signature Cuts"
          subtitle="Hand-selected prime cuts and house favorites, prepared with old-world craftsmanship."
        />
        {featuredItems.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-cream/50">Menu coming soon.</p>
        )}
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-block bg-gold-gradient text-noir-900 font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded hover:opacity-90 transition-opacity"
          >
            See the Full Menu
          </Link>
        </div>
      </section>

      {/* Reviews */}
      {featuredReviews.length > 0 && (
        <section className="bg-noir-800/50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle
              overline="In Good Company"
              title="What Guests Are Saying"
            />
            <div className="grid gap-8 md:grid-cols-3">
              {featuredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/reviews"
                className="inline-block border border-gold text-gold uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-gold hover:text-noir-900 transition-colors"
              >
                Read All Reviews
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Locations */}
      {featuredLocations.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <SectionTitle
            overline="Pull Up a Chair"
            title="Our Locations"
            subtitle="Find us, book a table, and join us for an evening to remember."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}