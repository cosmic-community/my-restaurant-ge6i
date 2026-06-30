import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-noir-800 border-t border-noir-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl gold-text mb-3">My Restaurant</h3>
          <p className="text-cream/60 text-sm leading-relaxed">
            An evening of prime cuts, fine spirits, and timeless ambience.
            Where every night feels like the golden age.
          </p>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>
              <Link href="/menu" className="hover:text-gold transition-colors">
                Our Menu
              </Link>
            </li>
            <li>
              <Link href="/locations" className="hover:text-gold transition-colors">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-gold transition-colors">
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">
            Reservations
          </h4>
          <p className="text-cream/70 text-sm">
            Join us for an unforgettable evening. Visit our{' '}
            <Link href="/locations" className="text-gold hover:underline">
              locations page
            </Link>{' '}
            to book your table.
          </p>
        </div>
      </div>

      <div className="border-t border-noir-700 py-6 text-center text-cream/40 text-xs tracking-wide">
        © {year} My Restaurant. All rights reserved.
      </div>
    </footer>
  )
}