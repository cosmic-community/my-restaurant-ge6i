interface SectionTitleProps {
  overline?: string
  title: string
  subtitle?: string
}

export default function SectionTitle({
  overline,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      {overline && (
        <p className="font-script text-gold text-2xl md:text-3xl mb-2">
          {overline}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-5xl font-bold gold-text mb-4">
        {title}
      </h2>
      <div className="gold-rule max-w-[120px] mx-auto" />
      {subtitle && (
        <p className="text-cream/70 max-w-2xl mx-auto mt-5 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}