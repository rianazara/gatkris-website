export default function CopilotDemo() {
  return (
    <div className="copilot-demo" aria-label="Microsoft Copilot demo">
      <div className="copilot-demo__window">
        <div className="copilot-demo__toolbar">
          <div className="copilot-demo__dots"><span /><span /><span /></div>
          <div className="copilot-demo__title">Visual Studio Code — enterprise-rollout.ts</div>
        </div>
        <video
          className="demo-video"
          controls
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Demo of GitHub Copilot enterprise GTM strategy"
        >
          <source src="/ms-copilot-demo.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="demo-disclaimer">Demo recreation — not actual company data</p>
    </div>
  )
}
