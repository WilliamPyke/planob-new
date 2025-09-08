import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";

interface ContactProps {
  language: 'en' | 'pt';
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    en: {
      title: "Ready to Start Your Bitcoin Journey?",
      subtitle: "Get in touch to schedule your personalized consultation",
      email: {
        title: "Email Consultation",
        description: "Send us a detailed message about your Bitcoin needs and we'll respond within 24 hours."
      },
      telegram: {
        title: "Telegram Chat",
        description: "Start a conversation immediately and schedule your session quickly and securely."
      },
      schedule: {
        title: "Flexible Scheduling",
        description: "Available for consultations 7 days a week with flexible timing options."
      },
      location: {
        title: "Global Service",
        description: "Remote consultations available worldwide with multi-language support."
      },
      cta: {
        email: "Send Email",
        telegram: "Start Chat",
      },
      note: "All consultations are conducted remotely for your convenience and security."
    },
    pt: {
      title: "Pronto para Começar Sua Jornada Bitcoin?",
      subtitle: "Entre em contato para agendar sua consulta personalizada",
      email: {
        title: "Consulta por Email",
        description: "Envie-nos uma mensagem detalhada sobre suas necessidades Bitcoin e responderemos em até 24 horas."
      },
      telegram: {
        title: "Chat no Telegram",
        description: "Inicie uma conversa imediatamente e agende sua sessão de forma rápida e segura."
      },
      schedule: {
        title: "Agendamento Flexível",
        description: "Disponível para consultas 7 dias por semana com opções de horário flexíveis."
      },
      location: {
        title: "Serviço Global",
        description: "Consultas remotas disponíveis mundialmente com suporte multi-idioma."
      },
      cta: {
        email: "Enviar Email",
        telegram: "Iniciar Chat",
      },
      note: "Todas as consultas são realizadas remotamente para sua conveniência e segurança."
    }
  };

  const handleEmailClick = () => {
    const subject = language === 'en' ? 'Plano B Consultation Request' : 'Solicitação de Consultoria Plano B';
    const body = language === 'en'
      ? 'Hello,\n\nI am interested in scheduling a Bitcoin consultation session.\n\nPlease let me know your availability and next steps.\n\nThank you!'
      : 'Olá,\n\nTenho interesse em agendar uma sessão de consultoria Bitcoin.\n\nPor favor, me informe sua disponibilidade e próximos passos.\n\nObrigado!';

    window.location.href = `mailto:admin@planob.club?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/ToTheSea22", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
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

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Email Card */}
          <Card className="border-2 hover:border-bitcoin transition-colors duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-2">
                {content[language].email.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground">
                {content[language].email.description}
              </p>
              <Button 
                variant="bitcoin" 
                className="w-full"
                onClick={handleEmailClick}
              >
                <Mail className="h-4 w-4 mr-2" />
                {content[language].cta.email}
              </Button>
            </CardContent>
          </Card>

          {/* Telegram Card */}
          <Card className="border-2 hover:border-bitcoin transition-colors duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-2">
                {content[language].telegram.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground">
                {content[language].telegram.description}
              </p>
              <Button 
                variant="bitcoin" 
                className="w-full"
                onClick={handleTelegramClick}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {content[language].cta.telegram}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-bitcoin/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="h-6 w-6 text-bitcoin" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">{content[language].schedule.title}</h3>
              <p className="text-muted-foreground text-sm">
                {content[language].schedule.description}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-bitcoin/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6 text-bitcoin" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">{content[language].location.title}</h3>
              <p className="text-muted-foreground text-sm">
                {content[language].location.description}
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            {content[language].note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;