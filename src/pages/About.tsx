import { GraduationCap, Globe, Award, Code } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Sobre <span className="text-primary">Mim</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Desenvolvedor especializado em soluções digitais para empresas
          </p>
        </div>

        {/* Main Bio */}
        <div className="bg-card rounded-2xl p-8 border border-border mb-12 animate-scale-in-center smooth-transition hover-lift">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Sou Riann Matheus, desenvolvedor web especializado na criação de sites profissionais e sistemas completos para empresas.
            Tenho 18 anos e formação técnica em Informática pelo Instituto Federal de Minas Gerais.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Sou apaixonado por tecnologia, inovação e por transformar ideias em produtos digitais que realmente funcionam.
            Meu foco é desenvolver soluções modernas, rápidas e escaláveis — sempre pensando no impacto real para o negócio.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Já trabalhei em projetos para empresas de Belo Horizonte, desenvolvi SaaS multi-tenant, sistemas de agendamento,
            plataformas com mapas interativos e outros produtos utilizados por clientes reais. Cada projeto que construo
            é pensado para ser sólido, bem estruturado e com excelente experiência do usuário.
            Busco sempre evoluir, explorando novas ferramentas, aprofundando arquitetura e aplicando as melhores práticas do mercado.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: GraduationCap,
              title: "Formação",
              description: "Técnico em Informática — Instituto Federal de Minas Gerais (IFMG)",
            },
            {
              icon: Code,
              title: "Especialidades",
              description: "Desenvolvimento Fullstack • SaaS & Arquitetura Multi-tenant • Sistemas com login, admin e CRUD",
            },
            {
              icon: Award,
              title: "Experiência",
              description: "Projetos reais em produção • Sistemas escaláveis e seguros • Soluções digitais sob medida para negócios",
            },
            {
              icon: Globe,
              title: "Idiomas",
              description: "Português (nativo) • Inglês (fluente) • Francês (básico)",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 smooth-transition hover-lift animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <item.icon className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-section-bg rounded-2xl p-8 border border-border animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-bold mb-6 text-center animate-fade-in">Stack Tecnológico</h2>
          
          <div className="space-y-6">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-lg font-semibold mb-3 text-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS", "TypeScript"].map((tech, i) => (
                  <span
                    key={tech}
                    className="bg-card px-4 py-2 rounded-lg border border-border text-sm smooth-transition hover:border-primary/50 hover:scale-105"
                    style={{ animationDelay: `${0.5 + i * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-lg font-semibold mb-3 text-primary">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "MySQL", "Supabase", "APIs REST"].map((tech, i) => (
                  <span
                    key={tech}
                    className="bg-card px-4 py-2 rounded-lg border border-border text-sm smooth-transition hover:border-primary/50 hover:scale-105"
                    style={{ animationDelay: `${0.7 + i * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <h3 className="text-lg font-semibold mb-3 text-primary">Ferramentas & Outros</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "WordPress", "SaaS Development", "Arquitetura Multi-tenant", "PWA", "Design Responsivo", "SEO", "Integração de APIs", "Modelagem de Banco"].map((tech, i) => (
                  <span
                    key={tech}
                    className="bg-card px-4 py-2 rounded-lg border border-border text-sm smooth-transition hover:border-primary/50 hover:scale-105"
                    style={{ animationDelay: `${0.9 + i * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <h3 className="text-lg font-semibold mb-3 text-center">Diferenciais</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Arquitetura escalável e bem planejada", "Código limpo, organizado e documentado", "Foco total em performance e experiência do usuário", "Experiência prática com projetos reais", "Desenvolvimento de sites profissionais e responsivos", "Comunicação clara e inglês fluente para documentação e clientes"].map((diff, i) => (
                <span
                  key={diff}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-lg border border-primary/30 font-medium smooth-transition hover:scale-105 hover:bg-primary/20"
                  style={{ animationDelay: `${1.1 + i * 0.05}s` }}
                >
                  {diff}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
