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
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://x.com/myrestaurant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-5 h-5 fill-current"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/myrestaurant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-5 h-5 fill-current"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
              </svg>
            </a>
          </div>
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