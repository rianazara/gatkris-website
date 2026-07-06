export default function CopilotDemo() {
  return (
    <div className="copilot-demo" aria-label="Microsoft Copilot enterprise GTM strategy visualization">
      <div className="copilot-demo__window">
        <div className="copilot-demo__toolbar">
          <div className="copilot-demo__dots"><span /><span /><span /></div>
          <div className="copilot-demo__title">Visual Studio Code — enterprise-rollout.ts</div>
        </div>
        <div className="copilot-demo__body">
          <div className="copilot-demo__sidebar">
            <div className="copilot-demo__file copilot-demo__file--active">rollout-strategy.ts</div>
            <div className="copilot-demo__file">adoption-metrics.ts</div>
            <div className="copilot-demo__file">change-mgmt-plan.ts</div>
            <div className="copilot-demo__file">launch-sequence.ts</div>
          </div>
          <div className="copilot-demo__editor">
            <Line n="1" kw="interface" text=" RolloutPhase {" />
            <Line n="2" text='  name: string;' />
            <Line n="3" text='  targetOrgs: string[];' />
            <Line n="4" text='  adoptionMetrics: KPI[];' />
            <Line n="5" kw="}" />
            <Line n="6" />
            <Line n="7" kw="const" text=" phase2: RolloutPhase = {" />
            <Line n="8" text={`  name: "Enterprise-wide Copilot",`} />
            <Line n="9" text={`  targetOrgs: ["Engineering", "Sales", "Support"],`} />
            <Line n="10" ghost='  adoptionMetrics: trackDAU("copilot"),' />
            <Line n="11" ghost='  changeMgmt: buildPlaybook(phase2),' />
            <Line n="12" ghost='  rolloutDate: scheduleWave("Q2-2024")' />
            <Line n="13" text="};" />
          </div>
          <div className="copilot-demo__chat">
            <div className="copilot-demo__chat-hdr">
              <span className="copilot-demo__spark">✦</span> Copilot Chat
            </div>
            <div className="copilot-demo__msg copilot-demo__msg--user">
              How should we sequence Phase 2 enterprise rollout?
            </div>
            <div className="copilot-demo__msg copilot-demo__msg--ai">
              Based on adoption data: 1) Expand to engineering orgs with highest code volume, 2) Layer in change-management training, 3) Track DAU + code-acceptance rate as gating metrics for org-wide rollout.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Line({ n, kw, text, ghost }) {
  if (!n) return <div className="copilot-demo__line" />
  return (
    <div className={`copilot-demo__line${ghost ? ' copilot-demo__line--ghost' : ''}`}>
      <span className="copilot-demo__ln">{n}</span>
      {ghost ? (
        <span className="copilot-demo__ghost">{ghost}</span>
      ) : (
        <>
          {kw && <span className="copilot-demo__kw">{kw}</span>}
          {text && <span>{text}</span>}
        </>
      )}
    </div>
  )
}
