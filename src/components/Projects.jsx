import { useState, useRef, useEffect } from 'react'
import { projects, productPrototypes, productVisions } from '../data/content'
import AnimusPreview from './AnimusPreview'
import PriceWhispererPreview from './PriceWhispererPreview'
import AppStudioPreview from './AppStudioPreview'

const previews = {
  animus: AnimusPreview,
  pricewhisperer: PriceWhispererPreview,
  appstudio: AppStudioPreview,
}

function StatusBadge({ status }) {
  const cls = status === 'Live' ? 'proj-badge--live' : 'proj-badge--building'
  return <span className={`proj-badge ${cls}`}>{status}</span>
}

function ProjectCard({ project, alwaysExpanded = false }) {
  const Preview = previews[project.preview]
  const [expanded, setExpanded] = useState(alwaysExpanded)
  const contentRef = useRef(null)
  const [overflows, setOverflows] = useState(false)

  useEffect(() => {
    if (alwaysExpanded) return
    const el = contentRef.current
    if (el) setOverflows(el.scrollHeight > 360)
  }, [alwaysExpanded])

  return (
    <article className="proj">
      <div className="proj__visual">
        {Preview && <Preview />}
      </div>
      <div className="proj__body">
        <div
          className={`proj__content ${expanded ? 'proj__content--expanded' : ''}`}
          ref={contentRef}
        >
          <div className="proj__meta">
            <span className="proj__category">{project.category}</span>
            <StatusBadge status={project.status} />
          </div>
          <h4 className="proj__name">{project.name}</h4>
          <p className="proj__tagline">{project.tagline}</p>
          <p className="proj__desc">{project.description}</p>
          {project.time && (
            <div className="proj__time" aria-label="Time saved with this product">
              <div className="proj__time-cell">
                <span className="proj__time-label">Before</span>
                <span className="proj__time-value">{project.time.before}</span>
              </div>
              <div className="proj__time-cell">
                <span className="proj__time-label">Now</span>
                <span className="proj__time-value">{project.time.after}</span>
              </div>
              <div className="proj__time-cell proj__time-cell--accent">
                <span className="proj__time-label">Saved</span>
                <span className="proj__time-value">{project.time.reduction}</span>
              </div>
            </div>
          )}
          <ul className="proj__details">
            {project.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <div className="proj__stack">
            {project.stack.map((t) => (
              <span key={t} className="proj__tech">{t}</span>
            ))}
          </div>
          {project.href && (() => {
            const external = project.href.startsWith('http')
            const label = project.hrefLabel || (external ? 'Try it live' : 'Read more')
            return (
              <a
                href={project.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="proj__cta"
              >
                {label} <span aria-hidden="true">→</span>
              </a>
            )
          })()}
        </div>
        {overflows && (
          <button className="proj__more" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
    </article>
  )
}

function VisionCard({ vision }) {
  return (
    <article className="proj-vision">
      <div className="proj-vision__icon">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
      <div className="proj-vision__body">
        <h4 className="proj-vision__name">{vision.name}</h4>
        <p className="proj-vision__tagline">{vision.tagline}</p>
        <p className="proj-vision__desc">{vision.description}</p>
        {vision.href && (
          <a href={vision.href} target="_blank" rel="noopener noreferrer" className="proj__cta">
            Read the vision <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  )
}

function LockedFolder({ hint, label }) {
  return (
    <div className="proj-locked" role="group" aria-label={`${label} (private)`}>
      <div className="proj-locked__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="10" width="16" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          <circle cx="12" cy="15" r="1" fill="currentColor" />
        </svg>
      </div>
      <p className="proj-locked__hint">{hint}</p>
      <span className="proj-locked__badge" aria-hidden="true">Private</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="card" id="projects">
      <h3 className="section-label section-label--green">Products I've built</h3>

      <div className="proj-showcase">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>

      <div className="proj-group">
        <h4 className="proj-group__heading">Product Prototypes</h4>
        <div className="proj-showcase">
          {productPrototypes.map((p) => (
            <ProjectCard key={p.name} project={p} alwaysExpanded />
          ))}
        </div>
      </div>

      <div className="proj-group">
        <h4 className="proj-group__heading">Product Visions</h4>
        {productVisions.map((v) => (
          <VisionCard key={v.name} vision={v} />
        ))}
      </div>

      <div className="proj-group">
        <h4 className="proj-group__heading">Product Explorations</h4>
        <LockedFolder
          label="Product Explorations"
          hint="Work-in-progress explorations kept private while I sharpen them."
        />
      </div>

      <div className="proj-group">
        <h4 className="proj-group__heading">Product Graveyard</h4>
        <LockedFolder
          label="Product Graveyard"
          hint="Ideas I tried and set aside — kept private, not for public scrutiny."
        />
      </div>
    </section>
  )
}
