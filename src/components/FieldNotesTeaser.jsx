import { fieldNotes } from '../data/fieldNotes'

function PenIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}

export default function FieldNotesTeaser() {
  const latest = fieldNotes[0]
  if (!latest) return null

  const preview = latest.body.find((b) => typeof b === 'string') || ''
  const trimmed = preview.length > 180 ? preview.slice(0, 180) + '...' : preview

  return (
    <section className="card fn-teaser" id="field-notes-preview">
      <div className="fn-teaser__header">
        <h3 className="section-label section-label--yellow">Field Notes</h3>
        <p className="fn-teaser__intro">
          A notebook of questions, investigations, and evolving product thinking — written like a newsletter, updated as my judgment changes.
        </p>
      </div>
      <a href="#field-notes" className="fn-teaser__card">
        <div className="fn-teaser__icon">
          <PenIcon />
        </div>
        <div className="fn-teaser__body">
          <h4 className="fn-teaser__heading">
            <span className="fn-teaser__number">#{latest.number}</span>
            {latest.title}
          </h4>
          <div className="fn-teaser__meta">
            <span className="fn-teaser__date">{latest.date}</span>
          </div>
          {latest.question && (
            <p className="fn-teaser__question">{latest.question}</p>
          )}
          <p className="fn-teaser__preview">{trimmed}</p>
        </div>
        <div className="fn-teaser__arrow" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </a>
      <a href="#field-notes" className="fn-teaser__cta">
        Read all Field Notes <span aria-hidden="true">&rarr;</span>
      </a>
    </section>
  )
}
