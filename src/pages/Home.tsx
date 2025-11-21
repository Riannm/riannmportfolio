import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowRight, Code2, Database, Globe } from "lucide-react";
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>Riann </span>
                  <span className="text-primary animate-fade-in" style={{ animationDelay: "0.3s" }}>Matheus</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  Desenvolvedor Fullstack
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                Crio sites, sistemas web e soluções digitais que transformam ideias em produtos reais.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                Especializado em sites institucionais, landing pages, sistemas com login, CRUD, dashboards, blogs e chatbots para WhatsApp. 
                Experiência prática desenvolvendo projetos reais e escaláveis, com foco em performance, segurança e experiência do usuário.
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

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologias & Habilidades</h2>
            <p className="text-muted-foreground">Ferramentas que uso para criar soluções profissionais</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Frontend",
                skills: ["React", "Next.js", "TailwindCSS", "TypeScript", "HTML/CSS/JS"],
              },
              {
                icon: Database,
                title: "Backend",
                skills: ["Node.js", "Express", "MySQL", "Supabase", "APIs REST"],
              },
            {
              icon: Code2,
              title: "Outras Skills",
              skills: ["WordPress", "Git", "SaaS Development", "PWA", "Responsive Design", "API Integration"],
            },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 smooth-transition hover-lift animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <category.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
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
    </div>
  );
};

export default Home;
