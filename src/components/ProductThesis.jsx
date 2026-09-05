import { useEffect, useRef } from 'react'
import { productThesis } from '../data/productThesis'

const HEADING_COLORS = ['blue', 'red', 'yellow', 'green']

function countWords(str) {
  return String(str).trim().split(/\s+/).filter(Boolean).length
}

function estimateReadTime(body) {
  const words = body.reduce((count, block) => {
    if (typeof block === 'string') return count + countWords(block)
    if (!block || typeof block !== 'object') return count
    if (Array.isArray(block.lines)) return count + block.lines.reduce((c, l) => c + countWords(l), 0)
    if (Array.isArray(block.items)) return count + block.items.reduce((c, it) => c + countWords(typeof it === 'string' ? it : (it.text || '')), 0)
    if (typeof block.text === 'string') return count + countWords(block.text)
    return count
  }, 0)
  return `${Math.max(1, Math.ceil(words / 220))} min read`
}

// Parse a string into React nodes, honoring **bold** and *italic* markers.
// Bold spans get the given accent color; italics stay in the muted serif italic style.
function renderInline(text, accent) {
  const parts = []
  let i = 0
  let key = 0
  while (i < text.length) {
    if (text.startsWith('**', i)) {
      const end = text.indexOf('**', i + 2)
      if (end !== -1) {
        parts.push(
          <strong key={key++} className="pt-body__bold">
            {text.slice(i + 2, end)}
          </strong>
        )
        i = end + 2
        continue
      }
    }
    if (text.startsWith('*', i) && text[i - 1] !== '*') {
      const end = text.indexOf('*', i + 1)
      if (end !== -1 && text[end + 1] !== '*') {
        parts.push(
          <em key={key++} className="pt-em">
            {text.slice(i + 1, end)}
          </em>
        )
        i = end + 1
        continue
      }
    }
    // grab a run of plain text until the next marker
    let next = text.length
    const nb = text.indexOf('**', i)
    const ni = text.indexOf('*', i)
    if (nb !== -1 && nb < next) next = nb
    if (ni !== -1 && ni < next) next = ni
    if (next === i) next = i + 1
    parts.push(text.slice(i, next))
    i = next
  }
  return parts
}

function ThesisBody({ body }) {
  let isFirst = true
  let observationIndex = 0
  let currentAccent = HEADING_COLORS[0]

  return body.map((block, i) => {
    if (typeof block === 'string') {
      if (isFirst) {
        isFirst = false
        const first = block.charAt(0)
        const rest = block.slice(1)
        return (
          <p key={i} className="fn-body__p">
            <span className="fn-dropcap">{first}</span>
            {renderInline(rest, currentAccent)}
          </p>
        )
      }
      return (
        <p key={i} className="fn-body__p">
          {renderInline(block, currentAccent)}
        </p>
      )
    }

    if (block.type === 'heading') {
      isFirst = false
      if (block.number) {
        const accent = HEADING_COLORS[(block.number - 1) % HEADING_COLORS.length]
        currentAccent = accent
        observationIndex = block.number
        const numStr = String(block.number).padStart(2, '0')
        return (
          <div key={i} className="pt-section-heading">
            <span className={`pt-section-heading__num pt-hl--${accent}`}>Observation {numStr}</span>
            <h2 className="pt-body__heading">{block.text}</h2>
          </div>
        )
      }
      // Unnumbered heading (e.g., "What I think the job is now")
      return (
        <div key={i} className="pt-section-heading pt-section-heading--closing">
          <h2 className="pt-body__heading">{block.text}</h2>
        </div>
      )
    }

    if (block.type === 'lines') {
      isFirst = false
      return (
        <div key={i} className={`pt-body__lines pt-body__lines--${currentAccent}`}>
          {block.items.map((line, j) => (
            <p key={j} className="pt-body__lines-item">{line}</p>
          ))}
        </div>
      )
    }

    if (block.type === 'emphasis') {
      isFirst = false
      return (
        <p key={i} className={`pt-body__emphasis pt-body__emphasis--${currentAccent}`}>
          {block.text}
        </p>
      )
    }

    return null
  })
}

export default function ProductThesis() {
  const pageRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleBack = () => {
    window.location.hash = ''
  }

  return (
    <div className="notebook-wrap">
      <div className="notebook" role="article">
        <div className="notebook__spine" aria-hidden="true">
          <div className="notebook__spine-lines" />
        </div>
        <div className="notebook__page" ref={pageRef}>
          <button className="fn-back" onClick={handleBack} aria-label="Back to home">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to home
          </button>

          <header className="fn-note-header">
            <div className="fn-note-meta">
              <span className="fn-note-date">{productThesis.date}</span>
              <span className="fn-note-dot">&middot;</span>
              <span className="fn-note-readtime">{estimateReadTime(productThesis.body)}</span>
            </div>
            <h1 className="fn-note-title pt-note-title">{productThesis.title}</h1>
            <div className="fn-note-divider" aria-hidden="true">
              <svg width="80" height="12" viewBox="0 0 80 12">
                <line x1="0" y1="6" x2="33" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
                <path d="M40 2 L44 6 L40 10 L36 6 Z" fill="currentColor" opacity="0.12" />
                <line x1="47" y1="6" x2="80" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
              </svg>
            </div>
            <p className="fn-note-question">{productThesis.subtitle}</p>
          </header>

          <div className="fn-body pt-body">
            <ThesisBody body={productThesis.body} />
          </div>

          <footer className="fn-note-footer">
            <div className="fn-note-footer-line" />
            <span>Product Thesis</span>
            <span>&middot;</span>
            <span>{productThesis.date}</span>
          </footer>

          <button className="fn-back fn-back--bottom" onClick={handleBack} aria-label="Back to home">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to home
          </button>
        </div>
        <div className="notebook__edge" aria-hidden="true" />
      </div>
    </div>
  )
}
