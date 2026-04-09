const projects = [
  {
    title: 'Julius Silvert B2B Ordering Platform',
    subtitle: 'B2B commerce frontend focused on performance and accessibility.',
    tags: ['React', 'Vite', 'UI'],
    highlights: [
      'Built a modular frontend with URL-based routing (hash navigation + query parameters) for efficient product navigation.',
      'Implemented account features: requisition lists, wishlist state, and Address Book CRUD with persistent client-side storage.',
      'Optimized re-renders and async state, achieving Lighthouse scores of 95+ Performance, 100 Accessibility, and 90+ SEO.',
    ],
    links: {
      live: 'https://juliussilvert-ckuy.vercel.app/',
      github: '',
    },
  },
  {
    title: 'Library Management System',
    subtitle: 'Spring Boot backend with RESTful CRUD APIs and MySQL.',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    highlights: [
      'Built RESTful CRUD APIs for books and users using Spring Boot and Spring Data JPA.',
      'Structured controllers → service layer → repository (JPA) for clean, testable architecture.',
      'Optimized queries with indexing to improve response times.',
    ],
    links: {
      live: '',
      github: '',
    },
  },
  {
    title: 'Cloud Infrastructure Deployment Pipeline',
    subtitle: 'Containerized deployment on AWS EC2 with automated CI/CD.',
    tags: ['AWS', 'Docker', 'CI/CD'],
    highlights: [
      'Designed and deployed a containerized web application using Docker and AWS EC2.',
      'Implemented GitHub Actions CI/CD to automate builds, testing, and deployments.',
      'Configured Nginx as a reverse proxy for better performance and traffic routing.',
    ],
    links: {
      live: '',
      github: '',
    },
  },
  {
    title: 'Nivas Sathi Hostel Finder',
    subtitle: 'Full-stack platform with location search and personalized recommendations.',
    tags: ['Full-Stack', 'REST APIs', 'Google Maps API'],
    highlights: [
      'Built a search and comparison platform for hostel accommodations with location-based filtering.',
      'Integrated an AI-powered recommendation assistant to personalize suggestions from user preferences.',
      'Added payment API integration to enable seamless booking transactions.',
    ],
    links: {
      live: '',
      github: '',
    },
  },
  {
    title: 'Student Database Management System',
    subtitle: 'Normalized relational database with procedures, triggers, and analytics.',
    tags: ['SQL', 'Database Design', 'Performance'],
    highlights: [
      'Designed a normalized schema with 13 tables and 10K+ records for academic management workflows.',
      'Implemented stored procedures, triggers, and transactional operations for reliable data changes.',
      'Optimized indexing strategies to achieve ~15× faster query performance and built reporting views.',
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

