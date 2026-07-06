import { Fragment } from 'react'
import { profile } from '../data/content'

export default function About() {
  return (
    <section className="card about" id="about">
      <h3 className="section-label section-label--blue">About Me</h3>
      <p className="about__text">
        {profile.about.map((para, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <>
                <br />
                <br />
              </>
            )}
            {para}
          </Fragment>
        ))}
      </p>
    </section>
  )
}
