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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

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
          <button
            className={`topbar__hamburger ${menuOpen ? 'topbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="topbar__overlay" onClick={() => setMenuOpen(false)}>
          <div className="topbar__mobile-menu" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`topbar__mobile-link topbar__link--${link.color}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
