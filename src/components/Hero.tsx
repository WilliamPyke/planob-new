import { Button } from "@/components/ui/button";
import { Shield, BookOpen, Mail, MessageCircle } from "lucide-react";

interface HeroProps {
  language: 'en' | 'pt';
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      headline: "Secure Your Bitcoin Journey",
      subheadline: "Expert Bitcoin Advisory & Security Solutions",
      description: "Get personalized 1:1 guidance to safely navigate, purchase, and secure your Bitcoin investments. From beginner education to advanced security strategies.",
      cta1: "Schedule Consultation",
      cta2: "Email Us",
      features: [
        "1:1 Bitcoin Education Sessions",
        "Hardware Wallet Setup",
        "Advanced Security Strategies",
        "Official Liana Wallet Partner"
      ]
    },
    pt: {
      headline: "Proteja Sua Jornada Bitcoin",
      subheadline: "Consultoria Especializada em Bitcoin e Segurança",
      description: "Receba orientação personalizada 1:1 para navegar, comprar e proteger seus investimentos em Bitcoin com segurança. Da educação básica às estratégias avançadas de segurança.",
      cta1: "Agendar Consulta",
      cta2: "Enviar Email",
      features: [
        "Sessões 1:1 de Educação Bitcoin",
        "Configuração de Hardware Wallet",
        "Estratégias Avançadas de Segurança",
        "Parceiro Oficial Liana Wallet"
      ]
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:contact@example.com?subject=Bitcoin Advisory Consultation";
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/yourusername", "_blank");
  };

  return (
    <section className="bg-gradient-hero text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Headlines */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {content[language].headline}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8">
            {content[language].subheadline}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {content[language].description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="bitcoin" 
              size="lg"
              onClick={handleTelegramClick}
              className="flex items-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{content[language].cta1}</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleEmailClick}
              className="flex items-center space-x-2 border-white text-black hover:bg-white hover:text-black"
            >
              <Mail className="h-5 w-5" />
              <span>{content[language].cta2}</span>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {content[language].features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <div className="w-8 h-8 bg-bitcoin rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;