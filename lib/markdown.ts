// Minimal, dependency-free markdown -> HTML renderer for blog post bodies.
// Supports: h2/h3 headings, blockquotes, unordered lists, bold, italic,
// and paragraphs. Input is trusted editorial content authored in the CMS.

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function inline(text: string): string {
  let out = escapeHtml(text)
  // bold (**text**)
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  // italic (*text*)
  out = out.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, '$1<em>$2</em>')
  return out
}

export function renderMarkdown(markdown: string): string {
  if (!markdown) return ''
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const html: string[] = []
  let paragraph: string[] = []
  let listItems: string[] = []
  let quoteLines: string[] = []

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${inline(paragraph.join(' '))}</p>`)
      paragraph = []
    }
  }
  const flushList = () => {
    if (listItems.length) {
      html.push(
        `<ul>${listItems.map((i) => `<li>${inline(i)}</li>`).join('')}</ul>`
      )
      listItems = []
    }
  }
  const flushQuote = () => {
    if (quoteLines.length) {
      html.push(`<blockquote>${inline(quoteLines.join(' '))}</blockquote>`)
      quoteLines = []
    }
  }
  const flushAll = () => {
    flushParagraph()
    flushList()
    flushQuote()
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()

    if (line.trim() === '') {
      flushAll()
      continue
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/)
    if (headingMatch) {
      flushAll()
      const level = Math.min(headingMatch[1]!.length, 6)
      html.push(`<h${level}>${inline(headingMatch[2]!)}</h${level}>`)
      continue
    }

    if (line.startsWith('> ')) {
      flushParagraph()
      flushList()
      quoteLines.push(line.slice(2))
      continue
    }

    const listMatch = line.match(/^[-*]\s+(.*)$/)
    if (listMatch) {
      flushParagraph()
      flushQuote()
      listItems.push(listMatch[1]!)
      continue
    }

    flushList()
    flushQuote()
    paragraph.push(line.trim())
  }

  flushAll()
  return html.join('\n')
}
