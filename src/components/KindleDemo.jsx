import { useState, useRef, useCallback } from 'react'

const samplePages = [
  {
    type: 'title',
    content: (
      <>
        <p className="amz-reader__title-top">CO-INTELLIGENCE</p>
        <p className="amz-reader__title-sub">Living and Working with AI</p>
        <p className="amz-reader__title-author">ETHAN MOLLICK</p>
        <p className="amz-reader__title-pub">Portfolio / Penguin</p>
      </>
    ),
  },
  {
    type: 'toc',
    content: (
      <>
        <p className="amz-reader__toc-heading">Contents</p>
        <p className="amz-reader__toc-item">Introduction &middot; &middot; &middot; 1</p>
        <p className="amz-reader__toc-item">1. Creating Alien Minds &middot; &middot; &middot; 15</p>
        <p className="amz-reader__toc-item">2. Aligning the Alien &middot; &middot; &middot; 39</p>
        <p className="amz-reader__toc-item">3. Four Rules for Co-Intelligence &middot; &middot; &middot; 61</p>
        <p className="amz-reader__toc-item">4. AI as a Person &middot; &middot; &middot; 85</p>
        <p className="amz-reader__toc-item">5. AI as a Creative &middot; &middot; &middot; 113</p>
        <p className="amz-reader__toc-item">6. AI as a Coworker &middot; &middot; &middot; 141</p>
      </>
    ),
  },
  {
    type: 'text',
    chapter: 'Introduction',
    content: (
      <>
        <p className="amz-reader__txt">Something unprecedented happened in late 2022: an alien mind arrived on Earth. It wasn't the kind of alien we'd imagined. It didn't come from outer space. It was born in a data center.</p>
        <p className="amz-reader__txt">Large Language Models, or LLMs, represent something genuinely new under the sun. They are not conscious (as far as we know), but they can do many things that previously only conscious beings could do.</p>
      </>
    ),
  },
  {
    type: 'text',
    chapter: 'Introduction',
    content: (
      <>
        <p className="amz-reader__txt">They can write, analyze, code, and create. They can teach, persuade, and even empathize. And they are improving at a pace that makes predictions about their future capabilities feel foolish almost as soon as they are made.</p>
        <p className="amz-reader__txt">This is a book about how to live and work with these new alien minds — how to be a co-intelligence.</p>
      </>
    ),
  },
  {
    type: 'text',
    chapter: '1. Creating Alien Minds',
    content: (
      <>
        <p className="amz-reader__txt">To understand how to work with AI, it helps to understand where it came from. The history of artificial intelligence is a story of ambitious goals, spectacular failures, and sudden breakthroughs.</p>
        <p className="amz-reader__txt">The modern era of AI began not with a grand theory but with a simple bet: that you could get intelligent behavior from machines by feeding them enough data and letting them find patterns on their own.</p>
        <p className="amz-reader__end-sample">— End of sample —</p>
      </>
    ),
  },
]

export default function KindleDemo() {
  const [view, setView] = useState('product')
  const [page, setPage] = useState(0)
  const [flipping, setFlipping] = useState(null)
  const [tocOpen, setTocOpen] = useState(false)
  const flipTimeout = useRef(null)

  const goToPage = useCallback((nextPage, direction) => {
    if (flipping || nextPage < 0 || nextPage >= samplePages.length) return
    setFlipping(direction)
    flipTimeout.current = setTimeout(() => {
      setPage(nextPage)
      setFlipping(null)
    }, 350)
  }, [flipping])

  const openReader = () => {
    setView('reader')
    setPage(0)
    setFlipping(null)
    setTocOpen(false)
  }

  const closeReader = () => {
    setView('product')
    if (flipTimeout.current) clearTimeout(flipTimeout.current)
    setFlipping(null)
    setTocOpen(false)
  }

  return (
    <div className="amz-demo" aria-label="Amazon Kindle Book Sample experience">
      <div className="amz-demo__browser">
        <div className="amz-demo__toolbar">
          <div className="amz-demo__dots"><span /><span /><span /></div>
          <div className="amz-demo__url">
            {view === 'product'
              ? 'amazon.com/Co-Intelligence-Living-Working-Ethan-Mollick/dp/B0CM8TRWK3'
              : 'read.amazon.com/sample/B0CM8TRWK3'}
          </div>
        </div>

        {view === 'product' ? (
          <div className="amz-demo__product">
            <div className="amz-demo__cover">
              <div className="amz-demo__cover-art amz-demo__cover-art--cointel">
                <span className="amz-demo__cover-sub2">ETHAN MOLLICK</span>
                <span className="amz-demo__cover-main2">CO-INTELLIGENCE</span>
                <span className="amz-demo__cover-tagline">Living and Working with AI</span>
              </div>
            </div>
            <div className="amz-demo__details">
              <div className="amz-demo__title">Co-Intelligence: Living and Working with AI</div>
              <div className="amz-demo__author">by Ethan Mollick</div>
              <div className="amz-demo__rating">
                <span className="amz-demo__stars">★★★★★</span>
                <span className="amz-demo__count">4,218 ratings</span>
              </div>
              <div className="amz-demo__format">Kindle Edition — $14.99</div>
              <button className="amz-demo__buy">Buy now with 1-Click®</button>
              <button className="amz-demo__sample-btn" onClick={openReader}>
                <span className="amz-demo__sample-icon">📖</span> Read Sample
              </button>
            </div>
          </div>
        ) : (
          <div className="amz-reader">
            <div className="amz-reader__topbar">
              <div className="amz-reader__topbar-left">
                <button className="amz-reader__back-btn" onClick={closeReader}>✕</button>
                <span className="amz-reader__sample-badge">SAMPLE</span>
              </div>
              <span className="amz-reader__book-title">Co-Intelligence</span>
              <div className="amz-reader__topbar-right">
                <button
                  className={`amz-reader__toc-btn${tocOpen ? ' amz-reader__toc-btn--active' : ''}`}
                  onClick={() => setTocOpen(!tocOpen)}
                  aria-label="Table of contents"
                >☰</button>
              </div>
            </div>

            <div className="amz-reader__body">
              {tocOpen && (
                <div className="amz-reader__toc-overlay" onClick={() => setTocOpen(false)}>
                  <div className="amz-reader__toc-panel" onClick={e => e.stopPropagation()}>
                    <p className="amz-reader__toc-panel-title">Table of Contents</p>
                    <button className="amz-reader__toc-link" onClick={() => { setPage(0); setTocOpen(false) }}>Title Page</button>
                    <button className="amz-reader__toc-link" onClick={() => { setPage(1); setTocOpen(false) }}>Contents</button>
                    <button className="amz-reader__toc-link" onClick={() => { setPage(2); setTocOpen(false) }}>Introduction</button>
                    <button className="amz-reader__toc-link" onClick={() => { setPage(4); setTocOpen(false) }}>1. Creating Alien Minds</button>
                  </div>
                </div>
              )}

              <div className="amz-reader__page-area">
                {page > 0 && (
                  <button
                    className="amz-reader__nav amz-reader__nav--prev"
                    onClick={() => goToPage(page - 1, 'prev')}
                    aria-label="Previous page"
                  >‹</button>
                )}

                <div className={`amz-reader__page-wrapper${flipping ? ` amz-reader__flip--${flipping}` : ''}`}>
                  <div className={`amz-reader__page amz-reader__page--${samplePages[page].type}`}>
                    {samplePages[page].chapter && (
                      <p className="amz-reader__chapter">{samplePages[page].chapter}</p>
                    )}
                    {samplePages[page].content}
                  </div>
                </div>

                {page < samplePages.length - 1 && (
                  <button
                    className="amz-reader__nav amz-reader__nav--next"
                    onClick={() => goToPage(page + 1, 'next')}
                    aria-label="Next page"
                  >›</button>
                )}
              </div>
            </div>

            <div className="amz-reader__footer">
              <span className="amz-reader__progress-label">Page {page + 1} of {samplePages.length}</span>
              <div className="amz-reader__progress-bar">
                <div
                  className="amz-reader__progress-fill"
                  style={{ width: `${((page + 1) / samplePages.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
