import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Users, Zap } from "lucide-react";

interface AboutProps {
  language: 'en' | 'pt';
}

const About = ({ language }: AboutProps) => {
  const content = {
    en: {
      title: "Why Choose Plano B?",
      subtitle: "Trusted expertise and personalized guidance for your Bitcoin journey",
      credentials: [
        {
          icon: Award,
          title: "Official Liana Wallet Partner",
          description: "Certified partner providing specialized setup and support for advanced Bitcoin security solutions."
        },
        {
          icon: Shield,
          title: "Security First Approach",
          description: "Years of experience in cryptocurrency security, hardware wallets, and advanced protection strategies."
        },
        {
          icon: Users,
          title: "Personalized 1:1 Sessions",
          description: "Every consultation is tailored to your specific needs, experience level, and security requirements."
        },
        {
          icon: Zap,
          title: "Practical Implementation",
          description: "Not just theory - we guide you through actual setup, implementation, and real-world best practices."
        }
      ],
      philosophy: {
        title: "Our Philosophy",
        content: "Bitcoin represents financial sovereignty and security. Our mission is to make this technology accessible through education, practical guidance, and robust security implementation. We believe everyone deserves to understand and safely use Bitcoin."
      }
    },
    pt: {
      title: "Por Que Escolher Plano B?",
      subtitle: "Expertise confiável e orientação personalizada para sua jornada Bitcoin",
      credentials: [
        {
          icon: Award,
          title: "Parceiro Oficial Liana Wallet",
          description: "Parceiro certificado fornecendo configuração especializada e suporte para soluções avançadas de segurança Bitcoin."
        },
        {
          icon: Shield,
          title: "Abordagem Segurança em Primeiro",
          description: "Anos de experiência em segurança de criptomoedas, hardware wallets e estratégias de proteção avançadas."
        },
        {
          icon: Users,
          title: "Sessões Personalizadas 1:1",
          description: "Cada consulta é adaptada às suas necessidades específicas, nível de experiência e requisitos de segurança."
        },
        {
          icon: Zap,
          title: "Implementação Prática",
          description: "Não apenas teoria - orientamos você através de configuração real, implementação e melhores práticas do mundo real."
        }
      ],
      philosophy: {
        title: "Nossa Filosofia",
        content: "Bitcoin representa soberania financeira e segurança. Nossa missão é tornar esta tecnologia acessível através de educação, orientação prática e implementação robusta de segurança. Acreditamos que todos merecem entender e usar Bitcoin com segurança."
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
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

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {content[language].credentials.map((credential, index) => (
            <Card key={index} className="border-l-4 border-l-bitcoin">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <credential.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{credential.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {credential.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-muted/30 border-2 border-bitcoin/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">{content[language].philosophy.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content[language].philosophy.content}
              </p>
              
              {/* Bitcoin Symbol */}
              <div className="mt-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-2xl">₿</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;