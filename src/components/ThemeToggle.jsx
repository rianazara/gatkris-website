import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from './icons'

function getInitialTheme() {
  const attr = document.documentElement.getAttribute('data-theme')
  if (attr === 'light' || attr === 'dark') return attr
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      /* ignore */
    }
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      data-state={isDark ? 'dark' : 'light'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
