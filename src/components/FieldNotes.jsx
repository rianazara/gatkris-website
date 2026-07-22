import { useEffect, useRef } from 'react'
import { fieldNotes } from '../data/fieldNotes'

function estimateReadTime(body) {
  const words = body.reduce((count, block) => {
    if (typeof block === 'string') return count + block.split(/\s+/).length
    if (block.type === 'list') return count + block.items.reduce((c, i) => c + i.term.split(/\s+/).length + i.def.split(/\s+/).length, 0)
    return count
  }, 0)
  return `${Math.max(1, Math.ceil(words / 220))} min read`
}

function NoteBody({ body }) {
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

function NoteView({ note, onBack }) {
  const pageRef = useRef(null)

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollTo(0, 0)
    }
  }, [note.number])

  return (
    <div className="notebook-wrap">
      <div className="notebook" role="article">
        <div className="notebook__spine" aria-hidden="true">
          <div className="notebook__spine-lines" />
        </div>
        <div className="notebook__page" ref={pageRef}>
          <button className="fn-back" onClick={onBack} aria-label="Back to all field notes">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to all field notes
          </button>

          <header className="fn-note-header">
            <div className="fn-note-meta">
              <span className="fn-note-date">{note.date}</span>
              <span className="fn-note-dot">&middot;</span>
              <span className="fn-note-readtime">{estimateReadTime(note.body)}</span>
            </div>
            <div className="fn-note-number">#{note.number}</div>
            <h1 className="fn-note-title">{note.title}</h1>
            <div className="fn-note-divider" aria-hidden="true">
              <svg width="60" height="8" viewBox="0 0 60 8">
                <path d="M0 4 Q15 0, 30 4 Q45 8, 60 4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
              </svg>
            </div>
            {note.question && (
              <p className="fn-note-question">{note.question}</p>
            )}
          </header>

          <div className="fn-body">
            <NoteBody body={note.body} />
          </div>

          <footer className="fn-note-footer">
            <div className="fn-note-footer-line" />
            <span>Field Note #{note.number}</span>
            <span>&middot;</span>
            <span>{note.date}</span>
          </footer>

          <button className="fn-back fn-back--bottom" onClick={onBack} aria-label="Back to all field notes">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to all field notes
          </button>
        </div>
        <div className="notebook__edge" aria-hidden="true" />
      </div>
    </div>
  )
}

function IndexView({ onSelectNote }) {
  return (
    <div className="notebook-wrap">
      <div className="notebook" role="navigation" aria-label="Field Notes index">
        <div className="notebook__spine" aria-hidden="true">
          <div className="notebook__spine-lines" />
        </div>
        <div className="notebook__page">
          <h1 className="fn-index-title">Field Notes</h1>
          <p className="fn-index-sub">
            A record of questions that refused to leave me alone.
          </p>

          <div className="fn-entries">
            {fieldNotes.map((note) => (
              <button
                key={note.number}
                className="fn-entry"
                onClick={() => onSelectNote(note.number)}
              >
                <div className="fn-entry__left">
                  <span className="fn-entry__number">#{note.number}</span>
                </div>
                <div className="fn-entry__body">
                  <div className="fn-entry__top">
                    <h2 className="fn-entry__title">{note.title}</h2>
                    <span className="fn-entry__date">{note.date}</span>
                  </div>
                  {note.question && (
                    <p className="fn-entry__question">{note.question}</p>
                  )}
                  <div className="fn-entry__bottom">
                    <span className="fn-entry__readtime">{estimateReadTime(note.body)}</span>
                  </div>
                </div>
                <div className="fn-entry__arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="notebook__edge" aria-hidden="true" />
      </div>
    </div>
  )
}

export default function FieldNotes({ route }) {
  const noteId = route.replace('#field-notes', '').replace(/^\//, '')

  const handleSelectNote = (number) => {
    window.location.hash = `field-notes/${number}`
  }

  const handleBack = () => {
    window.location.hash = 'field-notes'
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [noteId])

  if (noteId) {
    const note = fieldNotes.find((n) => n.number === noteId)
    if (!note) {
      return (
        <div className="notebook-wrap">
          <div className="notebook">
            <div className="notebook__spine" aria-hidden="true" />
            <div className="notebook__page" style={{ textAlign: 'center', padding: '80px 32px' }}>
              <p style={{ color: 'var(--text-muted)' }}>Note not found.</p>
              <button className="fn-back" onClick={handleBack} style={{ marginTop: 16 }}>
                Back to all field notes
              </button>
            </div>
          </div>
        </div>
      )
    }
    return <NoteView note={note} onBack={handleBack} />
  }

  return <IndexView onSelectNote={handleSelectNote} />
}
