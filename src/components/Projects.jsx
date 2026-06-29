const projects = [
  {
    name: 'Farmácia Hebrom',
    subtitle: 'Sistema de Gestão Farmacêutica',
    tags: ['React', 'Firebase', 'Chart.js', 'Firestore'],
    description: [
      'Dashboard completo com KPIs (receitas ativas, vencidas, consultas)',
      'Controle de receitas com validade de 60 dias e status automático (Regular / Alerta / Vencida)',
      'Agendamento de consultas e registro de queixas de saúde',
      'Gráfico Doughnut com proporção visual do status das receitas',
      'Tarefas diárias com checklist e barra de progresso',
      'Busca e filtros por nome e status',
    ],
    highlights: [
      'Prescription lifecycle tracking',
      'Daily task management',
      'Bulk data import',
    ],
  },
  {
    name: 'Sistema de Chamada',
    subtitle: 'App Mobile para Controle de Presença',
    tags: ['React Native', 'Expo', 'Firebase Auth', 'Firestore', 'PDF'],
    description: [
      'Autenticação com email/senha via Firebase Auth',
      'Controle de acesso por papel: Admin e Monitor',
      '16 eventos diários pré-definidos com pontuação',
      'Relatórios em PDF com compartimento nativo',
      'Cadastro em massa com diff e auditoria',
      'Painel administrativo com gerenciamento de usuários',
    ],
    highlights: [
      'Role-based access control',
      'PDF report generation',
      'Audit trail for operations',
    ],
  },
  {
    name: 'Firebase Auth & Database',
    subtitle: 'Sistema de Autenticação e Banco de Dados',
    tags: ['Firebase Auth', 'Firestore', 'NoSQL', 'Security Rules'],
    description: [
      'Registro e login com email e senha',
      'Recuperação de senha via email',
      'Verificação de unicidade de CPF no cadastro',
      'Hierarquia de usuários (admin/monitor) com regras de segurança',
      'Estrutura de collections otimizada para consultas',
      'Regras de segurança no Firestore para acesso por papel',
    ],
    highlights: [
      'Email/password authentication',
      'Role-based Firestore rules',
      'User management CRUD',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-title">ls -la ./projetos</p>
      <h2 className="section-heading">Projetos</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-header">
              <div className="project-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="project-filename">{project.name.toLowerCase().replace(/\s+/g, '-')}.jsx</span>
            </div>

            <div className="project-body">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-subtitle">{project.subtitle}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <ul className="project-list">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="project-highlights">
                {project.highlights.map((h) => (
                  <span key={h} className="highlight">{h}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
