import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Site para Empresa de BH",
      description:
        "Site institucional moderno e responsivo, com seção de serviços, produtos, contato e blog integrado. Design profissional focado em conversão e experiência do usuário.",
      tags: ["Next.js", "TailwindCSS", "WordPress", "SEO"],
      link: "#",
      github: "#",
    },
    {
      title: "Sistema Completo com Login + CRUD + Admin",
      description:
        "Sistema web completo com autenticação segura, dashboard administrativo, gestão de usuários e operações CRUD. Interface intuitiva e segurança robusta.",
      tags: ["React", "Node.js", "MySQL", "Express"],
      link: "#",
      github: "#",
    },
    {
      title: "Landing Page de Alta Conversão",
      description:
        "Landing page moderna com foco em vendas, copy otimizada e design responsivo. Integração com ferramentas de analytics e formulários de conversão.",
      tags: ["React", "TailwindCSS", "SEO", "Analytics"],
      link: "#",
      github: "#",
    },
    {
      title: "Blog com Painel de Postagens",
      description:
        "Sistema de blog completo com painel administrativo, editor de texto rico, gestão de categorias e tags. Interface moderna para criação e edição de conteúdo.",
      tags: ["Next.js", "Markdown", "CMS", "Supabase"],
      link: "#",
      github: "#",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Dashboard interativo para visualização de dados e métricas de negócio. Gráficos dinâmicos, filtros avançados e relatórios personalizáveis.",
      tags: ["React", "TypeScript", "Charts", "API"],
      link: "#",
      github: "#",
    },
    {
      title: "E-commerce Completo",
      description:
        "Plataforma de e-commerce com carrinho de compras, gestão de produtos, painel administrativo e integração com gateway de pagamento.",
      tags: ["Next.js", "Node.js", "Stripe", "MySQL"],
      link: "#",
      github: "#",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="bg-card border-border hover:border-primary/50 transition-all hover-scale animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
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
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={16} />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={16} />
                    Código
                  </a>
                </Button>
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
