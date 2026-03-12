export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-label">06 — Contact</div>
      <h2 className="section-title reveal">Let&apos;s Connect</h2>

      <div className="contact-inner reveal">
        {/* Left — message & contact */}
        <div className="contact-left">
          <p className="contact-intro">
            I&apos;m actively seeking{' '}
            <span className="contact-highlight">Summer 2026 internship opportunities</span>{' '}
            in Software Engineering, Cloud Engineering, or DevOps. Let&apos;s build something great together.
          </p>

          <div className="contact-list">
            <a href="mailto:parmarviraj.m04@gmail.com" className="contact-link">
              <span className="contact-link-icon"><i className="fas fa-envelope" /></span>
              <span className="contact-link-text">parmarviraj.m04@gmail.com</span>
            </a>
            <a href="tel:+1234567890" className="contact-link">
              <span className="contact-link-icon"><i className="fas fa-phone" /></span>
              <span className="contact-link-text">+1 (856) 347-6808</span>
            </a>
            <a
              href="https://www.instagram.com/viraj_parmar_05/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon"><i className="fab fa-instagram" /></span>
              <span className="contact-link-text">@viraj_parmar_05
              </span>
            </a>
          </div>

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/virajparmar-716209279"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://github.com/VirajParmar123" target="_blank" rel="noreferrer" className="contact-social" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.instagram.com/viraj_parmar_05/"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>

        {/* Right — terminal */}
        <div className="contact-terminal-wrap">
          <div className="terminal-card">
            <div className="terminal-topbar">
              <span className="term-dot term-dot-red" />
              <span className="term-dot term-dot-yellow" />
              <span className="term-dot term-dot-green" />
              <span className="term-title">viraj@portfolio ~</span>
            </div>
            <div className="terminal-body">
              <div className="term-line"><span className="t-prompt">$</span> whoami</div>
              <div className="t-out">Viraj Parmar — MS CS @ Rowan University</div>

              <div className="term-line"><span className="t-prompt">$</span> cat skills.txt</div>
              <div className="t-out">Cloud ☁️ · DevOps 🔧 · Full Stack 🌐</div>

              <div className="term-line"><span className="t-prompt">$</span> cat location.txt</div>
              <div className="t-out">📍 Glassboro, New Jersey, USA</div>

              <div className="term-line"><span className="t-prompt">$</span> echo $STATUS</div>
              <div className="t-success">✦ Open to Summer 2026 internships</div>

              <div className="term-line">
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
