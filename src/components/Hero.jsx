import { profile } from '../data/content'
import { MailIcon, ArrowDownIcon } from './icons'

export default function Hero() {
  return (
    <section className="card hero">
      <div className="hero__top">
        <div className="hero__avatar hero__entrance hero__entrance--1">
          <img src={profile.avatar} alt={profile.name} />
        </div>
        <div className="hero__info">
          <div className="hero__titles hero__entrance hero__entrance--2">
            <h1 className="hero__name">{profile.name}</h1>
            <h2 className="hero__role">Sr Technical PM</h2>
            <div className="hero__companies">
              {profile.companies.map((c) => (
                <span className="hero__company" key={c.name}>
                  <img src={c.logo} alt={c.name} className="hero__company-logo" />
                  <span>Ex-{c.name}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="hero__buttons hero__entrance hero__entrance--3">
            <a className="btn" href="#projects">
              <ArrowDownIcon />
              <span>View Product Demos</span>
            </a>
            <a className="btn" href="#about">
              <ArrowDownIcon />
              <span>Read My PM Story</span>
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              <MailIcon />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hero__ticker" role="marquee" aria-label="Site continuously under maintenance —  I believe in continuous improvement">
        <div className="hero__ticker-track">
          <span aria-hidden="true">Site continuously under maintenance —  I believe in continuous improvement</span>
          <span aria-hidden="true">Site continuously under maintenance —  I believe in continuous improvement</span>
        </div>
      </div>
    </section>
  )
}
