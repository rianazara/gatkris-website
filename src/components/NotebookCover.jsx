import { useState, useEffect } from 'react'

/**
 * NotebookCover — the hardcover-opening intro animation used before any
 * long-form writing surface (Field Notes index, Product Thesis, Product Doc).
 *
 * The cover rotates open on its spine and slides right (inspired by
 * Angela Jiang's cover-fold pattern), then fades away to reveal the content
 * underneath. Runs once per session for the specified `sessionKey` so a
 * visitor doesn't sit through the animation on every navigation.
 *
 * Respects prefers-reduced-motion: skips the animation entirely.
 */
export default function NotebookCover({ title, subtitle, sessionKey, onDone }) {
  const [visible, setVisible] = useState(() => {
    // Skip if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return false
    }
    // Skip if already shown this session for this cover
    if (sessionKey && typeof sessionStorage !== 'undefined') {
      try { return !sessionStorage.getItem(`notebook-cover:${sessionKey}`) } catch (e) { return true }
    }
    return true
  })

  useEffect(() => {
    if (!visible) {
      onDone?.()
      return
    }
    if (sessionKey && typeof sessionStorage !== 'undefined') {
      try { sessionStorage.setItem(`notebook-cover:${sessionKey}`, '1') } catch (e) {}
    }
  }, [visible, sessionKey, onDone])

  if (!visible) return null

  const done = (e) => {
    if (e.animationName === 'fn-overlayFade') {
      setVisible(false)
      onDone?.()
    }
  }

  return (
    <div className="fn-cover-overlay" aria-hidden="true" onAnimationEnd={done}>
      <div className="fn-cover-book">
        <div className="fn-cover-spine" aria-hidden="true" />
        <div className="fn-cover-face">
          <svg className="fn-cover-emblem" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
          </svg>
          <div className="fn-cover-title">{title}</div>
          <div className="fn-cover-rule" />
          {subtitle && <p className="fn-cover-sub">{subtitle}</p>}
        </div>
        <div className="fn-cover-inside" aria-hidden="true" />
      </div>
    </div>
  )
}
