import { exploring } from '../data/content'

export default function Exploring() {
  return (
    <section className="card" id="exploring">
      <h2 className="section-label section-label--teal">Currently Exploring</h2>
      <div className="exploring">
        {exploring.map((item) => (
          <span className="exploring__pill" key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}
