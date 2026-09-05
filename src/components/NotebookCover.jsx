import { useState, useEffect } from 'react'

/**
 * NotebookCover — faithful port of angelajiang.com's cover-fold animation.
 *
 * Rendered INSIDE .notebook as an absolutely-positioned layer (inset: 0),
 * so it always occupies exactly the notebook's box — the notebook never
 * moves or resizes. The cover flips open on its left spine
 * (rotateY 0 → -180deg), holds flat, slides right 99%, then drops to
 * z-index -1 so the flipped cover lies under the opened page. It stays
 * mounted permanently after opening, just like the original.
 *
 * Runs once per session for the given `sessionKey`. Respects
 * prefers-reduced-motion (renders nothing).
 */
export default function NotebookCover({ title, subtitle, sessionKey }) {
  const [visible] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return false
    }
    if (sessionKey && typeof sessionStorage !== 'undefined') {
      try { return !sessionStorage.getItem(`notebook-cover:${sessionKey}`) } catch (e) { return true }
    }
    return true
  })

  useEffect(() => {
    if (visible && sessionKey && typeof sessionStorage !== 'undefined') {
      try { sessionStorage.setItem(`notebook-cover:${sessionKey}`, '1') } catch (e) {}
    }
  }, [visible, sessionKey])

  if (!visible) return null

  return (
    <div className="nb-cover nb-cover--open" aria-hidden="true">
      <div className="nb-cover-flip">
        <div className="nb-cover-face nb-cover-front">
          <div className="nb-cover-front__inner">
            <svg className="nb-cover-emblem" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
            <div className="nb-cover-title">{title}</div>
            <div className="nb-cover-rule" />
            {subtitle && <p className="nb-cover-sub">{subtitle}</p>}
          </div>
        </div>
        <div className="nb-cover-face nb-cover-back" />
      </div>
    </div>
  )
}
