
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary/95 to-primary text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-1">
              <h3 className="text-2xl font-bold">
                <span className="text-white">Invest</span>
                <span className="text-accent">Savy</span>
              </h3>
            </Link>
            <p className="text-primary-foreground/90 leading-relaxed">
              Ajudamos você a entender o mundo dos investimentos e a tomar decisões financeiras inteligentes para construir um futuro próspero.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { title: "Início", path: "/" },
                { title: "Sobre", path: "/sobre" },
                { title: "Notícias", path: "/noticias" },
                { title: "Serviços", path: "/servicos" },
                { title: "Ferramentas", path: "/ferramentas" }
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-primary-foreground/90 hover:text-accent transition-colors flex items-center gap-2">
                    <ArrowRight size={14} />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4 text-white">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos" className="text-primary-foreground/90 hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight size={14} />
                  Consultoria Financeira
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-primary-foreground/90 hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight size={14} />
                  Educação Financeira
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-primary-foreground/90 hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight size={14} />
                  Análise de Mercado
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-primary-foreground/90 hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight size={14} />
                  Recomendações de Investimento
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4 text-white">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <span className="text-primary-foreground/90">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                <span className="text-primary-foreground/90">contato@investsavy.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1" />
                <span className="text-primary-foreground/90">Av. Paulista, 1000<br />São Paulo, SP</span>
              </li>
            </ul>
            <div className="pt-4">
              <h5 className="text-sm font-semibold mb-2">Cadastre-se para novidades</h5>
              <div className="flex gap-2">
                <Input placeholder="Seu email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-accent" />
                <Button className="bg-accent hover:bg-accent/90 shrink-0">
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 text-center text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} InvestSavy. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
