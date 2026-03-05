export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">05 — Contact</div>
      <h2 className="section-title reveal">Let&apos;s Connect</h2>

      <div className="contact-inner">
        {/* Left column */}
        <div className="reveal">
          <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 2, marginBottom: '28px' }}>
            I&apos;m actively seeking{' '}
            <strong style={{ color: 'var(--gold)' }}>Summer 2026 internship opportunities</strong>{' '}
            in Software Engineering, Cloud Engineering, or DevOps. Let&apos;s build something
            great together.
          </p>

          {/* Contact rows */}
          <div className="contact-items">
            <a href="mailto:parmarviraj.m04@gmail.com" className="contact-item">
              <i className="fas fa-envelope" />
              parmarviraj.m04@gmail.com
            </a>

            {/* ← Update with your real phone number */}
            <a href="tel:+1234567890" className="contact-item">
              <i className="fas fa-phone" />
              +1 (234) 567-890
              <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '1px' }}>
                &nbsp;(update number)
              </span>
            </a>

            {/* ← Update with your real Instagram handle */}
            <a
              href="https://www.instagram.com/virajparmar"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <i className="fab fa-instagram" />
              @virajparmar
              <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '1px' }}>
                &nbsp;(update handle)
              </span>
            </a>
          </div>

          {/* Social buttons */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/virajparmar-716209279"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
              <i className="fab fa-github" /> GitHub
            </a>
            <a
              href="https://www.instagram.com/virajparmar"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram" /> Instagram
            </a>
          </div>
        </div>

        {/* Right column — terminal */}
        <div className="reveal">
          <div className="terminal-card">
            <div className="terminal-topbar">
              <span style={{ width:11, height:11, borderRadius:'50%', background:'#ff5f56', display:'inline-block' }} />
              <span style={{ width:11, height:11, borderRadius:'50%', background:'#ffbd2e', display:'inline-block', marginLeft:7 }} />
              <span style={{ width:11, height:11, borderRadius:'50%', background:'#27c93f', display:'inline-block', marginLeft:7 }} />
              <span style={{ fontSize:'0.6rem', color:'var(--muted)', marginLeft:14, letterSpacing:1 }}>
                viraj@portfolio ~
              </span>
            </div>
            <div className="terminal-body">
              <div><span className="t-prompt">$</span> whoami</div>
              <div className="t-out">Viraj Parmar — MS CS @ Rowan University</div>

              <div style={{ marginTop: 10 }}><span className="t-prompt">$</span> cat skills.txt</div>
              <div className="t-out">Cloud ☁️ · DevOps 🔧 · Full Stack 🌐</div>

              <div style={{ marginTop: 10 }}><span className="t-prompt">$</span> cat location.txt</div>
              <div className="t-out">📍 Glassboro, New Jersey, USA</div>

              <div style={{ marginTop: 10 }}><span className="t-prompt">$</span> echo $STATUS</div>
              <div className="t-success">✦ Open to Summer 2026 internships</div>

              <div style={{ marginTop: 10 }}>
                <span className="t-prompt">$</span>
                <span className="t-blink" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
