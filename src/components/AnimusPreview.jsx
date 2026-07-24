export default function AnimusPreview() {
  return (
    <div className="animus-preview" aria-label="Archived knowledge graph visualization">
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

        <line x1="110" y1="80" x2="240" y2="160" className="animus-line" />
        <line x1="240" y1="55" x2="240" y2="160" className="animus-line" />
        <line x1="370" y1="80" x2="240" y2="160" className="animus-line" />
        <line x1="375" y1="250" x2="240" y2="160" className="animus-line" />
        <line x1="105" y1="250" x2="240" y2="160" className="animus-line" />
        <line x1="110" y1="80" x2="105" y2="250" className="animus-line" style={{ opacity: 0.05 }} />
        <line x1="370" y1="80" x2="375" y2="250" className="animus-line" style={{ opacity: 0.05 }} />

        <circle r="2.5" className="animus-pulse">
          <animateMotion dur="3s" repeatCount="indefinite" path="M110,80 L240,160" />
        </circle>
        <circle r="2.5" className="animus-pulse">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M240,55 L240,160" />
        </circle>
        <circle r="2" className="animus-pulse">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M370,80 L240,160" />
        </circle>
        <circle r="2" className="animus-pulse">
          <animateMotion dur="3.8s" repeatCount="indefinite" path="M375,250 L240,160" />
        </circle>
        <circle r="2" className="animus-pulse">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M105,250 L240,160" />
        </circle>

        {/* Node: Articles */}
        <g className="animus-node animus-node--1">
          <circle cx="110" cy="80" r="24" className="animus-node__ring" />
          <rect x="102" y="70" width="16" height="20" rx="2" fill="none" stroke="rgba(212,160,23,0.7)" strokeWidth="1.2" />
          <line x1="106" y1="76" x2="114" y2="76" stroke="rgba(212,160,23,0.4)" strokeWidth="1" />
          <line x1="106" y1="80" x2="112" y2="80" stroke="rgba(212,160,23,0.4)" strokeWidth="1" />
          <line x1="106" y1="84" x2="114" y2="84" stroke="rgba(212,160,23,0.4)" strokeWidth="1" />
          <text x="110" y="114" textAnchor="middle" className="animus-node__label">Articles</text>
        </g>

        {/* Node: Newsletters */}
        <g className="animus-node animus-node--2">
          <circle cx="240" cy="55" r="24" className="animus-node__ring" />
          <rect x="229" y="47" width="22" height="16" rx="2" fill="none" stroke="rgba(212,160,23,0.7)" strokeWidth="1.2" />
          <path d="M229,48 L240,56 L251,48" fill="none" stroke="rgba(212,160,23,0.5)" strokeWidth="1" />
          <text x="240" y="89" textAnchor="middle" className="animus-node__label">Newsletters</text>
        </g>

        {/* Node: YouTube */}
        <g className="animus-node animus-node--3">
          <circle cx="370" cy="80" r="24" className="animus-node__ring" />
          <rect x="359" y="71" width="22" height="18" rx="3" fill="none" stroke="rgba(212,160,23,0.7)" strokeWidth="1.2" />
          <path d="M366,75 L366,85 L376,80 Z" fill="rgba(212,160,23,0.5)" stroke="none" />
          <text x="370" y="114" textAnchor="middle" className="animus-node__label">YouTube</text>
        </g>

        {/* Node: Reels */}
        <g className="animus-node animus-node--4">
          <circle cx="375" cy="250" r="24" className="animus-node__ring" />
          <rect x="365" y="241" width="20" height="18" rx="3" fill="none" stroke="rgba(212,160,23,0.7)" strokeWidth="1.2" />
          <circle cx="375" cy="250" r="4" fill="none" stroke="rgba(212,160,23,0.5)" strokeWidth="1" />
          <circle cx="375" cy="250" r="1.5" fill="rgba(212,160,23,0.4)" />
          <text x="375" y="284" textAnchor="middle" className="animus-node__label">Reels</text>
        </g>

        {/* Node: Files */}
        <g className="animus-node animus-node--5">
          <circle cx="105" cy="250" r="24" className="animus-node__ring" />
          <path d="M105,241 L105,253" stroke="rgba(212,160,23,0.7)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M99,249 L105,255 L111,249" fill="none" stroke="rgba(212,160,23,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="97" y1="259" x2="113" y2="259" stroke="rgba(212,160,23,0.7)" strokeWidth="1.2" strokeLinecap="round" />
          <text x="105" y="284" textAnchor="middle" className="animus-node__label">Files</text>
        </g>

        {/* Central knowledge graph hub */}
        <circle cx="240" cy="160" r="50" fill="url(#hub-glow)" />
        <circle cx="240" cy="160" r="36" className="animus-hub__ring" />

        {/* Mini knowledge graph nodes inside hub */}
        <circle cx="228" cy="148" r="4" className="animus-kg-node" />
        <circle cx="252" cy="146" r="3.5" className="animus-kg-node animus-kg-node--2" />
        <circle cx="244" cy="164" r="5" className="animus-kg-node animus-kg-node--3" />
        <circle cx="225" cy="170" r="3" className="animus-kg-node animus-kg-node--4" />
        <circle cx="260" cy="165" r="3.5" className="animus-kg-node animus-kg-node--5" />
        <circle cx="238" cy="178" r="2.5" className="animus-kg-node animus-kg-node--6" />

        {/* Knowledge graph edges */}
        <line x1="228" y1="148" x2="252" y2="146" className="animus-kg-edge" />
        <line x1="228" y1="148" x2="244" y2="164" className="animus-kg-edge" />
        <line x1="252" y1="146" x2="244" y2="164" className="animus-kg-edge" />
        <line x1="244" y1="164" x2="225" y2="170" className="animus-kg-edge" />
        <line x1="244" y1="164" x2="260" y2="165" className="animus-kg-edge" />
        <line x1="252" y1="146" x2="260" y2="165" className="animus-kg-edge" />
        <line x1="225" y1="170" x2="238" y2="178" className="animus-kg-edge" />
        <line x1="244" y1="164" x2="238" y2="178" className="animus-kg-edge" />

        <text x="240" y="200" textAnchor="middle" className="animus-hub__sublabel">Knowledge Graph</text>

        {/* Floating status card */}
        <g className="animus-insight" filter="url(#soft-glow)">
          <rect x="172" y="272" width="136" height="30" rx="6" className="animus-insight__bg" />
          <circle cx="189" cy="287" r="3.5" className="animus-insight__dot" />
          <text x="202" y="291" className="animus-insight__text">Graph updated</text>
        </g>
      </svg>
    </div>
  )
}
