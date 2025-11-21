import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";

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
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Vamos conversar sobre seu projeto e como posso ajudar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card rounded-xl p-6 border border-border">
              <Mail className="w-10 h-10 text-primary mb-4" />
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
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
                  placeholder="Nome da sua empresa"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Descreva seu projeto ou dúvida..."
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
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Me encontre também em:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" asChild>
              <a href="https://www.instagram.com/riannmatheus/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/Riannm" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/riann-costa/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://wa.me/5533991094120?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
