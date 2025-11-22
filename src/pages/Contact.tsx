import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, Clock, CheckCircle, Shield, User, MailIcon, Building, MessageCircle, Instagram, Github, Linkedin, Phone } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateWhatsAppLink = (data: FormData): string => {
    const phoneNumber = "5533991094120";

    let message = `Olá! Vi seu portfólio e gostaria de entrar em contato.\n\n`;
    message += `*Meu nome:* ${data.name}\n`;

    if (data.company) {
      message += `*Empresa:* ${data.company}\n`;
    }

    message += `*Email:* ${data.email}\n\n`;
    message += `*Mensagem:*\n${data.message}`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || "",
      message: formData.get("message") as string,
    };

    // Generate WhatsApp link and redirect
    const whatsappLink = generateWhatsAppLink(data);
    window.location.href = whatsappLink;
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos transformar sua <span className="text-primary">ideia</span> em realidade
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conte sua ideia. Eu te ajudo a transformá-la em um projeto real.
            Costumo responder com clareza e rapidez. Sem compromisso.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-center">
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="flex justify-center mb-2">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold mb-1">Responder em até 1 hora</h3>
            <p className="text-sm text-muted-foreground">Horário comercial</p>
          </div>
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="flex justify-center mb-2">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold mb-1">+12 projetos entregues</h3>
            <p className="text-sm text-muted-foreground">Com satisfação garantida</p>
          </div>
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="flex justify-center mb-2">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold mb-1">Clientes em MG</h3>
            <p className="text-sm text-muted-foreground">Incluindo Belo Horizonte</p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mb-12 bg-gradient-to-r from-primary/10 to-tech-purple/10 rounded-2xl p-8 border border-primary/20 text-center">
          <h2 className="text-2xl font-bold mb-4">💬 Prefere contato rápido?</h2>
          <p className="text-muted-foreground mb-6">
            Fale comigo diretamente pelo WhatsApp. Costumo responder em minutos.
          </p>
          <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
            <a
              href="https://wa.me/5533991094120?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2" size={18} />
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card rounded-xl p-6 border border-border">
              <MailIcon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a
                href="mailto:contato@riannmatheus.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                contato@riannmatheus.com
              </a>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <MessageSquare className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/5533991094120?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                (33) 99109-4120
              </a>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-tech-purple/10 rounded-xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold mb-2">Disponibilidade</h3>
              <p className="text-muted-foreground">
                Segunda a Sábado: 8h às 18h
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 border border-border animate-scale-in">
            <h3 className="text-xl font-bold mb-4">Envie uma mensagem</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Prometo responder com clareza e rapidez. Sem compromisso.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Como devo te chamar?</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ex: João Silva"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Seu melhor email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa (opcional)</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Ex: Sua Empresa LTDA"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Fale um pouco do que você precisa</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Quanto mais detalhes, melhor! Fale sobre seu projeto, dúvida ou necessidade..."
                  required
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Redirecionando..."
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Enviar Mensagem via WhatsApp
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Vamos nos conectar também em:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.instagram.com/riannmatheus/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/Riannm" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/riann-costa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://wa.me/5533991094120?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
