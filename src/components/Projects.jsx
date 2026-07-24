import { useState, useRef, useEffect } from 'react'
import { projects, productVisions } from '../data/content'
import AnimusPreview from './AnimusPreview'
import PriceWhispererPreview from './PriceWhispererPreview'

const previews = {
  animus: AnimusPreview,
  pricewhisperer: PriceWhispererPreview,
}

function StatusBadge({ status }) {
  const cls = status === 'Live' ? 'proj-badge--live' : 'proj-badge--building'
  return <span className={`proj-badge ${cls}`}>{status}</span>
}

function ProjectCard({ project }) {
  const Preview = previews[project.preview]
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef(null)
  const [overflows, setOverflows] = useState(false)

  useEffect(() => {
    const el = contentRef.current
    if (el) setOverflows(el.scrollHeight > 360)
  }, [])

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
          {project.href && (
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="proj__cta">
              Try it live <span aria-hidden="true">→</span>
            </a>
          )}
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
        <div className="proj-vision__meta">
          <span className="proj__category">{vision.category}</span>
        </div>
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

export default function Projects() {
  return (
    <section className="card" id="projects">
      <h3 className="section-label section-label--green">Things I've Been Building</h3>
      <div className="proj-showcase">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
      <div className="proj-visions">
        <h4 className="proj-visions__heading">What I'm Envisioning</h4>
        {productVisions.map((v) => (
          <VisionCard key={v.name} vision={v} />
        ))}
      </div>
    </section>
  )
}
