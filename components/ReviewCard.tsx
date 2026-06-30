import type { Review } from '@/types'
import StarRating from '@/components/StarRating'
import { getMetafieldValue } from '@/lib/cosmic'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  if (!review) return null

  const reviewerName =
    getMetafieldValue(review.metadata?.reviewer_name) || 'Anonymous'
  const quote = getMetafieldValue(review.metadata?.quote)
  const rating = review.metadata?.star_rating ?? 0
  const location = review.metadata?.location

  return (
    <article className="bg-noir-800 border border-noir-700 rounded-lg p-8 flex flex-col">
      <svg
        className="w-10 h-10 text-gold/40 mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-cream/80 italic leading-relaxed mb-6 flex-1">
        {quote}
      </p>
      <StarRating rating={rating} />
      <div className="mt-4 pt-4 border-t border-noir-700">
        <p className="font-serif text-gold text-lg">{reviewerName}</p>
        {location && (
          <p className="text-cream/50 text-sm">
            {getMetafieldValue(location.metadata?.name) || location.title}
          </p>
        )}
      </div>
    </article>
  )
}