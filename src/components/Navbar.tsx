
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">InvestSavy</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
            Início
          </Link>
          <Link to="/sobre" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
            Sobre
          </Link>
          <Link to="/noticias" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
            Notícias
          </Link>
          <Link to="/servicos" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
            Serviços
          </Link>
          <Link to="/ferramentas" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
            Ferramentas
          </Link>
          <Button className="ml-4">Contato</Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b p-4 shadow-lg">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                to="/noticias" 
                className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Notícias
              </Link>
              <Link 
                to="/servicos" 
                className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/ferramentas" 
                className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ferramentas
              </Link>
              <Button className="w-full">Contato</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
