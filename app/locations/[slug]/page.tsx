// app/locations/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getLocation, getReviews } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'
import type { Review } from '@/types'

export const revalidate = 60

interface LocationPageProps {
  params: Promise<{ slug: string }>
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const location = await getLocation(slug)

  if (!location) {
    notFound()
  }

  const allReviews = await getReviews()
  const locationReviews: Review[] = allReviews.filter(
    (review) => review.metadata?.location?.id === location.id
  )

  const name = getMetafieldValue(location.metadata?.name) || location.title
  const atmosphere = getMetafieldValue(location.metadata?.atmosphere_description)
  const address = getMetafieldValue(location.metadata?.address)
  const phone = getMetafieldValue(location.metadata?.phone)
  const hours = getMetafieldValue(location.metadata?.hours)
  const reservationLink = getMetafieldValue(location.metadata?.reservation_link)
  const reservationInfo = getMetafieldValue(location.metadata?.reservation_info)
  const photo = location.metadata?.location_photo

  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=2400&h=1000&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900/60 to-noir-900" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold gold-text">
            {name}
          </h1>
          <div className="gold-rule max-w-[120px] mx-auto mt-4" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Main */}
        <div className="md:col-span-2 space-y-8">
          {atmosphere && (
            <div>
              <h2 className="font-serif text-2xl text-gold mb-3">
                The Atmosphere
              </h2>
              <p className="text-cream/70 leading-relaxed">{atmosphere}</p>
            </div>
          )}

          {locationReviews.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl text-gold mb-6">
                Guest Reviews
              </h2>
              <div className="space-y-6">
                {locationReviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-noir-800 border border-noir-700 rounded-lg p-6"
                  >
                    <StarRating rating={review.metadata?.star_rating ?? 0} />
                    <p className="text-cream/80 italic mt-4 mb-3">
                      {getMetafieldValue(review.metadata?.quote)}
                    </p>
                    <p className="text-gold font-serif">
                      {getMetafieldValue(review.metadata?.reviewer_name) ||
                        'Anonymous'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-noir-800 border border-noir-700 rounded-lg p-6">
            <h3 className="text-gold uppercase tracking-widest text-xs mb-4">
              Visit Us
            </h3>
            {address && (
              <p className="text-cream/80 text-sm mb-3 whitespace-pre-line">
                {address}
              </p>
            )}
            {phone && (
              <p className="text-gold text-sm mb-3">
                <a href={`tel:${phone}`} className="hover:underline">
                  {phone}
                </a>
              </p>
            )}
          </div>

          {hours && (
            <div className="bg-noir-800 border border-noir-700 rounded-lg p-6">
              <h3 className="text-gold uppercase tracking-widest text-xs mb-4">
                Hours
              </h3>
              <p className="text-cream/80 text-sm whitespace-pre-line">
                {hours}
              </p>
            </div>
          )}

          {(reservationLink || reservationInfo) && (
            <div className="bg-noir-800 border border-noir-700 rounded-lg p-6">
              <h3 className="text-gold uppercase tracking-widest text-xs mb-4">
                Reservations
              </h3>
              {reservationInfo && (
                <p className="text-cream/70 text-sm mb-4">{reservationInfo}</p>
              )}
              {reservationLink && (
                <a
                  href={reservationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gold-gradient text-noir-900 font-semibold uppercase tracking-widest text-xs px-6 py-3 rounded hover:opacity-90 transition-opacity"
                >
                  Reserve a Table
                </a>
              )}
            </div>
          )}
        </aside>
      </div>

      <div className="text-center pb-16">
        <Link
          href="/locations"
          className="text-gold uppercase tracking-widest text-xs hover:underline"
        >
          ← All Locations
        </Link>
      </div>
    </div>
  )
}