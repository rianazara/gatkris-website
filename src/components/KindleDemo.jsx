export default function KindleDemo() {
  return (
    <div className="amz-demo" aria-label="Amazon Kindle Book Sample experience">
      <div className="amz-demo__browser">
        <div className="amz-demo__toolbar">
          <div className="amz-demo__dots"><span /><span /><span /></div>
          <div className="amz-demo__url">amazon.com/Co-Intelligence-Living-Working-Ethan-Mollick/dp/B0CM8TRWK3</div>
        </div>
        <video
          className="amz-demo__video"
          controls
          loop
          muted
          playsInline
          preload="metadata"
          poster=""
          aria-label="Demo of the Amazon Kindle book sampling experience"
        >
          <source src="/amazon-kindle-demo.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="demo-disclaimer">Recreated from publicly available information to illustrate the work. No proprietary data is shown.</p>
    </div>
  )
}
