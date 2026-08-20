import { useEffect, useState } from 'react'
import Background from './components/Background'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import About from './components/About'
import Signals from './components/Signals'
import Projects from './components/Projects'
import Experience from './components/Experience'
import FieldNotesTeaser from './components/FieldNotesTeaser'
import ProductThesisTeaser from './components/ProductThesisTeaser'
import Footer from './components/Footer'
import Accessibility from './components/Accessibility'
import FieldNotes from './components/FieldNotes'
import ProductThesis from './components/ProductThesis'

function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    if (CSS.supports('animation-timeline: view()')) return

    const cards = document.querySelectorAll('.card')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
          }
        }
      },
      { threshold: 0.08 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])
}

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash
}

export default function App() {
  useScrollReveal()
  const route = useHashRoute()
  const showFieldNotes = route.startsWith('#field-notes')
  const showProductThesis = route.startsWith('#product-thesis')

  return (
    <>
      <Background />
      <TopBar showFieldNotes={showFieldNotes} />
      {showFieldNotes ? (
        <main>
          <FieldNotes route={route} />
        </main>
      ) : showProductThesis ? (
        <main>
          <ProductThesis />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <FieldNotesTeaser />
          <ProductThesisTeaser />
          <Projects />
          <Experience />
          <Signals />
        </main>
      )}
      <Footer />
      <Accessibility />
    </>
  )
}
