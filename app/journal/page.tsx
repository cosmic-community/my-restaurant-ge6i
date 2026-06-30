import SectionTitle from '@/components/SectionTitle'
import BlogCard from '@/components/BlogCard'
import { getBlogPosts } from '@/lib/cosmic'

export const revalidate = 60

export const metadata = {
  title: 'The Journal — My Restaurant',
  description:
    'Stories, guides, and dining inspiration from our kitchens and dining rooms.',
}

export default async function JournalPage() {
  const posts = await getBlogPosts()

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle
        overline="Stories & Guides"
        title="The Journal"
        subtitle="Dining inspiration, neighborhood guides, and a look behind the velvet curtain."
      />

      {posts.length === 0 ? (
        <p className="text-center text-cream/50">Stories coming soon.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
