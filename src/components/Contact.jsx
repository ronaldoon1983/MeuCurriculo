import useScrollReveal from './useScrollReveal'

export default function Contact() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="contact" ref={ref} className={`section${visible ? ' visible' : ''}`}>
      <p className="section-title">./contato.sh</p>
      <h2 className="section-heading">Contato</h2>

      <p className="contact-intro">
        Quer conversar sobre um projeto, oportunidade ou trocar uma ideia?
        <br />
        Me mande uma mensagem.
      </p>

      <div className="contact-links">
        <a
          href="https://github.com/ronaldoon1983"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <span className="contact-icon">&gt;_</span>
          <span className="contact-label">GitHub</span>
          <span className="contact-value">@ronaldoon1983</span>
        </a>

        <a
          href="mailto:ronaldoon1983@gmail.com"
          className="contact-card"
        >
          <span className="contact-icon">@</span>
          <span className="contact-label">Email</span>
          <span className="contact-value">ronaldoon1983@gmail.com</span>
        </a>
      </div>

      <div className="contact-terminal">
        <div className="terminal-header">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
          <span className="terminal-title">contato.sh</span>
        </div>
        <div className="terminal-body">
          <p><span className="terminal-prompt">$</span> <span className="terminal-cmd">curl</span> -X POST ronaldo.dev/contato \</p>
          <p className="terminal-indent">-d '{"{"}assunto: "Vamos trabalhar juntos!"{"}"}'</p>
          <p className="terminal-output success">HTTP/1.1 200 OK</p>
          <p className="terminal-output">{"{"}</p>
          <p className="terminal-output">  "mensagem": "Obrigado pelo contato! Retorno em breve.",</p>
          <p className="terminal-output">  "status": "mensagem enviada"</p>
          <p className="terminal-output">{"}"}</p>
          <p className="terminal-cursor">|</p>
        </div>
      </div>

      <p className="contact-footer">
        <span className="terminal-prompt">$</span> echo "Feito com React + Vite + Matrix theme"
      </p>
    </section>
  )
}
