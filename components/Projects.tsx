const projects = [
  {
    title: 'Julius Silvert',
    subtitle: 'Foodservice & restaurant supply website (live demo).',
    tags: ['Next.js', 'Vercel', 'UI'],
    highlights: [
      'Modern, responsive UI built for a smooth browsing experience.',
      'Optimized for fast load times and clean navigation.',
      'Deployed on Vercel for reliable hosting.',
    ],
    links: {
      live: 'https://juliussilvert-ckuy.vercel.app/',
      github: '',
    },
  },
  {
    title: 'Project Two',
    subtitle: 'Short one-line description of what it does.',
    tags: ['React', 'Node.js', 'MongoDB'],
    highlights: [
      'Designed and implemented key user flows end-to-end.',
      'Added validation, error handling, and edge-case coverage.',
      'Optimized loading time and perceived performance.',
    ],
    links: {
      live: '',
      github: '',
    },
  },
  {
    title: 'Project Three',
    subtitle: 'Short one-line description of what it does.',
    tags: ['AWS', 'Docker', 'CI/CD'],
    highlights: [
      'Containerized services and improved local developer experience.',
      'Automated builds and deployments with repeatable pipelines.',
      'Hardened configurations and improved observability.',
    ],
    links: {
      live: '',
      github: '',
    },
  },
] as const

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-label">06 — Projects</div>
      <h2 className="section-title reveal">Featured Work</h2>

      <div className="projects-grid reveal">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            <div className="project-head">
              <div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
              </div>

              <div className="project-links" aria-label={`${p.title} links`}>
                {p.links.github ? (
                  <a
                    className="project-link"
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} GitHub`}
                  >
                    <i className="fab fa-github" />
                  </a>
                ) : (
                  <span className="project-link project-link-disabled" aria-hidden="true">
                    <i className="fab fa-github" />
                  </span>
                )}

                {p.links.live ? (
                  <a
                    className="project-link"
                    href={p.links.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} Live demo`}
                  >
                    <i className="fas fa-arrow-up-right-from-square" />
                  </a>
                ) : (
                  <span className="project-link project-link-disabled" aria-hidden="true">
                    <i className="fas fa-arrow-up-right-from-square" />
                  </span>
                )}
              </div>
            </div>

            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="project-tag">
                  {t}
                </span>
              ))}
            </div>

            <ul className="project-highlights">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

