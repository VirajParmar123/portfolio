const jobs = [
  {
    date: 'February 2024 — March 2025',
    role: 'Full-Stack Developer',
    company: 'Green Apex Solutions Ltd. — Ahmedabad, GJ',
    desc: 'Led development of a scalable POS SaaS platform by designing backend services and RESTful APIs for restaurant operations and real-time order processing. Improved scalability and performance by migrating from Realm to MongoDB with efficient data models and indexing. Built backend-driven features like role-based dashboards, order management, and reporting tools with maintainable architecture.',
  },
  {
    date: 'November 2023 — January 2024',
    role: 'Front-End Developer Intern',
    company: 'Prodigy InfoTech — Remote',
    desc: 'Developed responsive UI components using HTML, CSS, and JavaScript to improve mobile usability and reduce layout inconsistencies. Integrated REST APIs for dynamic content rendering and smoother interactions. Reduced UI bugs through improved debugging workflows and clean-code practices while collaborating with mentors on UI/UX decisions aligned with accessibility standards.',
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
