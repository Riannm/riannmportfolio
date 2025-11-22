import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Academia Magis — Plataforma Institucional Completa",
      summary: "Site institucional + painel administrativo com blog, CRUD e dashboard. Desenvolvido para posicionar a Magis Academia de forma profissional e reforçar sua marca na internet.",
      challenge: "Criar uma plataforma robusta que permitisse gestão de conteúdo em tempo real e apresentação clara da missão e valores da empresa.",
      solution: "Desenvolvi um sistema completo com login, admin avançado, editor de conteúdo e blog dinâmico, além de uma interface moderna e responsiva.",
      tags: ["React", "TypeScript", "Supabase", "Admin Panel", "CRUD", "Blog"],
      link: "https://academiamagis.com/",
      github: null,
    },
    {
      title: "Os Trem Geopoéticas — Mapa Interativo Colaborativo",
      summary: "Plataforma institucional com mapa interativo para artistas da bacia do Rio Doce se localizarem e conectarem.",
      challenge: "Criar uma solução que agregasse artistas geograficamente, permitindo visibilidade e fácil gestão de conteúdo.",
      solution: "Desenvolvi um sistema com CRUD completo, painel administrativo e recursos avançados de geolocalização, além de um blog integrado.",
      tags: ["React", "TypeScript", "Mapas Interativos", "CRUD", "Blog", "Admin Panel"],
      link: "https://ostremgeopoeticas.netlify.app/",
      github: null,
    },
    {
      title: "Style Swift — SaaS Multi-tenant para Barbearias",
      status: "versão atual em manutenção para revisão de infraestrutura",
      summary: "Sistema SaaS onde cada barbeiro cria sua própria instância e link personalizado. Inclui agendamentos, temas customizáveis, assinaturas e PWA.",
      challenge: "Criar um SaaS multi-tenant escalável, moderno e fácil de usar por profissionais da área.",
      solution: "Desenvolvi sistema com controle de agenda avançado, níveis de usuário, pagamentos recorrentes e interface totalmente personalizável.",
      tags: ["React", "TypeScript", "SaaS", "Multi-tenant", "PWA", "Pagamentos"],
      link: "https://styleswift.netlify.app/",
      github: "https://github.com/Riannm/StyleSwift",
    },
    {
      title: "Agenda Clínica — SaaS Multi-tenant para Clínicas",
      status: "versão atual em manutenção para migração de infraestrutura",
      summary: "Sistema completo de agendamento para clínicas, com múltiplos níveis de usuário, temas personalizados e PWA.",
      challenge: "Criar um sistema escalável que atendesse diferentes clínicas com agendas independentes.",
      solution: "Desenvolvi um SaaS totalmente multi-tenant, com bloqueio inteligente de horários e instâncias separadas por clínica.",
      tags: ["React", "TypeScript", "SaaS", "Multi-tenant", "PWA", "Supabase"],
      link: "https://agendaclinica.netlify.app/",
      github: "https://github.com/Riannm/grace-bookings",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meu <span className="text-primary">Portfólio</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Projetos desenvolvidos com tecnologias modernas, arquitetura sólida e foco em resultados reais para empresas e criadores.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="bg-card border-border hover:border-primary/50 smooth-transition hover-lift animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg text-foreground">Resumo:</h3>
                  <p className="text-muted-foreground">{project.summary}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-primary">Desafio:</h3>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Solução:</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Tecnologias:</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                {project.status && (
                  <p className="text-sm text-muted-foreground italic">
                    ({project.status})
                  </p>
                )}
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <div className="flex gap-2 w-full max-w-md mx-auto">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={16} />
                      Demo
                    </a>
                  </Button>
                  {project.github && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={16} />
                        Código
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-card rounded-2xl p-12 border border-border">
          <h2 className="text-3xl font-bold mb-4">Tem uma ideia?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Posso transformar seu projeto em uma solução digital moderna e escalável.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Entre em Contato</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
