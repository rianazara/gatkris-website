import { useEffect } from 'react'
import Background from './components/Background'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import About from './components/About'
import Signals from './components/Signals'
import Projects from './components/Projects'
import ProductTaste from './components/ProductTaste'
import OperatingSystem from './components/OperatingSystem'
import Exploring from './components/Exploring'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Accessibility from './components/Accessibility'

function useScrollFade() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let ticking = false

    function update() {
      const cards = document.querySelectorAll('.card')
      const fadeZone = 180

      for (const card of cards) {
        const rect = card.getBoundingClientRect()
        const mid = rect.top + rect.height * 0.5

        if (mid > fadeZone) {
          card.style.opacity = '1'
          card.style.transform = 'none'
          card.style.filter = 'none'
        } else if (mid < 0) {
          card.style.opacity = '0'
          card.style.transform = 'scale(0.97) translateY(-10px)'
          card.style.filter = 'blur(6px)'
        } else {
          const t = 1 - mid / fadeZone
          card.style.opacity = `${1 - t * 0.9}`
          card.style.transform = `scale(${1 - t * 0.03}) translateY(${-t * 10}px)`
          card.style.filter = `blur(${t * 6}px)`
        }
      }
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

export default function App() {
  useScrollFade()

  return (
    <>
      <Background />
      <TopBar />
      <main>
        <Hero />
        <About />
        <Signals />
        <Projects />
        <ProductTaste />
        <OperatingSystem />
        <Exploring />
        <Experience />
      </main>
      <Footer />
      <Accessibility />
    </>
  )
}
