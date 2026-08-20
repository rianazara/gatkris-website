import { productThesis } from '../data/productThesis'

function CompassIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

export default function ProductThesisTeaser() {
  return (
    <section className="card pt-teaser" id="product-thesis-preview">
      <div className="pt-teaser__header">
        <h3 className="section-label section-label--red">Product Thesis</h3>
        <p className="pt-teaser__intro">
          My current philosophy of product management — the lens through which the rest of my work should be read.
        </p>
      </div>
      <a href="#product-thesis" className="pt-teaser__card">
        <div className="pt-teaser__icon">
          <CompassIcon />
        </div>
        <div className="pt-teaser__body">
          <h4 className="pt-teaser__heading">{productThesis.title}</h4>
          <div className="pt-teaser__meta">
            <span className="pt-teaser__date">{productThesis.date}</span>
          </div>
          <p className="pt-teaser__subtitle">{productThesis.subtitle}</p>
        </div>
        <div className="pt-teaser__arrow" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </a>
      <a href="#product-thesis" className="pt-teaser__cta">
        Read the thesis <span aria-hidden="true">&rarr;</span>
      </a>
    </section>
  )
}
