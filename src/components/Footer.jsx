import { profile } from '../data/content'
import { ArrowRightIcon, GmailIcon, LinkedInIcon } from './icons'

const contactIcons = {
  'E-mail': GmailIcon,
  'LinkedIn': LinkedInIcon,
}

export default function Footer() {
  return (
    <footer className="card contacts" id="contact">
      <h2 className="section-label section-label--green">Contact Me</h2>
      {profile.contacts.map((c) => {
        const Icon = contactIcons[c.label]
        return (
          <a
            className="contact"
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <span className="contact__icon" aria-hidden="true">
              {Icon && <Icon />}
            </span>
            <span className="contact__label">{c.label}</span>
            <span className="contact__value">{c.value}</span>
            <span className="contact__arrow" aria-hidden="true">
              <ArrowRightIcon />
            </span>
          </a>
        )
      })}
    </footer>
  )
}
