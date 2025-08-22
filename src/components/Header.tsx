import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface HeaderProps {
  language: 'en' | 'pt';
  onLanguageChange: (lang: 'en' | 'pt') => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    en: {
      nav: ['Services', 'About', 'Contact'],
      cta: 'Schedule Consultation'
    },
    pt: {
      nav: ['Serviços', 'Sobre', 'Contato'],
      cta: 'Agendar Consulta'
    }
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">₿</span>
          </div>
          <span className="font-bold text-lg">Bitcoin Advisory</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {content[language].nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLanguageChange(language === 'en' ? 'pt' : 'en')}
            className="flex items-center space-x-1"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase font-medium">
              {language === 'en' ? 'PT' : 'EN'}
            </span>
          </Button>

          {/* CTA Button */}
          <Button variant="bitcoin" className="hidden md:flex">
            {content[language].cta}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col space-y-1">
              <div className="w-5 h-0.5 bg-foreground"></div>
              <div className="w-5 h-0.5 bg-foreground"></div>
              <div className="w-5 h-0.5 bg-foreground"></div>
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {content[language].nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button variant="bitcoin" className="w-full">
              {content[language].cta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;