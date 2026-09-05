import { useEffect, useRef } from 'react'
import { fieldNotes } from '../data/fieldNotes'
import NotebookCover from './NotebookCover'

function countWords(str) {
  return String(str).trim().split(/\s+/).filter(Boolean).length
}

function estimateReadTime(body) {
  const words = body.reduce((count, block) => {
    if (typeof block === 'string') return count + countWords(block)
    if (!block || typeof block !== 'object') return count
    if (block.type === 'list' && Array.isArray(block.items)) {
      return count + block.items.reduce((c, i) => c + countWords(i.term || '') + countWords(i.def || ''), 0)
    }
    if (Array.isArray(block.lines)) {
      return count + block.lines.reduce((c, line) => c + countWords(line), 0)
    }
    if (Array.isArray(block.items)) {
      return count + block.items.reduce((c, item) => c + countWords(typeof item === 'string' ? item : (item.text || '')), 0)
    }
    if (typeof block.text === 'string') return count + countWords(block.text)
    return count
  }, 0)
  return `${Math.max(1, Math.ceil(words / 220))} min read`
}

function PenIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="fn-pen-icon">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}

// Parse a string with **bold** and *italic* markers into React nodes.
function renderInline(text) {
  const parts = []
  let i = 0
  let key = 0
  while (i < text.length) {
    if (text.startsWith('**', i)) {
      const end = text.indexOf('**', i + 2)
      if (end !== -1) {
        parts.push(<strong key={key++} className="fn-body__bold">{text.slice(i + 2, end)}</strong>)
        i = end + 2
        continue
      }
    }
    if (text.startsWith('*', i) && text[i - 1] !== '*') {
      const end = text.indexOf('*', i + 1)
      if (end !== -1 && text[end + 1] !== '*') {
        parts.push(<em key={key++} className="fn-body__em">{text.slice(i + 1, end)}</em>)
        i = end + 1
        continue
      }
    }
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
            {renderInline(rest)}
          </p>
        )
      }
      return (
        <p key={i} className="fn-body__p">
          {renderInline(block)}
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

    if (block.type === 'bullets') {
      isFirst = false
      return (
        <ul key={i} className="fn-body__bullets">
          {block.items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      )
    }

    if (block.type === 'stanza') {
      isFirst = false
      return (
        <div key={i} className="fn-body__stanza">
          {block.lines.map((line, j) => (
            <p key={j} className="fn-body__stanza-line">{renderInline(line)}</p>
          ))}
        </div>
      )
    }

    if (block.type === 'questions') {
      isFirst = false
      return (
        <div key={i} className="fn-body__questions">
          {block.items.map((line, j) => (
            <p key={j} className="fn-body__questions-item">{renderInline(line)}</p>
          ))}
        </div>
      )
    }

    if (block.type === 'emphasis') {
      isFirst = false
      return (
        <p key={i} className="fn-body__emphasis">
          {renderInline(block.text)}
        </p>
      )
    }

    if (block.type === 'callout') {
      isFirst = false
      return (
        <aside key={i} className="fn-body__callout" role="note">
          <p className="fn-body__callout-text">{renderInline(block.text)}</p>
        </aside>
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
            <p className="fn-note-num" aria-label={`Field Note ${note.number}`}>Field Note {note.number}</p>
            <h1 className="fn-note-title">{note.title}</h1>
            <div className="fn-note-divider" aria-hidden="true">
              <svg width="80" height="12" viewBox="0 0 80 12">
                <line x1="0" y1="6" x2="33" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
                <path d="M40 2 L44 6 L40 10 L36 6 Z" fill="currentColor" opacity="0.12" />
                <line x1="47" y1="6" x2="80" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
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

function IndexView({ onSelectNote, cover }) {
  const handleBackHome = () => {
    window.location.hash = ''
  }
  return (
    <div className="notebook-wrap">
      <div className="notebook" role="navigation" aria-label="Field Notes index">
        {cover}
        <div className="notebook__spine" aria-hidden="true">
          <div className="notebook__spine-lines" />
        </div>
        <div className="notebook__page">
          <button className="fn-back" onClick={handleBackHome} aria-label="Back to home">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to home
          </button>

          <div className="fn-index-header">
            <PenIcon size={20} />
            <h1 className="fn-index-title">Field Notes</h1>
          </div>
          <p className="fn-index-sub">
            A record of questions that refused to leave me alone.
          </p>
          <div className="fn-index-rule" aria-hidden="true" />

          <div className="fn-entries">
            {fieldNotes.map((note) => (
              <button
                key={note.number}
                className="fn-entry"
                onClick={() => onSelectNote(note.number)}
              >
                <span className="fn-entry__num">{note.number}</span>
                <div className="fn-entry__body">
                  <h2 className="fn-entry__title">{note.title}</h2>
                  {note.question && (
                    <p className="fn-entry__question">{note.question}</p>
                  )}
                  <div className="fn-entry__meta-row">
                    <span className="fn-entry__date">{note.date}</span>
                    <span className="fn-entry__dot">&middot;</span>
                    <span className="fn-entry__readtime">{estimateReadTime(note.body)}</span>
                  </div>
                </div>
                <div className="fn-entry__arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

  return (
    <IndexView
      onSelectNote={handleSelectNote}
      cover={
        <NotebookCover
          title="Field Notes"
          subtitle="A record of questions that refused to leave me alone."
          sessionKey="field-notes"
        />
      }
    />
  )
}
