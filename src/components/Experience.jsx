import { experience } from '../data/content'
import { CalendarIcon, LocationIcon } from './icons'
import ServiceNowDemo from './ServiceNowDemo'
import KindleDemo from './KindleDemo'
import CopilotDemo from './CopilotDemo'

const amazonHighlights = [
  { keyword: 'Led', rest: ' next-gen Book Sample experience from concept to launch across web, mobile, and Kindle', color: 'orange' },
  { keyword: 'Won', rest: ' $900K VP-level multi-org investment to capture a $2.5B market opportunity', color: 'blue' },
  { keyword: 'Architected', rest: ' agentic LLM workflow across 6 organizations — tool-use policies, grounding, multi-model routing', color: 'green' },
  { keyword: 'Delivered', rest: ' 500x processing reduction and $1.7B+ projected revenue with double-digit relevance gains', color: 'purple' },
  { keyword: 'Shipped', rest: ' production analytics dashboard guiding growth strategy and experimentation', color: 'teal' },
]

const microsoftHighlights = [
  { keyword: 'Authored', rest: ' Phase 2 enterprise GTM strategy for Microsoft Copilot', color: 'blue' },
  { keyword: 'Scoped', rest: ' launch sequencing, adoption metrics, and change-management plays for large-scale rollout', color: 'purple' },
  { keyword: 'Briefed', rest: ' Microsoft product leaders on Copilot enterprise positioning and capability roadmap', color: 'green' },
]

const serviceNowHighlights = [
  { keyword: 'Re-engineered', rest: ' the Activity Stream — real-time editor and feed where agents collaborate on every incident', color: 'blue' },
  { keyword: 'Owned', rest: ' all form field types powering every workspace, including custom drag-and-drop builds', color: 'orange' },
  { keyword: 'Built to', rest: ' WCAG 2.1 AA across all components', color: 'green' },
  { prefix: 'Serves ', keyword: '1,000+', rest: ' enterprises including Fortune 500', color: 'teal' },
]

const showcaseData = {
  Amazon: { highlights: amazonHighlights, Demo: KindleDemo },
  Microsoft: { highlights: microsoftHighlights, Demo: CopilotDemo },
  ServiceNow: { highlights: serviceNowHighlights, Demo: ServiceNowDemo },
}

function Showcase({ highlights, Demo }) {
  return (
    <div className="exp__showcase">
      <div className="exp__showcase-text">
        <ul className="exp__showcase-list">
          {highlights.map((h) => (
            <li key={h.keyword}>
              {h.prefix}<span className={`exp__keyword exp__keyword--${h.color}`}>{h.keyword}</span>{h.rest}
            </li>
          ))}
        </ul>
      </div>
      <div className="exp__showcase-demo">
        <Demo />
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="card" id="experience">
      <h2 className="section-label section-label--blue">Professional Experience</h2>
      <ul className="exp">
        {experience.map((e) => {
          const showcase = showcaseData[e.company]
          return (
            <li className="exp__item" key={e.company}>
              <div className="exp__header">
                <div className="exp__logo">
                  <img src={e.logo} alt={`${e.company} logo`} loading="lazy" />
                </div>
                <div className="exp__header-text">
                  <p className="exp__company">{e.company}</p>
                  <p className="exp__role">{e.role}</p>
                  <div className="exp__meta">
                    <span className="exp__meta-item">
                      <CalendarIcon />
                      {e.dates}
                    </span>
                    <span className="exp__meta-item">
                      <LocationIcon />
                      {e.place}
                    </span>
                  </div>
                </div>
              </div>
              {showcase ? (
                <Showcase {...showcase} />
              ) : (
                <div className="exp__desc-only">
                  <p className="exp__desc">{e.description}</p>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
