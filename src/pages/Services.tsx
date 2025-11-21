import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Zap, Code, Wrench, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Site Profissional",
      description: "Desenvolvimento de sites modernos, rápidos e responsivos para empresas e profissionais.",
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
      description: "Páginas otimizadas para vendas, cursos, lançamentos e captação de leads.",
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
      description: "Construção de sistemas personalizados sob demanda para seu negócio.",
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
      description: "Manutenção contínua, atualizações e suporte técnico para seu site ou sistema.",
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

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Serviços</span> & Soluções
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvimento web profissional para empresas e empreendedores que buscam presença digital de qualidade
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className={`bg-card border-border hover:border-primary/50 transition-all hover-scale animate-fade-in ${
                service.highlight ? "border-primary ring-2 ring-primary/20" : ""
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex-col items-start gap-4">
                <div className="w-full pt-4 border-t border-border">
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </div>
                <Button className="w-full" variant={service.highlight ? "default" : "outline"} asChild>
                  <a href="/contact">Solicitar Orçamento</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className="bg-section-bg rounded-2xl p-8 md:p-12 border border-border">
          <h2 className="text-3xl font-bold mb-8 text-center">Por que escolher meus serviços?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualidade Profissional",
                description: "Código limpo, documentado e seguindo as melhores práticas do mercado.",
              },
              {
                title: "Comunicação Fluente",
                description: "Inglês fluente e comunicação clara em todas as etapas do projeto.",
              },
              {
                title: "Entrega no Prazo",
                description: "Comprometimento com prazos e entregas de qualidade dentro do cronograma.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary/10 to-tech-purple/10 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar seu projeto?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato e vamos conversar sobre como posso ajudar a levar seu negócio para o próximo nível
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Solicitar Orçamento Gratuito</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
