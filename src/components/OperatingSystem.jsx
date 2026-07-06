import { operatingSystem } from '../data/content'

export default function OperatingSystem() {
  return (
    <section className="card">
      <h3 className="section-label section-label--purple">My Operating System</h3>
      <div className="os-grid">
        {operatingSystem.map((q) => (
          <div className="os-quad" key={q.label}>
            <h4 className="os-quad__label">{q.label}</h4>
            <p className="os-quad__items">{q.items.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
