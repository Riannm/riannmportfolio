import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowRight, Code2, Database, Globe, Shield, Clock, MessageCircle, CheckCircle } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-tech-purple/20 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.1),transparent_50%)]" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>Riann </span>
                  <span className="text-primary animate-fade-in" style={{ animationDelay: "0.3s" }}>Matheus</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  Desenvolvedor Fullstack Especialista
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                Crio sites, sistemas web e soluções digitais que transformam ideias em produtos reais.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                Desenvolvi projetos para empresas de Belo Horizonte, incluindo sistemas SaaS multi-tenant, plataformas com mapas interativos,
                sistemas de agendamento e muito mais. Experiência prática desenvolvendo soluções reais e escaláveis,
                com foco em performance, segurança e experiência do usuário.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                <Button asChild size="lg" className="group smooth-transition hover-lift">
                  <NavLink to="/portfolio">
                    Ver Projetos
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </NavLink>
                </Button>
                <Button asChild variant="outline" size="lg" className="smooth-transition hover-lift">
                  <NavLink to="/contact">Solicitar Orçamento</NavLink>
                </Button>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="relative animate-fade-in lg:animate-scale-in-center animate-float">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-tech-purple rounded-3xl blur-3xl opacity-30" />
                <div className="relative bg-card-bg rounded-3xl p-2 border border-border">
                  <img
                    src={profilePhoto}
                    alt="Riann Matheus"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Social / Authority Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Projetos desenvolvidos para <span className="text-primary">empresas</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Incluindo plataformas completas, sistemas SaaS multi-tenant e ferramentas internas
                que aumentam produtividade e reduzem custos operacionais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">+12</div>
                <div className="text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-muted-foreground">Empresas Atendidas</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Satisfação Garantida</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que <span className="text-primary">eu faço?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Desenvolvimento de soluções digitais completas para empresas que buscam inovação e crescimento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sites & Landing Pages",
                description: "Desenvolvimento de sites institucionais e landing pages otimizadas para conversão, com design moderno, responsivo e SEO otimizado."
              },
              {
                title: "Sistemas Web Completos",
                description: "Construção de sistemas com login, CRUD, dashboards e administração completa, para automação de processos e controle de dados."
              },
              {
                title: "Soluções SaaS & Multi-tenant",
                description: "Desenvolvimento de plataformas SaaS escaláveis, onde cada cliente tem sua própria instância e configurações personalizadas."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 smooth-transition hover-lift animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que <span className="text-primary">me contratar?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diferenciais que me colocam acima da média no desenvolvimento web
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MessageCircle,
                title: "Comunicação Clara",
                description: "Explico tudo de forma simples e direta. Sem jargões técnicos desnecessários."
              },
              {
                icon: Clock,
                title: "Entregas no Prazo",
                description: "Comprometimento total com prazos e qualidade em todos os projetos."
              },
              {
                icon: CheckCircle,
                title: "Inglês Fluente",
                description: "Capacidade de se comunicar com clientes e documentação em inglês."
              },
              {
                icon: Shield,
                title: "Sistemas Complexos",
                description: "Experiência com arquitetura escalável, segurança e performance."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary/50 smooth-transition hover-lift animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologias & Habilidades</h2>
            <p className="text-muted-foreground">Ferramentas que uso para criar soluções profissionais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Frontend moderno",
                description: "React, Next.js, Tailwind e TypeScript — interfaces rápidas, responsivas e otimizadas para SEO.",
                skills: ["React", "Next.js", "TailwindCSS", "TypeScript", "HTML/CSS/JS"],
              },
              {
                icon: Database,
                title: "Backend escalável",
                description: "Node, Express, Supabase e MySQL — APIs seguras, banco de dados confiável e arquitetura robusta.",
                skills: ["Node.js", "Express", "MySQL", "Supabase", "APIs REST"],
              },
            {
              icon: Code2,
              title: "Outras skills",
              description: "WordPress, Git, SaaS, PWA — soluções completas para qualquer tipo de projeto.",
              skills: ["WordPress", "Git", "SaaS Development", "PWA", "Responsive Design", "API Integration"],
            },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 smooth-transition hover-lift animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <category.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 to-tech-purple/10 rounded-3xl p-10 border border-primary/20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Tem um projeto em <span className="text-primary">mente?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vamos conversar e transformar sua ideia em um produto digital real.
            </p>
            <Button size="lg" asChild>
              <NavLink to="/contact">
                Solicitar Orçamento
                <ArrowRight className="ml-2" size={20} />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
