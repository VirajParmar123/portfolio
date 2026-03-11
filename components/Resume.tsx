export default function Resume() {
  return (
    <section id="resume">
      <div className="section-label">05 — Resume</div>
      <h2 className="section-title reveal">Resume</h2>

      <div className="resume-inner reveal">
        <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 2, marginBottom: '28px', maxWidth: '560px' }}>
          Download my resume for a concise overview of my experience, skills, and education.
        </p>
        <a
          href="/resume.pdf"
          download="Viraj_Parmar_Resume.pdf"
          className="btn btn-gold"
        >
          <i className="fas fa-file-pdf" /> Download Resume
        </a>
      </div>
    </section>
  )
}
