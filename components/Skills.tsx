const skillGroups = [
  {
    label: 'Cloud & DevOps',
    chips: [
      { icon: 'fab fa-aws',        label: 'AWS EC2 / S3' },
      { icon: 'fab fa-google',     label: 'Google Cloud Platform' },
      { icon: 'fab fa-docker',     label: 'Docker' },
      { icon: 'fas fa-dharmachakra', label: 'Kubernetes' },
      { icon: 'fab fa-github',     label: 'GitHub Actions CI/CD' },
      { icon: 'fas fa-terminal',   label: 'Linux / Bash' },
    ],
  },
  {
    label: 'Languages',
    chips: [
      { icon: 'fab fa-java',    label: 'Java' },
      { icon: 'fab fa-python',  label: 'Python' },
      { icon: 'fab fa-js',      label: 'JavaScript' },
      { icon: 'fas fa-code',    label: 'TypeScript' },
    ],
  },
  {
    label: 'Web & Backend',
    chips: [
      { icon: 'fab fa-react',          label: 'React' },
      { icon: 'fab fa-node-js',        label: 'Node.js / Express' },
      { icon: 'fas fa-leaf',           label: 'MongoDB' },
      { icon: 'fas fa-database',       label: 'SQL' },
      { icon: 'fas fa-exchange-alt',   label: 'REST APIs' },
      { icon: 'fas fa-fire',           label: 'Firebase' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-label">02 — Skills</div>
      <h2 className="section-title skills-title reveal">Tech Arsenal</h2>

      <div className="skills-stack">
        {skillGroups.map(({ label, chips }) => (
          <div key={label} className="skills-row reveal">
            <div className="skills-row-label">
              {label}
            </div>
            <div className="skills-cloud">
              {chips.map(({ icon, label: chipLabel }) => (
                <span className="skill-chip" key={chipLabel}>
                  <i className={icon} /> {chipLabel}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
