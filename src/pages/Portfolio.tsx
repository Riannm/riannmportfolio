import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Academia Magis",
      description:
        "Plataforma institucional completa com painel administrativo avançado, dashboard interativo e sistema CRUD totalmente implementado, além de um blog integrado e altamente personalizável. O site foi desenvolvido para apresentar a empresa na internet de forma profissional e moderna, destacando seus conceitos fundamentais, missão e valores com elegância e clareza. A plataforma oferece uma experiência de edição intuitiva através da página administrativa, permitindo atualizações dinâmicas e gestão de conteúdo em tempo real.",
      tags: ["React", "TypeScript", "Supabase", "Admin Panel", "Blog", "CRUD"],
      link: "https://academiamagis.com/",
      github: null,
    },
    {
      title: "Os Trem Geopoéticas",
      description:
        "Plataforma institucional inovadora que apresenta o projeto Os Trem Geopoéticas, com destaque para seu mapa interativo colaborativo. O sistema permite que artistas da bacia do rio Doce se localizem geograficamente no mapa, promovendo visibilidade e conexão entre criadores culturais da região. Com um sistema CRUD robusto, painel administrativo completo, blog integrado e recursos avançados de geolocalização, a plataforma oferece uma experiência imersiva para mapear e valorizar a produção artística da região.",
      tags: ["React", "TypeScript", "Mapas Interativos", "CRUD", "Blog", "Admin Panel"],
      link: "https://ostremgeopoeticas.netlify.app/",
      github: null,
    },
    {
      title: "Style Swift",
      description:
        "Landing page + sistema completo de agendamento para barbearias com tenant, ou seja, usuários criam sua instância e seu link que pode ser usado por outros. Tem temas que podem ser escolhidos, tem pagamento mensal integrado, poder de usuário (pro, básico e médio) e muito mais. O cliente consegue agendar, mas não em horários agendados, o profissional pode bloquear horários e há também o aplicativo PWA.",
      tags: ["React", "TypeScript", "SaaS", "Multi-tenant", "PWA", "Pagamentos"],
      link: "https://styleswift.netlify.app/",
      github: "https://github.com/Riannm/StyleSwift",
      note: "Banco de dados pausado - não funcionando",
    },
    {
      title: "Agenda Clínica",
      description:
        "Sistema completo de agendamento para clínicas com tenant, onde usuários criam sua instância e seu link personalizado. Possui temas customizáveis, pagamento mensal integrado, níveis de usuário (pro, básico e médio), bloqueio de horários, aplicativo PWA e muito mais. O cliente consegue agendar consultas, mas não em horários já ocupados, e o profissional tem controle total sobre a agenda.",
      tags: ["React", "TypeScript", "SaaS", "Multi-tenant", "PWA", "Supabase"],
      link: "https://agendaclinica.netlify.app/",
      github: "https://github.com/Riannm/grace-bookings",
      note: "Banco de dados pausado - não funcionando",
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
            Projetos desenvolvidos com tecnologias modernas e foco em resultados
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="bg-card border-border hover:border-primary/50 smooth-transition hover-lift animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                {project.note && (
                  <p className="text-xs text-muted-foreground italic w-full text-center pb-2">
                    {project.note}
                  </p>
                )}
                <div className="flex gap-2 w-full">
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
          <h2 className="text-3xl font-bold mb-4">Tem um projeto em mente?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Entrar em Contato</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
