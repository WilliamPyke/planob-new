import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Shield, Check, Users, Clock, Award } from "lucide-react";

interface ServicesProps {
  language: 'en' | 'pt';
}

const Services = ({ language }: ServicesProps) => {
  const content = {
    en: {
      title: "Expert Bitcoin Services",
      subtitle: "Comprehensive guidance for your Bitcoin journey",
      education: {
        title: "Bitcoin Education",
        subtitle: "1:1 Personalized Sessions",
        description: "Learn Bitcoin fundamentals, safety practices, and how to make your first secure purchase.",
        features: [
          "Bitcoin basics and blockchain understanding",
          "How to safely buy and store Bitcoin",
          "Exchange selection and security",
          "Wallet setup and best practices",
          "Market fundamentals and timing",
          "Tax implications and record keeping"
        ]
      },
      security: {
        title: "Security Solutions",
        subtitle: "Hardware Wallet & Advanced Protection",
        description: "Professional setup and implementation of advanced security strategies for your Bitcoin.",
        features: [
          "Hardware wallet setup and configuration",
          "Multi-signature wallet implementation",
          "Inheritance and backup strategies",
          "Liana Wallet specialized setup",
          "Cold storage best practices",
          "Recovery phrase security"
        ]
      },
      cta: "Schedule Your Session",
      partnership: "Official Liana Wallet Partner"
    },
    pt: {
      title: "Serviços Especializados em Bitcoin",
      subtitle: "Orientação completa para sua jornada Bitcoin",
      education: {
        title: "Educação Bitcoin",
        subtitle: "Sessões Personalizadas 1:1",
        description: "Aprenda os fundamentos do Bitcoin, práticas de segurança e como fazer sua primeira compra segura.",
        features: [
          "Básicos do Bitcoin e entendimento blockchain",
          "Como comprar e armazenar Bitcoin com segurança",
          "Seleção de exchanges e segurança",
          "Configuração de carteiras e melhores práticas",
          "Fundamentos de mercado e timing",
          "Implicações fiscais e manutenção de registros"
        ]
      },
      security: {
        title: "Soluções de Segurança",
        subtitle: "Hardware Wallet & Proteção Avançada",
        description: "Configuração profissional e implementação de estratégias avançadas de segurança para seu Bitcoin.",
        features: [
          "Configuração de hardware wallet",
          "Implementação de carteiras multi-assinatura",
          "Estratégias de herança e backup",
          "Configuração especializada Liana Wallet",
          "Melhores práticas de cold storage",
          "Segurança de frases de recuperação"
        ]
      },
      cta: "Agende Sua Sessão",
      partnership: "Parceiro Oficial Liana Wallet"
    }
  };

  const handleSchedule = () => {
    window.open("https://t.me/yourusername", "_blank");
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Education Service */}
          <Card className="border-2 hover:border-bitcoin transition-colors duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl mb-2">
                {content[language].education.title}
              </CardTitle>
              <p className="text-bitcoin font-semibold">
                {content[language].education.subtitle}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {content[language].education.description}
              </p>
              <ul className="space-y-3">
                {content[language].education.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-bitcoin rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="bitcoin" 
                className="w-full"
                onClick={handleSchedule}
              >
                {content[language].cta}
              </Button>
            </CardContent>
          </Card>

          {/* Security Service */}
          <Card className="border-2 hover:border-bitcoin transition-colors duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl mb-2">
                {content[language].security.title}
              </CardTitle>
              <p className="text-bitcoin font-semibold">
                {content[language].security.subtitle}
              </p>
              {/* Partnership Badge */}
              <div className="inline-flex items-center space-x-2 bg-muted px-3 py-1 rounded-full">
                <Award className="h-4 w-4 text-bitcoin" />
                <span className="text-sm font-medium">{content[language].partnership}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {content[language].security.description}
              </p>
              <ul className="space-y-3">
                {content[language].security.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-bitcoin rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="bitcoin" 
                className="w-full"
                onClick={handleSchedule}
              >
                {content[language].cta}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-bitcoin" />
              <span className="text-2xl font-bold">1:1</span>
            </div>
            <p className="text-muted-foreground">Personal Sessions</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-bitcoin" />
              <span className="text-2xl font-bold">24h</span>
            </div>
            <p className="text-muted-foreground">Response Time</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-5 w-5 text-bitcoin" />
              <span className="text-2xl font-bold">Official</span>
            </div>
            <p className="text-muted-foreground">Liana Partner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;