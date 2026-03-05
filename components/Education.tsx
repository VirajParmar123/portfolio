const degrees = [
  {
    icon: 'fas fa-graduation-cap',
    degree: 'Master of Science — Computer Science',
    school: 'Rowan University, New Jersey',
    year: 'Sep 2025 — May 2027',
  },
  {
    icon: 'fas fa-microchip',
    degree: 'Bachelor of Technology — Computer Engineering',
    school: 'Indus University, Ahmedabad',
    year: 'Jul 2021 — Jul 2025',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="section-label">04 — Education</div>
      <h2 className="section-title reveal">Academic Path</h2>

      <div className="edu-cards">
        {degrees.map(({ icon, degree, school, year }) => (
          <div className="edu-card reveal" key={degree}>
            <div className="edu-icon">
              <i className={icon} />
            </div>
            <div className="edu-degree">{degree}</div>
            <div className="edu-school">
              <i className="fas fa-map-marker-alt" style={{ marginRight: '6px' }} />
              {school}
            </div>
            <div className="edu-year">{year}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
