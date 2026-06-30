import SectionTitle from '@/components/SectionTitle'
import ReviewCard from '@/components/ReviewCard'
import { getReviews } from '@/lib/cosmic'

export const revalidate = 60

export const metadata = {
  title: 'Reviews — My Restaurant',
  description: 'What our guests are saying about their evenings with us.',
}

export default async function ReviewsPage() {
  const reviews = await getReviews()

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle
        overline="In Good Company"
        title="Guest Reviews"
        subtitle="Kind words from the patrons who've shared an evening with us."
      />

      {reviews.length === 0 ? (
        <p className="text-center text-cream/50">No reviews yet.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  )
}