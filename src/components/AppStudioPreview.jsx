function FileRow({ icon, name, meta }) {
  return (
    <div className="as-preview__file">
      <span className="as-preview__file-icon" aria-hidden="true">{icon}</span>
      <span className="as-preview__file-name">{name}</span>
      <span className="as-preview__file-meta">{meta}</span>
    </div>
  )
}

export default function AppStudioPreview() {
  return (
    <div className="as-preview" aria-label="Application Studio — a per-role application bundle">
      <div className="as-preview__strip">
        <div className="as-preview__strip-title">
          <span className="as-preview__pulse" aria-hidden="true" />
          Pipeline · Today
        </div>
        <div className="as-preview__pills">
          <span className="as-preview__pill as-preview__pill--pass">12 Fit</span>
          <span className="as-preview__pill as-preview__pill--skip">7 Skip</span>
        </div>
      </div>

      <div className="as-preview__folder">
        <div className="as-preview__folder-head">
          <span className="as-preview__folder-icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
          </span>
          <div className="as-preview__folder-path">
            <span className="as-preview__folder-date">2025-12-04</span>
            <span className="as-preview__folder-slash">/</span>
            <span className="as-preview__folder-co">Anthropic</span>
            <span className="as-preview__folder-slash">/</span>
            <span className="as-preview__folder-role">PM · Agents Platform</span>
          </div>
          <span className="as-preview__folder-badge">Ready</span>
        </div>

        <div className="as-preview__files">
          <FileRow icon="PDF" name="Gayatri Gopalakrishnan Resume.pdf" meta="1 page · tailored" />
          <FileRow icon="DOC" name="Gayatri Gopalakrishnan Resume.docx" meta="editable" />
          <FileRow icon="MD" name="Role Alignment Assessment.md" meta="fit · gaps · read" />
          <FileRow icon="MD" name="Outreach.md" meta="4 messages" />
          <FileRow icon="MD" name="Networking.md" meta="9 alumni" />
        </div>

        <div className="as-preview__footer">
          <span className="as-preview__simplify">
            <span className="as-preview__simplify-dot" aria-hidden="true" />
            Simplify · 90% autofilled — awaiting my confirm
          </span>
        </div>
      </div>
    </div>
  )
}
