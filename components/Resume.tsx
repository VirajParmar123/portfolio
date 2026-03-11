export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="section-label">05 — Resume</div>
      <h2 className="section-title reveal">Resume</h2>

      <div className="resume-layout reveal">
        <div className="resume-content">
          <div className="resume-icon-wrap">
            <i className="fas fa-file-alt" aria-hidden />
          </div>
          <p className="resume-desc">
            Download my resume for a concise overview of my experience, skills, and education.
          </p>
        </div>
        <div className="resume-connector" aria-hidden />
        <a
          href="/resume.pdf"
          download="Viraj Parmar - Resume.pdf"
          className="resume-cta"
        >
          <span className="resume-cta-icon">
            <i className="fas fa-download" />
          </span>
          <span className="resume-cta-text">Download Resume</span>
        </a>
      </div>
    </section>
  )
}
