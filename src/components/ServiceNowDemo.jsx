import { useState, useRef } from 'react'

export default function ServiceNowDemo() {
  const [showAnnotations, setShowAnnotations] = useState(false)
  const videoRef = useRef(null)

  function handleEnded() {
    setShowAnnotations(true)
  }

  function handleReplay() {
    setShowAnnotations(false)
    videoRef.current.currentTime = 0
    videoRef.current.play()
  }

  function handlePlay() {
    setShowAnnotations(false)
  }

  return (
    <div className="snow-demo" aria-label="ServiceNow Agent Workspace demo">
      <div className="snow-demo__browser">
        <div className="snow-demo__toolbar">
          <div className="snow-demo__dots"><span /><span /><span /></div>
          <div className="snow-demo__url">service-now.com/workspace/agent/record/INC0010001</div>
        </div>
        <div className="snow-demo__player">
          <video
            ref={videoRef}
            className="demo-video"
            controls
            muted
            playsInline
            preload="metadata"
            onEnded={handleEnded}
            onPlay={handlePlay}
            aria-label="Demo of ServiceNow Agent Workspace incident form and activity stream"
          >
            <source src="/servicenow-demo.mp4" type="video/mp4" />
          </video>

          {showAnnotations && (
            <div className="snow-overlay snow-overlay--clear" aria-label="Annotated view of components I built">
              <div className="snow-overlay__badge snow-overlay__badge--left snow-overlay__badge--orange snow-overlay__anim--1">
                <span className="snow-overlay__dot" />
                Owned — All form field types
              </div>
              <div className="snow-overlay__badge snow-overlay__badge--left-bottom snow-overlay__badge--green snow-overlay__anim--2">
                <span className="snow-overlay__dot" />
                WCAG 2.1 AAA Compliant
              </div>
              <div className="snow-overlay__badge snow-overlay__badge--right snow-overlay__badge--blue snow-overlay__anim--3">
                <span className="snow-overlay__dot" />
                Re-engineered — Activity Stream
              </div>
              <button className="snow-overlay__replay" onClick={handleReplay} aria-label="Replay video">
                ▶ Replay
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="demo-disclaimer">Demo recreation — not actual company data</p>
    </div>
  )
}
