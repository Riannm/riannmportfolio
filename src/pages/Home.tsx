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
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Riann </span>
                  <span className="text-primary">Matheus</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Desenvolvedor Fullstack
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Crio sites, sistemas web e soluções digitais que transformam ideias em produtos reais.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                Especializado em sites institucionais, landing pages, sistemas com login, CRUD, dashboards, blogs e chatbots para WhatsApp. 
                Inglês fluente e experiência prática desenvolvendo projetos reais e escaláveis.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="group">
                  <NavLink to="/portfolio">
                    Ver Projetos
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </NavLink>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <NavLink to="/contact">Solicitar Orçamento</NavLink>
                </Button>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="relative animate-fade-in lg:animate-scale-in">
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
                skills: ["WordPress", "Git", "Inglês Fluente", "SaaS Development"],
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all hover-scale"
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
