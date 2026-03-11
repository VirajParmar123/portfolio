const jobs = [
  {
    date: 'April 2024 — May 2024',
    role: 'Web Developer',
    company: 'Prodigy InfoTech — Ahmedabad, India',
    desc: 'Developed and maintained full-stack web applications, integrating modern front-end frameworks with robust server-side logic. Collaborated on production-ready systems with a focus on performance and code quality.',
  },
  {
    date: 'June 2023',
    role: 'Web Developer Intern',
    company: 'Green Apex Solutions Limited — Ahmedabad, India',
    desc: 'Contributed to real-world web development projects, gaining hands-on exposure to professional workflows, agile development processes, and client-facing deliverables.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-label">03 — Experience</div>
      <h2 className="section-title experience-title reveal">Work History</h2>

      <div className="timeline">
        {jobs.map(({ date, role, company, desc }) => (
          <div className="timeline-item" key={role}>
            <div className="timeline-dot" />
            <div className="timeline-date">{date}</div>
            <div className="timeline-role">{role}</div>
            <div className="timeline-company">
              <i className="fas fa-building timeline-company-icon" />
              {company}
            </div>
            <div className="timeline-desc">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
