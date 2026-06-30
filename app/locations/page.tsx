import SectionTitle from '@/components/SectionTitle'
import LocationCard from '@/components/LocationCard'
import { getLocations } from '@/lib/cosmic'

export const revalidate = 60

export const metadata = {
  title: 'Locations — My Restaurant',
  description: 'Find us, view hours, and reserve your table.',
}

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle
        overline="Find Us"
        title="Our Locations"
        subtitle="Each room carries the same warm glow, fine spirits, and prime cuts."
      />

      {locations.length === 0 ? (
        <p className="text-center text-cream/50">Locations coming soon.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      )}
    </div>
  )
}