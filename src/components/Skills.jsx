const skillCategories = [
  {
    name: 'Frontend',
    items: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Expo'],
  },
  {
    name: 'Backend & Database',
    items: ['Firebase Auth', 'Firestore', 'NoSQL', 'Node.js'],
  },
  {
    name: 'Ferramentas',
    items: ['Git', 'Vite', 'EAS Build', 'ESLint', 'Chart.js'],
  },
  {
    name: 'Cloud & Deploy',
    items: ['Firebase Hosting', 'Firebase Auth', 'Firestore Security Rules'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-title">cat skills.txt</p>
      <h2 className="section-heading">Habilidades</h2>

      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.name} className="skill-category">
            <h3 className="skill-cat-name">{cat.name}</h3>
            <div className="skill-items">
              {cat.items.map((skill) => (
                <span key={skill} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-bar">
        <div className="skills-bar-label">
          <span>$ Linhas de código escritas</span>
          <span className="skills-count" data-target="15000">0</span>
        </div>
        <div className="skills-bar-track">
          <div className="skills-bar-fill" />
        </div>
      </div>
    </section>
  )
}
