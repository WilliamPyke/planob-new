import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  const handleLanguageChange = (lang: 'en' | 'pt') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Hero language={language} />
      <Services language={language} />
      <About language={language} />
      <Contact language={language} />
      
      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">₿</span>
            </div>
            <span className="font-bold text-lg">Bitcoin Advisory</span>
          </div>
          <p className="text-gray-400 text-sm">
            {language === 'en' 
              ? 'Professional Bitcoin consultation and security services' 
              : 'Consultoria profissional e serviços de segurança Bitcoin'}
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © 2024 Bitcoin Advisory. {language === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
