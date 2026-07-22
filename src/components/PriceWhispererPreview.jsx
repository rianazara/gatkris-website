export default function PriceWhispererPreview() {
  return (
    <div className="pw-preview" aria-label="Price Whisperer SaaS pricing dashboard">
      <div className="pw-preview__toolbar">
        <div className="pw-preview__dots"><span /><span /><span /></div>
        <div className="pw-preview__url">price-whisperer-41.lovable.app</div>
      </div>
      <div className="pw-preview__body">
        <div className="pw-preview__header">
          <span className="pw-preview__title">Revenue Engine</span>
          <span className="pw-preview__badge">Live</span>
        </div>
        <div className="pw-preview__metrics">
          <div className="pw-metric">
            <span className="pw-metric__label">Monthly MRR</span>
            <span className="pw-metric__value">$71,880</span>
          </div>
          <div className="pw-metric">
            <span className="pw-metric__label">Annual ARR</span>
            <span className="pw-metric__value">$862K</span>
          </div>
          <div className="pw-metric">
            <span className="pw-metric__label">ARPU</span>
            <span className="pw-metric__value">$33.91</span>
          </div>
          <div className="pw-metric">
            <span className="pw-metric__label">Customers</span>
            <span className="pw-metric__value">2,120</span>
          </div>
        </div>
        <div className="pw-preview__tiers">
          <div className="pw-tier">
            <div className="pw-tier__name">Basic</div>
            <div className="pw-tier__price">$19<span>/mo</span></div>
            <div className="pw-tier__bar" style={{ width: '55%' }} />
            <div className="pw-tier__rev">$22.8K</div>
          </div>
          <div className="pw-tier pw-tier--highlight">
            <div className="pw-tier__name">Pro</div>
            <div className="pw-tier__price">$39<span>/mo</span></div>
            <div className="pw-tier__bar" style={{ width: '72%' }} />
            <div className="pw-tier__rev">$31.2K</div>
          </div>
          <div className="pw-tier">
            <div className="pw-tier__name">Enterprise</div>
            <div className="pw-tier__price">$149<span>/mo</span></div>
            <div className="pw-tier__bar" style={{ width: '40%' }} />
            <div className="pw-tier__rev">$17.9K</div>
          </div>
        </div>
      </div>
    </div>
  )
}
