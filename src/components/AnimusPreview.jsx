export default function AnimusPreview() {
  return (
    <div className="animus-preview" aria-label="Animus AI reasoning engine visualization">
      <svg viewBox="0 0 480 320" className="animus-preview__svg">
        <defs>
          <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(212,160,23,0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dot grid background */}
        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 16 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={30 + col * 28}
              cy={20 + row * 28}
              r="0.6"
              fill="rgba(245,240,235,0.08)"
            />
          ))
        )}

        {/* Connection lines */}
        <line x1="120" y1="80" x2="240" y2="160" className="animus-line" />
        <line x1="360" y1="80" x2="240" y2="160" className="animus-line" />
        <line x1="90" y1="240" x2="240" y2="160" className="animus-line" />
        <line x1="390" y1="240" x2="240" y2="160" className="animus-line" />
        <line x1="120" y1="80" x2="90" y2="240" className="animus-line" style={{ opacity: 0.06 }} />
        <line x1="360" y1="80" x2="390" y2="240" className="animus-line" style={{ opacity: 0.06 }} />

        {/* Traveling data pulses */}
        <circle r="2.5" className="animus-pulse">
          <animateMotion dur="3s" repeatCount="indefinite" path="M120,80 L240,160" />
        </circle>
        <circle r="2.5" className="animus-pulse">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M360,80 L240,160" />
        </circle>
        <circle r="2" className="animus-pulse">
          <animateMotion dur="4s" repeatCount="indefinite" path="M90,240 L240,160" />
        </circle>
        <circle r="2" className="animus-pulse">
          <animateMotion dur="3.8s" repeatCount="indefinite" path="M390,240 L240,160" />
        </circle>

        {/* Node: Markets (top-left) */}
        <g className="animus-node animus-node--1">
          <circle cx="120" cy="80" r="24" className="animus-node__ring" />
          <path d="M112,86 L116,78 L120,82 L124,74 L128,80" fill="none" stroke="rgba(212,160,23,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="120" y="114" textAnchor="middle" className="animus-node__label">Markets</text>
        </g>

        {/* Node: Research (top-right) */}
        <g className="animus-node animus-node--2">
          <circle cx="360" cy="80" r="24" className="animus-node__ring" />
          <rect x="352" y="72" width="16" height="16" rx="2" fill="none" stroke="rgba(212,160,23,0.7)" strokeWidth="1.2" />
          <line x1="355" y1="78" x2="365" y2="78" stroke="rgba(212,160,23,0.4)" strokeWidth="1" />
          <line x1="355" y1="82" x2="363" y2="82" stroke="rgba(212,160,23,0.4)" strokeWidth="1" />
          <text x="360" y="114" textAnchor="middle" className="animus-node__label">Research</text>
        </g>

        {/* Node: Memory (bottom-left) */}
        <g className="animus-node animus-node--3">
          <circle cx="90" cy="240" r="24" className="animus-node__ring" />
          <circle cx="90" cy="237" r="8" fill="none" stroke="rgba(212,160,23,0.7)" strokeWidth="1.2" />
          <path d="M82,243 Q90,248 98,243" fill="none" stroke="rgba(212,160,23,0.7)" strokeWidth="1.2" />
          <text x="90" y="274" textAnchor="middle" className="animus-node__label">Memory</text>
        </g>

        {/* Node: Signals (bottom-right) */}
        <g className="animus-node animus-node--4">
          <circle cx="390" cy="240" r="24" className="animus-node__ring" />
          <path d="M383,240 L390,233 L397,240 L390,247 Z" fill="none" stroke="rgba(212,160,23,0.7)" strokeWidth="1.2" />
          <circle cx="390" cy="240" r="2" fill="rgba(212,160,23,0.6)" />
          <text x="390" y="274" textAnchor="middle" className="animus-node__label">Signals</text>
        </g>

        {/* Central reasoning hub */}
        <circle cx="240" cy="160" r="50" fill="url(#hub-glow)" />
        <circle cx="240" cy="160" r="34" className="animus-hub__ring" />
        <circle cx="240" cy="160" r="28" className="animus-hub__core" />
        <text x="240" y="156" textAnchor="middle" className="animus-hub__label">Reasoning</text>
        <text x="240" y="170" textAnchor="middle" className="animus-hub__sublabel">Engine</text>

        {/* Floating insight card */}
        <g className="animus-insight" filter="url(#soft-glow)">
          <rect x="175" y="270" width="130" height="30" rx="6" className="animus-insight__bg" />
          <circle cx="192" cy="285" r="3.5" className="animus-insight__dot" />
          <text x="205" y="289" className="animus-insight__text">Insight ready</text>
        </g>
      </svg>
    </div>
  )
}
