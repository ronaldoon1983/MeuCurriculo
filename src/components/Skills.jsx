import useScrollReveal from './useScrollReveal'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiExpo,
  SiFirebase,
  SiNodedotjs,
  SiGit,
  SiVite,
  SiEslint,
  SiChartdotjs,
} from 'react-icons/si'

const skillCategories = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'React Native', icon: SiReact },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML/CSS', icon: SiHtml5 },
      { name: 'Expo', icon: SiExpo },
    ],
  },
  {
    name: 'Backend & Database',
    items: [
      { name: 'Firebase Auth', icon: SiFirebase },
      { name: 'Firestore', icon: SiFirebase },
      { name: 'NoSQL', icon: SiFirebase },
      { name: 'Node.js', icon: SiNodedotjs },
    ],
  },
  {
    name: 'Ferramentas',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'Vite', icon: SiVite },
      { name: 'EAS Build', icon: SiExpo },
      { name: 'ESLint', icon: SiEslint },
      { name: 'Chart.js', icon: SiChartdotjs },
    ],
  },
  {
    name: 'Cloud & Deploy',
    items: [
      { name: 'Firebase Hosting', icon: SiFirebase },
      { name: 'Firebase Auth', icon: SiFirebase },
      { name: 'Firestore Rules', icon: SiFirebase },
    ],
  },
]

const allSkills = skillCategories.flatMap(cat => cat.items)

export default function Skills() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="skills" ref={ref} className={`section${visible ? ' visible' : ''}`}>
      <p className="section-title">cat skills.txt</p>
      <h2 className="section-heading">Habilidades</h2>

      <div className="skills-carousel">
        <div className="skills-carousel-track">
          {[...allSkills, ...allSkills].map((skill, i) => {
            const Icon = skill.icon
            return (
              <div key={i} className="skills-carousel-item" title={skill.name}>
                <Icon />
                <span>{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div key={cat.name} className="skill-category" style={{ '--i': i }}>
            <h3 className="skill-cat-name">{cat.name}</h3>
            <div className="skill-items">
              {cat.items.map((skill) => {
                const Icon = skill.icon
                return (
                  <span key={skill.name} className="skill-item">
                    <Icon className="skill-icon" />
                    {skill.name}
                  </span>
                )
              })}
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
