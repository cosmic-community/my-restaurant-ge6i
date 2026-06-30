import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://imgix.cosmicjs.com/3f8d43e0-7434-11f1-82ec-1f886d9e6564-autopilot-photo-1546964124-0cce460f38ef-1782790317784.jpeg?w=2400&h=1400&fit=crop&auto=format,compress"
          alt="Prime steak"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900/80 via-noir-900/70 to-noir-900" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-32 md:py-44 text-center">
        <p className="font-script text-gold text-3xl md:text-4xl mb-4">
          Welcome to
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gold-text">My Restaurant</span>
        </h1>
        <div className="gold-rule max-w-xs mx-auto mb-6" />
        <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Prime cuts, vintage spirits, and the timeless glamour of the Rat Pack
          era. Pull up a chair — the night is young.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/menu"
            className="bg-gold-gradient text-noir-900 font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded hover:opacity-90 transition-opacity"
          >
            View the Menu
          </Link>
          <Link
            href="/locations"
            className="border border-gold text-gold uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-gold hover:text-noir-900 transition-colors"
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </section>
  )
}