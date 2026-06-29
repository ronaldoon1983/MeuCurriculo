import { useEffect, useState } from 'react'

const phrases = [
  'Desenvolvedor Full Stack',
  'React & React Native',
  'Firebase & Firestore',
  'Sistemas Web & Mobile',
]

export default function Hero() {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    let timeout

    if (!deleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 60)
    } else if (!deleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 30)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setPhraseIndex((phraseIndex + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-tag">&gt; init_portfolio.exe</div>
        <h1 className="hero-name">
          Ronaldo Oliveira<br />
          <span className="hero-sub">do Nascimento</span>
        </h1>
        <p className="hero-type">
          <span className="type-label">$ </span>
          {text}
          <span className="type-cursor">|</span>
        </p>
        <p className="hero-desc">
          Desenvolvedor focado em criar soluções completas — do backend ao mobile —
          usando React, React Native e Firebase.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            ver_projetos()
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('contact')}>
            contato()
          </button>
        </div>
        <div className="hero-status">
          <span className="status-dot" />
          <span>Disponível para novos projetos</span>
        </div>
      </div>
    </section>
  )
}
