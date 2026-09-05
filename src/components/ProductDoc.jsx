import { useEffect, useRef, useState } from 'react'
import { productDocs } from '../data/productDocs'
import NotebookCover from './NotebookCover'

function DocBody({ body }) {
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

    if (block.type === 'list') {
      isFirst = false
      return (
        <ul key={i} className="fn-body__list">
          {block.items.map((item, j) => (
            <li key={j}>
              <strong>{item.term}</strong> &mdash; {item.def}
            </li>
          ))}
        </ul>
      )
    }

    return null
  })
}

export default function ProductDoc({ slug }) {
  const doc = productDocs[slug]
  const pageRef = useRef(null)
  const [coverVisible, setCoverVisible] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  const handleBack = () => {
    window.location.hash = 'projects'
  }

  if (!doc) {
    return (
      <div className="notebook-wrap">
        <div className="notebook">
          <div className="notebook__spine" aria-hidden="true" />
          <div className="notebook__page" style={{ textAlign: 'center', padding: '80px 32px' }}>
            <p style={{ color: 'var(--text-muted)' }}>Product doc not found.</p>
            <button className="fn-back" onClick={handleBack} style={{ marginTop: 16 }}>
              Back to Products
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {coverVisible && (
        <NotebookCover
          title={doc.title}
          subtitle={doc.subtitle}
          sessionKey={`product-doc-${slug}`}
          onDone={() => setCoverVisible(false)}
        />
      )}
    <div className="notebook-wrap">
      <div className="notebook" role="article">
        <div className="notebook__spine" aria-hidden="true">
          <div className="notebook__spine-lines" />
        </div>
        <div className="notebook__page" ref={pageRef}>
          <button className="fn-back" onClick={handleBack} aria-label="Back to Products">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Products
          </button>

          <header className="fn-note-header">
            <div className="fn-note-meta">
              <span className="fn-note-date">{doc.date}</span>
              <span className="fn-note-dot">&middot;</span>
              <span className="fn-note-readtime">{doc.readTime}</span>
            </div>
            <p className="pt-eyebrow">Product Doc</p>
            <h1 className="fn-note-title pt-note-title">{doc.title}</h1>
            <div className="fn-note-divider" aria-hidden="true">
              <svg width="80" height="12" viewBox="0 0 80 12">
                <line x1="0" y1="6" x2="33" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
                <path d="M40 2 L44 6 L40 10 L36 6 Z" fill="currentColor" opacity="0.12" />
                <line x1="47" y1="6" x2="80" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
              </svg>
            </div>
            {doc.subtitle && (
              <p className="fn-note-question">{doc.subtitle}</p>
            )}
          </header>

          <div className="fn-body">
            <DocBody body={doc.body} />
          </div>

          <footer className="fn-note-footer">
            <div className="fn-note-footer-line" />
            <span>{doc.title}</span>
            <span>&middot;</span>
            <span>{doc.date}</span>
          </footer>

          <button className="fn-back fn-back--bottom" onClick={handleBack} aria-label="Back to Products">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Products
          </button>
        </div>
        <div className="notebook__edge" aria-hidden="true" />
      </div>
    </div>
    </>
  )
}
