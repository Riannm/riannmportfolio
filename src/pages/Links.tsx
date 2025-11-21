import { Button } from "@/components/ui/button";
import { 
  Github, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  ExternalLink,
  Mail,
  Globe
} from "lucide-react";
import profileLogo from "@/assets/profile-logo.png";

const Links = () => {
  const links = [
    {
      id: "contact",
      label: "Entre em contato comigo agora",
      url: "https://wa.me/5533991094120?text=Olá!%20Vi%20seu%20perfil%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.",
      icon: MessageCircle,
      color: "bg-[#25D366] hover:bg-[#20BA5A] text-white",
      description: "Fale diretamente comigo via WhatsApp",
    },
    {
      id: "portfolio",
      label: "Veja meu portfólio",
      url: "/",
      icon: Globe,
      color: "bg-gradient-to-r from-primary to-tech-purple hover:from-primary/90 hover:to-tech-purple/90 text-white",
      description: "Explore meus projetos e serviços",
    },
    {
      id: "lovable",
      label: "Conheça a Lovable",
      url: "https://lovable.dev/invite/YBJMPNZ",
      icon: ExternalLink,
      color: "bg-[#6e56cf] hover:bg-[#5d47b9] text-white",
      description: "Plataforma de comunidades e fóruns",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-tech-purple rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src={profileLogo}
                alt="Riann Matheus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="text-foreground">Riann </span>
            <span className="text-primary">Matheus</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-1">
            Desenvolvedor Fullstack
          </p>
          <p className="text-sm text-muted-foreground">
            Transformando ideias em soluções digitais
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-8">
          {links.map((link, idx) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block group animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Button
                  className={`w-full h-auto py-4 px-6 rounded-2xl ${link.color} transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-between group-hover:gap-3`}
                  size="lg"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-semibold text-sm sm:text-base">{link.label}</div>
                      {link.description && (
                        <div className="text-xs sm:text-sm opacity-90 mt-0.5">{link.description}</div>
                      )}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </Button>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center animate-fade-in">
          <p className="text-xs text-muted-foreground">
            © 2025 Riann Matheus — Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;

