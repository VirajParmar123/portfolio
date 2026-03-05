export default function About() {
  return (
    <section id="about">
      <div className="section-label">01 — About</div>
      <h2 className="section-title reveal">Who I Am</h2>

      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            I&apos;m a <em>Computer Science Master&apos;s student</em> at Rowan University
            with a deep passion for building systems that are not just functional — but
            reliable, scalable, and elegant under the hood.
          </p>
          <p>
            My work spans the full lifecycle: writing robust <em>RESTful APIs</em>,
            containerizing services with <em>Docker</em>, orchestrating deployments on{' '}
            <em>AWS</em>, and automating everything through <em>CI/CD pipelines</em> via
            GitHub Actions.
          </p>
          <p>
            I love bridging the gap between development and operations — not just
            building, but <em>deploying, monitoring, and optimizing</em> systems in
            real-world production environments.
          </p>

          <div className="stats-row">
            {[
              { num: '2+', label: 'Years Coding' },
              { num: '1',  label: 'GCP Cert' },
              { num: '∞',  label: 'Curiosity' },
            ].map(({ num, label }) => (
              <div className="stat" key={label}>
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <div className="cert-badge">
            <i className="fab fa-google" />
            <div>
              <div className="cert-name">Google Cloud Certified</div>
              <div className="cert-sub">Professional Data Engineer</div>
            </div>
          </div>

          <div style={{ marginTop: '44px' }}>
            <div className="section-label" style={{ marginBottom: '20px' }}>
              Currently Exploring
            </div>
            <div className="skills-cloud">
              {[
                { icon: 'fas fa-network-wired', label: 'Distributed Systems' },
                { icon: 'fas fa-chart-line',    label: 'System Performance' },
                { icon: 'fas fa-robot',          label: 'MLOps Pipelines' },
                { icon: 'fas fa-shield-alt',     label: 'Cloud Security' },
                { icon: 'fas fa-cube',           label: 'Service Mesh' },
              ].map(({ icon, label }) => (
                <span className="skill-chip" key={label}>
                  <i className={icon} /> {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
