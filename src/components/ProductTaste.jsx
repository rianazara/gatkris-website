import { productTaste } from '../data/content'

export default function ProductTaste() {
  return (
    <section className="card" id="product-taste">
      <h3 className="section-label section-label--yellow">How I Think About Products</h3>
      <ol className="taste">
        {productTaste.map((principle, i) => (
          <li className="taste__item" key={i}>
            <span className="taste__number">{String(i + 1).padStart(2, '0')}</span>
            <p className="taste__text">{principle}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
