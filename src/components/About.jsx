import useScrollReveal from './useScrollReveal'

export default function About() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="about" ref={ref} className={`section${visible ? ' visible' : ''}`}>
      <p className="section-title">whoami</p>
      <h2 className="section-heading">Sobre Mim</h2>

      <div className="about-grid">
        <div className="about-text">
          <p>
            Desenvolvedor full stack com experiência em React, React Native e Firebase.
            Trabalho criando sistemas completos — desde o banco de dados até a interface
            do usuário — para organizações reais.
          </p>
          <br />
          <p>
            Meus projetos incluem um sistema de gestão farmacêutica com dashboard,
            controle de receitas e agendamento de consultas, além de um aplicativo
            mobile para controle de presença com autenticação, relatórios PDF e
            hierarquia de usuários.
          </p>
          <br />
          <p>
            Tenho domínio de Firebase (Auth, Firestore, Hosting), banco de dados
            NoSQL, e todo o ecossistema React para entregar soluções funcionais
            e escaláveis.
          </p>
        </div>

        <div className="about-terminal">
          <div className="terminal-header">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">about.sh</span>
          </div>
          <div className="terminal-body">
            <p><span className="terminal-prompt">$</span> <span className="terminal-cmd">cat</span> sobre.json</p>
            <p className="terminal-output">{'{'}</p>
            <p className="terminal-output">  "nome": "Ronaldo Oliveira do Nascimento",</p>
            <p className="terminal-output">  "role": "Desenvolvedor Full Stack",</p>
            <p className="terminal-output">  "stack": ["React", "React Native", "Firebase"],</p>
            <p className="terminal-output">  "localizacao": "Brasil",</p>
            <p className="terminal-output">  "status": "Disponível"</p>
            <p className="terminal-output">{'}'}</p>
            <p className="terminal-cursor">|</p>
          </div>
        </div>
      </div>
    </section>
  )
}
