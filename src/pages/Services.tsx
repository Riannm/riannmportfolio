import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Zap, Code, Wrench, Check, ArrowRight, Sparkles, Shield, Clock, Rocket, Users, Star, Target, MessageCircle, Calendar, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Site Profissional",
      for: "Empresas locais • Profissionais autônomos • Negócios que querem presença digital moderna",
      description: "Desenvolvimento de sites modernos, rápidos e responsivos para empresas e profissionais.",
      benefits: [
        "Mais clientes encontrando seu negócio",
        "Mais autoridade e confiança",
        "Melhor apresentação nas pesquisas do Google",
        "Uma imagem moderna e profissional"
      ],
      features: [
        "Design personalizado e moderno",
        "Totalmente responsivo",
        "SEO otimizado",
        "Formulário de contato",
        "Integração com redes sociais",
        "Painel de administração",
      ],
      price: "A partir de R$ 900",
      highlight: false,
    },
    {
      icon: Zap,
      title: "Landing Page de Alta Conversão",
      for: "Empresas com produtos/serviços • Cursos online • Lançamentos • Captação de leads",
      description: "Páginas otimizadas para vendas, cursos, lançamentos e captação de leads.",
      benefits: [
        "Aumento de vendas e conversões",
        "Captação eficiente de leads",
        "Reforço da marca no mercado",
        "Foco total no objetivo do cliente"
      ],
      features: [
        "Copy otimizada para conversão",
        "Design focado em vendas",
        "Integração com ferramentas de marketing",
        "Analytics e tracking",
        "Mobile-first",
        "Entrega rápida",
      ],
      price: "A partir de R$ 500",
      highlight: true,
    },
    {
      icon: Code,
      title: "Sistemas Web (Login, CRUD, Admin)",
      for: "Empresas com processos internos • Negócios que precisam de automação • Startups em crescimento",
      description: "Construção de sistemas personalizados sob demanda para seu negócio.",
      benefits: [
        "Automação de processos",
        "Aumento de produtividade",
        "Controle total sobre os dados",
        "Soluções sob medida para seu negócio"
      ],
      features: [
        "Autenticação segura",
        "Dashboard administrativo",
        "CRUD completo",
        "Gestão de usuários",
        "API REST",
        "Banco de dados",
      ],
      price: "Sob orçamento",
      highlight: false,
    },
    {
      icon: Wrench,
      title: "Manutenção e Suporte",
      for: "Todos os clientes • Projetos já entregues • Empresas que buscam estabilidade",
      description: "Manutenção contínua, atualizações e suporte técnico para seu site ou sistema.",
      benefits: [
        "Seu sistema sempre funcionando",
        "Atualizações de segurança automáticas",
        "Redução de riscos técnicos",
        "Foco no seu negócio, não na manutenção"
      ],
      features: [
        "Atualizações regulares",
        "Correção de bugs",
        "Backup automático",
        "Monitoramento",
        "Suporte prioritário",
        "Hospedagem incluída",
      ],
      price: "R$ 200/mês",
      highlight: false,
    },
  ];

  // Depoimentos simulados
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Dono da Loja Tech",
      content: "O site desenvolvido superou nossas expectativas. Em 3 meses, aumentamos as vendas em 40% graças ao melhor posicionamento online.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Professora de Yoga",
      content: "A landing page me ajudou a triplicar o número de alunos matriculados. A conversão foi impressionante!",
      rating: 5
    },
    {
      name: "Pedro Oliveira",
      role: "Administrador de Condomínios",
      content: "O sistema de gestão desenvolvido tornou meu trabalho 5 vezes mais eficiente. Recomendo fortemente!",
      rating: 5
    }
  ];

  // Processo de trabalho
  const workflow = [
    { step: 1, title: "Briefing", description: "Entendimento do projeto", icon: FileText },
    { step: 2, title: "Prototipação", description: "Criação de mockups", icon: Target },
    { step: 3, title: "Desenvolvimento", description: "Criação do projeto", icon: Code },
    { step: 4, title: "Ajustes", description: "Refinamentos", icon: Wrench },
    { step: 5, title: "Entrega", description: "Implantação final", icon: Rocket },
    { step: 6, title: "Suporte", description: "Manutenção contínua", icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Soluções Digitais Completas
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Serviços</span>{" "}
            <span className="text-primary">& Soluções</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvimento web profissional para empresas e empreendedores que buscam presença digital de qualidade e resultados reais
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className={`group relative bg-card border-2 hover:border-primary/50 smooth-transition hover-lift animate-fade-in-up overflow-hidden ${
                service.highlight
                  ? "border-primary shadow-lg ring-4 ring-primary/10"
                  : "border-border"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  Mais Popular
                </div>
              )}

              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                  service.highlight
                    ? "bg-primary/20 text-primary"
                    : "bg-primary/10 text-primary"
                }`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl sm:text-2xl md:text-3xl mb-2">{service.title}</CardTitle>
                <div className="space-y-2">
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground italic">
                    <span className="font-medium">Para quem é:</span> {service.for}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    O que você ganha:
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-primary mb-2">Recursos incluídos:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground group/item">
                        <div className="mt-0.5">
                          <Check className="w-5 h-5 text-primary shrink-0" />
                        </div>
                        <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex-col items-stretch gap-4 pt-6 border-t border-border">
                <div className="flex items-baseline justify-between w-full">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Investimento</p>
                    <p className="text-3xl font-bold text-primary">{service.price}</p>
                  </div>
                </div>
                <Button
                  className="w-full group/btn"
                  variant={service.highlight ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <a href="/contact" className="flex items-center justify-center">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Processo de Trabalho */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meu <span className="text-primary">Processo de Trabalho</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passo a passo para garantir qualidade e transparência em todos os projetos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {workflow.map((item, idx) => (
              <Card
                key={idx}
                className="bg-card border-border text-center p-6 animate-fade-in-up flex flex-col items-center"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-primary font-bold text-lg mb-1">Passo {item.step}</div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Prova Social */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              O que dizem <span className="text-primary">meus clientes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              +12 projetos entregues com qualidade e satisfação garantida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-card border-border p-6 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Intermediário */}
        <div className="mb-20">
          <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-tech-purple/10">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative text-center p-12 md:p-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Tem dúvidas sobre <span className="text-primary">qual serviço escolher?</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Fale comigo e te ajudo a decidir qual solução é ideal para seu negócio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group" asChild>
                  <a href="https://wa.me/5531999999999" className="flex items-center" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">Solicitar Consultoria</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Why Choose Me Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Por que escolher <span className="text-primary">meus serviços?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprometimento com qualidade, comunicação clara e entregas que superam expectativas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Qualidade Profissional",
                description: "Código limpo, documentado e seguindo as melhores práticas do mercado. Projetos escaláveis e bem estruturados.",
                color: "text-blue-500",
                bgColor: "bg-blue-500/10",
              },
              {
                icon: Rocket,
                title: "Soluções Inovadoras",
                description: "Desenvolvimento de sistemas modernos com arquitetura escalável e tecnologias de ponta. Foco em criar soluções que crescem com seu negócio.",
                color: "text-purple-500",
                bgColor: "bg-purple-500/10",
              },
              {
                icon: Clock,
                title: "Entrega no Prazo",
                description: "Comprometimento com prazos e entregas de qualidade dentro do cronograma estabelecido.",
                color: "text-green-500",
                bgColor: "bg-green-500/10",
              },
            ].map((item, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary/50 smooth-transition hover-lift text-center p-8 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${item.bgColor} ${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <Card className="bg-gradient-to-br from-card to-card/50 border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Tecnologias Modernas</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Utilizo as tecnologias mais atuais do mercado para garantir performance, segurança e escalabilidade em todos os projetos.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Next.js", "Supabase", "TailwindCSS", "Node.js", "PostgreSQL", "Vite"].map((tech) => (
                <span
                  key={tech}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/50 border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Suporte Contínuo</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ofereço suporte técnico e manutenção contínua para garantir que seu projeto sempre funcione perfeitamente.
            </p>
            <ul className="space-y-3">
              {[
                "Atualizações de segurança regulares",
                "Correção rápida de bugs",
                "Melhorias e otimizações contínuas",
                "Backup automático e monitoramento",
                "Suporte prioritário via WhatsApp",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-tech-purple/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative text-center p-12 md:p-16">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Vamos Transformar Sua Ideia em Realidade
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Pronto para começar seu <span className="text-primary">projeto?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre em contato e vamos conversar sobre como posso ajudar a levar seu negócio para o próximo nível com soluções digitais de alta qualidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <a href="/contact" className="flex items-center">
                  Solicitar Orçamento Gratuito
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/portfolio">Ver Meus Projetos</a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Services;
