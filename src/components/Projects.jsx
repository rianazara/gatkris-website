import { projects } from '../data/content'

export default function Projects() {
  return (
    <section className="card" id="projects">
      <h3 className="section-label section-label--green">Things I Built to Understand the Future</h3>
      <div className="projects">
        {projects.map((p) => (
          <article className="project" key={p.name}>
            <div className="project__media">
              {p.video ? (
                <video src={p.video} controls preload="metadata" />
              ) : (
                <img src={p.image} alt={p.name} loading="lazy" />
              )}
            </div>
            <div className="project__body">
              <h4 className="project__name">{p.name}</h4>
              <p className="project__thesis">{p.thesis}</p>
              <ul className="project__bullets">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
