import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5533991094120"; // (33) 991094120
  const message = "Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        asChild
        size="lg"
        className="rounded-full h-14 w-14 p-0 shadow-lg hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20BA5A] text-white"
        aria-label="Entre em contato via WhatsApp"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;

