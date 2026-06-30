'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="text-center">
        <h2 className="font-serif text-3xl gold-text mb-4">
          Something went wrong
        </h2>
        <p className="text-cream/60 mb-6">
          We hit a snag pouring this one. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-gold-gradient text-noir-900 font-semibold uppercase tracking-widest text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}