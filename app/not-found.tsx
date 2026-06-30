import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="text-center">
        <p className="font-script text-gold text-5xl mb-4">Whoops</p>
        <h2 className="font-serif text-3xl text-cream mb-4">
          This table isn't set
        </h2>
        <p className="text-cream/60 mb-8">
          The page you're looking for couldn't be found.
        </p>
        <Link
          href="/"
          className="bg-gold-gradient text-noir-900 font-semibold uppercase tracking-widest text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Back Home
        </Link>
      </div>
    </div>
  )
}