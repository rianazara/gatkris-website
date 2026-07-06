import { AccessibilityIcon } from './icons'

export default function Accessibility() {
  return (
    <footer className="a11y-badge" role="contentinfo" aria-label="Accessibility commitment">
      <AccessibilityIcon />
      <span>
        Built to <strong>WCAG 2.2 AAA</strong> standards.{' '}
        <a href="mailto:gayatrigopu@gmail.com" className="a11y-badge__link">
          Report an issue
        </a>
      </span>
    </footer>
  )
}
