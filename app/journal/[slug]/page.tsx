import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getBlogPost, getBlogPosts, getMetafieldValue, getHeroImageUrl } from '@/lib/cosmic'
import { renderMarkdown } from '@/lib/markdown'
import type { Location } from '@/types'

export const revalidate = 60

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return { title: 'Not Found' }
  const seoTitle = getMetafieldValue(post.metadata?.seo_title) || post.title
  const seoDescription = getMetafieldValue(post.metadata?.seo_description)
  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: getHeroImageUrl(post.metadata?.hero_image)
        ? [getHeroImageUrl(post.metadata?.hero_image)]
        : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const title = post.title
  const author = getMetafieldValue(post.metadata?.author_name)
  const hero = getHeroImageUrl(post.metadata?.hero_image)
  const body = getMetafieldValue(post.metadata?.content)
  const ctaText =
    getMetafieldValue(post.metadata?.reservation_cta_text) || 'Reserve a Table'

  // related_location hydrates to a full Location object at depth 1
  const related = post.metadata?.related_location
  const location =
    related && typeof related === 'object' ? (related as Location) : null
  const reservationLink = location
    ? getMetafieldValue(location.metadata?.reservation_link)
    : ''
  const locationName = location
    ? getMetafieldValue(location.metadata?.name) || location.title
    : ''
  const locationSlug = location?.slug

  const html = renderMarkdown(body)

  return (
    <article>
      {/* Hero */}
      <section className="relative h-80 md:h-[28rem] overflow-hidden bg-noir-900">
        {hero && (
          <img
            src={`${hero}?w=2400&h=1120&fit=crop&auto=format,compress`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Scrim: keep the photo visible while preserving title legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900/30 via-noir-900/40 to-noir-900/85" />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-12">
          <h1 className="font-serif text-3xl md:text-5xl font-bold gold-text max-w-4xl drop-shadow-lg">
            {title}
          </h1>
          {author && (
            <p className="text-cream/70 text-sm mt-4 uppercase tracking-widest drop-shadow">
              {author}
            </p>
          )}
          <div className="gold-rule max-w-[120px] mx-auto mt-5" />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div
          className="prose prose-invert prose-headings:font-serif prose-headings:text-gold prose-strong:text-cream prose-blockquote:border-gold prose-blockquote:text-cream/80 prose-blockquote:italic prose-p:text-cream/80 prose-li:text-cream/80 max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Reservation CTA */}
        {reservationLink && (
          <div className="mt-12 bg-noir-800 border border-gold/30 rounded-lg p-8 text-center">
            <h2 className="font-serif text-2xl text-gold mb-4">{ctaText}</h2>
            <a
              href={reservationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold-gradient text-noir-900 font-semibold uppercase tracking-widest text-xs px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Reserve a Table
            </a>
            {locationSlug && (
              <p className="mt-4">
                <Link
                  href={`/locations/${locationSlug}`}
                  className="text-gold/80 text-xs uppercase tracking-widest hover:underline"
                >
                  View {locationName} details &amp; hours →
                </Link>
              </p>
            )}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="/journal"
            className="text-gold uppercase tracking-widest text-xs hover:underline"
          >
            ← Back to The Journal
          </Link>
        </div>
      </div>
    </article>
  )
}
