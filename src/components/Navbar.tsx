
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="text-primary">Invest</span>
            <span className="text-accent">Savy</span>
          </span>
        </Link>
        
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
          {[
            { title: "Início", path: "/" },
            { title: "Sobre", path: "/sobre" },
            { title: "Notícias", path: "/noticias" },
            { title: "Serviços", path: "/servicos" },
            { title: "Ferramentas", path: "/ferramentas" }
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`relative text-foreground hover:text-primary font-medium transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                location.pathname === item.path ? "text-primary after:scale-x-100" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
          <Button className="bg-accent hover:bg-accent/90 text-white">
            Contato <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md p-4 shadow-lg border-t border-border animate-slide-in">
            <nav className="flex flex-col gap-4">
              {[
                { title: "Início", path: "/" },
                { title: "Sobre", path: "/sobre" },
                { title: "Notícias", path: "/noticias" },
                { title: "Serviços", path: "/servicos" },
                { title: "Ferramentas", path: "/ferramentas" }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`text-lg font-medium py-2 border-b border-border ${
                    location.pathname === item.path ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button className="mt-2 bg-accent hover:bg-accent/90 text-white w-full">
                Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
