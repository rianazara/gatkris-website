export default function ServiceNowDemo() {
  return (
    <div className="snow-demo" aria-label="ServiceNow Agent Workspace — annotated incident form and activity stream">
      <div className="snow-demo__browser">
        <div className="snow-demo__toolbar">
          <div className="snow-demo__dots"><span /><span /><span /></div>
          <div className="snow-demo__url">service-now.com/workspace/agent/record/INC0010001</div>
        </div>
        <div className="snow-ws">
          <div className="snow-ws__form">
            <div className="snow-ws__form-title">
              <span className="snow-ws__incident-badge">Email Server is down again</span>
              <span className="snow-ws__a11y-chip">WCAG 2.1 AA</span>
            </div>
            <div className="snow-ws__fields">
              <Field label="Caller" value="Aileen Mottern" />
              <Field label="State" value="In Progress" />
              <Field label="Category" value="Inquiry / Help" />
              <Field label="Impact" value="2 - Medium" />
              <Field label="Service" value="Email" />
              <Field label="Priority" value="2 - High" />
              <Field label="Config Item" value="MailServerUS" />
              <Field label="Assigned to" value="David Loo" />
              <Field label="Short description" value="Email Server is down again ..." wide />
            </div>
            <div className="snow-ws__legend">
              <span className="snow-fld__pin snow-fld__pin--orange"><span className="snow-fld__pin-dot" /> Owned</span>
              <span className="snow-ws__legend-note">— all field types</span>
            </div>
          </div>

          <div className="snow-ws__activity">
            <div className="snow-ws__activity-top">
              <span className="snow-ws__activity-header">Activity</span>
              <span className="snow-fld__pin snow-fld__pin--blue"><span className="snow-fld__pin-dot" /> Re-engineered</span>
            </div>

            <div className="snow-ws__compose">
              <div className="snow-ws__compose-tabs">
                <span className="snow-ws__compose-tab">Comments</span>
                <span className="snow-ws__compose-tab snow-ws__compose-tab--active">Work notes (Private)</span>
              </div>
              <div className="snow-ws__compose-editor">
                <span className="snow-ws__compose-text">Hey David, could you check what's wrong with the email server?</span>
              </div>
              <div className="snow-ws__compose-actions">
                <span className="snow-ws__compose-btn">Post Work notes</span>
              </div>
            </div>

            <div className="snow-ws__entries">
              <Entry type="Work Notes" name="Beth Anglin" time="11:03 AM" text="High priority. Immediate action on the email server outage." icon="note" />
              <Entry type="Comments" name="Aileen Mottern" time="10:50 AM" text="Email server is down again. Multiple users affected." icon="comment" />
              <Entry type="Field Changes" name="Beth Anglin" time="10:53 AM" text="Priority: 2-High was 3-Moderate" icon="field" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, wide }) {
  return (
    <div className={`snow-fld${wide ? ' snow-fld--wide' : ''}`}>
      <div className="snow-fld__top">
        <span className="snow-fld__label">{label}</span>
        <span className="snow-fld__pin snow-fld__pin--orange">
          <span className="snow-fld__pin-dot" />
          Owned
        </span>
      </div>
      <div className="snow-fld__input">
        <span className="snow-fld__value">{value}</span>
      </div>
    </div>
  )
}

function Entry({ type, name, time, text, icon }) {
  const icons = { note: '📝', comment: '💬', field: '🔄' }
  return (
    <div className="snow-ws__entry">
      <span className="snow-ws__entry-icon">{icons[icon]}</span>
      <div className="snow-ws__entry-body">
        <div className="snow-ws__entry-meta">
          <span className="snow-ws__entry-name">{name}</span>
          <span className="snow-ws__entry-type">{type}</span>
          <span className="snow-ws__entry-time">{time}</span>
        </div>
        <div className="snow-ws__entry-text">{text}</div>
      </div>
    </div>
  )
}
