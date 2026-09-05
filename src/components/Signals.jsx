import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { achievements } from '../data/content'

export default function Signals() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (!lightbox) return
    const handler = (e) => { if (e.key === 'Escape') setLightbox(null) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [lightbox])

  return (
    <section className="card" id="outside-work">
      <h2 className="section-label section-label--red">Achievements Outside Work</h2>
      <div className="signals">
        {achievements.map((a) => (
          <SignalCard key={a.title} achievement={a} onImageClick={() => setLightbox(a)} />
        ))}
      </div>
      {lightbox && createPortal(
        <div className="signal-lightbox" onClick={() => setLightbox(null)}>
          <div className="signal-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="signal-lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>
            <img src={lightbox.image} alt={lightbox.title} className="signal-lightbox__img" />
            <div className="signal-lightbox__caption">
              <p className="signal-lightbox__title">{lightbox.title}</p>
              <p className="signal-lightbox__reflection">{lightbox.reflection}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

function SignalCard({ achievement, onImageClick }) {
  const [flipped, setFlipped] = useState(false)

  function handleBackClick(e) {
    e.stopPropagation()
    onImageClick()
  }

  const handlePointerEnter = (e) => {
    if (e.pointerType === 'mouse') setFlipped(true)
  }
  const handlePointerLeave = (e) => {
    if (e.pointerType === 'mouse') setFlipped(false)
  }

  return (
    <div
      className={`signal ${flipped ? 'signal--flipped' : ''}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="signal__inner">
        <div className="signal__front">
          <p className="signal__title">{achievement.title}</p>
          <p className="signal__phrase">{achievement.phrase}</p>
        </div>
        <div className="signal__back" onClick={handleBackClick}>
          <div className="signal__image">
            <img src={achievement.image} alt={achievement.title} style={achievement.imagePosition ? { objectPosition: achievement.imagePosition } : undefined} />
          </div>
          <p className="signal__reflection">{achievement.reflection}</p>
        </div>
      </div>
    </div>
  )
}
