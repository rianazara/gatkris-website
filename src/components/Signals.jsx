import { useState } from 'react'
import { achievements } from '../data/content'

export default function Signals() {
  return (
    <section className="card" id="outside-work">
      <h3 className="section-label section-label--rose">What I Learned Outside Work</h3>
      <div className="signals">
        {achievements.map((a) => (
          <SignalCard key={a.title} achievement={a} />
        ))}
      </div>
    </section>
  )
}

function SignalCard({ achievement }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`signal ${flipped ? 'signal--flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="signal__inner">
        <div className="signal__front">
          <p className="signal__phrase">{achievement.phrase}</p>
          <p className="signal__title">{achievement.title}</p>
        </div>
        <div className="signal__back">
          <div className="signal__image">
            <img src={achievement.image} alt={achievement.title} />
          </div>
          <p className="signal__reflection">{achievement.reflection}</p>
        </div>
      </div>
    </div>
  )
}
