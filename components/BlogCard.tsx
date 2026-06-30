import Link from 'next/link'
import type { BlogPost } from '@/types'
import { getMetafieldValue, getHeroImageUrl } from '@/lib/cosmic'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  if (!post) return null

  const title = post.title
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const keyword = getMetafieldValue(post.metadata?.primary_keyword)
  const hero = getHeroImageUrl(post.metadata?.hero_image)

  return (
    <article className="group bg-noir-800 border border-noir-700 rounded-lg overflow-hidden hover:border-gold/50 transition-colors flex flex-col">
      {hero && (
        <Link href={`/journal/${post.slug}`} className="block h-56 overflow-hidden">
          <img
            src={`${hero}?w=800&h=560&fit=crop&auto=format,compress&dpr=2&q=60`}
            alt={title}
            width={400}
            height={280}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      )}
      <div className="p-6 flex flex-col flex-1">
        {keyword && (
          <p className="text-gold uppercase tracking-widest text-[10px] mb-3">
            {keyword}
          </p>
        )}
        <h3 className="font-serif text-xl font-semibold text-cream mb-3 leading-snug">
          <Link href={`/journal/${post.slug}`} className="hover:text-gold transition-colors">
            {title}
          </Link>
        </h3>
        {excerpt && (
          <p className="text-cream/60 text-sm leading-relaxed mb-5 flex-1">
            {excerpt}
          </p>
        )}
        <Link
          href={`/journal/${post.slug}`}
          className="inline-block text-gold uppercase tracking-widest text-xs border border-gold/40 rounded px-5 py-2 hover:bg-gold hover:text-noir-900 transition-colors self-start"
        >
          Read More
        </Link>
      </div>
    </article>
  )
}
