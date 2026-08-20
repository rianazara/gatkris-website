import { useEffect, useRef } from 'react'
import { productThesis } from '../data/productThesis'

function estimateReadTime(body) {
  const words = body.reduce((count, block) => {
    if (typeof block === 'string') return count + block.split(/\s+/).length
    if (block && block.text) return count + block.text.split(/\s+/).length
    return count
  }, 0)
  return `${Math.max(1, Math.ceil(words / 220))} min read`
}

function ThesisBody({ body }) {
  let isFirst = true

  return body.map((block, i) => {
    if (typeof block === 'string') {
      if (isFirst) {
        isFirst = false
        const first = block.charAt(0)
        const rest = block.slice(1)
        return (
          <p key={i} className="fn-body__p">
            <span className="fn-dropcap">{first}</span>
            {rest}
          </p>
        )
      }
      return (
        <p key={i} className="fn-body__p">
          {block}
        </p>
      )
    }

    if (block.type === 'heading') {
      isFirst = false
      return (
        <h2 key={i} className="pt-body__heading">
          {block.text}
        </h2>
      )
    }

    if (block.type === 'lines') {
      isFirst = false
      return (
        <div key={i} className="pt-body__lines">
          {block.items.map((line, j) => (
            <p key={j} className="pt-body__lines-item">{line}</p>
          ))}
        </div>
      )
    }

    if (block.type === 'emphasis') {
      isFirst = false
      return (
        <p key={i} className="pt-body__emphasis">
          {block.text}
        </p>
      )
    }

    if (block.type === 'closer') {
      isFirst = false
      return (
        <p key={i} className="pt-body__closer">
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
            <p className="pt-eyebrow">Product Thesis</p>
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
