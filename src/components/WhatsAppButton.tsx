
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços de SEO Local da Busca Local Pro em Guarulhos. Podem me ajudar a melhorar minha presença online?"
  );

  return (
    <a 
      href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
