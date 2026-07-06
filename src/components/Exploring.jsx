import { exploring } from '../data/content'

export default function Exploring() {
  return (
    <section className="card">
      <h3 className="section-label section-label--teal">Currently Exploring</h3>
      <div className="exploring">
        {exploring.map((item) => (
          <span className="exploring__pill" key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}
