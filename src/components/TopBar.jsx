import { useState, useEffect } from 'react'
import { profile } from '../data/content'
import { LocationIcon } from './icons'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about', color: 'blue' },
  { label: 'Achievements', href: '#outside-work', color: 'rose' },
  { label: 'Projects', href: '#projects', color: 'green' },
  { label: 'Field Notes', href: '#field-notes', color: 'gold' },
  { label: 'Experience', href: '#experience', color: 'orange' },
  { label: 'Contact', href: '#contact', color: 'orange' },
]

export default function TopBar({ showFieldNotes }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a className="skip-link" href="#about">Skip to main content</a>
      <nav className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`} aria-label="Main navigation">
        <div className="topbar__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`topbar__link topbar__link--${link.color}`}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="topbar__right">
          <span className="topbar__location" aria-label={`Location: ${profile.location}`}>
            <LocationIcon />
            <span>{profile.location}</span>
          </span>
          <ThemeToggle />
        </div>
      </nav>
    </>
  )
}
